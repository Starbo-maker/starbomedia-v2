import Link from 'next/link';
import { MessageSquare, Globe, Mic2, Languages, AudioWaveform } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Multilingual Dubbing | AI Studio',
    description: 'AI dabing a preklad videí do celého sveta.',
};

export default function MultilingualDubbingPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Audio AI</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Multilingual Dubbing</h1>
                        <p className={styles.subtitle}>
                            Zbúrajte jazykové bariéry. Hovorte k zákazníkom ich rodnou rečou.
                            Automatický preklad a dabing videa so zachovaním vášho hlasu a synchronizácie pier.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Expandovať do sveta
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #facc15 0deg, #f97316 180deg, #facc15 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Globe size={20} color="#f97316" /> 40+ jazykov
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <AudioWaveform size={20} color="#facc15" /> Klonovanie hlasu
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Globe className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Svetový dosah</h3>
                        <p className={styles.cardDesc}>Jedno video, 40+ jazykov. Expandujte na nové trhy (Nemecko, Maďarsko, Poľsko) bez nutnosti natáčať nový obsah.</p>
                    </div>
                    <div className={styles.card}>
                        <Mic2 className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Klonovanie hlasu</h3>
                        <p className={styles.cardDesc}>AI sa naučí farbu vášho hlasu a použije ju pri dabingu. Výsledok znie autenticky, ako keby ste daným jazykom hovorili plynule vy.</p>
                    </div>
                    <div className={styles.card}>
                        <MessageSquare className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Lip-Sync</h3>
                        <p className={styles.cardDesc}>Nielen zvuk, ale aj obraz. AI upraví pohyb pier vo videu tak, aby sedel s preloženým textom.</p>
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                        Chcem expandovať do zahraničia
                    </Link>
                </div>
            </div>
        </div>
    );
}
