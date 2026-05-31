import Link from 'next/link';
import { Layers, Image as ImageIcon, Palette, ShieldCheck, Sliders, Target, CheckCircle } from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Marketing bannery | Starbomedia',
    description: 'AI generované reklamné bannery a kreatívy z vašej brand DNA – logo, farby, tón. Pre Meta a Google Ads vo formátoch 1:1, 9:16, 16:9 a 4:5.',
};

export default function MarketingBannersPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Generovanie kreatív</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Marketing bannery</h1>
                        <p className={styles.subtitle}>
                            Reklamné bannery generujeme z vašej brand DNA – z loga, farieb a tónu, nie zo šablón.
                            Produkt ostáva verný, scény tvoríme na mieru pre Meta aj Google Ads.
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
                                <Sliders size={20} color="#8b5cf6" /> Varianty pre A/B test
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <ImageIcon size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Kreatívy z vašej brand DNA</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Vaše logo, farby a tón uložíme ako brand profil. Z neho generujeme reklamné bannery a kreatívy na mieru – nepracujeme so šablónami. Produkt ostáva verný a scény vznikajú presne pre váš brand.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Brand-locked generovanie z brand profilu
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Automatické skóre ad-readiness
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Varianty pre A/B testovanie
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#f1f5f9', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Placeholder for demo image */}
                            <span style={{ color: '#94a3b8', fontWeight: 600 }}>Ukážka bannerov pre Meta a Google Ads</span>
                        </div>
                    </div>
                </div>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <ShieldCheck className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Brand-locked generovanie</h3>
                        <p className={styles.cardDesc}>Logo, farby a tón uložíme ako brand profil. Každý banner tak verne dodržiava vašu vizuálnu identitu – bez šablón.</p>
                    </div>
                    <div className={styles.card}>
                        <Target className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Skóre ad-readiness</h3>
                        <p className={styles.cardDesc}>Každú kreatívu automaticky vyhodnotíme skóre pripravenosti na nasadenie, aby ste vedeli, čo je hotové do reklamy.</p>
                    </div>
                    <div className={styles.card}>
                        <Layers className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Formáty pre každú plochu</h3>
                        <p className={styles.cardDesc}>Meta feed aj story, Google Display a Shopping. Pripravíme pomery 1:1, 9:16, 16:9 a 4:5 z jedného brand profilu.</p>
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
