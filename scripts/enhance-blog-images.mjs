/**
 * Doplní výkonové atribúty do obrázkov migrovaných blog článkov.
 * - <img> v src/content/blog/html/*.html: width/height (reálne zo súboru, proti CLS),
 *   loading="lazy" + decoding="async" (prvý obrázok článku ostáva eager),
 *   odstráni mŕtve data-lazy-* a fetchpriority atribúty z WP lazy-load pluginu.
 * - posts.json: doplní featuredW/featuredH pre featured obrázky (pre next/image).
 * Idempotentné — možno spúšťať opakovane (aj po novej migrácii článkov).
 *
 * Spustenie: node scripts/enhance-blog-images.mjs
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import sharp from 'sharp';

const ROOT = path.join(import.meta.dirname, '..');
const HTML_DIR = path.join(ROOT, 'src/content/blog/html');
const PUBLIC_DIR = path.join(ROOT, 'public');
const POSTS_JSON = path.join(ROOT, 'src/content/blog/posts.json');

async function imageSize(publicPath) {
    const file = path.join(PUBLIC_DIR, publicPath.replace(/^\//, ''));
    if (!existsSync(file)) return null;
    try {
        const m = await sharp(file).metadata();
        return m.width && m.height ? { width: m.width, height: m.height } : null;
    } catch {
        return null;
    }
}

let htmlImgs = 0, sized = 0, lazied = 0, missing = [];

for (const f of readdirSync(HTML_DIR).filter((x) => x.endsWith('.html'))) {
    const file = path.join(HTML_DIR, f);
    const $ = cheerio.load(readFileSync(file, 'utf8'), null, false);
    const imgs = $('img').toArray();
    let i = 0;
    for (const el of imgs) {
        const $el = $(el);
        htmlImgs++;
        const src = $el.attr('src') || '';
        // mŕtve atribúty z WP lazy-load pluginu
        for (const attr of Object.keys(el.attribs)) {
            if (attr.startsWith('data-lazy-') || attr === 'fetchpriority') $el.removeAttr(attr);
        }
        if (src.startsWith('/blog/')) {
            const dim = await imageSize(src);
            if (dim) {
                if (!$el.attr('width')) $el.attr('width', String(dim.width));
                if (!$el.attr('height')) $el.attr('height', String(dim.height));
                sized++;
            } else {
                missing.push(`${f}: ${src}`);
            }
        }
        // prvý obrázok článku môže byť blízko foldu — nechaj eager, ostatné lazy
        if (i > 0) {
            $el.attr('loading', 'lazy');
            lazied++;
        }
        $el.attr('decoding', 'async');
        i++;
    }
    writeFileSync(file, $.html());
}

const posts = JSON.parse(readFileSync(POSTS_JSON, 'utf8'));
let featured = 0;
for (const p of posts) {
    if (p.featuredImage) {
        const dim = await imageSize(p.featuredImage);
        if (dim) {
            p.featuredW = dim.width;
            p.featuredH = dim.height;
            featured++;
        } else {
            missing.push(`posts.json: ${p.featuredImage}`);
        }
    }
}
writeFileSync(POSTS_JSON, JSON.stringify(posts, null, 2) + '\n');

console.log(`HTML <img>: ${htmlImgs} | s rozmermi: ${sized} | lazy: ${lazied} | featured s rozmermi: ${featured}/${posts.filter((p) => p.featuredImage).length}`);
if (missing.length) console.log('CHÝBAJÚCE SÚBORY:\n' + missing.join('\n'));
