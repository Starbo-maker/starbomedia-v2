import Link from 'next/link';
import {
    Search, ShoppingBag, Target, Repeat, Globe, Youtube,
    ShieldCheck, Scale, Activity, GitCompare,
    Store, MapPin, Building2, CheckCircle
} from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Google reklama — správa Google Ads kampaní na mieru | Starbomedia',
    description: 'Google Ads spravujeme od roku 2012, ročne cez ne preinvestujeme viac než 10 mil. € naprieč 13 trhmi CEE. Search, PMax, Shopping a remarketing s dôrazom na reálne tržby. Certifikovaný Google Partner.',
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
                            <span style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.85rem' }}>CERTIFIKOVANÝ GOOGLE PARTNER</span>
                        </div>
                        <h1 className={styles.title}>Google reklama, ktorá platí vaše účty.</h1>
                        <p className={styles.subtitle}>
                            Google Ads spravujeme od roku 2012 a ročne cez ne preinvestujeme viac než 10 miliónov eur naprieč 13 trhmi
                            strednej a východnej Európy. Neplatíte za zobrazenia — platíte za zákazníkov pripravených nakúpiť.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#3b82f6', boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)' }}>
                                Chcem audit kampaní
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
                                <ShoppingBag size={24} color="#10b981" />
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
                                Mnoho agentúr sa chváli počtom preklikov. Nás zaujíma jediné číslo: <strong>PNO (podiel nákladov na obrate)</strong>,
                                respektíve to, koľko z investovaného eura sa vám reálne vráti v tržbách a v zisku.
                            </p>
                            <p className={styles.text}>
                                Najčastejšie chyby, ktoré vidíme pri auditoch účtov:
                            </p>
                            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Zle nastavená zhoda kľúčových slov a plytvanie pri širokej zhode (broad match)</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Chýbajúce vylučujúce slová (negatíva)</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Reklamy vedú na domovskú stránku namiesto konkrétneho produktu</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Meranie konverzií, ktoré zachytáva len časť reálnych tržieb</li>
                            </ul>
                        </div>
                        {/* Stats Box */}
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem' }}>Starbomedia v skratke</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>10 M€+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ročný ad spend (CEE)</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>od 2012</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Skúseností s Google Ads</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#8b5cf6' }}>13</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Trhov CEE, kde inzerujeme</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b' }}>90 %+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Presnosť merania tržieb</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Campaign Types - 6 cards */}
                <section className={styles.section} style={{ background: '#fff', padding: '0' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Typy Google Ads kampaní, ktoré spravujeme</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        Nekombinujeme náhodne. Mix kampaní staviame podľa toho, kde sa rozhoduje váš zákazník — od aktívneho hľadania až po dokončenie nákupu.
                    </p>
                    <div className={styles.cardGrid}>
                        {/* Search */}
                        <div className={styles.card}>
                            <Search className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Reklama vo vyhľadávaní (Search)</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Zasiahneme ľudí presne vtedy, keď aktívne hľadajú váš produkt. Pri čistom meraní prináša Search najnižšiu cenu za získanie zákazníka.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Premyslená štruktúra účtu a kľúčových slov</li>
                                <li>• Responsive Search Ads a Smart Bidding (cieľový ROAS)</li>
                                <li>• Rozšírenia o odkazy, volanie a ceny</li>
                            </ul>
                        </div>
                        {/* Performance Max */}
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Performance Max (PMax)</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pre e-shopy dominantný formát roku 2026 — pokrýva Search, Shopping, Display, YouTube, Gmail aj Discover naraz.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Kvalitný produktový feed a asset groups</li>
                                <li>• Vlastná metodika kontroly PMax (search terms)</li>
                                <li>• Oddelenie brand vs. non-brand rozpočtu</li>
                            </ul>
                        </div>
                        {/* Shopping */}
                        <div className={styles.card}>
                            <ShoppingBag className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Google Shopping (nákupy)</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pre e-shopy nutnosť. Fotka, cena a názov obchodu priamo vo výsledkoch vyhľadávania.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Optimalizácia feedu v Merchant Center</li>
                                <li>• Názvy a kategorizácia produktov</li>
                                <li>• Kampane pre viacero krajín naraz</li>
                            </ul>
                        </div>
                        {/* Remarketing */}
                        <div className={styles.card}>
                            <Repeat className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Remarketing a dynamický remarketing</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Približne 90 % transakcií nevznikne pri prvej návšteve. Pripomenieme sa ľuďom, ktorí už prejavili záujem.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Personalizované dynamické bannery</li>
                                <li>• Cielenie podľa času od návštevy</li>
                                <li>• Consent Mode v2 pre EHP</li>
                            </ul>
                        </div>
                        {/* Display */}
                        <div className={styles.card}>
                            <Globe className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Obsahová (Display) reklama</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Obsahová sieť Google zasahuje vyše 90 % používateľov internetu. Ideálna na budovanie povedomia a sezónne kampane.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Responzívne bannery s AI kombináciou</li>
                                <li>• Cielenie na relevantné publiká</li>
                                <li>• Podpora pri zavádzaní novej značky</li>
                            </ul>
                        </div>
                        {/* YouTube */}
                        <div className={styles.card}>
                            <Youtube className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>YouTube reklama (video)</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Najrýchlejšie rastúci formát v Google Ads. Platíte len za zhliadnutia, ktoré divák nepreskočí.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Video kampane v celom ekosystéme Google</li>
                                <li>• Integrácia videa do Performance Max</li>
                                <li>• Cielenie podľa záujmov a zámeru</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What we do differently - E-E-A-T */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Čo robíme inak</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        Kampane sú len špička. Pod ňou je meranie a ekonomika, ktoré rozhodujú o tom, či reklama reálne zarába.
                    </p>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Meranie ako základ</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Nasadzujeme server-side tagging, Enhanced Conversions a Conversion API. Bez nich GA4 zachytí typicky len
                                60–70 % reálnych tržieb — s nimi sa dostávame nad 90 %. Bez čistých dát je optimalizácia len hádanie.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Scale className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ekonomika pred cieľmi</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Skôr než nastavíme ciele, analyzujeme vaše marže, fixné náklady a bod zvratu. Nepozeráme len na ROAS, ale na
                                POAS — skutočný zisk z reklamy po odpočítaní marže a nákladov.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Activity className={styles.cardIcon} style={{ color: '#f59e0b' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Validácia voči tržbám</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Dáta z Google Ads a GA4 každý mesiac porovnávame so skutočnými tržbami v e-shope. Ak sa čísla rozchádzajú,
                                vieme to skôr než vy.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <GitCompare className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Pohľad naprieč kanálmi</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Sledujeme, ako Google Ads spolupracuje s Meta Ads a organickou návštevnosťou. Atribúciu riešime celkovo,
                                nie izolovane podľa jednej platformy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className={styles.section} style={{ marginTop: '2rem' }}>
                    <div style={{ background: '#eff6ff', borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ako prebieha spolupráca?</h2>
                        <div className={styles.grid} style={{ alignItems: 'flex-start', gap: '2rem' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dbeafe' }}>
                                <div style={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>01. Nezáväzný audit</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Hĺbková analýza histórie účtu. Nájdeme miesta, kadiaľ vám utekajú peniaze, a ukážeme potenciál.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dbeafe' }}>
                                <div style={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>02. Nastavenie</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Nastavenie merania konverzií, prepojenie s GA4 a štruktúra kampaní podľa maržovosti produktov.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #dbeafe' }}>
                                <div style={{ color: '#3b82f6', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>03. Škálovanie</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Priebežne optimalizujeme ponuky, dopĺňame vylučujúce slová a testujeme nové reklamy a publiká.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who is it for */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Pre koho je Google Ads vhodná</h2>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <Store className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>E-shopy</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Shopping a PMax s priamo merateľnou návratnosťou z predaja produktov.</p>
                        </div>
                        <div className={styles.card}>
                            <MapPin className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lokálne služby</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Geograficky cielené Search kampane pre zákazníkov vo vašom okolí.</p>
                        </div>
                        <div className={styles.card}>
                            <Building2 className={styles.cardIcon} style={{ color: '#f59e0b' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>B2B firmy</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Kľúčové slová s vysokým zámerom a dlhším rozhodovacím cyklom.</p>
                        </div>
                        <div className={styles.card}>
                            <Globe className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Export do zahraničia</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Kampane pre viacero trhov CEE s lokalizáciou feedu aj reklám.</p>
                        </div>
                    </div>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '2.5rem auto 0', fontSize: '0.95rem' }}>
                        <CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', color: '#10b981', marginRight: '0.4rem' }} />
                        Hráme férovo — ak Google Ads vášmu biznisu nesadne, povieme vám to a odporučíme, kam investovať radšej.
                    </p>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Často kladené otázky o Google reklame</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Koľko stojí Google reklama?</summary>
                            <p className={styles.faqAnswer}>
                                Cena má dve časti: mediálny rozpočet, ktorý ide priamo Googlu, a odmena za správu kampaní. Menšie e-shopy
                                zvyčajne začínajú na 300–500 € mesačne, väčšie projekty sa pohybujú v tisícoch. Presný odhad dostanete po bezplatnej analýze účtu.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Ako dlho trvá, kým začne prinášať výsledky?</summary>
                            <p className={styles.faqAnswer}>
                                Prvé prekliky prídu okamžite. Reálna optimalizácia trvá 2–4 týždne, kým Smart Bidding nazbiera dáta;
                                pri dlhšom rozhodovacom cykle (B2B, prémiové produkty) to môže byť 4–8 týždňov.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Aký je rozdiel medzi Google Ads a SEO?</summary>
                            <p className={styles.faqAnswer}>
                                Google Ads prináša viditeľnosť okamžite (platená pozícia), SEO je dlhodobá investícia do organického rastu.
                                Najlepšie výsledky zvyčajne prináša ich kombinácia.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Spravujete kampane aj pre zahraničné trhy?</summary>
                            <p className={styles.faqAnswer}>
                                Áno. Inzerujeme naprieč regiónom CEE — SK, CZ, HU, PL, RO, DE, AT, HR, SI, IT, FR, BE aj BG — vrátane lokalizácie feedu a znalosti miestnych trhov.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Potrebujem nastavený tracking?</summary>
                            <p className={styles.faqAnswer}>
                                Áno, je to základ. Skôr než spustíme kampane, chceme meranie, ktoré zachytí aspoň 90 % reálnych tržieb.
                                Bez toho by sme optimalizovali naslepo.
                            </p>
                        </details>
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ marginTop: '3rem' }}>
                    <h2 className={styles.ctaTitle}>Nechajte svoje kampane zarábať</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Chcem audit kampaní
                    </Link>
                </div>
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "[{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Google reklama \u2014 spr\u00e1va Google Ads kampan\u00ed\", \"serviceType\": \"Google Ads management\", \"description\": \"Google Ads spravujeme od roku 2012, ro\u010dne cez ne preinvestujeme viac ne\u017e 10 mil. \u20ac naprie\u010d 13 trhmi CEE. Search, PMax, Shopping a remarketing s d\u00f4razom na re\u00e1lne tr\u017eby. Certifikovan\u00fd Google Partner.\", \"provider\": {\"@id\": \"https://starbomedia.sk/#organization\"}, \"areaServed\": \"SK\", \"url\": \"https://starbomedia.sk/google-reklama\"}, {\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Domov\", \"item\": \"https://starbomedia.sk\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Slu\u017eby\", \"item\": \"https://starbomedia.sk/reklama-na-internete\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Google reklama\"}]}, {\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Ko\u013eko stoj\u00ed Google reklama?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Cena m\u00e1 dve \u010dasti: medi\u00e1lny rozpo\u010det, ktor\u00fd ide priamo Googlu, a odmena za spr\u00e1vu kampan\u00ed. Men\u0161ie e-shopy zvy\u010dajne za\u010d\u00ednaj\u00fa na 300\u2013500 \u20ac mesa\u010dne, v\u00e4\u010d\u0161ie projekty sa pohybuj\u00fa v tis\u00edcoch. Presn\u00fd odhad dostanete po bezplatnej anal\u00fdze \u00fa\u010dtu.\"}}, {\"@type\": \"Question\", \"name\": \"Ako dlho trv\u00e1, k\u00fdm za\u010dne prin\u00e1\u0161a\u0165 v\u00fdsledky?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Prv\u00e9 prekliky pr\u00eddu okam\u017eite. Re\u00e1lna optimaliz\u00e1cia trv\u00e1 2\u20134 t\u00fd\u017edne, k\u00fdm Smart Bidding nazbiera d\u00e1ta; pri dlh\u0161om rozhodovacom cykle (B2B, pr\u00e9miov\u00e9 produkty) to m\u00f4\u017ee by\u0165 4\u20138 t\u00fd\u017ed\u0148ov.\"}}, {\"@type\": \"Question\", \"name\": \"Ak\u00fd je rozdiel medzi Google Ads a SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google Ads prin\u00e1\u0161a vidite\u013enos\u0165 okam\u017eite (platen\u00e1 poz\u00edcia), SEO je dlhodob\u00e1 invest\u00edcia do organick\u00e9ho rastu. Najlep\u0161ie v\u00fdsledky zvy\u010dajne prin\u00e1\u0161a ich kombin\u00e1cia.\"}}, {\"@type\": \"Question\", \"name\": \"Spravujete kampane aj pre zahrani\u010dn\u00e9 trhy?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u00c1no. Inzerujeme naprie\u010d regi\u00f3nom CEE \u2014 SK, CZ, HU, PL, RO, DE, AT, HR, SI, IT, FR, BE aj BG \u2014 vr\u00e1tane lokaliz\u00e1cie feedu a znalosti miestnych trhov.\"}}, {\"@type\": \"Question\", \"name\": \"Potrebujem nastaven\u00fd tracking?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u00c1no, je to z\u00e1klad. Sk\u00f4r ne\u017e spust\u00edme kampane, chceme meranie, ktor\u00e9 zachyt\u00ed aspo\u0148 90 % re\u00e1lnych tr\u017eieb. Bez toho by sme optimalizovali naslepo.\"}}]}]" }} />
        </>
    );
}
