import Link from 'next/link';
import { Smartphone, MonitorPlay, Users, UserCircle, Mic } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Video Prezentácie | AI Studio',
    description: 'Firemné video prezentácie s digitálnymi AI avatarmy.',
};

export default function VideoPresentationsPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>AI avatari</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Video Prezentácie</h1>
                        <p className={styles.subtitle}>
                            Ušetrite tisíce eur za produkciu. Vytvorte profesionálne školiace videá, onboarding materiály alebo novinky pre zamestnancov s AI avatarmi.
                            Realistický vzhľad a hlas.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Vytvoriť avatara
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #8b5cf6 0deg, #3b82f6 180deg, #8b5cf6 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <UserCircle size={20} color="#8b5cf6" /> Digitálne dvojča
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Mic size={20} color="#3b82f6" /> Text na reč
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Users className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Váš digitálny CEO</h3>
                        <p className={styles.cardDesc}>Naklonujeme vás. Stačí nahrať krátke video a váš avatar môže "rozprávať" akýkoľvek text, ktorý napíšete.</p>
                    </div>
                    <div className={styles.card}>
                        <MonitorPlay className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Stále aktuálne</h3>
                        <p className={styles.cardDesc}>Zmenili sa ceny? Stačí prepísať text v skripte a vygenerovať nové video za pár minút. Žiadne pretáčanie.</p>
                    </div>
                </div>

                <div className={styles.ctaBox} style={{ marginTop: '4rem' }}>
                    <h2 className={styles.ctaTitle} style={{ color: 'white' }}>Komunikujte efektívne</h2>
                    <Link href="/kontakt" className="btn" style={{ background: 'white', color: '#6366f1', marginTop: '2rem' }}>
                        Vyskúšať demo
                    </Link>
                </div>
            </div>
        </div>
    );
}
