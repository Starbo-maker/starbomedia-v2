import Link from 'next/link';
import {
    Gauge, Globe2, MessageSquare, Sparkles, SearchCheck,
    CheckCircle, XCircle, Clock, Users, Wallet, Star, CalendarDays,
} from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Prečo Starbomedia — čísla namiesto sľubov | Starbomedia',
    description: '14 rokov správy kampaní, priemerná spolupráca 5 rokov, 40+ klientov na 13 trhoch CEE a 10 M €+ ročného rozpočtu. Meranie vrátane server-side taggingu nastavujeme sami.',
};

const FAKTY = [
    { icon: <CalendarDays size={22} color="#8b5cf6" />, hodnota: '14 rokov', popis: 'správy reklamných kampaní' },
    { icon: <Clock size={22} color="#f04e24" />, hodnota: '5 rokov', popis: 'priemerná dĺžka spolupráce s klientom' },
    { icon: <Users size={22} color="#3b82f6" />, hodnota: '40+', popis: 'klientov' },
    { icon: <Globe2 size={22} color="#10b981" />, hodnota: '13 trhov', popis: 'SK, CZ, HU, PL, RO, DE, AT, HR, SI, IT, FR, BE, BG' },
    { icon: <Wallet size={22} color="#f59e0b" />, hodnota: '10 M €+', popis: 'ročný mediálny rozpočet, ktorý spravujeme' },
    { icon: <MessageSquare size={22} color="#8b5cf6" />, hodnota: 'do 24 hodín', popis: 'odozva na bežnú požiadavku' },
    { icon: <Star size={22} color="#f59e0b" />, hodnota: '5,0', popis: 'priemer z 28 hodnotení na Google' },
];

const ODLISNOSTI = [
    {
        icon: <Gauge size={26} color="#8b5cf6" />,
        nadpis: 'Meranie riešime my, nie váš externý vývojár',
        odseky: [
            'Server-side tagging, Conversion API a Enhanced Conversions nastavujeme sami, ako súčasť spolupráce. Nepošleme vás za niekým iným a nečakáme, kým to niekto stihne.',
            'Kampane sa optimalizujú podľa toho, čo meranie zachytí. Keď meranie stráca tretinu tržieb, algoritmus sa učí na skreslených dátach a ten rozdiel nedobehne žiadna optimalizácia.',
            'Cielime na zachytenie 90 % a viac reálnych tržieb a validujeme to každý mesiac voči e-shopu.',
        ],
    },
    {
        icon: <SearchCheck size={26} color="#f04e24" />,
        nadpis: 'Pred štartom vám povieme, koľko tržieb vaše meranie nevidí',
        odseky: [
            'Porovnáme sekvenčné čísla objednávok v e-shope s tým, čo hlási GA4. Z toho vieme povedať konkrétne číslo — koľko percent objednávok vaša analytika nezachytáva.',
            'Je to overiteľné a ukážeme vám to ešte pred podpisom čohokoľvek.',
        ],
    },
    {
        icon: <Globe2 size={26} color="#10b981" />,
        nadpis: 'CEE nie je projekt, je to naša bežná prevádzka',
        odseky: [
            'Spravujeme kampane na 13 trhoch: SK, CZ, HU, PL, RO, DE, AT, HR, SI, IT, FR, BE a BG. Jeden klient beží v dvanástich krajinách naraz, ďalší v piatich.',
            'Nie je to prekladanie kampaní. Každý trh má vlastné porovnávače, vlastnú sezónnosť a vlastnú cenovú hladinu — Heureka a Zboží v Česku, Árukereső v Maďarsku, Sklik namiesto časti Googlu. Feedy lokalizujeme, neprepíname v nich jazyk.',
        ],
    },
    {
        icon: <MessageSquare size={26} color="#3b82f6" />,
        nadpis: 'Viete, kto robí na vašom účte, a píšete mu priamo',
        odseky: [
            'Meno človeka, ktorý bude na vašom účte pracovať, poznáte ešte pred podpisom. Komunikujete s ním, nie cez account manažéra, ktorý to tlmočí ďalej. Na bežnú požiadavku reagujeme do 24 hodín.',
            'Je to aj dôvod, prečo vieme zapracovať zmenu rýchlo — medzi vami a účtom nikto nestojí.',
        ],
    },
    {
        icon: <Sparkles size={26} color="#f59e0b" />,
        nadpis: 'Meriame, ako vás vidia jazykové modely',
        odseky: [
            'Pre 11 klientov pravidelne sledujeme, či a ako sa ich značka objavuje v odpovediach ChatGPT, Claude, Gemini a Perplexity, a čo si tieto modely berú ako zdroj.',
            'Na slovenskom trhu to zatiaľ robí málokto. O rok to bude štandard.',
        ],
    },
];

