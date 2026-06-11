// Slovník pojmov — dátová vrstva.
// Hybridná architektúra: všetky pojmy žijú na hube /slovnik-pojmov (anchor = slug),
// pojmy s reálnou hľadanosťou majú navyše vlastnú stránku /slovnik-pojmov/[slug] (term.page).

import { metrikyTerms } from './metriky';
import { reklamaTerms } from './reklama';
import { seoTerms } from './seo';
import { aiAnalytikaTerms } from './ai-analytika';

export type GlossaryLink = {
    label: string;
    href: string;
};

export type GlossarySection = {
    heading: string;
    paragraphs: string[];
};

export type GlossaryPage = {
    /** Rýchla odpoveď 40–60 slov — prvý odsek pod H1, optimalizované pre AI Overviews/featured snippet. */
    quick: string;
    /** Vzorec pri metrikách — zobrazí sa ako zvýraznený box. */
    formula?: string;
    sections: GlossarySection[];
};

export type GlossaryTerm = {
    /** Slug = anchor na hube aj URL podstránky (bez diakritiky). */
    slug: string;
    /** Zobrazovaný názov pojmu, napr. "CTR". */
    term: string;
    /** Plný názov / rozpísaná skratka, napr. "Click-Through Rate (miera prekliku)". */
    fullName?: string;
    /** Krátka definícia pre hub (1–3 vety). Slúži aj ako meta description podstránky. */
    short: string;
    category: string;
    /** Ak existuje, pojem má vlastnú stránku. */
    page?: GlossaryPage;
    /** Slugy súvisiacich pojmov. */
    related?: string[];
    /** Interné odkazy na služby a blogové články. */
    links?: GlossaryLink[];
};

export type GlossaryCategory = {
    id: string;
    title: string;
    intro?: string;
};

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
    { id: 'ppc', title: 'PPC a online reklama' },
    { id: 'google-ads', title: 'Google Ads' },
    { id: 'meta-ads', title: 'Meta Ads (Facebook a Instagram)' },
    { id: 'video', title: 'YouTube a video reklama' },
    { id: 'metriky', title: 'Metriky a KPI' },
    { id: 'seo', title: 'SEO' },
    { id: 'ai', title: 'AI v marketingu' },
    { id: 'analytika', title: 'Analytika a meranie' },
    { id: 'obsah', title: 'Obsah a sociálne siete' },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    ...reklamaTerms,
    ...metrikyTerms,
    ...seoTerms,
    ...aiAnalytikaTerms,
];

export function getTerm(slug: string): GlossaryTerm | undefined {
    return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function getPagedTerms(): GlossaryTerm[] {
    return GLOSSARY_TERMS.filter((t) => t.page);
}

/** URL pojmu: vlastná stránka, alebo anchor na hube. */
export function termHref(slug: string): string {
    const term = getTerm(slug);
    if (!term) return '/slovnik-pojmov';
    return term.page ? `/slovnik-pojmov/${term.slug}` : `/slovnik-pojmov#${term.slug}`;
}

export function termsByCategory(categoryId: string): GlossaryTerm[] {
    return GLOSSARY_TERMS
        .filter((t) => t.category === categoryId)
        .sort((a, b) => a.term.localeCompare(b.term, 'sk'));
}
