import Link from 'next/link';
import { UserCheck, Mic, Video, Languages, Layers, CheckCircle } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI influencer a lip-sync | Starbomedia',
    description: 'Konzistentný virtuálny charakter ako tvár značky — face lock cez multireferenčné obrázky, vlastný hlas a lip-sync video použiteľné naprieč jazykmi. Pilotná služba na mieru.',
};

export default function AiInfluencerPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <div className={styles.badge} style={{ marginBottom: 0 }}>Video a hlas</div>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.3rem 0.7rem',
                                background: 'rgba(249, 115, 22, 0.08)',
                                color: '#ea580c',
                                border: '1px solid rgba(249, 115, 22, 0.2)',
                                borderRadius: '50px',
                                fontWeight: 600,
                                fontSize: '0.72rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>
                                Beta · na vyžiadanie
                            </span>
                        </div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI influencer a lip-sync</h1>
                        <p className={styles.subtitle}>
                            Vytvoríme konzistentného virtuálneho charakteru — tvár vašej značky, ktorá vyzerá rovnako
                            naprieč všetkými zábermi. Vlastný hlas a lip-sync video použiteľné v rôznych jazykoch.
                            Ide o pilotnú službu, ktorú pripravujeme na mieru.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Spýtať sa na pilot
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #f472b6 0deg, #c084fc 180deg, #f472b6 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <UserCheck size={20} color="#f472b6" /> Konzistentná tvár
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Mic size={20} color="#c084fc" /> Vlastný hlas
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid} style={{ alignItems: 'center' }}>
                        <div style={{ padding: '1rem' }}>
                            <UserCheck size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tvár, ktorá ostáva konzistentná</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Hlavnou prednosťou je face lock — charakter zafixujeme cez sériu referenčných obrázkov,
                                takže si tvár udrží konzistenciu naprieč jednotlivými zábermi. Doplníme vlastný hlas
                                a synchronizujeme pery s rečou (lip-sync), aby video pôsobilo prirodzene.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <div style={{ background: '#fce7f3', padding: '0.8rem', borderRadius: '12px', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <Video size={20} color="#ec4899" /> Lip-sync video
                                </div>
                                <div style={{ background: '#fae8ff', padding: '0.8rem', borderRadius: '12px', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <Languages size={20} color="#a855f7" /> Naprieč jazykmi
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', color: '#1e293b' }}>Čo dostanete</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Face lock z multireferenčných obrázkov
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Vlastný hlas charakteru
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Lip-sync video synchronizované s rečou
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Použitie naprieč viacerými jazykmi
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <Layers className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Reálny stack</h3>
                        <p className={styles.cardDesc}>
                            Pracujeme s nástrojom Nano Banana Pro pre konzistenciu tváre (až cez 14 referenčných obrázkov),
                            hlasom z ElevenLabs a generovaním videa.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <UserCheck className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Diferenciátor</h3>
                        <p className={styles.cardDesc}>
                            Konzistencia tváre naprieč jednotlivými zábermi — to je reálna schopnosť, na ktorej celé
                            riešenie staviame.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
