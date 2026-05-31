import Link from 'next/link';
import { Youtube, Play, MonitorPlay, Tv, Eye, Video as VideoIcon } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'YouTube reklama | Starbomedia',
    description: 'Video reklama na YouTube. Budujte povedomie o značke vďaka najväčšej video platforme sveta. Video produkcia a správa kampaní.',
};

export default function YoutubeAdsPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 70% 20%, rgba(220, 38, 38, 0.1), transparent 60%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <span style={{ color: '#ef4444', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                            Video marketing
                        </span>
                        <h1 className={styles.title}>Buďte tam, kde sú oči všetkých</h1>
                        <p className={styles.subtitle}>
                            YouTube je druhý najväčší vyhľadávač na svete.
                            Zasiahnite svojich zákazníkov pútavým videom v momente, keď relaxujú alebo sa vzdelávajú.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#ef4444', boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.4)' }}>
                                Chcem video kampaň
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15), rgba(249, 115, 22, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <Youtube size={28} color="#ef4444" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Play size={32} color="#000" fill="#000" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <MonitorPlay size={24} color="#ef4444" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Rest of Content */}
            <div className={`container ${styles.content}`}>

                <section className={styles.grid}>
                    <div>
                        <h2>Prečo YouTube reklama?</h2>
                        <p className={styles.text}>
                            Video je najsilnejší formát súčasnosti. Dokážete v ňom predať emóciu, vysvetliť produkt a vybudovať dôveru oveľa rýchlejšie ako textom.
                            Navyše, YouTube reklama je stále cenovo veľmi dostupná v porovnaní s TV reklamou, pričom ponúka oveľa lepšie cielenie.
                        </p>
                        <div className={styles.featureList}>
                            <div className={styles.featureItem}>
                                <Eye size={24} className={styles.featureIcon} style={{ color: '#ef4444' }} />
                                Platíte len, ak si divák pozrie video
                            </div>
                            <div className={styles.featureItem}>
                                <Tv size={24} className={styles.featureIcon} style={{ color: '#ef4444' }} />
                                Zásah na TV obrazovkách, mobiloch aj PC
                            </div>
                            <div className={styles.featureItem}>
                                <VideoIcon size={24} className={styles.featureIcon} style={{ color: '#ef4444' }} />
                                Ideálne pre demonštráciu produktov
                            </div>
                        </div>
                    </div>

                    <div className={styles.card} style={{ background: '#fef2f2', borderColor: '#fca5a5' }}>
                        <h3 className={styles.cardTitle}>Formáty reklamy</h3>

                        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: 'white', padding: '0.8rem', borderRadius: '10px' }}>
                                    <Play size={20} color="#ef4444" fill="#ef4444" />
                                </div>
                                <div>
                                    <strong>In-Stream (Preskočiteľné)</strong>
                                    <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>Klasická reklama pred videom. Platíte len ak divák pozrie viac ako 30 sekúnd.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: 'white', padding: '0.8rem', borderRadius: '10px' }}>
                                    <MonitorPlay size={20} color="#ef4444" />
                                </div>
                                <div>
                                    <strong>Bumper Ads (6 sekúnd)</strong>
                                    <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>Nepreskočiteľné krátke spoty. Ideálne na budovanie frekvencie a zapamätateľnosti.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <div style={{ background: 'white', padding: '0.8rem', borderRadius: '10px' }}>
                                    <Youtube size={20} color="#ef4444" />
                                </div>
                                <div>
                                    <strong>Video Discovery</strong>
                                    <p style={{ fontSize: '0.9rem', color: '#4b5563' }}>Reklama vo výsledkoch vyhľadávania na YouTube alebo v odporúčaných videách.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Strategy */}
                <section className={styles.section} style={{ textAlign: 'center', marginTop: '6rem' }}>
                    <h2 style={{ marginBottom: '3rem' }}>Video reklama v nákupnom lieviku (See-Think-Do)</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <h3 style={{ color: '#ef4444', fontSize: '1.8rem', marginBottom: '0.5rem' }}>See</h3>
                            <p className={styles.text}>
                                <strong>Budovanie povedomia.</strong> Zasiahne široké publikum. Cieľom je, aby si ľudia zapamätali vašu značku. Využívame Bumper Ads.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ color: '#ef4444', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Think</h3>
                            <p className={styles.text}>
                                <strong>Zvažovanie.</strong> Cielime na ľudí, ktorí hľadajú recenzie alebo riešenie problému. Dlhšie In-Stream videá vysvetľujúce produkt.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 style={{ color: '#ef4444', fontSize: '1.8rem', marginBottom: '0.5rem' }}>Do</h3>
                            <p className={styles.text}>
                                <strong>Konverzia.</strong> Remarketing. Ukážeme video ľuďom, ktorí boli na webe a pripomenieme im nedokončený nákup.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.section} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Časté otázky</h2>

                    <div className={styles.faqItem}>
                        <div className={styles.faqQuestion}>Nemám video, viete ho vyrobiť?</div>
                        <div className={styles.faqAnswer}>
                            Áno. Spolupracujeme s profesionálnymi tvorcami, ktorí vedia natočiť a postrihať reklamný spot. Prípadne vieme vytvoriť jednoduchú animáciu z fotiek (Motion Graphics).
                        </div>
                    </div>

                    <div className={styles.faqItem}>
                        <div className={styles.faqQuestion}>Dá sa z YouTube reklamy priamo predávať?</div>
                        <div className={styles.faqAnswer}>
                            Áno, Google zaviedol formát "Video Action Campaigns", kde sa pod videom zobrazujú priamo produkty z vášho e-shopu (cez Merchant Center).
                        </div>
                    </div>
                </section>

                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaTitle}>Ukážte sa svetu</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#ef4444', border: 'none', padding: '1rem 3rem' }}>
                        Chcem video kampaň
                    </Link>
                </div>

            </div>
        </>
    );
}
