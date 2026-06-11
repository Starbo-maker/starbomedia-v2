import Link from 'next/link';
import {
    Facebook, Instagram, Heart, ShoppingBag, Layers, Video,
    Megaphone, Users, Sparkles, ShieldCheck, Gauge, RefreshCw,
    LineChart, Image as ImageIcon, Repeat, CheckCircle
} from 'lucide-react';
import styles from '../service.module.css';

const ACCENT = '#ec4899';
const ACCENT_SOFT = '#fdf2f8';
const ACCENT_BORDER = '#fbcfe8';
const PURPLE = '#8b5cf6';

export const metadata = {
    title: 'Facebook a Instagram reklama — správa Meta Ads na mieru | Starbomedia',
    description: 'Meta Ads (Facebook a Instagram) spravujeme od roku 2012 naprieč 13 trhmi CEE. Conversion API, Advantage+ kampane, kreatíva ako hlavný faktor a meranie na reálnych tržbách — nie na nafúknutých číslach z Ads Managera.',
};

export default function FacebookAdsPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.12), transparent 55%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: ACCENT_SOFT, padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: `1px solid ${ACCENT_BORDER}` }}>
                            <Sparkles size={16} color={ACCENT} />
                            <span style={{ color: ACCENT, fontWeight: 600, fontSize: '0.85rem' }}>FACEBOOK A INSTAGRAM REKLAMA</span>
                        </div>
                        <h1 className={styles.title}>Meta reklama, ktorá sa meria na reálnych tržbách.</h1>
                        <p className={styles.subtitle}>
                            Facebook a Instagram reklamu spravujeme od roku 2012 a dnes ju riešime naprieč 13 trhmi
                            strednej a východnej Európy. V ére algoritmu Andromeda nerozhoduje publikum, ale kreatíva
                            a čisté meranie. Nepozeráme na čísla z Ads Managera — pozeráme na to, čo reálne prišlo na účet.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${PURPLE} 100%)`, boxShadow: '0 4px 14px 0 rgba(236, 72, 153, 0.4)' }}>
                                Chcem audit Meta Ads
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.18), rgba(139, 92, 246, 0.15))' }} />

                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <Facebook size={28} color="#1877f2" />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Instagram size={32} color={ACCENT} />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <Heart size={24} color={PURPLE} />
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
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>„Facebook reklama nám nefunguje“</h2>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Túto vetu počúvame často. Väčšinou nie je problém v platforme, ale v dvoch veciach: chýbajúce
                                server-side meranie a kreatíva, ktorá algoritmu nedáva s čím pracovať. Meta v roku 2026
                                funguje ako výkonnostná platforma s vlastným AI algoritmom — a tomu treba prispôsobiť celý prístup.
                            </p>
                            <p className={styles.text}>
                                Najčastejšie chyby, ktoré vidíme pri auditoch Meta účtov:
                            </p>
                            <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Kampane riadené cez tlačidlo „Propagovať príspevok“ namiesto Business Managera</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Chýbajúce Conversion API — platforma optimalizuje na neúplných dátach</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Jedna reklama v troch veľkostiach namiesto reálnej diverzity kreatív</li>
                                <li className={styles.featureItem}><span style={{ color: '#ef4444', fontWeight: 800 }}>✖</span> Rozhodovanie podľa čísel z Ads Managera bez validácie voči tržbám</li>
                            </ul>
                        </div>
                        {/* Stats Box */}
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem' }}>Starbomedia v skratke</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: ACCENT }}>10 M€+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Ročný ad spend (CEE)</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: PURPLE }}>od 2012</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Skúseností s reklamou</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1877f2' }}>13</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Trhov CEE, kde inzerujeme</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>84+</div>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Spokojných klientov</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What changed in 2026 - E-E-A-T */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Čo sa v Meta Ads zmenilo</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
                        Pravidlá hry sa za posledný rok výrazne posunuli. Kto ich nepozná, diví sa, prečo mu „klesli“
                        konverzie — hoci tržby zostali rovnaké. Tri zmeny, ktoré dnes rozhodujú o výsledku:
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <Sparkles className={styles.cardIcon} style={{ color: ACCENT }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Algoritmus Andromeda — kreatíva je nový targeting</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Po starom ste definovali publikum a Meta mu zobrazila reklamu. Dnes algoritmus rozumie obsahu
                                kreatívy a sám hľadá ľudí, ktorí na ňu zareagujú. Manuálne cielenie na záujmy stráca význam —
                                Advantage+ Audience s kvalitnou kreatívou často prekonáva ručne nastavené publiká.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <LineChart className={styles.cardIcon} style={{ color: PURPLE }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Zmeny atribučných okien</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Meta postupne zúžila atribučné okná a predefinovala, čo sa počíta ako preklik. Reportované
                                konverzie u mnohých účtov klesli cez noc — bez akejkoľvek zmeny kampaní. Nešlo o výkon, ale
                                o metodiku merania. Treba vedieť, čo sa zmenilo, inak sa rozhoduje podľa skreslených čísel.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Conversion API už nie je voliteľné</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Samotný Meta Pixel blokujú adblockery, Safari ITP aj používatelia, ktorí odmietnu cookies.
                                Bez server-side merania cez Conversion API prichádzate o značnú časť konverzných signálov a
                                algoritmus optimalizuje naslepo. Meta podľa vlastných dát uvádza nižšiu cenu za výsledok u
                                inzerentov, ktorí používajú Pixel a CAPI naraz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Campaign Types - 6 cards */}
                <section className={styles.section} style={{ background: '#fff', padding: '0' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Typy Meta kampaní, ktoré spravujeme</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        Mix formátov staviame podľa toho, čo má biznis dosiahnuť — od predaja z katalógu cez budovanie
                        povedomia až po zber dopytov. Nič nenastavujeme náhodne.
                    </p>
                    <div className={styles.cardGrid}>
                        {/* Advantage+ Shopping */}
                        <div className={styles.card}>
                            <ShoppingBag className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Advantage+ nákupné kampane</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Odpoveď Mety na Google Performance Max. AI kampaň, ktorá optimalizuje cielenie, umiestnenia aj rozpočet naraz. Pre e-shopy s katalógom často najefektívnejší formát.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Kvalitný katalóg a segmentácia produktov</li>
                                <li>• Limity na nových vs. existujúcich zákazníkov</li>
                                <li>• Strážime, aby rozpočet nezožral remarketing</li>
                            </ul>
                        </div>
                        {/* Feed & Carousel */}
                        <div className={styles.card}>
                            <Layers className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Feed a carousel reklamy</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Klasika, ktorá zostáva základom — najmä pre e-shopy, kde treba ukázať produkt, cenu a jasnú výzvu k akcii. Carousel zobrazí viacero produktov či uhlov v jednej reklame.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Mix formátov v každej reklamnej zostave</li>
                                <li>• Rôzne hook stratégie (produkt, benefit, dôkaz)</li>
                                <li>• Optimalizácia na predaj, nie na prekliky</li>
                            </ul>
                        </div>
                        {/* Reels & Stories */}
                        <div className={styles.card}>
                            <Video className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Reels a Stories</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Najrýchlejšie rastúce umiestnenie na Mete a zároveň miesto s najnižším CPM. Vertikálne video (9:16), kde rozhodujú prvé tri sekundy.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Okamžitý hook — vizuálny aj textový</li>
                                <li>• Autentický UGC formát namiesto „dokonalej“ produkcie</li>
                                <li>• Storytelling, nie len záber produktu s cenou</li>
                            </ul>
                        </div>
                        {/* Dynamic remarketing */}
                        <div className={styles.card}>
                            <Repeat className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Dynamický remarketing</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pripomenieme ľuďom presne tie produkty, ktoré si prezerali. Z pohľadu ROAS jeden z najsilnejších formátov — ale len ak vieme oddeliť reálny prínos od preceneného.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Personalizované produktové reklamy</li>
                                <li>• Realistické atribučné okno (7-day click)</li>
                                <li>• Validácia inkrementality voči tržbám</li>
                            </ul>
                        </div>
                        {/* Lead Generation */}
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Kampane na zber dopytov</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pre firmy, ktoré nepredávajú online, ale generujú dopyty — B2B služby, nehnuteľnosti, vzdelávanie, financie. Natívny formulár vyplní používateľ jedným klikom.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Natívne formuláre priamo v aplikácii</li>
                                <li>• Test formulárov vs. pristávacia stránka</li>
                                <li>• Optimalizácia na kvalitný dopyt, nie počet</li>
                            </ul>
                        </div>
                        {/* Awareness / Brand */}
                        <div className={styles.card}>
                            <Megaphone className={styles.cardIcon} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>Budovanie povedomia značky</h3>
                            <p className={styles.text} style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                                Pri launchoch nových produktov a sezónnych akciách. Video a Reels majú na Mete najlepší dosah za najnižšiu cenu za tisíc zobrazení.
                            </p>
                            <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                <li>• Tvorba dopytu tam, kde ešte neexistuje</li>
                                <li>• Video formáty pre maximálny dosah</li>
                                <li>• Prepojenie s remarketingom a výkonom</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What we do differently - 4 cards in gridTwo (2x2) */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Čo robíme inak</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        Kampane sú len špička. Pod nimi je meranie, kreatíva a poctivá interpretácia dát — to rozhoduje,
                        či reklama reálne zarába, alebo len pekne vyzerá v reporte.
                    </p>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <ShieldCheck className={styles.cardIcon} style={{ color: ACCENT }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Conversion API ako podmienka</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Kampane nespúšťame bez funkčného Conversion API. Ak ho nemáte, implementujeme ho ako prvý
                                krok — pre menšie e-shopy cez natívny one-click setup, pre väčšie cez server-side container
                                v Google Tag Manageri. Bez čistých dát je optimalizácia len hádanie.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <Gauge className={styles.cardIcon} style={{ color: PURPLE }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Sledujeme kvalitu merania (EMQ)</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Priebežne kontrolujeme Event Match Quality skóre v Events Manageri. Keď klesne pod zdravú
                                úroveň, okamžite hľadáme príčinu — chýbajúce parametre, problém s dedupláciou alebo
                                hashovaním. Kvalitné dáta sú základ, na ktorom stojí všetko ostatné.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <RefreshCw className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Kreatíva v iteráciách, nie raz</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Každý mesiac testujeme nové kreatívy — rôzne uhly pohľadu, formáty a hooky. Identifikujeme,
                                čo funguje, a staviame na tom ďalšie variácie. Jedna „víťazná“ reklama dlhodobo nevydrží;
                                únava kreatívy je v Meta Ads najväčší nepriateľ stability.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <LineChart className={styles.cardIcon} style={{ color: '#1877f2' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Inkrementalita nad márnymi číslami</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>
                                Neriešime, koľko konverzií Meta reportuje, ale koľko z nich by sa stalo aj bez reklamy. Dáta
                                každý mesiac porovnávame s reálnymi tržbami a so správaním ostatných kanálov. Pri pochybnosti
                                navrhneme aj radikálny test — kanál na pár týždňov vypnúť a sledovať dopad na tržby.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Creative is more important than targeting - callout band */}
                <section className={styles.section} style={{ marginTop: '1rem' }}>
                    <div style={{ background: ACCENT_SOFT, borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)', border: `1px solid ${ACCENT_BORDER}` }}>
                        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                            <Sparkles size={32} color={ACCENT} style={{ marginBottom: '1rem' }} />
                            <h2 style={{ marginBottom: '1rem' }}>Kreatíva dnes rozhoduje viac než cielenie</h2>
                            <p className={styles.text} style={{ marginBottom: '0.5rem' }}>
                                Kým kedysi bol úspech kampane prevažne o cielení, dnes je to naopak. Meta analyzuje obsah
                                reklamy a podľa neho hľadá ľudí, ktorí zareagujú. Pri slabej kreatíve nepomôže ani najlepšie
                                publikum — algoritmus jednoducho nenájde dosť ľudí, ktorým ju oplatí zobraziť.
                            </p>
                        </div>
                        <div className={styles.gridTwo} style={{ marginTop: '2.5rem' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Rôzne uhly pohľadu</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Ten istý produkt cez rôzne motivátory — cena, kvalita, sociálny dôkaz, porovnanie s alternatívou.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Rôzne formáty</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Statický obrázok, carousel, krátke video aj Reels a UGC — nie jedna reklama v troch veľkostiach.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Rôzne hook stratégie</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Otázka, prekvapivý fakt, before/after, problém a riešenie alebo odporúčanie zákazníka.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Iterácia podľa dát</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Z víťazných prvkov (hook, vizuál, výzva) skladáme nové variácie a držíme stály prísun čerstvých kreatív.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className={styles.section} style={{ marginTop: '2rem' }}>
                    <div style={{ background: '#f8fafc', borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ako prebieha spolupráca?</h2>
                        <div className={styles.grid} style={{ alignItems: 'flex-start', gap: '2rem' }}>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                <div style={{ color: ACCENT, fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>01. Nezáväzný audit</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Prejdeme účet, meranie aj kreatívy. Skontrolujeme EMQ skóre, atribučné nastavenia a štruktúru kampaní a ukážeme, kde je potenciál.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                <div style={{ color: ACCENT, fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>02. Meranie a štruktúra</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Nasadíme Conversion API, nastavíme čisté atribučné okná a postavíme štruktúru kampaní podľa cieľov a maržovosti.</p>
                            </div>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                <div style={{ color: ACCENT, fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>03. Kreatíva a škálovanie</div>
                                <p style={{ fontSize: '0.95rem', color: '#64748b' }}>Priebežne testujeme nové kreatívy, dopĺňame víťazné prvky a škálujeme to, čo prináša reálny zisk — nie len pekné čísla.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who is it for - 4 cards in gridTwo (2x2) */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Pre koho je Meta reklama vhodná</h2>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <ImageIcon className={styles.cardIcon} style={{ color: ACCENT }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>E-shopy s vizuálnym produktom</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Móda, kozmetika, doplnky stravy, interiér, jedlo. Advantage+ s kvalitnou kreatívou býva najefektívnejší kanál.</p>
                        </div>
                        <div className={styles.card}>
                            <Megaphone className={styles.cardIcon} style={{ color: PURPLE }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Značky budujúce povedomie</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Nové produkty, launch kampane, sezónne akcie. Video a Reels majú najlepší dosah za najnižší CPM.</p>
                        </div>
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Firmy na zber dopytov</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>B2B služby, vzdelávanie, finančné produkty. Natívne formuláre v kombinácii s presným cielením.</p>
                        </div>
                        <div className={styles.card}>
                            <Repeat className={styles.cardIcon} style={{ color: '#1877f2' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Remarketing popri Google Ads</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Dynamický remarketing funguje ako záchranná sieť pre nedokončené nákupy — pri správnom CAPI a atribúcii.</p>
                        </div>
                    </div>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '680px', margin: '2.5rem auto 0', fontSize: '0.95rem' }}>
                        <CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', color: '#10b981', marginRight: '0.4rem' }} />
                        Hráme férovo — ak ľudia váš produkt aktívne hľadajú, povieme vám, že Meta je skôr doplnok ku Google Ads, a kde sa investícia oplatí viac.
                    </p>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Často kladené otázky o Meta reklame</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Koľko stojí reklama na Facebooku a Instagrame?</div>
                            <p className={styles.faqAnswer}>
                                Cena má dve časti: mediálny rozpočet, ktorý platíte priamo Mete, a odmenu za správu kampaní.
                                Menšie e-shopy zvyčajne začínajú na 300–500 € mesačne mediálneho rozpočtu, väčšie projekty
                                pracujú s rozpočtami v tisícoch eur. Presný odhad vrátane očakávanej ceny za konverziu dostanete po bezplatnom audite účtu.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Čo je Conversion API a prečo ho potrebujem?</div>
                            <p className={styles.faqAnswer}>
                                Conversion API (CAPI) je server-side meranie, ktoré posiela konverzné udalosti priamo z vášho
                                servera do Mety — nie cez prehliadač. Obchádza tým adblockery a Safari ITP, ktoré blokujú
                                Meta Pixel. Bez CAPI prichádzate o značnú časť konverzných signálov a algoritmus optimalizuje
                                na neúplných dátach. Po jeho nasadení vidíme spravidla nižšiu cenu za konverziu a lepšiu optimalizáciu.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Prečo mi v Mete klesli reportované konverzie?</div>
                            <p className={styles.faqAnswer}>
                                Meta v poslednom období zúžila atribučné okná a zmenila, čo počíta ako konverziu. Reportované
                                čísla u mnohých účtov klesli bez akejkoľvek zmeny kampaní. Ak vaše reálne tržby zostali rovnaké,
                                problém je len v reportingu, nie vo výkone. Práve preto čísla z platformy vždy porovnávame so skutočnými tržbami.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Mám vypnúť atribúciu na zobrazenie (view)?</div>
                            <p className={styles.faqAnswer}>
                                Vo väčšine prípadov odporúčame áno — pri tvorbe kampane prepnúť atribučné okno na samotný
                                preklik (7-day click). Atribúcia na zobrazenie pripisuje konverziu aj vtedy, keď reklama
                                používateľovi len prebehla feedom a do 24 hodín nakúpil. Najviac to skresľuje remarketing,
                                kde kampaň vyzerá výborne, ale reálny prínos môže byť nulový.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Čo je Advantage+ a mám ho používať?</div>
                            <p className={styles.faqAnswer}>
                                Advantage+ nákupné kampane sú AI formát pre e-shopy, ktorý automaticky optimalizuje cielenie,
                                umiestnenia aj rozpočet. Pre e-shopy s katalógom býva najefektívnejší. Vyžaduje však kvalitný
                                produktový katalóg, dostatok rôznych kreatív a správne nastavený limit na nových verzus
                                existujúcich zákazníkov — inak minie väčšinu rozpočtu na remarketing s pekným ROAS, ale nulovým prínosom navyše.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <div className={styles.faqQuestion}>Ako zistím, či moje Meta kampane naozaj fungujú?</div>
                            <p className={styles.faqAnswer}>
                                Nepozerajte sa len na čísla v Ads Manageri — tie bývajú optimistickejšie ako realita. Porovnajte
                                reportované konverzie s reálnymi tržbami z e-shopu, skontrolujte si EMQ skóre v Events Manageri
                                a v stĺpcoch si pozrite pomer prekliku a zobrazenia. Ak máte pochybnosti o reálnom prínose,
                                najpriamejší test je kanál na 2–4 týždne vypnúť a sledovať, čo sa stane s tržbami.
                            </p>
                        </div>
                    </div>
                </section>

                <div className={styles.ctaBox} style={{ background: ACCENT_SOFT, borderColor: ACCENT_BORDER, marginTop: '3rem' }}>
                    <h2 className={styles.ctaTitle}>Nechajte svoje Meta kampane reálne zarábať</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${PURPLE} 100%)`, border: 'none', padding: '1rem 3rem' }}>
                        Chcem audit Meta Ads
                    </Link>
                </div>
            </div>
        </>
    );
}
