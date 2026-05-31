import Link from 'next/link';
import { Monitor, Code, Zap, Smartphone, Layers } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Vibecode weby | Starbomedia',
    description: 'Moderné weby a landing pages tvorené s pomocou AI a vyladené človekom. Next.js, React, nasadenie na Vercel. Rýchle, čisté, optimalizované pre Core Web Vitals.',
};

export default function VibeCodePage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Tvorba webov s AI</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Vibecode weby</h1>
                        <p className={styles.subtitle}>
                            Moderné weby a landing pages, kde kód píšeme s pomocou AI a dizajn aj stratégiu
                            vyladíme my. Rýchle, čisté a bez balastu WordPressu. Tento web je toho dôkazom.
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
                                <Code size={20} color="#06b6d4" /> Čistý kód
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Zap size={20} color="#3b82f6" /> Core Web Vitals
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
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Prečo vibecode weby?</h2>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Zap color="#f97316" /> <strong>Rýchle a optimalizované</strong> - čistý kód bez zbytočných pluginov, ladený pre Core Web Vitals.
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Monitor color="#6366f1" /> <strong>Mobile-first dizajn</strong> - vyzerá dobre na každom zariadení.
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Layers color="#10b981" /> <strong>Moderný stack</strong> - Next.js, React, Tailwind a nasadenie na Vercel (bez balastu WordPressu).
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#f8fafc', borderRadius: '16px', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', border: '1px dashed #cbd5e1', padding: '2rem', textAlign: 'center' }}>
                            <Layers size={40} color="#6366f1" />
                            <span style={{ color: '#475569', fontWeight: 600 }}>Tento web (starbomedia.sk)</span>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>postavený rovnakým postupom</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
