import Link from 'next/link';
import {
    Search, TrendingUp, FileText, Link2, Globe, Gauge,
    MapPin, BarChart2, ShieldCheck, Bot, Sparkles, CheckCircle,
    Target, Layers
} from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'SEO optimalizácia pre vyhľadávače — technické SEO, obsah a linkbuilding | Starbomedia',
    description: 'SEO, ktoré sa meria v tržbách, nie v pozíciách. Technický audit, obsahová stratégia, linkbuilding a lokálne SEO pripravené aj na AI Overviews. Skúsenosti naprieč 13 trhmi CEE od roku 2012.',
};

export default function SeoPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 15% 25%, rgba(16, 185, 129, 0.12), transparent 45%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid #d1fae5' }}>
                            <TrendingUp size={16} color="#10b981" />
                            <span style={{ color: '#10b981', fontWeight: 600, fontSize: '0.85rem' }}>ORGANICKÝ RAST OD ROKU 2012</span>
                        </div>
                        <h1 className={styles.title}>SEO, ktoré sa meria v tržbách.</h1>
                        <p className={styles.subtitle}>
                            Organická návštevnosť je najlacnejší zdroj konverzií — ak viete, čo robíte. V roku 2026 už SEO nie je len o kľúčových
                            slovách a odkazoch. Je to o tom, aby váš web dával odpovede, ktorým Google aj AI dôverujú.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: '#10b981', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.4)' }}>
                                Chcem SEO audit
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <Search size={28} color="#10b981" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <TrendingUp size={32} color="#059669" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <Globe size={24} color="#10b981" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Introduction - Dense 2 column with stats box */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Čo sa v SEO zmenilo</h2>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Google ročne robí tisíce úprav a niekoľko veľkých core aktualizácií. Pribudli AI Overviews, prísnejšie
                                hodnotenie dôveryhodnosti a tvrdší postih voči nečítanému obsahu. Generický text prepísaný z konkurencie
                                už nestačí — vyhľadávač aj AI hľadajú weby, ktoré dávajú jasné, faktické a originálne odpovede.
                            </p>
                            <p className={styles.text}>
                                Najčastejšie príčiny, prečo web nerastie:
                            </p>
                            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Pomalé LCP a CLS, vysoké INP (Core Web Vitals)</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Chýbajúca alebo chybná indexácia stránok</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Kanibalizácia kľúčových slov a slabá linková architektúra</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Veľký objem nízkohodnotného, nečítaného obsahu</li>
                            </ul>
                        </div>
                        {/* Stats Box */}
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem' }}>Starbomedia v skratke</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>od 2012</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>V online marketingu</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669' }}>84+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Klientov v starostlivosti</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>13</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Trhov CEE, kde pôsobíme</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f59e0b' }}>10 M€+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ročný ad spend naprieč kanálmi</div>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '1.5rem', lineHeight: 1.5 }}>
                                SEO spájame so znalosťou platených kanálov — dáta z PPC priamo zlepšujú organickú stratégiu.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What SEO includes - 6 pillars */}
                <section className={styles.section} style={{ background: '#fff', padding: '0' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Čo v rámci SEO riešime</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        Technické SEO, obsah a odkazy nie sú oddelené disciplíny. Staviame ich tak, aby každá stránka mala jasný dôvod
                        existencie a dopyt, na ktorý odpovedá.
                    </p>
                    <div className={styles.cardGrid}>
                        {/* Technical SEO */}
                        <div className={styles.card}>
                            <Gauge className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Technické SEO a audit</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Bez čistého technického základu obsah nepomôže. Ideme do hĺbky kódu, nie len do online SEO skóre.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Crawlability, indexácia, server-side rendering</li>
                                <li>• Core Web Vitals (LCP, CLS, INP)</li>
                                <li>• Štruktúrované dáta a hreflang pre viac trhov</li>
                            </ul>
                        </div>
                        {/* Keywords & intent */}
                        <div className={styles.card}>
                            <Search className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Kľúčové slová a zámer</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Nepozeráme len na objem dopytov. Mapujeme zámer vyhľadávania, aby každá stránka odpovedala na to, čo človek naozaj hľadá.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Informačný, navigačný, komerčný a transakčný zámer</li>
                                <li>• Analýza medzery oproti konkurencii</li>
                                <li>• Priradenie dopytov ku konkrétnym URL</li>
                            </ul>
                        </div>
                        {/* Content */}
                        <div className={styles.card}>
                            <FileText className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Obsahová stratégia</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Obsah s originálnymi údajmi, vlastnými skúsenosťami a konkrétnymi benchmarkmi — nie prepísaný z konkurencie.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Obsahový kalendár a cluster stratégia</li>
                                <li>• Pillar stránky a podporné články</li>
                                <li>• Interné prelinkovanie a topická autorita</li>
                            </ul>
                        </div>
                        {/* Linkbuilding */}
                        <div className={styles.card}>
                            <Link2 className={styles.cardIcon} style={{ color: '#f59e0b' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Linkbuilding</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Kvalitné spätné odkazy zostávajú jedným z najsilnejších signálov. Žiadny masový nákup z PBN sietí ani katalógov.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Digitálny PR a odborné publikácie</li>
                                <li>• Partnerské spolupráce s dlhodobým potenciálom</li>
                                <li>• Dôraz na relevanciu, nie na množstvo</li>
                            </ul>
                        </div>
                        {/* Local SEO */}
                        <div className={styles.card}>
                            <MapPin className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lokálne SEO</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pre kamenné prevádzky je lokálne vyhľadávanie často priorita číslo jeden — najmä na mobiloch.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Google Moja Firma (Business Profile)</li>
                                <li>• Lokálne citácie a správa recenzií</li>
                                <li>• Lokalizovaný obsah pre konkrétne mestá</li>
                            </ul>
                        </div>
                        {/* E-commerce SEO */}
                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>SEO pre e-shopy</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Samostatná disciplína — pri tisícoch URL rozhoduje kanonizácia, indexačná stratégia a poriadok v štruktúre.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Produktové stránky a kategórie</li>
                                <li>• Filtrácia a kanonizácia duplicít</li>
                                <li>• Štruktúrované dáta (Product, Offer, AggregateRating)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What we do differently - 2x2 */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Čo robíme inak</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        Pozícia na prvom mieste pre kľúčové slovo s nulovým konverzným potenciálom nemá hodnotu. SEO je investícia a musí sa vrátiť.
                    </p>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <BarChart2 className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Meriame biznis, nie pozície</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Namiesto reportu o 500 kľúčových slovách sledujeme organickú tržbu, konverzie z organickej návštevnosti a podiel
                                na celkovom výkone. Pozície sú len prostriedok, nie cieľ.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Target className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>SEO neoddeľujeme od platených kanálov</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Spravujeme aj Google Ads a Meta Ads, takže poznatky z PPC prenášame do SEO. Ak kľúčové slovo konvertuje v reklame,
                                má zmysel naň robiť aj SEO — a stabilná organická pozícia zasa šetrí rozpočet v platenom.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Bot className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Obsah pripravený na AI</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Google v AI Overviews skladá odpovede z webov, ktorým dôveruje. Optimalizujeme nielen pre klasické vyhľadávanie,
                                ale aj pre generatívne výsledky — sémantickou štruktúrou, Schema.org a jasnými faktickými tvrdeniami.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} style={{ color: '#f59e0b' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Sedliacky rozum namiesto mýtov</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Žiadny keyword stuffing, žiadne záruky „prvej pozície za 30 dní" a žiadny nákup tisícov odkazov z katalógov.
                                SEO je dlhodobá investícia — typicky 4–6 mesiacov. Čokoľvek iné je klam.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className={styles.section} style={{ marginTop: '2rem' }}>
                    <div style={{ background: '#ecfdf5', borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ako prebieha spolupráca?</h2>
                        <div className={styles.cardGrid} style={{ alignItems: 'flex-start' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #d1fae5' }}>
                                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>01. Úvodná analýza</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Nezáväzne, do 2–3 dní. Rýchly pohľad na indexáciu, viditeľnosť, technické bloky a najväčšie príležitosti.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #d1fae5' }}>
                                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>02. Komplexný audit</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Technika, obsah, kľúčové slová, konkurencia a návrh štruktúry. Výstupom je akčný dokument, nie 50-stranové PDF.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #d1fae5' }}>
                                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>03. Implementácia</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Úpravy nasadíme sami (ak máme prístup k CMS) alebo s vašimi vývojármi. Každá zmena má prioritu a očakávaný dopad.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #d1fae5' }}>
                                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>04. Obsahová produkcia</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Tvorba a revízia obsahu, ktorý buduje topickú autoritu podľa schválenej obsahovej stratégie.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #d1fae5' }}>
                                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>05. Monitoring a reporting</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Mesačný report s vývojom pozícií, organickej návštevnosti a konverzií — metriky orientované na biznis.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #d1fae5' }}>
                                <div style={{ color: '#10b981', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>06. Priebežné ladenie</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>SEO nie je jednorazová akcia. Reagujeme na core aktualizácie, konkurenciu a vývoj dopytov v čase.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who is it for - 2x2 */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Pre koho je SEO vhodné</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        SEO dáva zmysel tam, kde zákazníci aktívne hľadajú váš produkt alebo službu cez Google — a kde viete na dopyt odpovedať lepšie ako konkurencia.
                    </p>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>E-shopy</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Kategórie a produktové stránky s priamo merateľným prínosom pre organickú tržbu.</p>
                        </div>
                        <div className={styles.card}>
                            <Globe className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>B2B služby</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Dlhší rozhodovací cyklus, kde rozhoduje odbornosť a dôveryhodnosť obsahu (E-E-A-T).</p>
                        </div>
                        <div className={styles.card}>
                            <MapPin className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lokálne prevádzky</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Kamenné biznisy, ktoré ťažia z lokálneho vyhľadávania a Google Moja Firma.</p>
                        </div>
                        <div className={styles.card}>
                            <Sparkles className={styles.cardIcon} style={{ color: '#f59e0b' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>SaaS a online produkty</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Témy s vysokým potenciálom, kde organický kanál škáluje bez rastúcej ceny za klik.</p>
                        </div>
                    </div>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '680px', margin: '2.5rem auto 0', fontSize: '0.95rem' }}>
                        <CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', color: '#10b981', marginRight: '0.4rem' }} />
                        Hráme férovo — ak potrebujete výsledky okamžite, povieme vám to. Vtedy začíname Google Ads alebo Meta Ads a SEO budujeme paralelne ako dlhodobý kanál.
                    </p>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Často kladené otázky o SEO</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Za ako dlho uvidím výsledky zo SEO?</div>
                            <p className={styles.faqAnswer}>
                                Pri našich klientoch zvyčajne hovoríme o 4–6 mesiacoch do prvých merateľných zlepšení v organickej návštevnosti.
                                Závisí to od stavu webu, konkurenčnosti segmentu a rýchlosti implementácie. Technické opravy (indexácia, rýchlosť)
                                sa prejavia skôr, obsahová a linková stratégia si vyžaduje čas.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Garantujete prvú pozíciu v Google?</div>
                            <p className={styles.faqAnswer}>
                                Nie. Nikto, kto to garantuje, nehovorí pravdu — Google používa stovky rankingových faktorov a algoritmus sa neustále
                                vyvíja. Garantujeme transparentný postup, merateľné výsledky a pravidelný reporting na vyhodnotenie návratnosti.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Ako SEO ovplyvní AI Overviews v Google?</div>
                            <p className={styles.faqAnswer}>
                                AI Overviews čerpajú z webov, ktoré Google považuje za dôveryhodné zdroje. Originálne, štruktúrované a fakticky presné
                                informácie zvyšujú šancu na zaradenie do AI odpovede — a tým aj viditeľnosť bez tradičnej pozície v top 10. Generický
                                obsah bez pridanej hodnoty generatívne výsledky spravidla obchádzajú.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Oplatí sa robiť SEO, aj keď bežia Google Ads?</div>
                            <p className={styles.faqAnswer}>
                                Áno, ideálne súčasne. Google Ads dáva okamžitú návštevnosť a dáta o konverziách, SEO buduje dlhodobý organický kanál.
                                Kombinácia oboch zvyčajne znižuje celkovú cenu za získanie zákazníka, pretože sa navzájom dopĺňajú a delia sa o dáta.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Čo ak mám na webe veľa starého obsahu?</div>
                            <p className={styles.faqAnswer}>
                                Starý, neaktuálny obsah môže aktívne škodiť — Helpful Content Update postihuje weby s veľkým podielom nízkohodnotných
                                stránok. V audite vyhodnotíme každú stránku: čo aktualizovať, čo zlúčiť a čo odstrániť. Vyčistenie obsahu (content
                                pruning) býva jedným z najrýchlejších spôsobov, ako zlepšiť viditeľnosť.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Robíte SEO aj pre zahraničné trhy?</div>
                            <p className={styles.faqAnswer}>
                                Áno. Máme skúsenosti s medzinárodným SEO vrátane hreflang konfigurácie, lokalizácie obsahu a technickej optimalizácie
                                pre viaceré jazykové mutácie. Pôsobíme naprieč 13 trhmi strednej a východnej Európy — okrem SK a CZ napríklad aj HU, PL, RO, DE, AT, HR a SI.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Koľko stojí SEO?</div>
                            <p className={styles.faqAnswer}>
                                Cena je individuálna a závisí od veľkosti webu, konkurenčnosti segmentu a rozsahu prác. Jednorazový audit pre menší web
                                začína na stovkách eur; dlhodobá mesačná spolupráca pokrýva technickú optimalizáciu, obsahovú produkciu aj linkbuilding.
                                Konkrétnu ponuku s väzbou na očakávaný biznisový prínos pripravíme po úvodnej analýze.
                            </p>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ background: '#ecfdf5', borderColor: '#6ee7b7', marginTop: '3rem' }}>
                    <h2 className={styles.ctaTitle}>Kde sa váš web nachádza dnes?</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: '#10b981', border: 'none', padding: '1rem 3rem' }}>
                        Chcem SEO audit
                    </Link>
                </div>
            </div>
        </>
    );
}
