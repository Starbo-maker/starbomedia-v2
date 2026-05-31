import Link from 'next/link';
import { BarChart3, Bell, Database, CheckCircle, Workflow } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Automatizované reporty a dáta | Starbomedia',
    description: 'Automatizované týždenné reporty výkonu kampaní, WoW delty, upozornenia na anomálie a interpretácia v ľudskej reči priamo do Slacku. Looker Studio dashboardy napojené na Google Ads a e-shop.',
};

export default function ReportVisualizationPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Reporty &amp; dáta</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Automatizované reporty</h1>
                        <p className={styles.subtitle}>
                            Každý pondelok konzistentný report výkonu kampaní naprieč všetkými trhmi.
                            WoW delty, automatické upozornenia na anomálie a interpretácia v ľudskej reči
                            doručené priamo do Slacku. Plus živé Looker Studio dashboardy.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem reporty bez ručnej práce
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #f59e0b 0deg, #10b981 180deg, #f59e0b 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <BarChart3 size={20} color="#10b981" /> Report každý pondelok
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Bell size={20} color="#f59e0b" /> Upozornenie na anomálie
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <BarChart3 size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Report, ktorý je rovnaký každý týždeň</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Reporty výkonu kampaní generujeme automatizovane naprieč 14 brandmi a klientmi. Výpočty sú deterministické a prechádzajú validáciou, takže čísla sedia. Namiesto holej tabuľky dostanete delty oproti minulému týždňu, upozornenie na výkyvy a krátku interpretáciu v ľudskej reči.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Týždenné WoW delty (oproti minulému týždňu)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Automatické upozornenie na anomálie a výkyvy
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Interpretácia v ľudskej reči, nie len čísla
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Doručenie priamo do Slacku
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#1e293b', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                            <span style={{ color: 'white', opacity: 0.5, fontWeight: 600, textAlign: 'center' }}>Ukážka týždenného reportu v Slacku</span>
                        </div>
                    </div>
                </div>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <BarChart3 className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Looker Studio dashboardy</h3>
                        <p className={styles.cardDesc}>Živé dashboardy napojené na Google Ads, e-shop a ďalšie kanály. Aktuálny prehľad na jednom mieste, dostupný kedykoľvek.</p>
                    </div>
                    <div className={styles.card}>
                        <Database className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Napojené zdroje dát</h3>
                        <p className={styles.cardDesc}>Dáta ťaháme cez Google Ads API a DataForSEO, výstupy posielame do Slacku a Ecomailu. Bez ručného kopírovania tabuliek.</p>
                    </div>
                </div>

                <div className={styles.demoContainer} style={{ marginTop: '5rem' }}>
                    <Workflow size={40} color="#6366f1" style={{ marginBottom: '1rem' }} />
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Voliteľná nadstavba: predikcia trendov</h2>
                    <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: 0, maxWidth: '720px' }}>
                        Nad rámec štandardných reportov vieme pripraviť aj orientačnú predikciu vývoja na ďalšie obdobie. Berte ju ako podklad pre rozhodovanie, nie ako záruku výsledku. Základom zostávajú doložené automatizované reporty a živé dashboardy.
                    </p>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                        Chcem reporty bez ručnej práce
                    </Link>
                </div>
            </div>
        </div>
    );
}
