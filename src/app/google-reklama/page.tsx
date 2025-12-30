import Link from 'next/link';
import { Search, BarChart2, Target, MousePointer, TrendingUp, CheckCircle, Smartphone, Globe, ShieldCheck } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Google Ads (PPC) Reklama | Starbo Media',
    description: 'Získajte viac zákazníkov okamžite s Google Ads. Profesionálna správa PPC kampaní, ktoré zarábajú. Certifikovaný Google Partner.',
};

export default function GoogleAdsPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1), transparent 40%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#eff6ff', padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid #dbeafe' }}>
                            <ShieldCheck size={16} color="#3b82f6" />
                            <span style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.85rem' }}>GOOGLE PARTNER AGENCY</span>
                        </div>
                        <h1 className={styles.title}>Buďte tam, kde vás hľadajú. Okamžite.</h1>
                        <p className={styles.subtitle}>
                            Neplaťte za zobrazenia, plaťte len za reálnych návštevníkov, ktorí chcú nakúpiť. 700% ROAS nie je sen, ale náš štandard.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#3b82f6', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)' }}>
                                Chcem audit kampaní zdarma
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <Search size={28} color="#3b82f6" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Target size={32} color="#f59e0b" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <MousePointer size={24} color="#10b981" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Introduction - Dense 2 column */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Prečo vaše reklamy nefungujú?</h2>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Mnoho agentúr sa chváli počtom preklikov. Nás zaujíma jediné číslo: <strong>PNO (Podiel Nákladov na Obrate)</strong>.
                                Ak do reklamy dáte 100€ a nevrátia sa vám aspoň 500€, niečo je zle.
                            </p>
                            <p className={styles.text}>
                                Najčastejšie chyby, ktoré vidíme pri auditoch:
                            </p>
                            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Zlé nastavenie zhody kľúčových slov (broad match waste)</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Chýbajúce vylučujúce slová (negatives)</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Reklamy vedú na domovskú stránku namiesto konkrétneho produktu</li>
                            </ul>
                        </div>
                        {/* Stats Box */}
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem' }}>Priemerný výkon našich kampaní</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>8.5x</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>ROAS (Návratnosť)</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>-35%</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Cena za konverziu</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advanced Strategy - DENSE Grid */}
                <section className={styles.section} style={{ background: '#fff', padding: '0' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Komplexná stratégia, nie len "nastavenie"</h2>
                    <div className={styles.cardGrid}>
                        {/* Search */}
                        <div className={styles.card}>
                            <Search className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Search Kampane (PPC)</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Zasiahneme ľudí v momente, keď aktívne hľadajú váš produkt.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <li>• SKAG / STAG štruktúra účtu</li>
                                <li>• Responsive Search Ads optimalizácia</li>
                                <li>• Rozšírenia o odkazy, volanie, ceny</li>
                            </ul>
                        </div>
                        {/* Shopping */}
                        <div className={styles.card}>
                            <BarChart2 className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Google Shopping</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pre e-shopy nutnosť. Fotka + Cena priamo vo výsledkoch.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <li>• Optimalizácia XML feedu (názvy produktov)</li>
                                <li>• Performance Max stratégie</li>
                                <li>• CSS Program (zľava 20% z CPC)</li>
                            </ul>
                        </div>
                        {/* Remarketing */}
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Dynamický Remarketing</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pripomenieme sa ľuďom, ktorí vložili tovar do košíka, ale nedokončili nákup.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <li>• Personalizované bannery</li>
                                <li>• Cielenie podľa času od návštevy</li>
                                <li>• Cross-device targeting (mobil &rarr; PC)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Process List - Clean & Professional */}
                <section className={styles.section} style={{ marginTop: '2rem' }}>
                    <div style={{ background: '#eff6ff', borderRadius: '24px', padding: '3rem' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ako prebieha spolupráca?</h2>
                        <div className={styles.grid} style={{ alignItems: 'flex-start', gap: '2rem' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dbeafe' }}>
                                <div style={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>01. Audit</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Hĺbková analýza histórie účtu. Nájdeme "diery", kadiaľ vám utekajú peniaze.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dbeafe' }}>
                                <div style={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>02. Setup</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Nastavenie merania konverzií, prepojenie s GA4, štruktúra kampaní podľa maržovosti.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dbeafe' }}>
                                <div style={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>03. Škálovanie</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Každý týždeň optimalizujeme bidy, pridávame negatívne slová a testujeme nové kreatívy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ marginTop: '3rem' }}>
                    <h2 className={styles.ctaTitle}>Nechajte svoje kampane zarábať</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Mám záujem o správu kampaní
                    </Link>
                </div>
            </div>
        </>
    );
}
