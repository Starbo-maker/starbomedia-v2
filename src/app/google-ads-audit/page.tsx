import Link from 'next/link';
import {
    Search, ShieldCheck, Gauge, Euro, Layers, KeyRound, Star,
    Image as ImageIcon, Zap, Target, Settings, CheckCircle, HelpCircle,
    FileSearch, ClipboardList, MessageSquare,
} from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Google Ads audit — 74-bodová kontrola účtu zdarma | Starbomedia',
    description: 'Nezávislý Google Ads audit: 74 kontrolných bodov v 9 oblastiach — meranie, premrhaný spend, štruktúra, PMax, bidding. Vstupný audit zdarma, výstup v ľudskej reči.',
};

const oblasti = [
    { icon: Gauge, t: 'Meranie konverzií', d: 'Zachytáva účet reálne tržby? Enhanced Conversions, server-side tagging, Consent Mode v2, duplicity konverzií.' },
    { icon: Euro, t: 'Premrhaný spend', d: 'Vyhľadávacie výrazy bez šance konvertovať, chýbajúce negatíva, plytvanie v broad match, prekryvy kampaní.' },
    { icon: Layers, t: 'Štruktúra účtu', d: 'Oddelenie brand vs. non-brand, logika kampaní podľa marže, rozpočty tam, kde zarábajú.' },
    { icon: KeyRound, t: 'Kľúčové slová', d: 'Typy zhody, pokrytie dopytu, kanibalizácia, dlhý chvost.' },
    { icon: Star, t: 'Quality Score', d: 'Relevancia reklám, očakávané CTR, skúsenosť so vstupnou stránkou — a čo z toho reálne predražuje kliky.' },
    { icon: ImageIcon, t: 'Reklamy a assety', d: 'Sila RSA, rozšírenia, testovanie textov, kreatíva v PMax asset groups.' },
    { icon: Zap, t: 'Performance Max', d: 'Kvalita feedu, search terms kontrola vlastnou metodikou, podiel brandu, listing groups.' },
    { icon: Target, t: 'Bidding', d: 'Vhodnosť stratégie voči objemu dát, tROAS/tCPA ciele voči marži, learning fázy.' },
    { icon: Settings, t: 'Nastavenia účtu', d: 'Geo a jazyky, siete, plánovanie reklám, vylúčenia obsahu, atribúcia.' },
];

const nalezy = [
    { n: 'Meranie zachytáva len časť tržieb', d: 'Najčastejší nález vôbec. Bez server-side merania účet typicky vidí len 60 – 70 % konverzií — a Smart Bidding optimalizuje na skreslené dáta.' },
    { n: 'Broad match bez ochrany', d: 'Široká zhoda bez negatív a bez dátovej opory míňa rozpočet na dopyty, ktoré s biznisom nesúvisia.' },
    { n: 'Brand zmiešaný s non-brandom', d: 'PMax alebo Search kampane si pripisujú brandové konverzie — výsledky vyzerajú lepšie, než reálne sú, a rozpočet sa alokuje zle.' },
    { n: 'Zanedbaný produktový feed', d: 'Pri e-shopoch rozhoduje feed o výkone Shopping a PMax — chýbajúce atribúty a slabé titulky znamenajú drahšie kliky.' },
    { n: 'Bidding ciele odtrhnuté od marže', d: 'Cieľový ROAS nastavený od oka namiesto od ekonomiky produktov — kampane rastú v obrate, ale nie v zisku.' },
];

