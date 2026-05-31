import Link from 'next/link';
import { Video, Star, PlayCircle, Film, MonitorPlay } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Product to Video | AI Studio',
    description: 'Vytvárajte video reklamy z produktových fotiek pomocou AI.',
};

export default function ProductToVideoPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Generovanie videa</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Product to Video</h1>
                        <p className={styles.subtitle}>
                            Statické fotky už nestačia. Rozhýbte svoje produkty a zvýšte konverzie až o 80% pomocou AI generovaného videa.
                            Automatická 3D rotácia a efekty.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Vyskúšať zadarmo
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #f97316 0deg, #ef4444 180deg, #f97316 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Film size={20} color="#f97316" /> Filmový vzhľad
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <MonitorPlay size={20} color="#ef4444" /> Pripravené na reklamu
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '1rem' }}>
                            <Video size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Z fotky na video za pár sekúnd</h2>
                            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                                Náš model analyzuje štruktúru produktu a vytvorí plynulé 3D animácie, rotácie alebo "fly-through" efekty. Nepotrebujete kameramana ani drahú techniku.
                            </p>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem video ukážku
                            </Link>
                        </div>
                        <div style={{ background: '#000', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', position: 'relative' }}>
                            <PlayCircle size={64} color="white" style={{ opacity: 0.8 }} />
                        </div>
                    </div>
                </div>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <Star className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Viac pozornosti</h3>
                        <p className={styles.cardDesc}>Video reklamy na Facebooku a TikToku majú 5x vyšší engagement ako fotky.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
