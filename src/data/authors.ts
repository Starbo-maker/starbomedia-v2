// Autori blog článkov — E-E-A-T: meno, rola, foto, krátke bio a odkaz na tím.
// Mapovanie článkov na autorov je v posts.json (pole `author`); fallback = peter-strbo.

export type Author = {
    id: string;
    name: string;
    role: string;
    photo: string;
    bio: string;
    url: string;
};

export const AUTHORS: Record<string, Author> = {
    'peter-strbo': {
        id: 'peter-strbo',
        name: 'Peter Štrbo',
        role: 'Zakladateľ & CEO, Starbomedia',
        photo: '/team/peter-strbo.webp',
        bio: 'Performance marketingu sa venuje od roku 2012. Špecializuje sa na Google Ads, SEO a meranie výkonu a na zlepšovanie agentúrnych procesov pomocou AI. Vedie tím, ktorý ročne spravuje reklamné rozpočty cez 10 miliónov eur naprieč 13 trhmi CEE.',
        url: 'https://starbomedia.sk/tim-starbomedia',
    },
    'david-barczi': {
        id: 'david-barczi',
        name: 'Dávid Barczi',
        role: 'Online marketing konzultant, Starbomedia',
        photo: '/team/david-barczi.webp',
        bio: 'Online marketing konzultant so zameraním na Google Ads a technické nastavenia kampaní a merania. Stará sa o výkonnostné kampane e-shopov na slovenskom aj zahraničných trhoch CEE.',
        url: 'https://starbomedia.sk/tim-starbomedia',
    },
};

export const DEFAULT_AUTHOR = 'peter-strbo';

export function getAuthor(id?: string): Author {
    return AUTHORS[id ?? DEFAULT_AUTHOR] ?? AUTHORS[DEFAULT_AUTHOR];
}