const faq = [
    { q: 'Koľko audit stojí a ako dlho trvá?', a: 'Vstupný audit je zdarma a bez záväzkov — je to náš spôsob, ako ukázať, ako pracujeme. Výstup máte typicky do 3 – 5 pracovných dní od pridelenia prístupu.' },
    { q: 'Aký prístup k účtu potrebujete?', a: 'Stačí prístup na čítanie (read-only) do Google Ads, ideálne aj do GA4. Nič v účte nemeníme — audit je čisto analytický.' },
    { q: 'Čo presne dostanem na konci?', a: 'Zoznam konkrétnych nálezov zoradených podľa dopadu na peniaze: čo uniká, prečo a ako to opraviť. V ľudskej reči, nie 40 strán exportov. Súčasťou je aj odhad potenciálu účtu.' },
    { q: 'Môj účet spravuje iná agentúra. Je to problém?', a: 'Nie — nezávislá kontrola je bežná prax, presne ako druhý názor u lekára. Audit robíme diskrétne a výstup patrí vám. Ak agentúra pracuje dobre, povieme vám to tiež.' },
    { q: 'V čom je zdarma audit iný ako platený?', a: 'Vstupný audit pokrýva všetkých 9 oblastí do hĺbky potrebnej na rozhodnutie, čo ďalej. Ak potrebujete forenznú hĺbku (napr. multi-market účty s históriou rokov), rozsah si dohodneme individuálne.' },
    { q: 'Čo ak audit nič nenájde?', a: 'Stáva sa to — a povieme vám to na rovinu. Dobre spravovaný účet je dobrá správa; nebudeme vymýšľať problémy, aby sme predali službu.' },
];

const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Google Ads audit',
        serviceType: 'Google Ads account audit',
        description: 'Nezávislý audit Google Ads účtu: 74 kontrolných bodov v 9 oblastiach — meranie konverzií, premrhaný spend, štruktúra, kľúčové slová, Quality Score, PMax, bidding a nastavenia. Vstupný audit zdarma.',
        provider: { '@id': 'https://starbomedia.sk/#organization' },
        areaServed: 'SK',
        url: 'https://starbomedia.sk/google-ads-audit',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR', description: 'Vstupný audit zdarma' },
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
            { '@type': 'ListItem', position: 2, name: 'Služby', item: 'https://starbomedia.sk/reklama-na-internete' },
            { '@type': 'ListItem', position: 3, name: 'Google Ads audit' },
        ],
    },
];

