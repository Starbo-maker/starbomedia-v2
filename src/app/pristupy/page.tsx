import Link from 'next/link';
import { KeyRound, ExternalLink, Info, Mail } from 'lucide-react';
import styles from '../service.module.css';
import { LoopVideo, CopyValue } from './ClientBits';

// Stránka pre klientov pri onboardingu – posielame ju odkazom, nie je v navigácii ani v sitemape.
export const metadata = {
    title: 'Ako nám dať prístupy | Starbomedia',
    description: 'Návod pre klientov Starbomedia: ako nám dať prístup do Google Ads, GA4, Google Tag Managera, Merchant Center, Search Console a Meta Business.',
    robots: { index: false, follow: true },
};

const EMAIL = 'ads@starbomedia.sk';
const META_ID = '959548974063192';

type Platforma = {
    id: string;
    video: string;
    nazov: string;
    potrebujeme: string;
    kroky: string[];
    poznamka?: string;
    odkaz: { text: string; href: string };
};

// Kroky = titulky vo videách (rozhrania overené 12. 10. 2026).
const PLATFORMY: Platforma[] = [
    {
        id: 'google-ads',
        video: 'ads',
        nazov: 'Google Ads',
        potrebujeme: 'Najprv nám pošlite 10-miestne číslo vášho účtu Google Ads – nájdete ho vpravo hore vedľa názvu účtu (v tvare 123-456-7890). Pošleme vám žiadosť o prepojenie a vy ju prijmete.',
        kroky: [
            'Vľavo kliknite na Správca.',
            'Otvorte Prístup a zabezpečenie.',
            'Prejdite na kartu Správcovia.',
            'Pri žiadosti od Starbo Media kliknite na Prijať.',
        ],
        odkaz: { text: 'Otvoriť Google Ads', href: 'https://ads.google.com/' },
    },
    {
        id: 'meta',
        video: 'meta',
        nazov: 'Meta (Facebook a Instagram)',
        potrebujeme: `Pridať Starbomedia ako partnera cez naše ID firemného portfólia ${META_ID} a priradiť stránku, reklamný účet, katalóg a zdroj údajov (pixel) s plným prístupom.`,
        kroky: [
            'V Meta Business Suite kliknite vľavo dole na Nastavenia.',
            'Otvorte Partners a kliknite na Pridať.',
            'Zvoľte Give a partner access to your assets.',
            `Zadajte naše ID ${META_ID} a kliknite na Next.`,
            'Facebook Pages: označte stránku a zapnite Full access.',
            'Reklamné účty: označte účet a zapnite Full access.',
            'Katalógy: označte katalóg a zapnite Full access.',
            'Datasets (pixel): označte zdroj údajov a zapnite Full access.',
            'Kliknite na Assign assets.',
        ],
        poznamka: 'Meta má rozhranie čiastočne v angličtine – názvy v návode sú presne tak, ako ich uvidíte na obrazovke.',
        odkaz: { text: 'Otvoriť nastavenia Meta Business', href: 'https://business.facebook.com/latest/settings/partners' },
    },
    {
        id: 'ga4',
        video: 'ga4',
        nazov: 'Google Analytics 4',
        potrebujeme: `Rolu Správca pre ${EMAIL} na úrovni účtu.`,
        kroky: [
            'Vľavo dole kliknite na Správca.',
            'Otvorte Správa prístupu k účtu.',
            'Kliknite na + a zvoľte Pridať používateľov.',
            `Zadajte ${EMAIL} a zvoľte rolu Správca.`,
            'Kliknite na Pridať.',
        ],
        odkaz: { text: 'Otvoriť Google Analytics', href: 'https://analytics.google.com/' },
    },
    {
        id: 'gtm',
        video: 'gtm',
        nazov: 'Google Tag Manager',
        potrebujeme: `Povolenie Správca na účte a Zverejňovanie na kontajneri pre ${EMAIL}.`,
        kroky: [
            'Pri účte kliknite na ⋮ a zvoľte Správa používateľov.',
            'Kliknite na + a zvoľte Pridať používateľov.',
            `Zadajte ${EMAIL} a označte Správca.`,
            'Pri kontajneri zvoľte Zverejňovanie a kliknite na Hotovo.',
            'Kliknite na Pozvať.',
        ],
        poznamka: 'Pozvánku potom prijmeme na našej strane.',
        odkaz: { text: 'Otvoriť Tag Manager', href: 'https://tagmanager.google.com/' },
    },
    {
        id: 'merchant-center',
        video: 'merchant',
        nazov: 'Google Merchant Center',
        potrebujeme: `Typ prístupu Správca pre ${EMAIL}.`,
        kroky: [
            'Vľavo otvorte Nastavenia a potom Prístup a služby.',
            'Kliknite na Pridať osobu.',
            'Ak Google vypýta overenie totožnosti, potvrďte ho.',
            `Zadajte ${EMAIL} a zvoľte Správca.`,
            'Kliknite na Pridať používateľa.',
        ],
        poznamka: 'Pozvánku potom prijmeme na našej strane.',
        odkaz: { text: 'Otvoriť Merchant Center', href: 'https://merchants.google.com/mc/users' },
    },
    {
        id: 'search-console',
        video: 'gsc',
        nazov: 'Google Search Console',
        potrebujeme: `Povolenie Úplné pre ${EMAIL}.`,
        kroky: [
            'Vľavo dole kliknite na Nastavenia.',
            'Otvorte Používatelia a povolenia.',
            'Kliknite na Pridať používateľa.',
            `Zadajte ${EMAIL} a povolenie Úplné.`,
            'Kliknite na Pridať.',
        ],
        poznamka: 'Používateľov môže pridávať len vlastník služby v Search Console.',
        odkaz: { text: 'Otvoriť Search Console', href: 'https://search.google.com/search-console' },
    },
];

