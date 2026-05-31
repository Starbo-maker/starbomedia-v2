import Link from 'next/link';
import {
    FileText,
    CheckCircle,
    Zap,
    Search,
    Sparkles,
    Globe,
    Image as ImageIcon,
    ShieldCheck,
    Layers,
} from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'Hromadné SEO meta a alt texty | Starbomedia',
    description: 'AI nástroj na hromadnú tvorbu unikátnych meta description a alt textov pre e-shopy s tisíckami produktov. Alt texty cez AI vision, výstup CSV na import do CMS, funguje v každom jazyku.',
};

export default function SeoMetaTextyPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Obsah a SEO</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>Hromadné SEO meta a alt texty</h1>
                        <p className={styles.subtitle}>
                            Náš nástroj SEO Meta &amp; Alt Text Generator vytvorí unikátne meta description a alt texty
                            pre e-shopy s tisíckami produktov. Žiadne šablóny, žiadne prázdne alt atribúty — len texty
                            napísané na mieru každej URL.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem unikátne meta texty
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #f97316 180deg, #6366f1 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <FileText size={20} color="#6366f1" /> Unikátne meta description
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <ImageIcon size={20} color="#ec4899" /> Alt texty cez AI vision
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                {/* PROBLÉM */}
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <Search size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Šablónové meta vás brzdia</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Väčšina e-shopov má rovnaký meta text s vymeneným názvom produktu a prázdne alebo generické
                                alt atribúty. Pri tisíckach URL je manuálne písanie unikátnych textov neúnosné — a tak ostáva
                                nevyužitý SEO potenciál na celom katalógu.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Koniec šablón „rovnaký text s iným názvom“
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Žiadne prázdne ani generické alt texty
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Unikátny text pre každú URL bez ručného písania
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#f1f5f9', borderRadius: '16px', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem', textAlign: 'center' }}>
                            <Layers size={40} color="#94a3b8" />
                            <span style={{ color: '#94a3b8', fontWeight: 600 }}>Tisíce produktov, jeden beh</span>
                        </div>
                    </div>
                </div>

                {/* AKO TO FUNGUJE — 4 FÁZY */}
                <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                    <div className={styles.badge}>Ako to funguje</div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', marginTop: '1rem' }}>Štyri fázy od domény po CSV</h2>
                    <p style={{ color: '#64748b', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto' }}>
                        Stačí sitemap. Nástroj prejde celý web, pochopí značku aj typ stránok a vygeneruje texty
                        pripravené na import.
                    </p>
                </div>

                <div className={styles.grid} style={{ marginTop: '3rem' }}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Search size={28} /></div>
                        <span className={styles.stepNumber} style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>01</span>
                        <h3 className={styles.cardTitle}>Analýza domény</h3>
                        <p className={styles.cardDesc}>
                            Nástroj zistí značku, jazyk, typ webu, tón komunikácie a hlavné prednosti (USP), aby texty
                            sadli k vášmu brandu.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Layers size={28} /></div>
                        <span className={styles.stepNumber} style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>02</span>
                        <h3 className={styles.cardTitle}>Klasifikácia URL</h3>
                        <p className={styles.cardDesc}>
                            Každú adresu zaradí podľa typu — produkt, kategória alebo článok — aby pre ňu zvolil správny
                            štýl a štruktúru textu.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Sparkles size={28} /></div>
                        <span className={styles.stepNumber} style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>03</span>
                        <h3 className={styles.cardTitle}>Generovanie meta a alt textov</h3>
                        <p className={styles.cardDesc}>
                            Vytvorí unikátne meta description a alt texty. Alt texty píše cez AI vision — model obrázok
                            naozaj vidí a popíše presne to, čo je na ňom.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><ShieldCheck size={28} /></div>
                        <span className={styles.stepNumber} style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>04</span>
                        <h3 className={styles.cardTitle}>Kontrola kvality</h3>
                        <p className={styles.cardDesc}>
                            Dobré pôvodné texty ponechá, šablóny nahradí novými. Skontroluje dĺžku, duplicity aj
                            gramatiku, aby bol výstup pripravený do CMS.
                        </p>
                    </div>
                </div>

                {/* PRED / PO UKÁŽKA */}
                <div className={styles.demoContainer} style={{ marginTop: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <div className={styles.badge}>Pred a po</div>
                        <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>Zo šablóny na text, ktorý predáva</h2>
                    </div>
                    <div className={styles.grid}>
                        <div style={{ background: '#fff7ed', border: '1px solid rgba(249, 115, 22, 0.2)', borderRadius: '16px', padding: '2rem' }}>
                            <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: '50px', background: 'rgba(249, 115, 22, 0.12)', color: '#ea580c', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                                Pred — šablóna
                            </div>
                            <p style={{ color: '#475569', lineHeight: '1.7', fontStyle: 'italic' }}>
                                „CYKYLo káble za výhodné ceny. Rýchle doručenie. Ponúkame kvalitné produkty od renomovaných
                                výrobcov. Overený eshop MURAT.SK. 6 produktov v kategórii.“
                            </p>
                        </div>
                        <div style={{ background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '16px', padding: '2rem' }}>
                            <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: '50px', background: 'rgba(99, 102, 241, 0.12)', color: '#4f46e5', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                                Po — AI
                            </div>
                            <p style={{ color: '#1e293b', lineHeight: '1.7', fontWeight: 500 }}>
                                „CYKYLo káble pre interiér/exteriér od 0,62 € na Murat.sk! Pevné uloženie, široký výber.
                                Sídlo v Pezinku. Pozrite si ponuku!“
                            </p>
                        </div>
                    </div>
                </div>

                {/* PRÍPAD MURAT */}
                <div className={styles.grid} style={{ marginTop: '6rem' }}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Zap size={28} /></div>
                        <h3 className={styles.cardTitle}>Prípad Murat: 1000 URL za menej ako hodinu</h3>
                        <p className={styles.cardDesc}>
                            Pre e-shop Murat z oblasti elektrotechniky sme nahradili 100 % šablónových meta textov
                            unikátnymi. Celý katalóg s 1000 URL bol hotový za menej ako hodinu — namiesto týždňov ručného
                            písania.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}><Globe size={28} /></div>
                        <h3 className={styles.cardTitle}>Akýkoľvek jazyk, jeden CSV výstup</h3>
                        <p className={styles.cardDesc}>
                            Beží na modeli Gemini vrátane vision pre alt texty. Výsledkom je CSV pripravené na import do
                            vášho CMS. Funguje pre akýkoľvek jazyk — stačí dodať sitemap.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.ctaBox}>
                    <div className={styles.pulseGlow} />
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                        Premeňte celý katalóg na unikátne texty
                    </h2>
                    <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2rem', position: 'relative', zIndex: 1 }}>
                        Pošlite nám sitemap a my sa postaráme o meta description aj alt texty pre tisíce vašich URL.
                    </p>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <Link href="/kontakt" className="btn" style={{ background: 'white', color: 'var(--ai-primary)', fontWeight: 700 }}>
                            Nezáväzne sa poradiť
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