const ONBOARDING = [
    {
        faza: 'Pred štartom',
        kroky: ['Úvodné stretnutie osobne alebo online', 'Návrh spolupráce a jeho schválenie', 'Odovzdanie prístupov'],
    },
    {
        faza: 'Prvý mesiac',
        kroky: [
            'Analýza reklamných účtov',
            'Kontrola produktového feedu',
            'Analýza merania — čo sa meria, čo nie a koľko tržieb uniká',
            'Nastavenie nových kampaní',
            'Nastavenie reportingu',
        ],
    },
    {
        faza: 'Od druhého mesiaca',
        kroky: ['Správa a optimalizácia kampaní', 'Pravidelné meetingy'],
    },
];

const faq = [
    {
        q: 'Čím sa Starbomedia líši od iných PPC agentúr na Slovensku?',
        a: 'Tromi vecami. Meranie vrátane server-side taggingu a Conversion API nastavujeme sami, nie cez externého dodávateľa. Bežne pracujeme na 13 trhoch v CEE, nie len na slovenskom. A viete, kto konkrétne robí na vašom účte — komunikujete priamo s ním.',
    },
    {
        q: 'Na akých trhoch viete spravovať kampane?',
        a: 'Na trinástich: Slovensko, Česko, Maďarsko, Poľsko, Rumunsko, Nemecko, Rakúsko, Chorvátsko, Slovinsko, Taliansko, Francúzsko, Belgicko a Bulharsko. Vrátane lokálnych porovnávačov — Heureka, Zboží, Árukereső, Sklik.',
    },
    {
        q: 'Nastavujete aj meranie a server-side tagging?',
        a: 'Áno, vo vlastnej réžii. GA4, server-side tagging, Enhanced Conversions aj Conversion API pre Metu. Cena je od 400 € jednorazovo. Pri väčšine nových klientov je to prvá vec, ktorú riešime.',
    },
    {
        q: 'Koľko stojí správa kampaní?',
        a: 'Google Ads od 350 € mesačne, Meta od 350 €, oboje spolu od 600 €. Finálna suma závisí od veľkosti účtu, počtu trhov a intenzity komunikácie. Presnú ponuku dostanete po vstupnom audite.',
    },
    {
        q: 'Ako dlho trvá, kým sa spolupráca rozbehne?',
        a: 'Prvý mesiac je analýza účtov, feedu a merania plus nastavenie nových kampaní a reportingu. Od druhého mesiaca ide bežná správa a pravidelné meetingy.',
    },
    {
        q: 'Pre koho vaše služby nie sú vhodné?',
        a: 'Nerobíme branding, ideamaking ani kampane, ktorých výsledok sa nedá zmerať. A nefunguje nám spolupráca s firmami, ktoré nechcú byť partnerom a očakávajú, že objednaním služby prechádza všetka zodpovednosť na agentúru.',
    },
    {
        q: 'Kto konkrétne bude pracovať na mojom účte?',
        a: 'Konkrétny človek z nášho tímu, ktorého meno poznáte pred podpisom a s ktorým komunikujete priamo. Nie cez account manažéra.',
    },
    {
        q: 'Je v spolupráci viazanosť?',
        a: 'Nie. Mesačná výpovedná lehota. Reklamné účty zakladáme na vašu firmu — pri odchode vám zostáva účet, história aj dáta.',
    },
];

const jsonLd = [
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
            { '@type': 'ListItem', position: 2, name: 'Prečo Starbomedia', item: 'https://starbomedia.sk/preco-starbomedia' },
        ],
    },
];

