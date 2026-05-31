import Link from 'next/link';
import { Mic, Phone, MessageSquare, Bot, Headphones } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI Voice boti | Starbomedia',
    description: 'Hlasoví AI agenti, ktorí zdvihnú hovor, odpovedia na otázky a dohodnú termín. Plynulá slovenčina, napojenie na CRM a kalendár. Pripravujeme na mieru a v pilotných nasadeniach.',
};

export default function VoiceBotsPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                            <div className={styles.badge} style={{ marginBottom: 0 }}>Hlasová AI</div>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.25rem 0.6rem',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                letterSpacing: '0.04em',
                                textTransform: 'uppercase',
                                color: '#f97316',
                                background: 'rgba(249, 115, 22, 0.08)',
                                border: '1px solid rgba(249, 115, 22, 0.25)',
                                borderRadius: '50px',
                            }}>
                                Na vyžiadanie / beta
                            </span>
                        </div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI Voice boti</h1>
                        <p className={styles.subtitle}>
                            Hlasoví AI agenti, ktorí zdvihnú hovor, odpovedia na otázky a dohodnú termín.
                            Hovoria plynule po slovensky a zvládnu odchádzajúce volania aj prichádzajúcu podporu.
                            Pripravujeme ich na mieru a v pilotných nasadeniach.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Mám záujem o pilot
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #10b981 0deg, #3b82f6 180deg, #10b981 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Bot size={20} color="#10b981" /> ElevenLabs Conversational AI
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Headphones size={20} color="#3b82f6" /> Slovenský hlas
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
                            Hlasový AI agent spojí jazykový model s prirodzeným slovenským hlasom, takže konverzácia plynie
                            ako bežný telefonát. Žiadne tónové menu typu „stlačte jednotku“ — bot počúva, odpovedá
                            a vie hovor posunúť ďalej. Riešenie staviame na mieru pre vaše konkrétne scenáre.
                        </p>
                        <div className={styles.grid} style={{ textAlign: 'left' }}>
                            <div className={styles.card} style={{ padding: '1.5rem' }}>
                                <Phone size={24} color="#f97316" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Odchádzajúce volania</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Obvolávanie leadov, pripomínanie a potvrdzovanie termínov či zber spätnej väzby.</p>
                            </div>
                            <div className={styles.card} style={{ padding: '1.5rem' }}>
                                <MessageSquare size={24} color="#6366f1" style={{ marginBottom: '0.5rem' }} />
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Prichádzajúca podpora</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Zdvihne hovor, odpovie na časté otázky a podľa dostupnosti dohodne termín.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <Bot className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Ako to staviame</h3>
                        <p className={styles.cardDesc}>
                            Stojíme na ElevenLabs Conversational AI v kombinácii s jazykovým modelom a slovenským hlasom.
                            Agenta napojíme na váš CRM a kalendár a doplníme vlastnou znalostnou bázou, aby odpovedal
                            presne podľa vašich informácií.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <Phone className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Pilotné nasadenia</h3>
                        <p className={styles.cardDesc}>
                            Službu pripravujeme na mieru a aktuálne ju overujeme v pilotných nasadeniach. Ak vás zaujíma,
                            ako by hlasový agent zvládol vaše hovory, ozvite sa a dohodneme si pilot pre váš prípad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
