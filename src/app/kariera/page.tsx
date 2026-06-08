import Link from 'next/link';
import { Briefcase, Coffee, Zap } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Kariéra | Starbomedia',
    description: 'Pridaj sa k nám. Hľadáme talentovaných ľudí do tímu. PPC špecialista, SEO a ďalší.',
};

export default function CareerPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(20, 184, 166, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>Kariéra</h1>
                    <p className={styles.subtitle}>
                        Baví ťa online marketing? Chceš pracovať na veľkých projektoch a neustále sa vzdelávať?
                        Pridaj sa do nášho tímu.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <section className={styles.section}>
                    <div className={styles.grid}>
                        <div>
                            <h2>Čo ponúkame?</h2>
                            <ul className={styles.featureList}>
                                <li className={styles.featureItem}><Coffee size={20} className={styles.featureIcon} style={{ color: '#0d9488' }} /> Príjemné a neformálne prostredie</li>
                                <li className={styles.featureItem}><Zap size={20} className={styles.featureIcon} style={{ color: '#0d9488' }} /> Práca na zaujímavých projektoch</li>
                                <li className={styles.featureItem}><Briefcase size={20} className={styles.featureIcon} style={{ color: '#0d9488' }} /> Možnosť kariérneho rastu</li>
                            </ul>
                        </div>
                        <div className={styles.text}>
                            <p>
                                Sme tím nadšencov pre online marketing. Hľadáme ľudí, ktorí majú drive, chcú sa učiť nové veci a neboja sa výziev.
                                Ak si myslíš, že máš čo ponúknuť, pošli nám svoje CV.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 style={{ marginBottom: '2rem' }}>Otvorené pozície</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Senior PPC špecialista</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>Šaľa · plný úväzok</p>
                            <p className={styles.text} style={{ marginTop: '1rem' }}>
                                Správa Google Ads a Meta Ads kampaní pre projekty doma aj v zahraničí. Analytické myslenie a skúsenosti podmienkou.
                            </p>
                            <Link href="/kariera-ppc-specialista" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#0d9488', boxShadow: '0 4px 14px 0 rgba(13, 148, 136, 0.4)' }}>Zobraziť inzerát</Link>
                        </div>

                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Marketing stáž</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>Šaľa · stáž</p>
                            <p className={styles.text} style={{ marginTop: '1rem' }}>
                                Tvorba obsahu s pomocou AI (ChatGPT, Claude, Gemini) a moderný digitálny marketing v praxi. Hľadáme talent, ktorý vychováme.
                            </p>
                            <Link href="/kariera-marketing-staz" className="btn btn-primary" style={{ marginTop: '1.5rem', background: '#0d9488', boxShadow: '0 4px 14px 0 rgba(13, 148, 136, 0.4)' }}>Zobraziť inzerát</Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
