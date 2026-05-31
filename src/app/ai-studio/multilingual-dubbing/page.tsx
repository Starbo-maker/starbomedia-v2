import Link from 'next/link';
import { MessageSquare, Globe, Mic2, AudioWaveform } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Viacjazyčný dabing videí | Starbomedia',
    description: 'AI dabing videí do viac než 40 jazykov so zachovaním pôvodného hlasu a synchronizáciou pier. Expandujte s obsahom na trhy CEE — SK, CZ, HU, PL, RO, DE, AT, HR, SI.',
};

export default function MultilingualDubbingPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Video a hlas</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Viacjazyčný dabing videí</h1>
                        <p className={styles.subtitle}>
                            Zbúrajte jazykové bariéry a oslovte zákazníkov v ich rodnej reči.
                            Automaticky nadabujeme vaše video do viac než 40 jazykov so zachovaním pôvodného
                            hlasu a synchronizáciou pier — jedno video pokryje celý región CEE.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Expandovať na nové trhy
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
                        <h3 className={styles.cardTitle}>Dosah na celý región CEE</h3>
                        <p className={styles.cardDesc}>Jedno video, viac než 40 jazykov. Expandujte na nové trhy (SK, CZ, HU, PL, RO, DE, AT, HR, SI) bez nutnosti natáčať nový obsah pre každú krajinu.</p>
                    </div>
                    <div className={styles.card}>
                        <Mic2 className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Zachovanie pôvodného hlasu</h3>
                        <p className={styles.cardDesc}>Technológia klonovania hlasu sa naučí farbu vášho hlasu a použije ju pri dabingu. Výsledok znie autenticky, akoby ste daným jazykom hovorili priamo vy.</p>
                    </div>
                    <div className={styles.card}>
                        <MessageSquare className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Synchronizácia pier</h3>
                        <p className={styles.cardDesc}>Nielen zvuk, ale aj obraz. Lip-sync upraví pohyb pier vo videu tak, aby sedel s preloženým textom v cieľovom jazyku.</p>
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
