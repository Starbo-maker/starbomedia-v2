import type { GlossaryTerm } from './index';

// SEO pojmy. Stránku majú: seo (170/mes. „čo je seo"), serp (90), spätný odkaz (170 „spätné odkazy"),
// indexácia (140). Ostatné sú hub-only, s odkazmi na blog tam, kde tému už pokrýva článok.

export const seoTerms: GlossaryTerm[] = [
    {
        slug: 'seo',
        term: 'SEO',
        fullName: 'Search Engine Optimization (optimalizácia pre vyhľadávače)',
        category: 'seo',
        short: 'Optimalizácia webu tak, aby sa zobrazoval na popredných pozíciách v organických (neplatených) výsledkoch vyhľadávania. Zahŕňa obsah, technický stav webu aj spätné odkazy.',
        page: {
            quick: 'SEO (Search Engine Optimization) je optimalizácia webu pre vyhľadávače — súbor činností, vďaka ktorým sa web zobrazuje vyššie v organických, teda neplatených výsledkoch vyhľadávania. Na rozdiel od reklamy za kliknutia neplatíte; investujete do obsahu, techniky a autority webu.',
            sections: [
                {
                    heading: 'Z čoho sa SEO skladá',
                    paragraphs: [
                        'On-page SEO rieši obsah a štruktúru stránok: kľúčové slová, nadpisy, meta tagy, interné prelinkovanie a celkovú užitočnosť obsahu pre návštevníka. Technické SEO zabezpečuje, aby vyhľadávače web bez problémov prechádzali a indexovali — rýchlosť, mobilnú použiteľnosť, štruktúrované dáta. Off-page SEO buduje autoritu webu, predovšetkým cez kvalitné spätné odkazy.',
                        'Výsledky SEO neprichádzajú okamžite — typicky sa prejavujú v horizonte mesiacov. Odmenou je návštevnosť, ktorá po vybudovaní pozícií prichádza dlhodobo bez priamych nákladov za každé kliknutie.',
                    ],
                },
                {
                    heading: 'SEO v ére AI vyhľadávania',
                    paragraphs: [
                        'Vyhľadávanie sa mení: popri klasických modrých odkazoch odpovedajú aj AI Overviews v Googli a nástroje ako ChatGPT či Perplexity. Optimalizácia preto čoraz viac zahŕňa aj to, aby AI systémy obsah správne pochopili a citovali — hovorí sa o AEO či GEO. Princíp však ostáva: kvalitný, dôveryhodný a technicky čistý obsah vyhráva v oboch svetoch.',
                        'SEO a platená reklama sa pritom nevylučujú — najlepšie výsledky vidíme pri ich kombinácii, kde si kanály vymieňajú dáta aj priestor vo výsledkoch. Podrobné porovnanie nájdete v našom článku Google Ads vs SEO.',
                    ],
                },
            ],
        },
        related: ['serp', 'spatny-odkaz', 'indexacia', 'aeo', 'klucove-slova'],
        links: [
            { label: 'SEO optimalizácia — naša služba', href: '/seo' },
            { label: 'Google Ads vs SEO — čo je lepšie pre slovenský biznis', href: '/google-ads-vs-seo-co-je-lepsie-pre-slovensky-biznis-v-roku-2026' },
        ],
    },
    {
        slug: 'serp',
        term: 'SERP',
        fullName: 'Search Engine Results Page (stránka výsledkov vyhľadávania)',
        category: 'seo',
        short: 'Stránka s výsledkami vyhľadávania — okrem organických odkazov obsahuje reklamy, AI prehľady, mapy, obrázky či featured snippety. Cieľ SEO aj PPC je obsadiť na nej viditeľné miesto.',
        page: {
            quick: 'SERP (Search Engine Results Page) je stránka, ktorú vyhľadávač zobrazí po zadaní dopytu. Dnes zďaleka neobsahuje len desať modrých odkazov — kombinuje platené reklamy, AI prehľady (AI Overviews), mapové výsledky, obrázky, videá, featured snippety a ďalšie prvky.',
            sections: [
                {
                    heading: 'Z čoho sa moderný SERP skladá',
                    paragraphs: [
                        'Navrchu bývajú platené reklamy a nákupné (Shopping) výsledky, pri mnohých dopytoch AI Overview — odpoveď zostavená umelou inteligenciou. Nasledujú organické výsledky, ktoré môžu byť obohatené o hodnotenia či FAQ (vďaka štruktúrovaným dátam), lokálny balíček s mapou, sekcia „Ľudia sa pýtajú" a obrázkové či video karusely.',
                        'Zloženie SERP-u sa líši podľa zámeru dopytu: nákupné výrazy spúšťajú reklamy a Shopping, lokálne dopyty mapu, informačné otázky AI prehľady a snippety. Preto je analýza SERP-u prvým krokom pri plánovaní obsahu — ukáže, s čím budete o pozornosť súťažiť.',
                    ],
                },
                {
                    heading: 'Prečo na SERP-e záleží',
                    paragraphs: [
                        'Drvivá väčšina kliknutí sa odohráva na prvej stránke výsledkov a klesá s každou pozíciou. Nástup AI Overviews navyše časť kliknutí úplne odoberá — odpoveď dostane používateľ priamo vo vyhľadávaní. O to cennejšie je byť zdrojom, ktorý AI prehľad cituje, alebo obsadiť prvky ako featured snippet.',
                    ],
                },
            ],
        },
        related: ['seo', 'featured-snippet', 'ai-overviews', 'vyhladavacia-siet'],
        links: [
            { label: 'AI Overviews — kompletný sprievodca', href: '/ai-overviews-kompletny-sprievodca' },
            { label: 'SEO optimalizácia — naša služba', href: '/seo' },
        ],
    },
    {
        slug: 'spatny-odkaz',
        term: 'Spätný odkaz',
        fullName: 'Backlink',
        category: 'seo',
        short: 'Odkaz z cudzieho webu na ten váš. Pre vyhľadávače je odporúčaním — kvalitné spätné odkazy z dôveryhodných webov patria k najsilnejším hodnotiacim signálom.',
        page: {
            quick: 'Spätný odkaz (backlink) je odkaz, ktorý vedie z cudzieho webu na váš. Vyhľadávače ho chápu ako odporúčanie: ak na vás odkazujú kvalitné a tematicky príbuzné weby, rastie dôveryhodnosť a autorita vášho webu — a s ňou aj pozície vo výsledkoch vyhľadávania.',
            sections: [
                {
                    heading: 'Čo robí spätný odkaz kvalitným',
                    paragraphs: [
                        'Rozhoduje autorita a tematická príbuznosť odkazujúceho webu, umiestnenie odkazu (v texte článku je hodnotnejší než v pätičke), anchor text — text, na ktorý sa kliká — a prirodzenosť celého odkazového profilu. Desať odkazov z relevantných magazínov má väčšiu váhu než stovky odkazov z bezvýznamných katalógov.',
                        'Pozor na nekvalitné praktiky: nakupované odkazy z odkazových fariem či výmenných schém môžu webu uškodiť. Google takéto vzorce rozpoznáva a neprirodzený profil dokáže penalizovať alebo jednoducho ignorovať.',
                    ],
                },
                {
                    heading: 'Ako spätné odkazy budovať',
                    paragraphs: [
                        'Udržateľný linkbuilding stojí na obsahu, na ktorý sa oplatí odkazovať: unikátne dáta, prieskumy, návody, nástroje. Dopĺňajú ho PR články v médiách, hosťovské publikácie, firemné zápisy v relevantných adresároch a vzťahy s webmi v odbore.',
                        'Odkazový profil sledujte v Google Search Console alebo v špecializovaných nástrojoch — dôležitý je postupný, prirodzený rast, nie jednorazové nárazy.',
                    ],
                },
            ],
        },
        related: ['linkbuilding', 'anchor-text', 'seo', 'eeat'],
        links: [
            { label: 'SEO optimalizácia — naša služba', href: '/seo' },
        ],
    },
    {
        slug: 'indexacia',
        term: 'Indexácia',
        category: 'seo',
        short: 'Zaradenie stránky do databázy (indexu) vyhľadávača. Stránka, ktorá nie je zaindexovaná, sa vo výsledkoch vyhľadávania nemôže zobraziť — ani keby bola obsahovo najlepšia.',
        page: {
            quick: 'Indexácia je proces, pri ktorom vyhľadávač zaradí stránku do svojej databázy (indexu). Až po zaindexovaní sa stránka môže zobrazovať vo výsledkoch vyhľadávania. Postupnosť je: crawler stránku objaví a prejde (crawling), systém ju vyhodnotí a uloží do indexu, následne sa môže zobrazovať a radiť (ranking).',
            sections: [
                {
                    heading: 'Ako indexáciu skontrolovať a riadiť',
                    paragraphs: [
                        'Stav indexácie webu sledujte v Google Search Console v prehľade Indexovanie stránok — vidíte tam, ktoré URL sú v indexe a prečo iné nie sú. Rýchla kontrola konkrétnej stránky funguje aj cez operátor site: priamo vo vyhľadávaní.',
                        'Indexáciu riadite niekoľkými nástrojmi: súbor robots.txt usmerňuje, kam môže crawler vstúpiť; meta značka noindex hovorí, že stránka sa nemá indexovať; kanonická URL určuje, ktorá verzia duplicitného obsahu je tá hlavná; XML sitemap pomáha vyhľadávaču objaviť všetky dôležité URL.',
                    ],
                },
                {
                    heading: 'Najčastejšie problémy s indexáciou',
                    paragraphs: [
                        'Typické príčiny neindexovania: omylom ponechaný noindex (napríklad po spustení nového webu), blokovanie v robots.txt, duplicitný či príliš slabý obsah („Crawled — currently not indexed"), pomalý web alebo chýbajúce interné odkazy na stránku — na čo nevedie žiadny odkaz, to crawler ťažko objaví.',
                        'Pri väčších weboch (e-shopy s filtrami) treba strážiť aj crawl budget: ak crawler trávi čas na tisíckach bezvýznamných parametrických URL, na dôležité stránky sa nemusí dostať.',
                    ],
                },
            ],
        },
        related: ['crawling', 'robots-txt', 'sitemap-xml', 'kanonicka-url', 'google-search-console'],
        links: [
            { label: 'SEO optimalizácia — naša služba', href: '/seo' },
        ],
    },

    // ——— Hub-only SEO pojmy ———
    {
        slug: 'on-page-seo',
        term: 'On-page SEO',
        category: 'seo',
        short: 'Optimalizácia priamo na stránkach webu — obsah, kľúčové slová, nadpisy, meta tagy, interné prelinkovanie, obrázky. Všetko, čo máte plne pod kontrolou.',
        related: ['off-page-seo', 'technicke-seo', 'meta-title'],
    },
    {
        slug: 'off-page-seo',
        term: 'Off-page SEO',
        category: 'seo',
        short: 'Aktivity mimo vlastného webu, ktoré budujú jeho autoritu — predovšetkým získavanie spätných odkazov, zmienky o značke a PR.',
        related: ['spatny-odkaz', 'linkbuilding'],
    },
    {
        slug: 'technicke-seo',
        term: 'Technické SEO',
        category: 'seo',
        short: 'Technický stav webu z pohľadu vyhľadávačov — rýchlosť, indexovateľnosť, mobilná použiteľnosť, štruktúrované dáta, presmerovania. Bez technického základu nepomôže ani skvelý obsah.',
        related: ['indexacia', 'core-web-vitals', 'strukturovane-data'],
    },
    {
        slug: 'linkbuilding',
        term: 'Linkbuilding',
        category: 'seo',
        short: 'Systematické budovanie spätných odkazov — cez kvalitný obsah, PR, hosťovské články či partnerstvá. Kvalita a relevancia odkazov je dôležitejšia než ich počet.',
        related: ['spatny-odkaz', 'off-page-seo'],
    },
    {
        slug: 'anchor-text',
        term: 'Anchor text',
        category: 'seo',
        short: 'Viditeľný text odkazu, na ktorý sa kliká. Pomáha vyhľadávačom pochopiť, o čom je cieľová stránka; prehnane optimalizované anchory pôsobia neprirodzene.',
        related: ['spatny-odkaz', 'interne-prelinkovanie'],
    },
    {
        slug: 'interne-prelinkovanie',
        term: 'Interné prelinkovanie',
        category: 'seo',
        short: 'Odkazy medzi stránkami v rámci jedného webu. Rozvádzajú autoritu, pomáhajú crawlerom objavovať obsah a návštevníkom nachádzať súvisiace informácie.',
        related: ['anchor-text', 'indexacia'],
    },
    {
        slug: 'meta-title',
        term: 'Meta title',
        fullName: 'Title tag',
        category: 'seo',
        short: 'Titulok stránky zobrazovaný ako modrý nadpis vo výsledkoch vyhľadávania a v záložke prehliadača. Jeden z najdôležitejších on-page signálov; optimálne do ~60 znakov.',
        related: ['meta-description', 'on-page-seo'],
    },
    {
        slug: 'meta-description',
        term: 'Meta description',
        category: 'seo',
        short: 'Krátky popis stránky pod titulkom vo výsledkoch vyhľadávania. Pozície priamo neovplyvňuje, ale rozhoduje o tom, či ľudia kliknú — funguje ako reklamný text organického výsledku.',
        related: ['meta-title', 'ctr'],
    },
    {
        slug: 'alt-text',
        term: 'Alt text',
        category: 'seo',
        short: 'Textový popis obrázka v kóde stránky. Pomáha vyhľadávačom pochopiť obsah obrázka, je podkladom pre vyhľadávanie obrázkov a kľúčový pre prístupnosť (čítačky obrazovky).',
        related: ['on-page-seo'],
    },
    {
        slug: 'kanonicka-url',
        term: 'Kanonická URL',
        fullName: 'Canonical',
        category: 'seo',
        short: 'Značka, ktorá pri duplicitnom či podobnom obsahu určuje hlavnú verziu stránky. Bráni tomu, aby si varianty jednej stránky (filtre, parametre) konkurovali v indexe.',
        related: ['duplicitny-obsah', 'indexacia'],
    },
    {
        slug: 'crawling',
        term: 'Crawling',
        category: 'seo',
        short: 'Prechádzanie webu robotmi vyhľadávačov (crawlermi, napr. Googlebot), ktoré objavujú stránky a ich zmeny. Predchádza indexácii.',
        related: ['indexacia', 'robots-txt'],
    },
    {
        slug: 'robots-txt',
        term: 'Robots.txt',
        category: 'seo',
        short: 'Textový súbor v koreňovom adresári webu, ktorý crawlerom hovorí, kam môžu a nemôžu vstupovať. Pozor: nezabraňuje indexácii, len prechádzaniu — na vylúčenie z indexu slúži noindex.',
        related: ['crawling', 'indexacia'],
    },
    {
        slug: 'sitemap-xml',
        term: 'XML sitemap',
        category: 'seo',
        short: 'Strojovo čitateľná mapa webu so zoznamom URL adries a dátumami zmien. Pomáha vyhľadávačom objaviť všetky dôležité stránky; odosiela sa cez Google Search Console.',
        related: ['indexacia', 'google-search-console'],
    },
    {
        slug: 'strukturovane-data',
        term: 'Štruktúrované dáta',
        fullName: 'Schema markup',
        category: 'seo',
        short: 'Strojovo čitateľné značky (schema.org) v kóde stránky, ktoré vyhľadávačom vysvetľujú význam obsahu — produkt, recenziu, FAQ, článok. Umožňujú rozšírené výsledky a pomáhajú aj AI systémom.',
        related: ['featured-snippet', 'serp', 'aeo'],
    },
    {
        slug: 'featured-snippet',
        term: 'Featured snippet',
        category: 'seo',
        short: 'Zvýraznená odpoveď na vrchu výsledkov vyhľadávania vytiahnutá priamo z obsahu stránky — „pozícia 0". Získavajú ju stránky so stručnou, jasne štruktúrovanou odpoveďou na otázku.',
        related: ['serp', 'aeo', 'strukturovane-data'],
    },
    {
        slug: 'long-tail',
        term: 'Long-tail kľúčové slová',
        category: 'seo',
        short: 'Dlhšie a konkrétnejšie vyhľadávacie frázy s menším objemom, ale presnejším zámerom („pánske bežecké topánky na zimu"). V súčte tvoria väčšinu vyhľadávaní a býva na nich nižšia konkurencia.',
        related: ['klucove-slova', 'search-intent'],
    },
    {
        slug: 'search-intent',
        term: 'Search intent',
        fullName: 'Vyhľadávací zámer',
        category: 'seo',
        short: 'Skutočný cieľ, ktorý človek vyhľadávaním sleduje: informačný, navigačný, komerčný alebo transakčný. Obsah, ktorý zámeru nezodpovedá, sa vo výsledkoch neudrží.',
        related: ['klucove-slova', 'long-tail'],
    },
    {
        slug: 'duplicitny-obsah',
        term: 'Duplicitný obsah',
        category: 'seo',
        short: 'Rovnaký alebo veľmi podobný obsah dostupný na viacerých URL — v rámci webu aj medzi webmi. Vyhľadávač potom nevie, ktorú verziu radiť; rieši sa kanonickou URL alebo presmerovaním.',
        related: ['kanonicka-url', 'presmerovanie-301'],
    },
    {
        slug: 'presmerovanie-301',
        term: '301 presmerovanie',
        category: 'seo',
        short: 'Trvalé presmerovanie URL na novú adresu. Prenáša väčšinu autority pôvodnej stránky — kľúčový nástroj pri migráciách webov a rušení stránok.',
        related: ['chyba-404', 'duplicitny-obsah'],
    },
    {
        slug: 'chyba-404',
        term: 'Chyba 404',
        category: 'seo',
        short: 'Stavový kód „stránka nenájdená". Občasné 404 sú normálne; problémom sú odkazy a dopyty smerujúce na neexistujúce stránky — riešia sa presmerovaním alebo opravou odkazov.',
        related: ['presmerovanie-301'],
    },
    {
        slug: 'core-web-vitals',
        term: 'Core Web Vitals',
        category: 'seo',
        short: 'Metriky Googlu merajúce zážitok z načítania stránky: LCP (rýchlosť načítania hlavného obsahu), INP (odozva na interakcie) a CLS (vizuálna stabilita). Súčasť hodnotenia stránok.',
        related: ['technicke-seo'],
    },
    {
        slug: 'lokalne-seo',
        term: 'Lokálne SEO',
        category: 'seo',
        short: 'Optimalizácia pre vyhľadávania s miestnym zámerom („kaviareň bratislava") — firemný profil Google (Moja Firma), recenzie, lokálne zmienky a obsah. Kľúčové pre kamenné prevádzky a služby.',
        related: ['seo', 'serp'],
        links: [{ label: 'Google Moja Firma — sprievodca lokálnym SEO', href: '/google-moja-firma-kompletny-sprievodca-lokalnym-seo-v-roku-2026' }],
    },
    {
        slug: 'eeat',
        term: 'E-E-A-T',
        fullName: 'Experience, Expertise, Authoritativeness, Trustworthiness',
        category: 'seo',
        short: 'Rámec, ktorým Google posudzuje kvalitu obsahu: skúsenosť, odbornosť, autoritatívnosť a dôveryhodnosť. Mimoriadne dôležitý pri témach ovplyvňujúcich zdravie a financie (YMYL).',
        related: ['seo', 'spatny-odkaz'],
    },
    {
        slug: 'google-search-console',
        term: 'Google Search Console',
        category: 'seo',
        short: 'Bezplatný nástroj Googlu pre majiteľov webov — ukazuje výkonnosť vo vyhľadávaní (dopyty, pozície, prekliky), stav indexácie, technické problémy a spätné odkazy.',
        related: ['indexacia', 'sitemap-xml'],
    },
    {
        slug: 'organicka-navstevnost',
        term: 'Organická návštevnosť',
        category: 'seo',
        short: 'Návštevy prichádzajúce z neplatených výsledkov vyhľadávania. Hlavný výstup SEO — na rozdiel od platenej návštevnosti za ňu neplatíte za kliknutie.',
        related: ['seo', 'serp'],
    },
];
