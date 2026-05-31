import Link from 'next/link';
import {
    Search,
    BarChart3,
    FileText,
    ShieldCheck,
    PenTool,
    Layers,
    Megaphone,
    CheckCircle,
    Workflow,
    Sparkles,
    ArrowRight,
} from 'lucide-react';
import styles from '../../ai-studio.module.css';

export const metadata = {
    title: 'AI tvorba SEO článkov | Starbomedia',
    description: 'Automatizovaný nástroj SEO Article Pipeline — od analýzy kľúčových slov a SERP analýzy cez fact-checking a EEAT brief až po sémantické HTML a distribučný balík. Celý proces od výskumu po publikáciu za minúty namiesto dní.',
};

const steps = [
    {
        title: 'Analýza kľúčových slov',
        desc: 'Search volume, CPC, obtiažnosť a vyhľadávací zámer (intent) — z reálnych SEO dát, nie z odhadu.',
    },
    {
        title: 'SERP analýza TOP 10',
        desc: 'Rozoberieme prvú desiatku výsledkov a nájdeme obsahové medzery, ktoré konkurencia nepokrýva.',
    },
    {
        title: 'Výskum a fact-checking',
        desc: 'Zhromaždíme fakty z viacerých zdrojov a overíme ich, aby článok stál na presných údajoch.',
    },
    {
        title: 'EEAT brief',
        desc: 'Pripravíme brief postavený na Experience, Expertise, Authority a Trust podľa odporúčaní Google.',
    },
    {
        title: 'Napísanie článku',
        desc: 'Špecializovaný agent napíše ucelený odborný text na základe briefu a overených podkladov.',
    },
    {
        title: 'EEAT revízia a meta',
        desc: 'Revízia podľa EEAT, doplnenie meta údajov a interné prelinkovanie naprieč obsahom.',
    },
    {
        title: 'Sémantické HTML',
        desc: 'Konverzia do čistého HTML — obsah a TOC, FAQ akordeón, Schema.org JSON-LD a ohľad na Core Web Vitals.',
    },
    {
        title: 'Distribučný balík',
        desc: 'Hotové príspevky na LinkedIn a Facebook, e-mailový teaser aj prompty na obrázky.',
    },
];

