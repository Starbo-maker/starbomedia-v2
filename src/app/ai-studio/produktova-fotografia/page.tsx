import Link from 'next/link';
import { Camera, CheckCircle, Zap, Image as ImageIcon, Sparkles } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI Produktová Fotografia | AI Studio',
    description: 'Profesionálne produktové fotky generované AI. Odstránenie pozadia, pridanie tieňov a vylepšenie kvality.',
};

export default function AiProductPhotoPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>AI foto štúdio</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI Produktová Fotografia</h1>
                        <p className={styles.subtitle}>
                            Zabudnite na drahé fotenie v ateliéri. Naša AI premení vaše surové fotky na predajné vizuály.
                            Dokonalé svetlo, tiene a kompozícia na jeden klik.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Vyskúšať zadarmo
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #ec4899 180deg, #6366f1 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Camera size={20} color="#6366f1" /> Štúdiové svetlo
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Sparkles size={20} color="#ec4899" /> 4K zvýšenie rozlíšenia
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
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Dokonalosť v každom pixeli</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Naša technológia automaticky detekuje produkt, odstráni rušivé pozadie a vloží ho do scény, ktorá podčiarkne jeho hodnotu. Či už potrebujete čisté biele pozadie pre Amazon alebo lifestylovú scénu pre Instagram.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Odstránenie a výmena pozadia
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Generovanie tieňov a odrazov
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Upscaling rozlíšenia (4K)
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#f1f5f9', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Placeholder for demo image */}
                            <span style={{ color: '#94a3b8', fontWeight: 600 }}>Demo vizualizácia pred/po</span>
                        </div>
                    </div>
                </div>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <Zap className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Rýchlosť svetla</h3>
                        <p className={styles.cardDesc}>Spracujeme stovky fotiek za pár minút. Ideálne pre e-shopy s veľkým katalógom.</p>
                    </div>
                    <div className={styles.card}>
                        <Camera className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Konzistencia</h3>
                        <p className={styles.cardDesc}>Zabezpečíme jednotný vizuálny štýl naprieč celým vaším portfóliom produktov.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
