import Link from 'next/link';
import {
    Euro, ShieldCheck, Search, Share2, TrendingUp, ShoppingBag,
    Gauge, CheckCircle, HelpCircle,
} from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Cenník — koľko stojí správa reklamy a SEO | Starbomedia',
    description: 'Transparentný cenník: správa Google Ads od 350 €, Meta Ads od 350 €, SEO od 400 € mesačne. Vstupný audit zdarma. Konkrétne pásma, žiadne „cena na vyžiadanie".',
};

const cennik = [
    { sluzba: 'Google Ads — správa kampaní', cena: 'od 350 € / mes.', detail: 'Search, PMax, Shopping, remarketing. Pri rozpočte nad ~3 000 € prechádzame na 10 – 15 % z rozpočtu.', href: '/google-reklama' },
    { sluzba: 'Meta Ads (Facebook + Instagram)', cena: 'od 350 € / mes.', detail: 'Kampane, kreatívny testing, Advantage+, CAPI meranie.', href: '/facebook-reklama' },
    { sluzba: 'Google Ads + Meta Ads spolu', cena: 'od 600 € / mes.', detail: 'Najčastejšia kombinácia pre e-shopy — jeden tím, spoločná atribúcia a rozpočtová stratégia.', href: '/reklama-na-internete' },
    { sluzba: 'SEO', cena: 'od 400 € / mes.', detail: 'Technické SEO, obsah, interné prelinkovanie, GEO (viditeľnosť v AI odpovediach).', href: '/seo' },
    { sluzba: 'Heureka a cenové porovnávače', cena: 'od 150 € / mes.', detail: 'Doplnok k správe kampaní — feedy, bidding, dostupnosť produktov.', href: '/cenove-porovnavace' },
    { sluzba: 'Nastavenie merania konverzií', cena: 'od 400 € jednorazovo', detail: 'GA4, server-side tagging, Enhanced Conversions — základ, bez ktorého sa neoptimalizuje.', href: '/analyza-webu' },
    { sluzba: 'Vstupný audit účtu', cena: 'zdarma', detail: 'Nezáväzná analýza histórie účtu: kadiaľ utekajú peniaze a aký je potenciál.', href: '/kontakt' },
];

const faq = [
    { q: 'Prečo uvádzate ceny „od"?', a: 'Lebo náročnosť správy sa líši: účet s jedným trhom a stovkami produktov je iná práca než účet s ôsmimi trhmi a desaťtisícmi produktov. Pásmo „od" je reálna spodná hranica, presnú cenu dostanete po bezplatnom audite — spolu s rozsahom práce, ktorý za ňu dostanete.' },
    { q: 'Je fixná odmena alebo percento z rozpočtu výhodnejšie?', a: 'Do približne 3 000 € mesačného rozpočtu je pre klienta zvyčajne férovejší fix. Pri väčších rozpočtoch dáva zmysel 10 – 15 % z médií, lebo náročnosť správy rastie s objemom. Modely nad 25 % považujeme za predražené.' },
    { q: 'Viažete zmluvou?', a: 'Nie. Spolupráca je bez dlhodobej viazanosti s mesačnou výpovednou lehotou. Držíme si klientov výsledkami, nie zmluvami.' },
    { q: 'Komu patrí reklamný účet?', a: 'Vždy vám. Účty zakladáme na vašu firmu a pri prípadnom odchode vám zostáva účet, história aj dáta. Považujeme to za samozrejmosť — a odporúčame si to overiť u každej agentúry.' },
    { q: 'Čo ak sa kampaniam nedarí?', a: 'Prvé 2 – 3 mesiace sú o stabilizácii merania a optimalizácii. Ak sa ani potom nedarí plniť dohodnuté ciele, povieme vám to na rovinu aj s dôvodmi — vrátane scenára, že reklama pre váš biznis nie je správny kanál.' },
    { q: 'Koľko mám rátať celkovo aj s rozpočtom pre Google/Meta?', a: 'Odmena za správu je len jedna z dvoch platieb — druhá je mediálny rozpočet, ktorý ide priamo platformám. Zmysluplný celok pre malú firmu začína okolo 650 – 950 € mesačne (médiá + správa), pre menší e-shop okolo 950 – 2 000 €. Podrobný rozpis nájdete v článku o cene Google Ads.' },
];

