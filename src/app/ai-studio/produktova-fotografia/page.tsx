import Link from 'next/link';
import { Camera, CheckCircle, Zap, Image as ImageIcon, Sparkles } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI produktová fotografia | Starbomedia',
    description: 'Z jednej fotky produktu vytvoríme desiatky reklamných scén so stredoeurópskymi modelkami. Odstránenie pozadia, 100 % vernosť produktu a 1 200 vizuálov za 2 až 4 dni.',
};

export default function AiProductPhotoPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>AI foto štúdio</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI produktová fotografia</h1>
                        <p className={styles.subtitle}>
                            Z jedinej fotky produktu vytvoríme desiatky profesionálnych scén — lifestyle so stredoeurópskou
                            modelkou, hero shoty aj social kreatívy v hotových reklamných formátoch. Bez drahého fotenia
                            a týždňov čakania.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem produktové vizuály
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #ec4899 180deg, #6366f1 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Camera size={20} color="#6366f1" /> Stredoeurópske modelky
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Sparkles size={20} color="#ec4899" /> 100 % vernosť produktu
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <ImageIcon size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Scény šité na váš produkt</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Náš nástroj Product Scene Generator v7 automaticky odstráni pozadie, prečíta značku aj etiketu
                                a navrhne scény na mieru danému produktu — žiadne generické presety. Výstupom sú reklamné vizuály
                                pripravené priamo do feedu aj do stories.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Odstránenie a výmena pozadia
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Stredoeurópske modelky a slovenský kontext
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> 100 % vernosť produktu — značka a etiketa sa nezmenia
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#f1f5f9', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Placeholder for demo image */}
                            <span style={{ color: '#94a3b8', fontWeight: 600 }}>Ukážka pred / po</span>
                        </div>
                    </div>
                </div>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <Zap className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>1 200 vizuálov za 2 až 4 dni</h3>
                        <p className={styles.cardDesc}>Namiesto 4 až 6 týždňov klasického fotenia. Z každého produktu dostanete 4 až 8 obrázkov vo formátoch 1:1 a 9:16.</p>
                    </div>
                    <div className={styles.card}>
                        <Camera className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Konzistencia</h3>
                        <p className={styles.cardDesc}>Jednotný vizuálny štýl naprieč celým katalógom — ideálne pre e-shopy s veľkým počtom produktov.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
