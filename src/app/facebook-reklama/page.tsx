import Link from 'next/link';
import { Share2, Users, MessageCircle, Heart, ThumbsUp, Image, MousePointer, ShoppingBag, Eye, Globe } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Facebook & Instagram Reklama | Starbo Media',
    description: 'Zasiahnite svojich zákazníkov tam, kde trávia voľný čas. Výkonnostné kampane na sociálnych sieťach, ktoré budujú brand a predávajú.',
};

export default function FacebookAdsPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15), transparent 60%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <span style={{ color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                            Social Media Marketing
                        </span>
                        <h1 className={styles.title}>Premeňte scrollovanie na nakupovanie</h1>
                        <p className={styles.subtitle}>
                            Ľudia nechodia na Facebook nakupovať. Chodia sa baviť. My vytvoríme reklamu, ktorá ich vyruší z nudy a privedie k vám. Kreatíva je 80% úspechu.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)' }}>
                                Chcem stratégiu na siete
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(236, 72, 153, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <ThumbsUp size={28} color="#3b82f6" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Heart size={32} color="#ec4899" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <Share2 size={24} color="#8b5cf6" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Problem/Solution Compact Grid */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>"Facebook reklama nám nefunguje"</h2>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Túto vetu počúvame často. Väčšinou je problém v tom, že firmy používajú "Boost Post" tlačidlo namiesto Business Managera, alebo ciele na "všetkých 18-65+".
                            </p>
                            <p className={styles.text}>
                                Algoritmus Mety (Facebooku) je dnes neuveriteľne múdry. Využívame ho naplno:
                            </p>
                            <ul className={styles.featureList} style={{ marginTop: '1.5rem' }}>
                                <li className={styles.featureItem}><Users className={styles.featureIcon} size={20} /> <strong>Lookalike Audiences:</strong> Cielenie na ľudí podobných vašim zákazníkom</li>
                                <li className={styles.featureItem}><Eye className={styles.featureIcon} size={20} /> <strong>Advantage+ Kampane:</strong> AI automatizácia pre maximálny zásah</li>
                                <li className={styles.featureItem}><ShoppingBag className={styles.featureIcon} size={20} /> <strong>Dynamic Product Ads:</strong> Ukážeme ľuďom presne to, čo si pozerali</li>
                            </ul>
                        </div>

                        {/* Visual Stack - Overlapping Cards */}
                        <div style={{ position: 'relative', height: '350px' }}>
                            <div style={{ position: 'absolute', top: '20px', left: '20px', right: '40px', background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dbeafe', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', zIndex: 2 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '40px', height: '40px', background: '#3b82f6', borderRadius: '50%' }}></div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Vaša Značka</div>
                                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Sponzorované • <Globe size={10} style={{ display: 'inline' }} /></div>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#334155' }}>
                                    🛑 STOP! Prestaňte vyhadzovať peniaze za neefektívnu reklamu. Získajte audit zdarma ešte dnes. 👇
                                </p>
                                <div style={{ height: '100px', background: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
                                    <Image size={32} />
                                </div>
                            </div>

                            <div style={{ position: 'absolute', top: '150px', right: '10px', width: '220px', background: '#eff6ff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #bfdbfe', zIndex: 3, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.1)' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3b82f6', marginBottom: '0.5rem' }}>VÝSLEDOK KAMPANE</div>
                                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#1e3a8a' }}>+142%</div>
                                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Nárast objednávok</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Formats Grid - Dense */}
                <section className={styles.section} style={{ background: '#f8fafc', padding: '4rem 2rem', borderRadius: '24px', margin: '2rem 0' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Formáty, ktoré predávajú</h2>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Image size={32} color="#ec4899" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Carousel (Rotujúce karty)</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>
                                Ideálne pre e-shopy. Ukážte viac produktov alebo vyrozprávajte príbeh značky v sérii obrázkov.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <MessageCircle size={32} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Reels & Stories</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>
                                Vertikálne video je kráľ. Tvoríme autentické "UGC" (User Generated Content) videá, ktoré vyzerajú ako od bežného človeka, nie ako reklama.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <MousePointer size={32} color="#3b82f6" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Lead Ads (Formuláre)</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>
                                Zbierajte kontakty priamo na Facebooku bez toho, aby užívateľ musel prejsť na web. Skvelé pre B2B a služby.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Checklist - What you get */}
                <section className={styles.section}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Čo zahŕňa správa kampaní?</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderTop: '2px solid #3b82f6' }}>
                            <div style={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.2rem' }}>01</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>Tvorba kreatívy</strong>
                                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Grafické bannery a strih krátkych videí v cene. Nerobíme len nastavenie, tvoríme obsah.</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderTop: '2px solid #ec4899' }}>
                            <div style={{ color: '#ec4899', fontWeight: 800, fontSize: '1.2rem' }}>02</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>CAPI Implementácia</strong>
                                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Nastavenie Conversions API pre presné meranie dát aj po iOS14 update.</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', padding: '1rem', borderTop: '2px solid #8b5cf6' }}>
                            <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.2rem' }}>03</div>
                            <div>
                                <strong style={{ display: 'block', marginBottom: '0.3rem' }}>A/B Testovanie</strong>
                                <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Neustále testujeme rôzne texty, obrázky a cielenia. Víťaz berie všetko.</span>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ background: '#eff6ff', borderColor: '#bfdbfe' }}>
                    <h2 className={styles.ctaTitle}>Začnite dominovať na sociálnych sieťach</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#3b82f6', border: 'none', padding: '1rem 3rem' }}>
                        Chcem nezáväznú ponuku
                    </Link>
                </div>
            </div>
        </>
    );
}
