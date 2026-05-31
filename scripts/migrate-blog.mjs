// Blog migration: scrape published articles from starbomedia.sk into local content.
// Usage: node scripts/migrate-blog.mjs <slug> [<slug> ...]
import * as cheerio from 'cheerio';
import sharp from 'sharp';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const SLUGS = process.argv.slice(2);
if (SLUGS.length === 0) { console.error('No slugs given.'); process.exit(1); }

const BASE = 'https://starbomedia.sk';
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const CONTENT_DIR = 'src/content/blog';
const HTML_DIR = path.join(CONTENT_DIR, 'html');
const PUBLIC_IMG = 'public/blog';

// Elements inside entry-content we don't want to carry over.
// NOTE: we intentionally KEEP nav.toc (table of contents / intro links) and <header> (intro) —
// those are part of the article. Only strip true WordPress/plugin cruft.
const JUNK = 'script,style,noscript,ins,.adsbygoogle,.sharedaddy,.jp-relatedposts,.yarpp-related,[class*="share"],[class*="related"],.post-navigation,.author-bio,.code-block,iframe.ad';

async function fetchText(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return await r.text();
}

async function downloadImage(src, slug) {
  const url = src.startsWith('http') ? src : BASE + (src.startsWith('/') ? src : '/' + src);
  const clean = url.split('?')[0];
  const filename = decodeURIComponent(path.basename(new URL(clean).pathname));
  const destDir = path.join(PUBLIC_IMG, slug);
  await mkdir(destDir, { recursive: true });
  const isRaster = /\.(jpe?g|png|webp)$/i.test(filename);
  const outName = isRaster ? filename.replace(/\.(jpe?g|png|webp)$/i, '.webp') : filename;
  const dest = path.join(destDir, outName);
  if (!existsSync(dest)) {
    const r = await fetch(clean, { headers: { 'User-Agent': UA } });
    if (!r.ok) throw new Error(`img HTTP ${r.status}`);
    const buf = Buffer.from(await r.arrayBuffer());
    if (isRaster) {
      try {
        // Resize down to a sensible max width and convert to WebP.
        await sharp(buf).resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest);
      } catch {
        const orig = path.join(destDir, filename);
        await writeFile(orig, buf);
        return `/blog/${slug}/${filename}`;
      }
    } else {
      await writeFile(dest, buf); // svg/gif/etc. kept as-is
    }
  }
  return `/blog/${slug}/${outName}`;
}

async function migrate(slug) {
  const html = await fetchText(`${BASE}/${slug}/`);
  const $ = cheerio.load(html);
  const og = (p) => $(`meta[property="${p}"]`).attr('content') || $(`meta[name="${p}"]`).attr('content') || null;

  const title = (og('og:title') || '').replace(/\s*[-–|]\s*(STARBO MEDIA|Starbomedia\.sk|Starbomedia)\s*$/i, '').trim();
  const date = og('article:published_time');
  const modified = og('article:modified_time');
  const excerpt = (og('og:description') || og('description') || '').trim();
  const featuredRemote = og('og:image');

  const content = $('.entry-content').first();
  if (!content.length) throw new Error('no .entry-content');

  // SEO-pipeline articles are pasted into WordPress as a full standalone HTML doc
  // (<!DOCTYPE><html><head>...<body><article class="ucp-article">). cheerio unwraps
  // <html>/<head>/<body>, leaving <meta>/<title>/<link>/<style> + the <article> as
  // siblings inside .entry-content. Drop the head-only cruft but KEEP <style>
  // (it is scoped to .ucp-article, no body/html selectors) and the article body.
  const embedded = content.find('article.ucp-article').length > 0 || content.find('title').length > 0;
  if (embedded) content.find('meta, title, link, base').remove();

  content.find(JUNK).remove();

  // Prefer the clean <article> element when present (pipeline articles); else the whole entry-content.
  const ucp = content.find('article.ucp-article').first();
  const container = ucp.length ? ucp : content;

  let imgCount = 0;
  for (const el of container.find('img').toArray()) {
    const img = $(el);
    const src = img.attr('data-src') || img.attr('data-lazy-src') || img.attr('data-original') || img.attr('src');
    if (!src || src.startsWith('data:')) { img.remove(); continue; }
    try {
      const local = await downloadImage(src, slug);
      img.attr('src', local);
      ['srcset', 'sizes', 'loading', 'decoding', 'data-src', 'data-srcset', 'data-lazy-src', 'data-lazy-srcset', 'data-original', 'width', 'height'].forEach((a) => img.removeAttr(a));
      imgCount++;
    } catch (e) { console.warn('  img fail', src, e.message); img.remove(); }
  }

  let featured = null;
  if (featuredRemote) { try { featured = await downloadImage(featuredRemote, slug); } catch (e) { console.warn('  featured fail', e.message); } }

  let category = 'Marketing';
  const catLink = $('a[rel~="category"], .cat-links a, .post-categories a').first();
  if (catLink.length && catLink.text().trim()) category = catLink.text().trim();
  if (!category || /nezarad|uncategor/i.test(category)) category = 'Digitálny marketing';

  const contentHtml = ((ucp.length ? $.html(container) : container.html()) || '').replace(/<!--[\s\S]*?-->/g, '').replace(/\n{3,}/g, '\n\n').trim();
  await mkdir(HTML_DIR, { recursive: true });
  await writeFile(path.join(HTML_DIR, `${slug}.html`), contentHtml);

  const idxPath = path.join(CONTENT_DIR, 'posts.json');
  let posts = existsSync(idxPath) ? JSON.parse(await readFile(idxPath, 'utf8')) : [];
  posts = posts.filter((p) => p.slug !== slug);
  posts.push({ slug, title, date, modified, excerpt, category, featuredImage: featured });
  posts.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  await writeFile(idxPath, JSON.stringify(posts, null, 2));

  console.log(`OK  ${slug}\n    title: ${title}\n    date: ${(date || '').slice(0, 10)} | category: ${category} | body imgs: ${imgCount} | featured: ${featured ? 'yes' : 'no'} | html: ${contentHtml.length} chars`);
}

for (const slug of SLUGS) {
  try { await migrate(slug); } catch (e) { console.error(`FAIL ${slug}: ${e.message}`); }
}
