import Link from 'next/link';
import { Video, Repeat, UserCircle, Mic } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI video prezentácie a avatari | Starbomedia',
    description: 'Pilotná služba na mieru: firemné video prezentácie a školenia s AI avatarom a klonovaným hlasom. Prepíšete skript, vznikne nové video bez natáčania. ElevenLabs voice clone a lip-sync nástroje.',
};

export default function VideoPresentationsPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <div className={styles.badge} style={{ marginBottom: 0 }}>AI avatari a hlas</div>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.3rem 0.7rem',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                                color: '#64748b',
                                background: 'rgba(100, 116, 139, 0.08)',
                                border: '1px dashed rgba(100, 116, 139, 0.35)',
                                borderRadius: '50px',
                            }}>
                                Na vyžiadanie / beta
                            </span>
                        </div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI video prezentácie</h1>
                        <p className={styles.subtitle}>
                            Firemné video prezentácie a školenia s AI avatarom a klonovaným hlasom. Prepíšete skript a vznikne nové video bez natáčania. Pripravujeme ako pilotnú službu na mieru pre konkrétne zadanie.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Mám záujem o pilot
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #8b5cf6 0deg, #3b82f6 180deg, #8b5cf6 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <UserCircle size={20} color="#8b5cf6" /> Avatar a lip-sync
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Mic size={20} color="#3b82f6" /> ElevenLabs voice clone
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Video className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Video bez natáčania</h3>
                        <p className={styles.cardDesc}>Avatar a klonovaný hlas rozprávajú váš skript. Vhodné pre firemné prezentácie, školenia a interné materiály bez kamery a štúdia.</p>
                    </div>
                    <div className={styles.card}>
                        <Repeat className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Aktualizácia cez skript</h3>
                        <p className={styles.cardDesc}>Keď sa obsah zmení, prepíšete text a vygenerujete novú verziu videa. Nemusíte znova zvolávať natáčanie.</p>
                    </div>
                </div>

                <div className={styles.demoContainer} style={{ marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Technológie, s ktorými pracujeme</h2>
                    <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                        Pilot staviame na overených nástrojoch. Hlas riešime cez ElevenLabs (voice clone a text-to-speech), obraz cez avatarové a lip-sync nástroje. Rozsah a podobu výstupu nastavujeme podľa konkrétneho zadania.
                    </p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                            <Mic size={20} color="#8b5cf6" /> ElevenLabs voice clone a text-to-speech
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                            <UserCircle size={20} color="#3b82f6" /> Avatarové a lip-sync nástroje
                        </li>
                    </ul>
                </div>

                <div className={styles.ctaBox} style={{ marginTop: '4rem' }}>
                    <h2 className={styles.ctaTitle} style={{ color: 'white' }}>Chcete vyskúšať pilot na mieru?</h2>
                    <Link href="/kontakt" className="btn" style={{ background: 'white', color: '#6366f1', marginTop: '2rem' }}>
                        Ozvite sa nám
                    </Link>
                </div>
            </div>
        </div>
    );
}