export default function AuditPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.1), transparent 40%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid #d1fae5' }}>
                            <ShieldCheck size={16} color="#10b981" />
                            <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.85rem' }}>VSTUPNÝ AUDIT ZDARMA</span>
                        </div>
                        <h1 className={styles.title}>Google Ads audit: 74-bodová kontrola, ktorá nájde, kadiaľ utekajú peniaze.</h1>
                        <p className={styles.subtitle}>
                            Nezávislá kontrola účtu v 9 oblastiach — od merania konverzií cez premrhaný spend až po PMax a bidding.
                            Vstupný audit je zdarma, výstup dostanete do 3 – 5 dní v ľudskej reči: čo uniká, koľko a ako to opraviť.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#10b981', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.4)' }}>
                                Chcem audit zdarma
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(91, 44, 127, 0.12))' }} />
                            <div className={`${styles.floatingIcon} ${styles.fi1}`}><FileSearch size={28} color="#10b981" /></div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}><Euro size={32} color="#f59e0b" /></div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}><Gauge size={24} color="#8b5cf6" /></div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Kedy audit chcieť */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Kedy dáva audit zmysel?</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: '48rem' }}>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Máte podozrenie, že rozpočet sa míňa zbytočne — výsledky stagnujú, náklady rastú.</li>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Účet spravuje agentúra či freelancer a chcete <strong>nezávislý druhý názor</strong>.</li>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Preberáte účet po niekom a potrebujete vedieť, na čom staviate.</li>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Chystáte sa škálovať (vyšší rozpočet, nový trh) a chcete najprv utesniť diery.</li>
                    </ul>
                </section>

                {/* 9 oblastí */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Čo audit kontroluje: 74 bodov v 9 oblastiach</h2>
                    <p className={styles.text} style={{ marginBottom: '1.5rem', maxWidth: '46rem' }}>
                        Používame vlastnú kontrolnú metodiku so 74 bodmi, postavenú na správe účtov s ročným spendom 10M€+ naprieč 13 trhmi CEE.
                    </p>
                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        {oblasti.map((o) => (
                            <div key={o.t} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <div style={{ marginBottom: '0.6rem' }}><o.icon size={22} color="#10b981" /></div>
                                <h3 style={{ fontSize: '1.02rem', marginBottom: '0.4rem' }}>{o.t}</h3>
                                <p style={{ color: '#475569', fontSize: '0.92rem', lineHeight: 1.6 }}>{o.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Najčastejšie nálezy */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Čo v auditoch nachádzame najčastejšie</h2>
                    <p className={styles.text} style={{ marginBottom: '1.5rem', maxWidth: '46rem' }}>
                        Päť nálezov, ktoré sa opakujú naprieč účtami bez ohľadu na veľkosť — a ktoré spolu tvoria väčšinu zbytočne minutých rozpočtov:
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', maxWidth: '52rem' }}>
                        {nalezy.map((x, i) => (
                            <div key={x.n} style={{ background: i === 0 ? '#fff7ed' : '#f8fafc', padding: '1.25rem 1.5rem', borderRadius: '14px', border: `1px solid ${i === 0 ? '#fed7aa' : '#e2e8f0'}` }}>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>{i + 1}. {x.n}</h3>
                                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65 }}>{x.d}</p>
                            </div>
                        ))}
                    </div>
                    <p className={styles.text} style={{ marginTop: '1.25rem' }}>
                        O meraní, ktoré zachytáva len časť tržieb, sme písali podrobne v článku{' '}
                        <Link href="/ecommerce-tracking-2026-bullshit-vs-realita-merania-e-shopov" style={{ color: '#10b981', fontWeight: 600 }}>E-commerce tracking: bullshit vs. realita</Link>
                        {' '}— a o cenách za klik v analýze{' '}
                        <Link href="/kolko-stoji-google-ads-reklama-na-slovensku-2026" style={{ color: '#10b981', fontWeight: 600 }}>Koľko stojí Google Ads na Slovensku</Link>.
                    </p>
                </section>

                {/* Priebeh */}
                <section className={styles.section} style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Ako audit prebieha</h2>
                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { icon: KeyRound, t: '1. Prístup na čítanie', d: 'Pridelíte nám read-only prístup do Google Ads (ideálne aj GA4). V účte nič nemeníme.' },
                            { icon: ClipboardList, t: '2. Analýza (3 – 5 dní)', d: 'Prejdeme 74 kontrolných bodov vrátane histórie účtu, search terms a ekonomiky kampaní.' },
                            { icon: MessageSquare, t: '3. Výstup a rozhovor', d: 'Nálezy zoradené podľa dopadu na peniaze + hovor, kde všetko vysvetlíme. Čo s tým spravíte, je na vás.' },
                        ].map((k) => (
                            <div key={k.t}>
                                <div style={{ marginBottom: '0.6rem' }}><k.icon size={24} color="#10b981" /></div>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{k.t}</h3>
                                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{k.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Často kladené otázky o audite</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '52rem' }}>
                        {faq.map((f) => (
                            <details key={f.q} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                                <summary style={{ fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <HelpCircle size={16} color="#10b981" /> {f.q}
                                </summary>
                                <p style={{ marginTop: '0.75rem', color: '#475569', lineHeight: 1.7 }}>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.section} style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Zistite, kadiaľ vám utekajú peniaze</h2>
                    <p className={styles.text} style={{ maxWidth: '38rem', margin: '0 auto 1.5rem' }}>
                        Vstupný audit je zdarma a bez záväzkov. Ak je účet v poriadku, povieme vám to.
                        Ak nie, dostanete konkrétny zoznam, čo opraviť — u nás alebo kdekoľvek inde.
                    </p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#10b981' }}>Získať audit zdarma</Link>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#64748b' }}>
                        Ceny ostatných služieb nájdete v <Link href="/cennik" style={{ color: '#10b981', fontWeight: 600 }}>cenníku</Link>.
                    </p>
                </section>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