const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: 'Cenník služieb Starbomedia',
        url: 'https://starbomedia.sk/cennik',
        itemListElement: cennik.map((c) => ({
            '@type': 'Offer',
            name: c.sluzba,
            description: c.detail,
            price: c.cena.includes('zdarma') ? '0' : undefined,
            priceCurrency: 'EUR',
            priceSpecification: { '@type': 'PriceSpecification', price: c.cena, priceCurrency: 'EUR' },
            offeredBy: { '@id': 'https://starbomedia.sk/#organization' },
        })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Domov', item: 'https://starbomedia.sk' },
            { '@type': 'ListItem', position: 2, name: 'Cenník' },
        ],
    },
];

export default function CennikPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.1), transparent 40%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f5f3ff', padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid #ede9fe' }}>
                            <Euro size={16} color="#8b5cf6" />
                            <span style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '0.85rem' }}>TRANSPARENTNÝ CENNÍK</span>
                        </div>
                        <h1 className={styles.title}>Koľko stojí spolupráca so Starbomedia?</h1>
                        <p className={styles.subtitle}>
                            Žiadne „cena na vyžiadanie". Správa Google Ads od 350 €, Meta Ads od 350 €, SEO od 400 € mesačne —
                            a vstupný audit vždy zdarma. Nižšie nájdete kompletné pásma aj to, čo za ne reálne dostanete.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#8b5cf6', boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.4)' }}>
                                Chcem audit zdarma
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(240, 78, 36, 0.12))' }} />
                            <div className={`${styles.floatingIcon} ${styles.fi1}`}><Search size={28} color="#3b82f6" /></div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}><Euro size={32} color="#f59e0b" /></div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}><TrendingUp size={24} color="#10b981" /></div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Cenníková tabuľka */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>Cenník služieb</h2>
                    <p className={styles.text} style={{ marginBottom: '2rem', maxWidth: '46rem' }}>
                        Ceny sú spodné hranice pásiem — presnú ponuku dostanete po bezplatnom audite spolu s rozsahom práce.
                        Mediálny rozpočet (kredit pre Google/Meta) je samostatná platba priamo platformám.
                    </p>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                            <thead>
                                <tr style={{ background: '#5B2C7F', color: 'white', textAlign: 'left' }}>
                                    <th style={{ padding: '0.9rem 1.1rem' }}>Služba</th>
                                    <th style={{ padding: '0.9rem 1.1rem', whiteSpace: 'nowrap' }}>Cena</th>
                                    <th style={{ padding: '0.9rem 1.1rem' }}>Čo zahŕňa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cennik.map((c, i) => (
                                    <tr key={c.sluzba} style={{ background: i % 2 ? '#faf7fd' : 'white', borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '0.9rem 1.1rem', fontWeight: 600 }}>
                                            <Link href={c.href} style={{ color: '#0f172a' }}>{c.sluzba}</Link>
                                        </td>
                                        <td style={{ padding: '0.9rem 1.1rem', whiteSpace: 'nowrap', fontWeight: 700, color: c.cena === 'zdarma' ? '#10b981' : '#F04E24' }}>{c.cena}</td>
                                        <td style={{ padding: '0.9rem 1.1rem', color: '#475569' }}>{c.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Dve platby */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Dve platby, s ktorými treba rátať</h2>
                    <div className={styles.grid} style={{ gap: '2rem' }}>
                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>1. Mediálny rozpočet</h3>
                            <p className={styles.text}>Kredit, ktorý ide priamo Googlu či Mete za kliknutia a zobrazenia. Jeho výšku určuje vaša ambícia a marža — zmysluplné minimum je približne 300 – 600 € mesačne.</p>
                        </div>
                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>2. Odmena za správu</h3>
                            <p className={styles.text}>Naša práca: stratégia, meranie, optimalizácia, testovanie, reporting. Pásma vyššie. Držíme pravidlo: odmena za správu by nemala presiahnuť váš mediálny rozpočet.</p>
                        </div>
                    </div>
                    <p className={styles.text} style={{ marginTop: '1.5rem' }}>
                        Podrobný rozbor cien vrátane CPC podľa odvetví a sezónnosti nájdete v článku{' '}
                        <Link href="/kolko-stoji-google-ads-reklama-na-slovensku-2026" style={{ color: '#8b5cf6', fontWeight: 600 }}>
                            Koľko stojí Google Ads na Slovensku v 2026 — reálne dáta z 23 miliónov €
                        </Link>.
                    </p>
                </section>

                {/* Čo dostanete v cene */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Čo dostanete v cene správy</h2>
                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: <Gauge size={22} color="#8b5cf6" />, t: 'Meranie, ktorému sa dá veriť', d: 'Server-side tagging a Enhanced Conversions — cielime na zachytenie 90 %+ reálnych tržieb, mesačne validované voči e-shopu.' },
                            { icon: <TrendingUp size={22} color="#8b5cf6" />, t: 'Optimalizácia na zisk', d: 'PNO/POAS po produktových kategóriách, nie vanity metriky. Ekonomika kampaní od marže, nie od preklikov.' },
                            { icon: <Search size={22} color="#8b5cf6" />, t: 'Priebežná práca na účte', d: 'Vylučujúce slová, testovanie reklám, správa feedov, sezónne plánovanie rozpočtov (november je o tretinu drahší než priemer roka).' },
                            { icon: <Share2 size={22} color="#8b5cf6" />, t: 'Pohľad naprieč kanálmi', d: 'Google, Meta a organika sa vyhodnocujú spolu — atribúciu riešime celkovo, nie izolovane.' },
                            { icon: <ShoppingBag size={22} color="#8b5cf6" />, t: 'Skúsenosť z 13 trhov CEE', d: 'Ročne preinvestujeme 10 M€+ naprieč SK, CZ, HU, PL, RO a ďalšími trhmi — vrátane lokalizácie feedov a porovnávačov.' },
                            { icon: <ShieldCheck size={22} color="#8b5cf6" />, t: 'Mesačný report v ľudskej reči', d: 'Čo sa minulo, čo to prinieslo v tržbách a čo s tým robíme ďalej. Bez marketingového hmlenia.' },
                        ].map((b) => (
                            <div key={b.t} style={{ background: 'white', padding: '1.75rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <div style={{ marginBottom: '0.75rem' }}>{b.icon}</div>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{b.t}</h3>
                                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{b.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Férovosť */}
                <section className={styles.section} style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Hráme férovo</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Žiadna viazanosť — mesačná výpovedná lehota.</li>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Reklamné účty aj dáta patria vždy vám.</li>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Ak reklama pre váš biznis nedáva zmysel, povieme vám to už na audite.</li>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Percentuálne modely nad 25 % z rozpočtu považujeme za predražené — aj u konkurencie.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Často kladené otázky o cenách</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '52rem' }}>
                        {faq.map((f) => (
                            <details key={f.q} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                                <summary style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <HelpCircle size={16} color="#8b5cf6" /> {f.q}
                                </summary>
                                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: 1.7 }}>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.section} style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Chcete presnú cenu pre váš biznis?</h2>
                    <p className={styles.text} style={{ maxWidth: '38rem', margin: '0 auto 1.5rem' }}>
                        Pošlite nám prístup alebo web — v bezplatnom audite vám povieme, kadiaľ utekajú peniaze,
                        aký rozpočet dáva zmysel a koľko by stála správa u nás.
                    </p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#8b5cf6' }}>Získať audit zdarma</Link>
                </section>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
