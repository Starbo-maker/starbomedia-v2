import Link from 'next/link';
import { Search, PenTool, Link as LinkIcon, Settings, BarChart3, TrendingUp, Globe, CheckSquare, AlignLeft, Layers } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'SEO Optimalizácia pre vyhľadávače | Starbo Media',
    description: 'Získajte viac zákazníkov z Google bez platenia za klik. Komplexný SEO audit, on-page optimalizácia a linkbuilding, ktorý funguje.',
};

export default function SeoPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 40% 30%, rgba(16, 185, 129, 0.15), transparent 60%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid #d1fae5' }}>
                            <TrendingUp size={16} color="#10b981" />
                            <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.85rem' }}>ORGANIC GROWTH EXPERTS</span>
                        </div>
                        <h1 className={styles.title}>Buďte prví na Google. Dlhodobo.</h1>
                        <p className={styles.subtitle}>
                            SEO nie je jednorazová akcia, ale stratégia. Vyladíme technickú stránku vášho webu, vytvoríme obsah, ktorý ľudia hľadajú, a získame autoritu.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.4)' }}>
                                Objednať SEO Audit
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(59, 130, 246, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <TrendingUp size={28} color="#10b981" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Globe size={32} color="#3b82f6" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <Search size={24} color="#10b981" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Introduction - Technical Focus */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Váš web má pravdepodobne technické chyby</h2>
                            <p className={styles.text} style={{ marginBottom: '1.5rem' }}>
                                Google má viac ako 200 hodnotiacich faktorov. Aj ten najkrajší web nebude viditeľný, ak je pomalý, má zlú štruktúru URL alebo duplicitný obsah.
                                Naše audity idú do hĺbky kódu.
                            </p>
                            <p className={styles.text}>
                                <strong>Čo najčastejšie riešime?</strong>
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                                <div className={styles.featureItem}><Settings size={18} color="#10b981" /> Pomaly LCP a CLS (Core Web Vitals)</div>
                                <div className={styles.featureItem}><Settings size={18} color="#10b981" /> Chýbajúca indexácia stránok</div>
                                <div className={styles.featureItem}><Settings size={18} color="#10b981" /> Kanibalizácia kľúčových slov</div>
                                <div className={styles.featureItem}><Settings size={18} color="#10b981" /> Zlá linková architektúra</div>
                            </div>
                        </div>
                        {/* Visual/Checklist Box */}
                        <div style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: '#166534' }}>Náš SEO Stack</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {['Screaming Frog', 'Ahrefs', 'Google Search Console', 'Semrush', 'PageSpeed Insights'].map(tool => (
                                    <span key={tool} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, color: '#15803d', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3 Pillars - Dense Cards */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>3 Piliere úspešného SEO</h2>
                    <div className={styles.grid} style={{ alignItems: 'stretch' }}>
                        {/* Tech SEO */}
                        <div className={styles.card} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '50px', height: '50px', background: '#ecfdf5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Settings color="#10b981" />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Technical SEO</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                                Oprava základov. Rýchlosť webu, HTTPS, robots.txt, sitemap.xml, štruktúrované dáta (Schema.org). Aby Google robot prešiel web hladko.
                            </p>
                            <ul style={{ fontSize: '0.85rem', color: '#64748b', background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                                <li>• JavaScript rendering check</li>
                                <li>• Mobile-first indexing</li>
                                <li>• 404 & Redirect chains</li>
                            </ul>
                        </div>

                        {/* Content SEO */}
                        <div className={styles.card} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '50px', height: '50px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <AlignLeft color="#3b82f6" />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>On-Page & Content</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                                Obsah, ktorý odpovedá na otázky. Analýza kľúčových slov nájde témy s vysokým potenciálom. Optimalizácia titulkov, H1-H6 a meta popisov.
                            </p>
                            <ul style={{ fontSize: '0.85rem', color: '#64748b', background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                                <li>• Keyword Gap Analysis</li>
                                <li>• Topic Clusters</li>
                                <li>• Content Refreshing</li>
                            </ul>
                        </div>

                        {/* Off-Page SEO */}
                        <div className={styles.card} style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ width: '50px', height: '50px', background: '#f5f3ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <LinkIcon color="#8b5cf6" />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Linkbuilding</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                                Budovanie autority domény. Získavame kvalitné spätné odkazy z relevantných magazínov a partnerov. Žiadne spamové farmy.
                            </p>
                            <ul style={{ fontSize: '0.85rem', color: '#64748b', background: '#f8fafc', padding: '1rem', borderRadius: '8px' }}>
                                <li>• Guest Posting</li>
                                <li>• PR články</li>
                                <li>• Broken Link Building</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Compact FAQ */}
                <section className={styles.section} style={{ padding: '0 0 3rem' }}>
                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '3rem', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Časté mýty o SEO</h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: '#ef4444' }}>MÝTUS:</span> SEO stačí urobiť raz
                                </div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                                    Realita: Google mení algoritmus tisíckrát ročne. Konkurencia nespí. SEO je kontinuálny proces vylepšovania a tvorby obsahu.
                                </p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: '#ef4444' }}>MÝTUS:</span> Garancia 1. miesta
                                </div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>
                                    Realita: Nikto nemôže garantovať 1. miesto, pretože algoritmus je tajný. Garantujeme však rast organickej návštevnosti a zlepšenie pozícií.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ background: '#ecfdf5', borderColor: '#6ee7b7' }}>
                    <h2 className={styles.ctaTitle}>Kde sa nachádza váš web dnes?</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#10b981', border: 'none', padding: '1rem 3rem' }}>
                        Chcem bezplatnú analýzu
                    </Link>
                </div>
            </div>
        </>
    );
}
