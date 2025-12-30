import Link from 'next/link';
import { BarChart, PieChart, TrendingUp, Table, Database } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Report Vizualizácia | AI Studio',
    description: 'AI vizualizácia dát pre moderný business intelligence.',
};

export default function ReportVisualizationPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Business Intelligence</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Report Vizualizácia</h1>
                        <p className={styles.subtitle}>
                            Dáta sú nové zlato, ale len ak im rozumiete.
                            AI premení nudné Excel tabuľky na interaktívne príbehy a predikcie budúcnosti.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Ukážka dashboardu
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #f59e0b 0deg, #10b981 180deg, #f59e0b 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <TrendingUp size={20} color="#10b981" /> Growth +24%
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Database size={20} color="#f59e0b" /> Big Data
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <BarChart size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Okamžitý prehľad</h2>
                            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                                Už žiadne hodiny strávené kopírovaním dát. Naše AI sa napojí na vaše zdroje (CRM, Google Ads, E-shop) a vytvorí live dashboard, ktorý vám povie, čo sa deje vo vašej firme práve teraz.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <TrendingUp color="#10b981" /> <strong>Predikcia trendov</strong> - AI odhadne vývoj tržieb na ďalší kvartál.
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <PieChart color="#f97316" /> <strong>Segmentácia zákazníkov</strong> - Kto sú vaši VIP klienti?
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#1e293b', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: 'white', opacity: 0.5 }}>Interaktívny Dashboard Demo</span>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                        Chcem lepšie dáta
                    </Link>
                </div>
            </div>
        </div>
    );
}
