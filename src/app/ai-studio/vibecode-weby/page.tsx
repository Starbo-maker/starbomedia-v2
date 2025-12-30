import Link from 'next/link';
import { Monitor, Code, Zap, Smartphone, Layers } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'VibeCode Webstránky | AI Studio',
    description: 'Rýchle a moderné weby vytvorené pomocou AI.',
};

export default function VibeCodePage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>AI Web Development</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>VibeCode Weby</h1>
                        <p className={styles.subtitle}>
                            Webstránky novej generácie. Kód napísaný s pomocou AI, dizajn vyladený človekom.
                            Extrémna rýchlosť a SEO optimalizácia v základe.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem nový web
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #06b6d4 0deg, #3b82f6 180deg, #06b6d4 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Code size={20} color="#06b6d4" /> Clean Code
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Zap size={20} color="#3b82f6" /> 100/100 Speed
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <Code size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Prečo VibeCode?</h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Zap color="#f97316" /> <strong>Extrémna rýchlosť</strong> - Čistý kód bez zbytočných pluginov.
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Monitor color="#6366f1" /> <strong>Mobile-First</strong> - Dizajn, ktorý vyzerá skvele na každom zariadení.
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Layers color="#10b981" /> <strong>Moderný Stack</strong> - Next.js, React, Tailwind (žiaden Wordpress bloat).
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#f8fafc', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #cbd5e1' }}>
                            <span style={{ color: '#94a3b8' }}>Visual Preview</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
