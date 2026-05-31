import Link from 'next/link';
import { ShoppingBag, Star, RefreshCcw, Globe, Tag, Percent } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Cenové porovnávače (Heureka, Glami) | Starbomedia',
    description: 'Zvýšte predaj cez Heureku, Glami, Favi a ďalšie. XML feed audit, párovanie produktov a biddingové stratégie pre e-shopy.',
};

export default function ComparisonsPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.1), transparent 60%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <span style={{ color: '#0ea5e9', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                            Porovnávače cien
                        </span>
                        <h1 className={styles.title}>Ovládnite porovnávače cien</h1>
                        <p className={styles.subtitle}>
                            Heureka, Glami či Favi sú pre e-shopy často najvýkonnejším kanálom.
                            Zabezpečíme, aby ste boli vidieť na popredných miestach a neplatili zbytočne veľa.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#0ea5e9', boxShadow: '0 4px 14px 0 rgba(14, 165, 233, 0.4)' }}>
                                Chcem audit feedu zdarma
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(59, 130, 246, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <Tag size={28} color="#0ea5e9" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Star size={32} color="#fbbf24" fill="#fbbf24" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <Percent size={24} color="#0ea5e9" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Rest of Content */}
            <div className={`container ${styles.content}`}>

                <section className={styles.grid}>
                    <div>
                        <h2>Nie je to len o najnižšej cene</h2>
                        <p className={styles.text}>
                            Mnoho e-shopárov si myslí, že na Heureke predáva len ten najlacnejší. Omyl.
                            Dostupnosť, recenzie (Overené zákazníkmi), cena dopravy a kvalitné popisky rozhodujú rovnako.
                        </p>
                        <p className={styles.text}>
                            Základom úspechu je <strong>bezchybný XML feed</strong>. Ak máte produkty v zlých kategóriách alebo nespárované, prichádzate o zákazníkov.
                        </p>
                    </div>

                    <div className={styles.card} style={{ background: '#f0f9ff', borderColor: '#bae6fd' }}>
                        <h3 className={styles.cardTitle}>Čo všetko riešime?</h3>
                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}><RefreshCcw size={20} color="#0ea5e9" /> Párovanie produktov (až 95%+ spárovanosť)</li>
                            <li className={styles.featureItem}><Star size={20} color="#0ea5e9" /> Získanie odznaku Overené zákazníkmi</li>
                            <li className={styles.featureItem}><ShoppingBag size={20} color="#0ea5e9" /> Bidding (nastavenie ceny za preklik)</li>
                            <li className={styles.featureItem}><Globe size={20} color="#0ea5e9" /> Expanzia do zahraničia (Árukereső, Compari)</li>
                        </ul>
                    </div>
                </section>

                {/* Platforms */}
                <section className={styles.section} style={{ marginTop: '4rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Kde všade predávame?</h2>
                    <div className={styles.cardGrid}>
                        {/* Heureka */}
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0094e7', marginBottom: '1rem' }}>Heureka Group</div>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>
                                Absolútna jednotka v CEE regióne. Slovensko, Česko, Maďarsko, Rumunsko. Najvyšší konverzný pomer.
                            </p>
                        </div>
                        {/* Glami */}
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#000', marginBottom: '1rem' }}>GLAMI</div>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>
                                Móda a doplnky. Využíva vizuálne vyhľadávanie a AI. Dôležité kvalitné fotky a parametre.
                            </p>
                        </div>
                        {/* Favi */}
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#aa2a88', marginBottom: '1rem' }}>FAVI & BIANO</div>
                            <p className={styles.text} style={{ fontSize: '0.9rem' }}>
                                Nábytok a bývanie. Inšpiračné galérie, kde ľudia hľadajú nápady pre svoj domov.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mergado */}
                <section className={styles.section} style={{ background: '#f0f9ff', padding: '4rem', borderRadius: '24px', textAlign: 'center' }}>
                    <h2>Náš tajný nástroj: MERGADO</h2>
                    <p className={styles.text} style={{ maxWidth: '700px', margin: '1rem auto' }}>
                        Sme certifikovaný partner Mergado. Tento nástroj nám umožňuje upravovať váš XML feed hromadne, bez zásahu programátora.
                        Vieme meniť názvy, skrývať neprofitabilné produkty či prepočítavať ceny pre zahraničie.
                    </p>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#0ea5e9', color: 'white', borderRadius: '50px', fontWeight: 600, marginTop: '1rem' }}>
                        Mergado Certified Partner
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ marginTop: '5rem' }}>
                    <h2 className={styles.ctaTitle}>Využite potenciál porovnávačov naplno</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#0ea5e9', border: 'none', padding: '1rem 3rem' }}>
                        Chcem audit feedu zdarma
                    </Link>
                </div>
            </div>
        </>
    );
}
