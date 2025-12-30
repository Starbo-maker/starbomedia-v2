import Link from 'next/link';
import { Wand2, Heart, Instagram, UserCheck, Star } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI Influencer | AI Studio',
    description: 'Virtuálni influenceri pre vašu značku. Kontrolovaný imidž a dosah.',
};

export default function AiInfluencerPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Virtual Talent</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI Influencer</h1>
                        <p className={styles.subtitle}>
                            Vytvorte si tvár značky, ktorá nikdy nestarne, nerobí škandály a je vždy k dispozícii.
                            Virtuálni influenceri sú budúcnosťou sociálnych sietí.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Dohodnúť casting
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #f472b6 0deg, #c084fc 180deg, #f472b6 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Instagram size={20} color="#f472b6" /> Viral Reach
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Star size={20} color="#c084fc" /> Perfect Image
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid} style={{ alignItems: 'center' }}>
                        <div style={{ padding: '1rem' }}>
                            <Wand2 size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Dokonalá kontrola</h2>
                            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                                Vy určujete vzhľad, hlas, štýl obliekania aj názory. Váš AI influencer môže byť na desiatich miestach naraz a komunikovať v 40 jazykoch.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: '#fce7f3', padding: '0.8rem', borderRadius: '12px', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <Instagram size={20} color="#ec4899" /> Instagram
                                </div>
                                <div style={{ background: '#fae8ff', padding: '0.8rem', borderRadius: '12px', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                    <Heart size={20} color="#a855f7" /> Engagement
                                </div>
                            </div>
                        </div>
                        <div style={{ height: '400px', background: 'linear-gradient(180deg, #e2e8f0 0%, #cbd5e1 100%)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                            {/* Placeholder for AI Avatar image */}
                            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                <strong>@ai_sofia</strong><br />
                                Fashion Model
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
