import Link from 'next/link';
import { Layers, Image as ImageIcon, MousePointer, Palette, LayoutTemplate } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Marketing Bannery | AI Studio',
    description: 'AI generované reklamné bannery pre sociálne siete a Google Ads.',
};

export default function MarketingBannersPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Generovanie kreatív</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Marketing Bannery</h1>
                        <p className={styles.subtitle}>
                            Jeden dizajn nestačí. Generujte stovky variácií pre A/B testovanie a nájdite víťaznú kreatívu.
                            Optimalizované pre vysoké CTR.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Generovať návrhy
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #ec4899 0deg, #8b5cf6 180deg, #ec4899 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Palette size={20} color="#ec4899" /> Súlad s brandom
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <LayoutTemplate size={20} color="#8b5cf6" /> 100+ šablón
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <Layers className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Nekonečné variácie</h3>
                        <p className={styles.cardDesc}>Zmeňte farby, texty alebo rozloženie jedným kliknutím. AI navrhne dizajny optimalizované pre konverzie.</p>
                    </div>
                    <div className={styles.card}>
                        <ImageIcon className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Stráženie brandu</h3>
                        <p className={styles.cardDesc}>Nahrajte svoje logo a farby. AI zabezpečí, že každý banner bude dodržiavať vašu vizuálnu identitu.</p>
                    </div>
                    <div className={styles.card}>
                        <MousePointer className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Vysoké CTR</h3>
                        <p className={styles.cardDesc}>Dizajny stvorené na klikanie. Vychádzame z dát milionov úspešných reklám.</p>
                    </div>
                </div>
                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                        Objednať sadu bannerov
                    </Link>
                </div>
            </div>
        </div>
    );
}
