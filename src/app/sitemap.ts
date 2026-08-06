import type { MetadataRoute } from 'next';
import posts from '../content/blog/posts.json';
import { getPagedTerms } from '../data/glossary';

const SITE = 'https://starbomedia.sk';

type Post = { slug: string; date: string; modified?: string };

// Static routes. AI Studio sub-pages and services included.
const STATIC_PATHS = [
    '', // homepage
    'reklama-na-internete',
    'google-reklama',
    'facebook-reklama',
    'sprava-socialnych-sieti',
    'youtube-reklama',
    'seo',
    'cenove-porovnavace',
    'analyza-webu',
    'cennik',
    'google-ads-audit',
    'ai-studio',
    'ai-studio/produktova-fotografia',
    'ai-studio/marketing-bannery',
    'ai-studio/product-to-video',
    'ai-studio/ai-influencer',
    'ai-studio/video-prezentacie',
    'ai-studio/voice-boti',
    'ai-studio/multilingual-dubbing',
    'ai-studio/seo-clanky',
    'ai-studio/seo-meta-texty',
    'ai-studio/vibecode-weby',
    'ai-studio/report-vizualizacia',
    'blog',
    'slovnik-pojmov',
    'referencie-2',
    'tim-starbomedia',
    'preco-starbomedia',
    'kariera',
    'kariera-marketing-staz',
    'kariera-ppc-specialista',
    'kontakt',
    'ochrana-osobnych-udajov',
];

function priorityFor(p: string): number {
    if (p === '') return 1;
    if (['google-reklama', 'facebook-reklama', 'sprava-socialnych-sieti', 'seo', 'reklama-na-internete', 'ai-studio', 'blog'].includes(p)) return 0.9;
    if (p.startsWith('ai-studio/')) return 0.8;
    if (['kontakt', 'referencie-2', 'preco-starbomedia', 'cenove-porovnavace', 'youtube-reklama', 'analyza-webu', 'slovnik-pojmov', 'cennik', 'google-ads-audit'].includes(p)) return 0.7;
    return 0.5;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
        url: p ? `${SITE}/${p}` : SITE,
        lastModified: now,
        changeFrequency: p === '' || p === 'blog' ? 'weekly' : 'monthly',
        priority: priorityFor(p),
    }));

    // Blog articles — pulled from posts.json, so any newly migrated article
    // is automatically added to the sitemap with its own lastmod.
    const blogEntries: MetadataRoute.Sitemap = (posts as Post[]).map((post) => ({
        url: `${SITE}/${post.slug}`,
        lastModified: new Date(post.modified || post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    // Stránky pojmov zo slovníka — generujú sa z dát, nový pojem so stránkou
    // sa do sitemap pridá automaticky.
    const glossaryEntries: MetadataRoute.Sitemap = getPagedTerms().map((t) => ({
        url: `${SITE}/slovnik-pojmov/${t.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
    }));

    return [...staticEntries, ...blogEntries, ...glossaryEntries];
}
