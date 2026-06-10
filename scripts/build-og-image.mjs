/**
 * Vygeneruje default OG obrázok (1200×630) v brand štýle Starbomedia
 * (tmavý navy podklad, star-gradient lišta, biele logo s farebnou hviezdou, claim).
 * Výstup: src/app/opengraph-image.png (Next file-convention → og:image pre všetky stránky
 * bez vlastného openGraph.images) + alt text.
 *
 * Spustenie: node scripts/build-og-image.mjs
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.join(import.meta.dirname, '..');
const LOGO = path.join(ROOT, 'public/logo.png');
const OUT = path.join(ROOT, 'src/app/opengraph-image.png');

// Brand tokens (starbomedia-brand skill)
const NAVY = '#1F3D4D';
const PURPLE = '#5B2C7F';
const ORANGE = '#F04E24';
const WARM = '#F4832D';
const PINK = '#E41658';
const MUTED = '#cbd5e1';

// 1) Logo: prefarbiť tmavý text na bielo, farebnú hviezdu nechať.
//    Textové pixely majú nízku sýtosť (tmavá navy), hviezda je vysoko sýta.
async function whiteLogo() {
    const { data, info } = await sharp(LOGO).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    for (let i = 0; i < data.length; i += 4) {
        const a = data[i + 3];
        if (a === 0) continue;
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const sat = Math.max(r, g, b) - Math.min(r, g, b);
        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
        if (sat < 70 && lum < 170) {
            data[i] = 255; data[i + 1] = 255; data[i + 2] = 255;
        }
    }
    return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${PINK}"/>
      <stop offset="0.35" stop-color="${PURPLE}"/>
      <stop offset="0.7" stop-color="${ORANGE}"/>
      <stop offset="1" stop-color="${WARM}"/>
    </linearGradient>
    <radialGradient id="glowP" cx="0.18" cy="0.12" r="0.55">
      <stop offset="0" stop-color="${PURPLE}" stop-opacity="0.30"/>
      <stop offset="1" stop-color="${PURPLE}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowO" cx="0.88" cy="0.95" r="0.55">
      <stop offset="0" stop-color="${ORANGE}" stop-opacity="0.20"/>
      <stop offset="1" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect width="1200" height="630" fill="url(#glowP)"/>
  <rect width="1200" height="630" fill="url(#glowO)"/>
  <rect width="1200" height="14" fill="url(#bar)"/>

  <text x="600" y="448" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="bold" fill="#FFFFFF">Marketing, ktorý platí vaše účty.</text>
  <text x="600" y="510" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="bold" letter-spacing="4" fill="${WARM}">GOOGLE ADS · META ADS · SEO · AI</text>
  <text x="600" y="578" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="${MUTED}">starbomedia.sk</text>
</svg>`;

const logoBuf = await whiteLogo();
const logoResized = await sharp(logoBuf).resize({ width: 560 }).png().toBuffer();
const logoMeta = await sharp(logoResized).metadata();

const png = await sharp(Buffer.from(svg))
    .composite([{ input: logoResized, left: Math.round((1200 - 560) / 2), top: Math.round(210 - logoMeta.height / 2) }])
    .png({ compressionLevel: 9 })
    .toBuffer();

const ALT = 'Starbo Media — online marketing agentúra. Marketing, ktorý platí vaše účty. Google Ads, Meta Ads, SEO, AI.';
writeFileSync(OUT, png);
writeFileSync(path.join(ROOT, 'src/app/opengraph-image.alt.txt'), ALT);
// rovnaká karta aj pre twitter:image (X si inak vie zobrať og:image, ale explicitne je explicitne)
writeFileSync(path.join(ROOT, 'src/app/twitter-image.png'), png);
writeFileSync(path.join(ROOT, 'src/app/twitter-image.alt.txt'), ALT);
console.log('OK:', OUT, Math.round(png.length / 1024) + 'KB', `(logo ${logoMeta.width}x${logoMeta.height})`);
