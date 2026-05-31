import Link from 'next/link';
import {
    Search, Share2, TrendingUp, Youtube, BarChart3, ShoppingBag,
    ShieldCheck, Activity, Scale, GitCompare, Globe,
    Store, MapPin, Building2, ArrowRight, CheckCircle, Sparkles
} from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'Reklama na internete — výkonnostný marketing meraný na tržbách | Starbomedia',
    description: 'Online reklama, ktorá sa meria na reálnych tržbách, nie na preklikoch. Google Ads, Meta Ads, SEO, YouTube, analytika aj cenové porovnávače pod jednou strechou. Od roku 2012, viac než 10 mil. € ročného rozpočtu naprieč 13 trhmi CEE.',
    keywords: 'reklama na internete, výkonnostný marketing, online reklama, PPC reklama, Google Ads, Meta Ads, SEO, marketingová agentúra',
};

export default function ReklamaNaInternetePage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.12), transparent 42%), radial-gradient(circle at 90% 80%, rgba(249, 115, 22, 0.10), transparent 45%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f5f3ff', padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: '1px solid #ede9fe' }}>
                            <Sparkles size={16} color="#8b5cf6" />
                            <span style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '0.85rem' }}>VÝKONNOSTNÝ MARKETING OD ROKU 2012</span>
                        </div>
                        <h1 className={styles.title}>Reklama na internete, ktorá sa meria na reálnych tržbách</h1>
                        <p className={styles.subtitle}>
                            Online reklamu spravujeme od roku 2012 a ročne cez účty klientov preinvestujeme viac než 10 miliónov eur
                            naprieč 13 trhmi strednej a východnej Európy. Namiesto pekných reportov s ROAS validujeme dáta každý mesiac
                            voči skutočným tržbám vo vašom e-shope.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #8b5cf6, #f97316)', boxShadow: '0 4px 14px 0 rgba(139, 92, 246, 0.4)' }}>
                                Chcem audit zdarma
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.18), rgba(249, 115, 22, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <Search size={28} color="#8b5cf6" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <TrendingUp size={32} color="#f97316" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <Share2 size={24} color="#10b981" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Intro — prečo záleží, kto vám spravuje reklamu (2 columns + stats box) */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Prečo záleží na tom, kto vám spravuje reklamu</h2>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Kampaň podľa návodu na YouTube dnes nastaví takmer ktokoľvek. Skutočná hodnota je inde: pochopiť, prečo
                                GA4 ukazuje o desiatky percent nižšie tržby ako pokladňa, prečo Meta pripisuje konverzie, ktoré by nastali
                                aj bez reklamy, alebo prečo nízka cena za akvizíciu ešte neznamená zisk.
                            </p>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Každú spoluprácu preto začíname auditom. Pýtame sa na maržu, prevádzkové náklady, bod zvratu a rozhodovací
                                cyklus zákazníka — a až potom nastavujeme zmysluplné ciele. Optimalizovať náklady na akvizíciu bez znalosti
                                marže je ako ladiť motor bez tachometra.
                            </p>
                            <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <li className={styles.featureItem}><CheckCircle size={18} style={{ color: '#10b981', flexShrink: 0 }} /> Online reklamu vidíme zhora — naprieč všetkými kanálmi naraz</li>
                                <li className={styles.featureItem}><CheckCircle size={18} style={{ color: '#10b981', flexShrink: 0 }} /> Rozhodujeme sa podľa dát, nie podľa pocitov</li>
                                <li className={styles.featureItem}><CheckCircle size={18} style={{ color: '#10b981', flexShrink: 0 }} /> Reportujeme čísla, ktoré ovplyvňujú váš biznis</li>
                            </ul>
                        </div>
                        {/* Stats Box */}
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem' }}>Starbomedia v skratke</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#8b5cf6' }}>10 M€+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ročný rozpočet (CEE)</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f97316' }}>od 2012</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Na trhu online reklamy</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>13</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Trhov CEE, kde inzerujeme</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#3b82f6' }}>84+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Klientov, 269+ kampaní</div>
                                </div>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2rem', lineHeight: 1.5 }}>
                                Certifikovaný Google Partner a Blue Winston Certified Partner. Tím 7+ špecialistov.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Rozcestník — služby online reklamy (6 cards, each links to a subpage) */}
                <section className={styles.section} style={{ background: '#fff', padding: '0' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Služby online reklamy, ktoré poskytujeme</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 3rem' }}>
                        Každý kanál má vlastné pravidlá aj atribučné modely. Nekombinujeme náhodne — mix staviame podľa toho, kde sa
                        rozhoduje váš zákazník. Kliknite na službu a pozrite si detail.
                    </p>
                    <div className={styles.cardGrid}>
                        {/* Google Ads */}
                        <Link href="/google-reklama" className={styles.card} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                            <Search className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Google Ads</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: '1rem' }}>
                                Najpodstatnejší kanál pre e-shopy a služby, kde zákazník aktívne hľadá. Search, Performance Max, Shopping,
                                Display, Demand Gen aj YouTube — s vlastnou metodikou kontroly PMax.
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#8b5cf6', fontWeight: 600, fontSize: '0.9rem' }}>
                                Prejsť na Google reklamu <ArrowRight size={16} />
                            </span>
                        </Link>
                        {/* Meta Ads */}
                        <Link href="/facebook-reklama" className={styles.card} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                            <Share2 className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Facebook a Instagram (Meta)</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: '1rem' }}>
                                Plnohodnotná výkonnostná platforma s vlastným algoritmom Andromeda. Feed, Reels, Stories, Advantage+
                                Shopping aj dynamický remarketing — vrátane Conversion API pre presnejšie meranie.
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#8b5cf6', fontWeight: 600, fontSize: '0.9rem' }}>
                                Prejsť na Meta reklamu <ArrowRight size={16} />
                            </span>
                        </Link>
                        {/* SEO */}
                        <Link href="/seo" className={styles.card} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                            <TrendingUp className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>SEO</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: '1rem' }}>
                                Dlhodobá investícia do organickej viditeľnosti bez platenia za klik. Technické SEO, on-page optimalizácia
                                aj obsahová stratégia pripravená na klasický aj generatívny AI search.
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#8b5cf6', fontWeight: 600, fontSize: '0.9rem' }}>
                                Prejsť na SEO <ArrowRight size={16} />
                            </span>
                        </Link>
                        {/* YouTube */}
                        <Link href="/youtube-reklama" className={styles.card} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                            <Youtube className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>YouTube reklama</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: '1rem' }}>
                                Druhý najväčší vyhľadávač na svete. Video kampane sa zobrazujú naprieč celým ekosystémom Google a platíte
                                len za zhliadnutia, ktoré divák nepreskočí. V kombinácii s remarketingom skracujú rozhodovanie.
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#8b5cf6', fontWeight: 600, fontSize: '0.9rem' }}>
                                Prejsť na YouTube reklamu <ArrowRight size={16} />
                            </span>
                        </Link>
                        {/* Webová analytika a tracking */}
                        <Link href="/analyza-webu" className={styles.card} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                            <BarChart3 className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Webová analytika a tracking</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: '1rem' }}>
                                To, čo nás odlišuje od väčšiny agentúr. GA4, server-side tagging, Enhanced Conversions a Consent Mode v2 —
                                meranie, ktorému môžete veriť. Bez čistých dát je optimalizácia len hádanie.
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#8b5cf6', fontWeight: 600, fontSize: '0.9rem' }}>
                                Prejsť na analytiku a tracking <ArrowRight size={16} />
                            </span>
                        </Link>
                        {/* Cenové porovnávače */}
                        <Link href="/cenove-porovnavace" className={styles.card} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                            <ShoppingBag className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Cenové porovnávače</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: '1rem' }}>
                                Pre slovenské a české e-shopy stále dôležitý zdroj objednávok. Heureka, Google Shopping a ďalšie
                                spravujeme rovnako ako Google Ads — s dôrazom na kvalitu feedu, bid management a reálnu návratnosť.
                            </p>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#8b5cf6', fontWeight: 600, fontSize: '0.9rem' }}>
                                Prejsť na cenové porovnávače <ArrowRight size={16} />
                            </span>
                        </Link>
                    </div>
                </section>

                {/* Čo robíme inak — E-E-A-T (4 cards in gridTwo) */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Čo robíme inak</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 3rem' }}>
                        Kampane sú len špička. Pod ňou je meranie a ekonomika, ktoré rozhodujú o tom, či reklama reálne zarába.
                    </p>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Meranie ako základ</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Štandardný GA4 zachytí typicky len 60–70 % reálnych tržieb — zvyšok sa stratí na adblockeroch, cookie
                                reštrikciách a Safari ITP. So server-side taggingom, Enhanced Conversions a Conversion API sa dostávame
                                na 90–94 % zhodu medzi GA4 a pokladňou. Túto zhodu pravidelne overujeme u každého klienta.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Scale className={styles.cardIcon} style={{ color: '#f97316' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Ekonomika pred cieľmi</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Skôr než nastavíme ciele, analyzujeme vaše marže, fixné náklady a bod zvratu. Nepozeráme len na ROAS, ale
                                na POAS — skutočný zisk z reklamy po odpočítaní marže a nákladov. Cieľom nie je nízka cena za klik, ale
                                zisk na konci mesiaca.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Activity className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Validácia voči tržbám</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Dáta z Google Ads, Meta a GA4 každý mesiac porovnávame so skutočnými tržbami v e-shope. Ak sa čísla
                                rozchádzajú, vieme to skôr než vy — a vieme prečo.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <GitCompare className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Pohľad naprieč kanálmi</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Sledujeme, ako spolupracuje Google Ads, Meta Ads, SEO aj cenové porovnávače. Atribúciu riešime celkovo,
                                nie izolovane podľa jednej platformy — inak by sa kanály pripisovali ten istý predaj.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ako prebieha spolupráca (process) */}
                <section className={styles.section} style={{ marginTop: '2rem' }}>
                    <div style={{ background: '#f5f3ff', borderRadius: '24px', padding: '3rem' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ako prebieha spolupráca</h2>
                        <div className={styles.grid} style={{ alignItems: 'flex-start', gap: '1.5rem' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #ede9fe' }}>
                                <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>01. Audit zdarma</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Skontrolujeme kampane, tracking, web aj konkurenciu. Dostanete konkrétnu spätnú väzbu s odporúčaniami, nie generické PDF.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #ede9fe' }}>
                                <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>02. Stratégia a ciele</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Na základe auditu, marže a nákladov navrhneme stratégiu s reálnymi cieľmi. Nesľubujeme „prvé miesto na Google".</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #ede9fe' }}>
                                <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>03. Implementácia</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Nastavíme kampane, tracking a reporting. Pred spustením overíme, že meranie konverzií funguje správne.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #ede9fe' }}>
                                <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>04. Optimalizácia</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Úpravy ponúk, vylučujúce slová, testovanie kreatív a kontrola rozpočtov. Denná až týždenná práca, nie „nastav a zabudni".</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: '1px solid #ede9fe' }}>
                                <div style={{ color: '#8b5cf6', fontWeight: 800, fontSize: '1.4rem', marginBottom: '0.5rem' }}>05. Reporting a validácia</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Reportujeme tržby, maržu, náklady na akvizíciu a POAS. Každý mesiac validujeme dáta voči reálnym tržbám z e-shopu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pre koho pracujeme (4 cards in gridTwo) */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Pre koho pracujeme</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 3rem' }}>
                        Pracujeme s e-shopmi a firmami, ktoré online marketing berú vážne a chcú rásť na základe dát.
                    </p>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <Store className={styles.cardIcon} style={{ color: '#8b5cf6' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>E-shopy naprieč segmentmi</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Elektronika, nábytok, šport, galantéria, zdravé doplnky, fotovoltika aj FMCG — všade, kde sa návratnosť dá merať.</p>
                        </div>
                        <div className={styles.card}>
                            <MapPin className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lokálne firmy a služby</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Geograficky cielené kampane pre zákazníkov vo vašom okolí, s dôrazom na merateľné dopyty a hovory.</p>
                        </div>
                        <div className={styles.card}>
                            <Globe className={styles.cardIcon} style={{ color: '#f97316' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Export do zahraničia</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>13 trhov CEE — SK, CZ, HU, PL, RO, DE, AT, HR, SI, IT, FR, BE aj BG. Lokalizácia feedov a multi-country PMax štruktúry.</p>
                        </div>
                        <div className={styles.card}>
                            <Building2 className={styles.cardIcon} style={{ color: '#3b82f6' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Rastúce značky</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Od lokálnych e-shopov po medzinárodné značky, ktoré chcú stáť na dátach a transparentnom prístupe, nie na pocitoch.</p>
                        </div>
                    </div>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '660px', margin: '2.5rem auto 0', fontSize: '0.95rem' }}>
                        <CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', color: '#10b981', marginRight: '0.4rem' }} />
                        Hráme férovo — ak niektorý kanál vášmu biznisu nesadne, povieme vám to a odporučíme, kam investovať radšej.
                    </p>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Často kladené otázky o reklame na internete</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Koľko stojí reklama na internete?</div>
                            <p className={styles.faqAnswer}>
                                Cena závisí od kanálu, segmentu a cieľov. Pri Google Ads a Meta Ads sa mediálny rozpočet pohybuje od
                                niekoľkých stoviek eur mesačne pri menších e-shopoch po desaťtisíce pri väčších projektoch. K tomu sa
                                pripočítava odmena za správu kampaní. Po bezplatnom audite dostanete konkrétny odhad vrátane očakávanej
                                návratnosti na základe benchmarkov z vášho segmentu.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Ktorý kanál online reklamy je pre mňa najvhodnejší?</div>
                            <p className={styles.faqAnswer}>
                                Závisí od toho, čo predávate a komu. E-shopy s aktívnym dopytom (ľudia hľadajú váš produkt) zvyčajne
                                začínajú s Google Ads — Search a Shopping kampaňami. Ak budujete značku alebo predávate impulzívny tovar,
                                efektívnejšie môžu byť Meta Ads. Pre väčšinu klientov odporúčame kombináciu oboch: Google pokrýva aktívny
                                dopyt, Meta buduje povedomie a remarketing.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Prečo spolupracovať s agentúrou namiesto toho, aby som si reklamu spravoval sám?</div>
                            <p className={styles.faqAnswer}>
                                Nastaviť kampaň vie dnes takmer každý. Vedieť však, prečo GA4 ukazuje iné čísla ako Google Ads, prečo Meta
                                pripisuje konverzie, ktoré by nastali aj bez reklamy, alebo kedy škálovať rozpočet a kedy zastaviť — to
                                vyžaduje roky praxe, prístup k benchmarkom z desiatok účtov a hlboké pochopenie atribúcie. Agentúra vám
                                ušetrí čas pre vlastný biznis a zníži riziko investovania do niečoho, čo reálne nefunguje.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Ako dlho trvá, kým uvidím výsledky?</div>
                            <p className={styles.faqAnswer}>
                                Pri Google Ads prídu prvé prekliky a konverzie zvyčajne v priebehu dní, stabilný výkon po optimalizácii
                                Smart Biddingu po 2–4 týždňoch. Meta Ads potrebujú obdobie učenia algoritmu, typicky 1–2 týždne na ad set.
                                SEO je dlhodobá investícia — prvé viditeľné výsledky po 2–3 mesiacoch, plný potenciál po 6–12 mesiacoch.
                                Vždy záleží na konkurencii, rozpočte a východiskovom stave.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Ako sa meria úspešnosť online reklamy?</div>
                            <p className={styles.faqAnswer}>
                                Najdôležitejšia je reálna návratnosť investície — koľko eur vám reklama priniesla v tržbách po odpočítaní
                                nákladov. Nepozeráme len na ROAS z platformy (ten býva nadhodnotený), ale validujeme voči skutočným tržbám
                                z e-shopu. Sledujeme POAS (zisk z reklamy), cenu za akvizíciu, podiel marketingových nákladov na marži a
                                trend v čase.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Spravujete kampane aj v zahraničí?</div>
                            <p className={styles.faqAnswer}>
                                Áno. Inzerujeme v 13 krajinách regiónu CEE: SK, CZ, HU, PL, RO, DE, AT, HR, SI, IT, FR, BE aj BG. Máme
                                skúsenosti s lokalizáciou produktových feedov, multi-country PMax štruktúrami a regionálnymi špecifikami
                                biddingu. Pre klientov expandujúcich do zahraničia pripravujeme aj analýzu trhu a konkurencie v cieľovej krajine.
                            </p>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ marginTop: '3rem' }}>
                    <h2 className={styles.ctaTitle}>Začnime bezplatným auditom</h2>
                    <p className={styles.text} style={{ maxWidth: '620px', margin: '0 auto 2rem' }}>
                        Ak máte pocit, že vaše kampane by mohli fungovať lepšie, alebo si nie ste istí, či váš dodávateľ robí správne veci,
                        ozvite sa. Dostanete nezáväznú analýzu s konkrétnymi odporúčaniami — žiadne dlhé prezentácie ani sľuby bez podkladov,
                        len dáta a úprimný pohľad.
                    </p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem', background: 'linear-gradient(135deg, #8b5cf6, #f97316)' }}>
                        Chcem bezplatný audit
                    </Link>
                </div>
            </div>
        </>
    );
}
