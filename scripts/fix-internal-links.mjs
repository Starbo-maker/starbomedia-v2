/**
 * Prepíše odkazy v migrovaných blog článkoch pred launchom:
 * 1. href na wp-content/uploads/*.png|jpg (staré WP lightbox odkazy) → lokálny .webp
 *    v priečinku článku, ak existuje; inak sa <a> odstráni (obrázok ostáva).
 * 2. Absolútne https://starbomedia.sk/... → relatívne, bez koncového lomítka
 *    (zhoda so servovanými URL — žiadne 308 hopy po launchi).
 * Idempotentné.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const ROOT = path.join(import.meta.dirname, '..');
const HTML_DIR = path.join(ROOT, 'src/content/blog/html');
const PUBLIC_DIR = path.join(ROOT, 'public');

const ascii = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

let wpFixed = 0, wpUnwrapped = 0, absFixed = 0;

for (const f of readdirSync(HTML_DIR).filter((x) => x.endsWith('.html'))) {
    const slug = f.replace(/\.html$/, '');
    const file = path.join(HTML_DIR, f);
    const $ = cheerio.load(readFileSync(file, 'utf8'), null, false);

    $('a[href]').each((_, el) => {
        const $el = $(el);
        let href = $el.attr('href') || '';
        try { href = decodeURIComponent(href); } catch { /* ponechaj raw */ }

        // 1) wp-content obrázkové odkazy → lokálny webp alebo odstrániť obal
        const wp = href.match(/^https?:\/\/(?:www\.)?starbomedia\.sk\/wp-content\/uploads\/.*\/([^/]+)\.(png|jpe?g)$/i);
        if (wp) {
            const base = ascii(wp[1]);
            const local = `/blog/${slug}/${base}.webp`;
            if (existsSync(path.join(PUBLIC_DIR, local.replace(/^\//, '')))) {
                $el.attr('href', local);
                wpFixed++;
            } else {
                $el.replaceWith($el.contents());
                wpUnwrapped++;
            }
            return;
        }

        // 2) absolútne interné odkazy → relatívne bez koncového lomítka
        const abs = href.match(/^https?:\/\/(?:www\.)?starbomedia\.sk(\/[^#?]*)?([#?].*)?$/);
        if (abs) {
            let p = abs[1] || '/';
            if (p.length > 1) p = p.replace(/\/+$/, '');
            $el.attr('href', p + (abs[2] || ''));
            absFixed++;
        }
    });

    writeFileSync(file, $.html());
}

console.log(`wp-content → lokálny webp: ${wpFixed} | odstránený obal (bez náhrady): ${wpUnwrapped} | absolútne → relatívne: ${absFixed}`);
