import Link from 'next/link';
import { PieChart, TrendingUp, Search, MousePointer, Activity, Lock, BarChart, CheckSquare, Server, Eye, FileText, Smartphone, Zap } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Webová analytika a UX | Starbomedia',
    description: 'Pokročilá implementácia GA4, Server-side GTM a UX audit. Získajte dáta, ktoré konkurencia nemá.',
};

export default function AnalyticsPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 30% 20%, rgba(249, 115, 22, 0.15), transparent 60%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <span style={{ color: '#f97316', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'block' }}>
                            Dáta a analytika
                        </span>
                        <h1 className={styles.title}>Dáta, nie pocity</h1>
                        <p className={styles.subtitle}>
                            Väčšina firiem má Google Analytics, ale len málokto mu rozumie.
                            Premeňte čísla na zrozumiteľné informácie. Implementujeme pokročilé meranie, ktoré odhalí skryté príležitosti pre rast tržieb.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)', boxShadow: '0 4px 14px 0 rgba(249, 115, 22, 0.4)' }}>
                                Audit merania zdarma
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(236, 72, 153, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <BarChart size={28} color="#f97316" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Activity size={32} color="#ec4899" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <PieChart size={24} color="#f97316" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Introduction Section - Dense Layout */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Meráte správne? Pravdepodobne nie.</h2>
                            <p className={styles.text} style={{ marginBottom: '1.5rem' }}>
                                S príchodom <strong>Google Analytics 4 (GA4)</strong> sa pravidlá hry zmenili. Staré "Universal Analytics" návyky už nefungujú.
                                Ak nemáte nastavený <strong>Server-side GTM</strong> a <strong>Consent Mode v2</strong>, môžete prichádzať aj o 20-40 % dát o vašich konverziách kvôli blokovačom reklám a cookie lištám.
                            </p>
                            <p className={styles.text} style={{ fontWeight: 600, color: '#f97316' }}>
                                Bez presných dát riadite firmu "naslepo". My vám vrátime presný a úplný prehľad o vašich dátach.
                            </p>
                        </div>
                        <div style={{ background: '#fff7ed', padding: '2rem', borderRadius: '16px', border: '1px solid #ffedd5' }}>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Rýchly audit: máte toto nastavené?</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#475569' }}>
                                    <CheckSquare size={18} color="#f97316" /> Vylúčenie vlastných IP adries a platobných brán
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#475569' }}>
                                    <CheckSquare size={18} color="#f97316" /> Cross-domain tracking (ak máte viac domén)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#475569' }}>
                                    <CheckSquare size={18} color="#f97316" /> Enhanced E-commerce (view_item, add_to_cart)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#475569' }}>
                                    <CheckSquare size={18} color="#f97316" /> Prepojenie s Google Ads a Search Console
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Technical Deep Dive - Grid of 3 */}
                <section className={styles.section} style={{ background: '#f8fafc', padding: '4rem 2rem', borderRadius: '24px', margin: '2rem 0' }}>
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Naše technické riešenia</h2>
                        <p className={styles.text}>Neinštalujeme len "kód". Budujeme robustnú dátovú infraštruktúru.</p>
                    </div>

                    <div className={styles.cardGrid}>
                        {/* Card 1 */}
                        <div className={styles.card}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <Server size={32} color="#f97316" />
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Server-side Tagging</h3>
                            </div>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                Obíďte AdBlockery a predĺžte životnosť cookies. Dáta posielame priamo z vášho servera do Google/Facebooku, nie cez prehliadač užívateľa. Výsledkom je výrazne presnejšie meranie konverzií.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className={styles.card}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <Lock size={32} color="#ec4899" />
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Consent Mode v2 + Lišta</h3>
                            </div>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                Nastavíme cookie lištu tak, aby bola v súlade so zákonom a zároveň maximalizovala mieru udelených súhlasov. S Consent Mode v2 dopočítame modelované konverzie od ľudí, ktorí cookies odmietli.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className={styles.card}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                <FileText size={32} color="#8b5cf6" />
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Vlastné GA4 Reporty</h3>
                            </div>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                Pripravíme vám "Looker Studio" dashboard, kde uvidíte maržu, ROI podľa kanálov a výkonnosť produktov na jednej obrazovke. Žiadne preklikávanie sa zložitým GA4 rozhraním.
                            </p>
                        </div>
                    </div>
                </section>

                {/* UX Audit Section - Dense & Visual */}
                <section className={styles.section}>
                    <div className={styles.grid} style={{ alignItems: 'flex-start' }}>
                        <div>
                            <span style={{ color: '#f97316', fontWeight: 700, letterSpacing: '0.05em' }}>UX / UI AUDIT</span>
                            <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Prečo ľudia odchádzajú z košíka?</h2>
                            <p className={styles.text} style={{ marginBottom: '1.5rem' }}>
                                Dáta nám povedia "čo" sa stalo, UX analýza nám povie "prečo".
                                Využívame nástroje ako <strong>Hotjar</strong> a <strong>Microsoft Clarity</strong> na nahrávanie obrazovky užívateľov.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ borderLeft: '3px solid #f97316', paddingLeft: '1rem' }}>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Eye size={18} /> Heatmaps</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Vidíme, kam ľudia klikajú (aj keď to nie je tlačidlo) a ako hlboko scrolujú.</p>
                                </div>
                                <div style={{ borderLeft: '3px solid #ec4899', paddingLeft: '1rem' }}>
                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Zap size={18} /> Rage Clicks</h4>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Identifikujeme frustráciu. Miesta, kde užívateľ zúrivo kliká, lebo niečo nefunguje.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#1e293b', borderRadius: '16px', padding: '2rem', color: 'white' }}>
                            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Čo kontrolujeme v rámci auditu?</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <Smartphone size={20} color="#f97316" style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Použiteľnosť na mobile</strong>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Dostupnosť tlačidiel palcom, čitateľnosť, rýchlosť</div>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <CheckSquare size={20} color="#f97316" style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Formuláre a košík</strong>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Validácia polí, automatické dopĺňanie, jasné CTA</div>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <Zap size={20} color="#f97316" style={{ flexShrink: 0 }} />
                                    <div>
                                        <strong>Core Web Vitals</strong>
                                        <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>LCP (načítanie), CLS (posúvanie obsahu), INP (odozva)</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Sticky CTA Bar / Footer Section */}
                <div className={styles.ctaBox} style={{ background: '#fff7ed', borderColor: '#fdba74', marginTop: '3rem' }}>
                    <h2 className={styles.ctaTitle}>Prestaňte hádať. Začnite merať.</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#475569' }}>
                        Objednajte si kompletný audit merania a UX. Zistíme, kde strácate peniaze a navrhneme riešenie.
                    </p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#f97316', border: 'none', padding: '1rem 3rem' }}>
                        Chcem audit merania zdarma
                    </Link>
                </div>
            </div>
        </>
    );
}