export default function PristupyPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 10% 20%, rgba(91, 44, 127, 0.1), transparent 40%)' }} />
                <div className="container">
                    <div className={styles.headerContent} style={{ maxWidth: '46rem' }}>
                        <h1 className={styles.title}>Ako nám dať prístupy</h1>
                        <p className={styles.subtitle}>
                            Pred začiatkom spolupráce potrebujeme prístup do vašich účtov. Každá platforma zaberie pár minút
                            a ku každej je krátke video. Prejdite len tie, ktoré spolu riešime.
                        </p>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>

                {/* Naše údaje */}
                <section className={styles.section} style={{ background: '#f8fafc', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                    <h2 style={{ fontSize: '1.6rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <KeyRound size={24} color="#5B2C7F" /> Naše údaje
                    </h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        <div>
                            <p className={styles.text} style={{ margin: '0 0 0.4rem', fontWeight: 600 }}>ID firemného portfólia pre Meta</p>
                            <CopyValue value={META_ID} />
                        </div>
                        <div>
                            <p className={styles.text} style={{ margin: '0 0 0.4rem', fontWeight: 600 }}>E-mail pre Google (GA4, Tag Manager, Merchant Center, Search Console)</p>
                            <CopyValue value={EMAIL} />
                        </div>
                    </div>
                    <p className={styles.text} style={{ margin: '1.25rem 0 0', fontSize: '0.95rem', color: '#475569' }}>
                        Prístup musí pridať niekto, kto má v danom účte administrátorské práva.
                    </p>
                </section>

                {/* Obsah */}
                <nav aria-label="Platformy" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', margin: '0 0 1rem' }}>
                    {PLATFORMY.map((p) => (
                        <a key={p.id} href={`#${p.id}`} style={{ padding: '0.45rem 0.9rem', borderRadius: '999px', border: '1px solid #e2e8f0', background: '#fff', color: '#5B2C7F', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
                            {p.nazov}
                        </a>
                    ))}
                </nav>

                {PLATFORMY.map((p) => (
                    <section key={p.id} id={p.id} className={styles.section} style={{ scrollMarginTop: '6rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{p.nazov}</h2>
                        <p className={styles.text} style={{ marginBottom: '1.25rem' }}><strong>Čo potrebujeme:</strong> {p.potrebujeme}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.75rem', alignItems: 'start' }}>
                            <LoopVideo name={p.video} label={`Videonávod: ${p.nazov}`} />
                            <div>
                                <ol style={{ margin: 0, paddingLeft: '1.3rem', display: 'grid', gap: '0.55rem', lineHeight: 1.6, color: '#334155' }}>
                                    {p.kroky.map((k) => <li key={k}>{k}</li>)}
                                </ol>
                                {p.poznamka && (
                                    <p className={styles.text} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', margin: '1rem 0 0', fontSize: '0.95rem', color: '#475569' }}>
                                        <Info size={18} color="#5B2C7F" style={{ flex: 'none', marginTop: '0.2rem' }} /> {p.poznamka}
                                    </p>
                                )}
                                <a href={p.odkaz.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '1rem', color: '#5B2C7F', fontWeight: 600 }}>
                                    {p.odkaz.text} <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Hotovo */}
                <section className={styles.section} style={{ textAlign: 'center', padding: '3rem 0' }}>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Hotovo?</h2>
                    <p className={styles.text} style={{ maxWidth: '36rem', margin: '0 auto 1.5rem' }}>
                        Dajte nám vedieť, ktoré prístupy ste pridali. Ak niečo nejde alebo v účte vidíte niečo iné ako vo videu,
                        napíšte nám a prejdeme to spolu.
                    </p>
                    <a href="mailto:marketing@starbomedia.sk?subject=Pr%C3%ADstupy%20pridan%C3%A9" className="btn btn-primary" style={{ background: '#5B2C7F', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Mail size={18} /> marketing@starbomedia.sk
                    </a>
                    <p className={styles.text} style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
                        alebo <Link href="/kontakt" style={{ color: '#5B2C7F', fontWeight: 600 }}>ďalšie kontakty</Link>
                    </p>
                </section>
            </div>
        </>
    );
}