export default function AiSeoArticlesPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>Obsah &amp; SEO</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI tvorba SEO článkov</h1>
                        <p className={styles.subtitle}>
                            Náš vlastný automatizovaný nástroj SEO Article Pipeline prevedie obsah celou cestou — od
                            výskumu po publikáciu za minúty namiesto dní. Pod kapotou pracuje 8-krokový proces viacerých
                            špecializovaných AI agentov, ktorí dodržiavajú EEAT a overujú fakty.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem SEO obsah na mieru
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #f97316 180deg, #6366f1 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <ShieldCheck size={20} color="#6366f1" /> Overené fakty &amp; EEAT
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Workflow size={20} color="#f97316" /> 8-krokový proces
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                {/* Úvodný blok — čo to je */}
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <FileText size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Od výskumu po publikáciu na jeden beh</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                SEO Article Pipeline je vlastný nástroj Starbomedia. Spojili sme do neho viacerých
                                špecializovaných AI agentov, ktorí na seba nadväzujú — od dátového výskumu cez písanie
                                až po finálne HTML pripravené do CMS. Výsledkom je odborný článok, ktorý stojí na
                                overených údajoch a rešpektuje pravidlá Google pre kvalitný obsah.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Reálne SEO dáta cez DataForSEO
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Fact-checking z viacerých zdrojov
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> HTML pripravené pre WordPress aj Webflow
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#0f172a', borderRadius: '16px', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                            <blockquote style={{ color: '#e2e8f0', fontSize: '1.15rem', lineHeight: '1.7', fontStyle: 'italic', margin: 0 }}>
                                „Nejde o to nahradiť ľudí, ale aby sa naši špecialisti venovali stratégii, nie rutine.
                                Pipeline dodržiava EEAT, overuje fakty a produkuje výstup pripravený na publikáciu.“
                            </blockquote>
                        </div>
                    </div>
                </div>

                {/* Ako to funguje — 8 krokov */}
                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <div className={styles.badge}>Ako to funguje</div>
                    <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '1rem' }}>8 krokov od kľúčového slova k publikácii</h2>
                    <p style={{ color: '#64748b', maxWidth: '640px', margin: '0 auto 4rem', lineHeight: '1.6' }}>
                        Každý krok má na starosti samostatný špecializovaný agent. Výstup jedného sa stáva vstupom
                        pre ďalší, takže obsah postupne dozrieva od dát až po hotový článok.
                    </p>

                    <div className={styles.grid} style={{ textAlign: 'left' }}>
                        {steps.map((step, index) => (
                            <div key={step.title} className={styles.processStep} style={{ textAlign: 'left', background: 'white', border: '1px solid rgba(226, 232, 240, 0.8)', borderRadius: '20px', padding: '2.5rem' }}>
                                <div className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</div>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: '#1e293b' }}>{step.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Kľúčové funkcie */}
                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>Kľúčové funkcie</h2>
                    <div className={styles.grid} style={{ textAlign: 'left' }}>
                        <div className={styles.card}>
                            <BarChart3 className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Reálne SEO dáta</h3>
                            <p className={styles.cardDesc}>
                                Napojenie na DataForSEO prináša search volume, CPC, obtiažnosť aj intent v reálnom čase.
                                Témy tak vychádzajú z dát, nie z dohadov.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>EEAT a fact-checking</h3>
                            <p className={styles.cardDesc}>
                                Obsah staviame podľa princípov EEAT od Google a fakty overujeme z viacerých zdrojov,
                                aby bol článok dôveryhodný a presný.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Search className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>SERP analýza a medzery</h3>
                            <p className={styles.cardDesc}>
                                Rozoberieme TOP 10 výsledkov a nájdeme obsahové medzery — témy a otázky, ktoré
                                konkurencia v rebríčku nepokrýva.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Sémantické HTML pre CMS</h3>
                            <p className={styles.cardDesc}>
                                Výstupom je čisté HTML s obsahom a TOC, FAQ akordeónom, Schema.org JSON-LD a ohľadom
                                na Core Web Vitals — pripravené pre WordPress aj Webflow.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <PenTool className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Interné prelinkovanie a meta</h3>
                            <p className={styles.cardDesc}>
                                Súčasťou revízie je doplnenie meta údajov a logické interné prelinkovanie naprieč
                                obsahom webu.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Megaphone className={styles.cardIcon} />
                            <h3 className={styles.cardTitle}>Distribučný balík</h3>
                            <p className={styles.cardDesc}>
                                K článku dostanete hotové príspevky na LinkedIn a Facebook, e-mailový teaser aj prompty
                                na obrázky — obsah je tak rovno pripravený na distribúciu.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Prípad Fabulo */}
                <div className={styles.demoContainer} style={{ marginTop: '8rem' }}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <div className={styles.badge}>Doložený prípad</div>
                            <h2 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1rem' }}>Prvé nasadenie pre Fabulo.sk</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Pri kľúčovom slove „masážny stôl“ tvorili TOP 10 takmer výhradne e-shopy bez
                                informačného obsahu — jasná obsahová medzera. Pipeline z nej vytvorila približne
                                3 000-slovový odborný sprievodca s tabuľkami, FAQ sekciou aj hotovým distribučným
                                balíkom.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Identifikovaná obsahová medzera v TOP 10
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Odborný sprievodca s tabuľkami a FAQ
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Pripravený distribučný balík k článku
                                </li>
                            </ul>
                        </div>
                        <div style={{ background: '#f1f5f9', borderRadius: '16px', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
                            <Sparkles size={40} color="#6366f1" />
                            <span style={{ color: '#475569', fontWeight: 700, fontSize: '1.5rem' }}>~3 000 slov</span>
                            <span style={{ color: '#94a3b8', fontWeight: 600, textAlign: 'center' }}>odborný sprievodca z jedného behu pipeline</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className={styles.ctaBox}>
                    <div className={styles.pulseGlow} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Pustime SEO obsah na plný výkon</h2>
                        <p style={{ fontSize: '1.15rem', maxWidth: '640px', margin: '0 auto 2.5rem', opacity: 0.95, lineHeight: '1.6' }}>
                            Necháme špecialistov pri stratégii a rutinu zveríme pipeline. Ozvite sa nám a pripravíme
                            SEO články presne pre váš trh a témy.
                        </p>
                        <Link
                            href="/kontakt"
                            className="btn"
                            style={{ background: 'white', color: 'var(--ai-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            Chcem SEO obsah na mieru <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
