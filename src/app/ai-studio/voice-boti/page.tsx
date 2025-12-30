import Link from 'next/link';
import { Mic, Phone, MessageSquare, Bot, Headphones } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI Voice Boti | AI Studio',
    description: 'Automatizujte svoje call centrum s AI hlasovými asistentami.',
};

export default function VoiceBotsPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Conversational AI</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI Voice Boti</h1>
                        <p className={styles.subtitle}>
                            Zdvihnú každé volanie, odpovedia na otázky a dohodnú schôdzku.
                            Vaša zákaznícka podpora, ktorá nikdy nespí a hovorí plynule slovensky.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Vypočuť ukážku
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #10b981 0deg, #3b82f6 180deg, #10b981 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Bot size={20} color="#10b981" /> GPT-4
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Headphones size={20} color="#3b82f6" /> 24/7 Support
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                        <Mic size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>O čom sa porozprávame?</h2>
                        <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '3rem' }}>
                            Naši boti využívajú pokročilé LLM modely (ako GPT-4), takže konverzácia je plynulá a prirodzená. Žiadne "stlačte jednotku". Klient ani nespozná, že hovorí s robotom.
                        </p>
                        <div className={styles.grid} style={{ textAlign: 'left' }}>
                            <div className={styles.card} style={{ padding: '1.5rem' }}>
                                <Phone size={24} color="#f97316" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Outbound Volania</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Aktívne obvolávanie leadov, pripomínanie termínov alebo zber spätnej väzby.</p>
                            </div>
                            <div className={styles.card} style={{ padding: '1.5rem' }}>
                                <MessageSquare size={24} color="#6366f1" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Inbound Support</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Riešenie reklamácií, informácie o objednávkach a FAQ 24/7.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
