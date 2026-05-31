import Link from 'next/link';
import { Video, PlayCircle, Film, MonitorPlay, Layers, Mic, Zap } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Product to Video | Starbomedia',
    description: 'AI video reklamy z produktovej fotky alebo feedu. Krátke 5–10 sekundové klipy pre Meta, TikTok a YouTube Shorts, kde model vyberáme podľa toho, čo scéna potrebuje.',
};

export default function ProductToVideoPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Video a hlas</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Product to Video</h1>
                        <p className={styles.subtitle}>
                            Z produktovej fotky alebo feedu vytvoríme krátke video reklamy. Pomocou AI rozhýbeme vaše vizuály
                            do 5 až 10 sekundových klipov pripravených pre Meta, TikTok a YouTube Shorts.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem video reklamy
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #f97316 0deg, #ef4444 180deg, #f97316 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Film size={20} color="#f97316" /> Image-to-video
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <MonitorPlay size={20} color="#ef4444" /> 5–10 sekúnd, na reklamu
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
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Z fotky na video reklamu</h2>
                            <p style={{ color: '#64748b', marginBottom: '2rem' }}>
                                Vezmeme vašu produktovú fotku alebo položku z feedu a technikou image-to-video ju rozhýbeme do krátkeho klipu.
                                Výstupom je hotový vertikálny formát pripravený do reklamy na Meta, TikToku či YouTube Shorts — bez kameramana a drahej techniky.
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

                <h2 style={{ fontSize: '2rem', marginTop: '5rem', marginBottom: '0.75rem', textAlign: 'center' }}>
                    Nepoužívame jeden univerzálny model
                </h2>
                <p style={{ color: '#64748b', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
                    Model vyberáme podľa toho, čo daná scéna potrebuje. Routujeme medzi nimi tak, aby výsledný klip
                    vyzeral verne a držal kvalitu od prvého po posledný snímok.
                </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Layers className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Kling pre konzistenciu</h3>
                        <p className={styles.cardDesc}>Keď má produkt zostať verný a stabilný počas celého klipu, siahame po modeli, ktorý drží konzistenciu scény.</p>
                    </div>
                    <div className={styles.card}>
                        <Mic className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Veo pre lip-sync a zvuk</h3>
                        <p className={styles.cardDesc}>Ak má vo videu niekto hovoriť alebo potrebujeme zladený zvuk a lip-sync, použijeme model navrhnutý presne na toto.</p>
                    </div>
                    <div className={styles.card}>
                        <Zap className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Seedance pre dynamickú akciu</h3>
                        <p className={styles.cardDesc}>Pre zábery s pohybom a dynamickou akciou volíme model, ktorý zvláda rýchlejšiu a živšiu kompozíciu.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