export default function PrecoStarbomediaPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.1), transparent 40%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Prečo Starbomedia</h1>
                        <p className={styles.subtitle}>
                            Namiesto sľubov čísla, ktoré si viete porovnať s kýmkoľvek iným.
                        </p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#8b5cf6', boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.4)' }}>
                                Ozvite sa nám
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(240, 78, 36, 0.12))' }} />
                            <div className={`${styles.floatingIcon} ${styles.fi1}`}><Gauge size={28} color="#8b5cf6" /></div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}><Globe2 size={32} color="#10b981" /></div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}><Sparkles size={24} color="#f59e0b" /></div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>

                {/* Faktbox */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                        {FAKTY.map((f) => (
                            <div key={f.hodnota + f.popis} className={styles.card}>
                                <div style={{ marginBottom: '0.6rem' }}>{f.icon}</div>
                                <div style={{ fontSize: '1.7rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.35rem' }}>{f.hodnota}</div>
                                <p style={{ color: '#475569', lineHeight: 1.55, fontSize: '0.95rem', margin: 0 }}>{f.popis}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* V čom sme iní */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1.75rem' }}>V čom sme iní</h2>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {ODLISNOSTI.map((o) => (
                            <div key={o.nadpis} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.25rem', alignItems: 'start' }}>
                                <div style={{ marginTop: '0.25rem' }}>{o.icon}</div>
                                <div>
                                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.65rem' }}>{o.nadpis}</h3>
                                    {o.odseky.map((p, i) => (
                                        <p key={i} className={styles.text} style={{ marginBottom: i === o.odseky.length - 1 ? 0 : '0.75rem' }}>{p}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pre koho nie sme */}
                <section className={styles.section} style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Pre koho nie sme</h2>
                    <p className={styles.text} style={{ marginBottom: '1.25rem' }}>
                        Nerobíme ideamaking ani branding. Nerobíme kampane, ktorých výsledok sa nedá zmerať.
                    </p>
                    <p className={styles.text} style={{ marginBottom: '0.75rem', fontWeight: 600 }}>
                        Nespolupracujeme s firmami, ktoré:
                    </p>
                    <ul className={styles.featureList} style={{ marginBottom: '1.5rem' }}>
                        <li className={styles.featureItem}><XCircle size={18} color="#ef4444" /> berú marketing ako komoditu a agentúru ako ďalšieho dodávateľa — my potrebujeme partnerstvo</li>
                        <li className={styles.featureItem}><XCircle size={18} color="#ef4444" /> si myslia, že objednaním služby prechádza všetka zodpovednosť na agentúru</li>
                        <li className={styles.featureItem}><XCircle size={18} color="#ef4444" /> nechcú počúvať odporúčania odborníka, ktorého si zaplatili</li>
                    </ul>
                    <p className={styles.text} style={{ margin: 0 }}>
                        Ak vám to znie tvrdo, je to zámer. Spolupráce, ktoré takto začnú, nefungujú ani jednej
                        strane a radšej to povieme hneď.
                    </p>
                </section>

                {/* Cena */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Koľko to stojí</h2>
                    <p className={styles.text}>
                        Správa Google Ads od 350 € mesačne, Meta Ads od 350 €, oboje spolu od 600 €.
                        SEO od 400 €, nastavenie merania od 400 € jednorazovo, audit účtu od 250 €.
                    </p>
                    <p className={styles.text}>
                        Mediálny rozpočet je samostatná platba priamo platformám — zmysluplné minimum
                        je 300 – 600 € mesačne.
                    </p>
                    <ul className={styles.featureList} style={{ margin: '1.25rem 0' }}>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Bez viazanosti, s mesačnou výpovednou lehotou.</li>
                        <li className={styles.featureItem}><CheckCircle size={18} color="#10b981" /> Reklamný účet aj dáta patria vždy vám.</li>
                    </ul>
                    <p className={styles.text} style={{ margin: 0 }}>
                        <Link href="/cennik" style={{ color: '#8b5cf6', fontWeight: 600 }}>Kompletný cenník →</Link>
                    </p>
                </section>

                {/* Prvých 30 dní */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Čo sa stane v prvých 30 dňoch</h2>
                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {ONBOARDING.map((f) => (
                            <div key={f.faza} className={styles.card}>
                                <h3 className={styles.cardTitle}>{f.faza}</h3>
                                <ul className={styles.featureList}>
                                    {f.kroky.map((k) => (
                                        <li key={k} className={styles.featureItem}>
                                            <CheckCircle size={16} color="#10b981" /> {k}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Freelancer vs agentúra */}
                <section className={styles.section}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Freelancer, in-house, alebo agentúra?</h2>
                    <p className={styles.text}>
                        Nie sme odpoveď na každú situáciu. Pri malom rozpočte a jednoduchom účte býva lacnejší
                        freelancer, pri veľkom objeme a stálej agende sa oplatí in-house tím.
                    </p>
                    <p className={styles.text} style={{ margin: 0 }}>
                        <Link href="/freelancer-vs-agentura-google-ads" style={{ color: '#8b5cf6', fontWeight: 600 }}>
                            Rozobrali sme to aj s číslami v samostatnom článku →
                        </Link>
                    </p>
                </section>

                {/* FAQ */}
                <section className={styles.section} id="faq">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Často kladené otázky</h2>
                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        {faq.map((f) => (
                            <details key={f.q} className={styles.faqItem} style={{ background: '#f8fafc', padding: '1.25rem 1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                                <summary className={styles.faqQuestion} style={{ fontWeight: 600, cursor: 'pointer' }}>{f.q}</summary>
                                <p className={styles.faqAnswer} style={{ marginTop: '0.75rem', lineHeight: 1.7 }}>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.section} style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Chcete vedieť, ako na tom ste?</h2>
                    <p className={styles.text} style={{ maxWidth: '38rem', margin: '0 auto 1.5rem' }}>
                        Pošlite nám prístup do účtu alebo adresu e-shopu. Vo vstupnom audite vám povieme, kadiaľ
                        utekajú peniaze, koľko tržieb vaše meranie nevidí a aký rozpočet dáva zmysel.
                    </p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#8b5cf6' }}>Ozvite sa nám</Link>
                </section>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
