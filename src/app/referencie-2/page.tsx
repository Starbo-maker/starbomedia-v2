import Link from 'next/link';
import { ArrowRight, Trophy, TrendingUp, Globe, Users } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Referencie a prípadové štúdie | Starbomedia',
    description: 'Pozrite si výsledky našej práce. Prípadové štúdie a referencie od našich klientov ako Mobilonline, Ecoprodukt a ďalší.',
};

export default function CaseStudiesPage() {
    const cases = [
        {
            client: 'Mobilonline',
            service: 'Google Ads, SEO, Facebook',
            result: '+150% Nárast Tržieb',
            description: 'Komplexná správa kampaní pre jedného z najväčších predajcov mobilov na Slovensku. Expanzia do Maďarska a Rumunska.',
            icon: <Globe size={40} color="#3b82f6" />,
            color: '#3b82f6',
            bg: '#eff6ff'
        },
        {
            client: 'Ecoprodukt',
            service: 'PPC, Cenové Porovnávače',
            result: 'Expanzia do CZ',
            description: 'Úspešné zavedenie značky na českom trhu. Optimalizácia Heureka a Zboží.cz pre maximálnu efektivitu.',
            icon: <TrendingUp size={40} color="#10b981" />,
            color: '#10b981',
            bg: '#ecfdf5'
        },
        {
            client: 'Bubulákovo',
            service: 'Google Ads',
            result: '12 krajín EÚ',
            description: 'Medzinárodné kampane pre obchod s látkami. Cielenie na trhy SK, CZ, HU, DE, HR, SI, PL, AT, RO, IT, FR, BE.',
            icon: <Users size={40} color="#f43f5e" />,
            color: '#f43f5e',
            bg: '#fff1f2'
        },
        {
            client: 'Športrysy',
            service: 'SEO, Google Ads',
            result: 'TOP 3 v Google',
            description: 'Organický rast návštevnosti vďaka technickému SEO a obsahovej stratégii pre outdoorový e-shop.',
            icon: <Trophy size={40} color="#f59e0b" />,
            color: '#f59e0b',
            bg: '#fffbeb'
        },
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>Naše výsledky</h1>
                    <p className={styles.subtitle}>
                        Za nás hovoria čísla a spokojní klienti. Pozrite si, ako sme pomohli rásť firmám v rôznych segmentoch.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <section className={styles.section}>
                    <div className={styles.cardGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))' }}>
                        {cases.map((item, index) => (
                            <div key={index} className={styles.card} style={{ borderColor: 'transparent', background: item.bg }}>
                                {/* Card Content */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                                    <div>
                                        <h3 className={styles.cardTitle} style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.client}</h3>
                                        <span style={{ color: item.color, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                            {item.service}
                                        </span>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.8)', padding: '1rem', borderRadius: '12px' }}>
                                        {item.icon}
                                    </div>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                                        {item.result}
                                    </div>
                                    <p className={styles.text} style={{ color: '#475569' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Client Logo Grid (Text based for now) */}
                <section className={styles.section} style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '3rem' }}>Ďalší spokojní klienti</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', opacity: 0.6 }}>
                        {['iHRYsko', 'Murat', 'Stadler Form', 'Emilove Sady', 'Madmat', 'Modos', 'MSD Company', 'E-spotrebiče'].map((client) => (
                            <span key={client} style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a' }}>{client}</span>
                        ))}
                    </div>
                </section>

                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaTitle}>Chcete podobné výsledky?</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Kontaktujte nás
                    </Link>
                </div>
            </div>
        </>
    );
}
