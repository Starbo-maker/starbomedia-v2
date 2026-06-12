import Link from 'next/link';
import {
    Instagram, Video, Clapperboard, Sparkles, Zap, Scissors, Type,
    MessageSquare, MousePointerClick, Smartphone, CalendarDays, PenLine,
    Camera, Layers, BarChart3, CheckCircle, MapPin, Repeat, Store, Users,
    ShoppingBag, Briefcase
} from 'lucide-react';
import styles from '../service.module.css';

// Akcent služby: fuchsiová — vizuálne v rodine s Meta ružovou, ale odlíšená.
const ACCENT = '#d946ef';
const ACCENT_SOFT = '#fdf4ff';
const ACCENT_BORDER = '#f5d0fe';
const PURPLE = '#8b5cf6';

const SITE_URL = 'https://starbomedia.sk';

export const metadata = {
    title: 'Správa sociálnych sietí a tvorba obsahu — Reels, TikTok | Starbomedia',
    description:
        'Správa sociálnych sietí na kľúč: stratégia, scenáre, natáčanie priamo u vás, strih Reels a TikTok videí, príspevky, publikovanie aj vyhodnotenie. Obsah, ktorý stojí na vašom biznise.',
};

export default function SocialMediaPage() {
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Správa sociálnych sietí a tvorba obsahu',
            serviceType: 'Social media marketing',
            description:
                'Kompletná správa sociálnych sietí: obsahová stratégia, scenáre, natáčanie obsahu priamo u klienta, strih Reels a krátkych videí, statické príspevky, carousely, stories, publikovanie a vyhodnocovanie.',
            provider: { '@type': 'Organization', name: 'Starbomedia', url: SITE_URL },
            areaServed: 'SK',
            url: `${SITE_URL}/sprava-socialnych-sieti`,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Domov', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Služby', item: `${SITE_URL}/reklama-na-internete` },
                { '@type': 'ListItem', position: 3, name: 'Správa sociálnych sietí', item: `${SITE_URL}/sprava-socialnych-sieti` },
            ],
        },
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 20% 30%, rgba(217, 70, 239, 0.12), transparent 55%)' }} />
                <div className={`container ${styles.headerGrid}`}>
                    <div className={styles.headerContent}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: ACCENT_SOFT, padding: '0.3rem 0.8rem', borderRadius: '50px', marginBottom: '1.5rem', border: `1px solid ${ACCENT_BORDER}` }}>
                            <Sparkles size={16} color={ACCENT} />
                            <span style={{ color: ACCENT, fontWeight: 600, fontSize: '0.85rem' }}>SPRÁVA SOCIÁLNYCH SIETÍ A TVORBA OBSAHU</span>
                        </div>
                        <h1 className={styles.title}>Sociálne siete, ktoré stoja na vašom biznise — nie na náhodných príspevkoch.</h1>
                        <p className={styles.subtitle}>
                            Pripravíme stratégiu, prídeme natočiť obsah priamo k vám a pravidelne publikujeme — vrátane
                            Reels a krátkych videí, ktoré dnes ťahajú najväčší organický dosah. Vy sa venujete firme,
                            my komunikácii na sociálnych sieťach.
                        </p>
                        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${PURPLE} 100%)`, boxShadow: '0 4px 14px 0 rgba(217, 70, 239, 0.4)' }}>
                                Chcem nezáväznú ponuku
                            </Link>
                            <Link href="/kontakt" className="btn btn-secondary">
                                Dohodnúť konzultáciu zdarma
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.shapeContainer}>
                            <div className={styles.blob} style={{ background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.18), rgba(139, 92, 246, 0.15))' }} />
                            <div className={`${styles.floatingIcon} ${styles.fi1}`}>
                                <Instagram size={28} color={ACCENT} />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi2}`}>
                                <Clapperboard size={32} color={PURPLE} />
                            </div>
                            <div className={`${styles.floatingIcon} ${styles.fi3}`}>
                                <Video size={24} color="#f97316" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Čo pre vás robíme */}
                <section className={styles.section} style={{ padding: '2rem 0' }}>
                    <div className={styles.grid} style={{ gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Správa sociálnych sietí a tvorba obsahu na kľúč</h2>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Staráme sa o vaše sociálne siete od stratégie až po hotový, odpublikovaný príspevok.
                                Vymyslíme témy, napíšeme scenáre, prídeme natočiť obsah priamo k vám, zostriháme videá,
                                pripravíme príspevky, carousely a stories, naplánujeme ich a odpublikujeme.
                            </p>
                            <p className={styles.text}>
                                Každý mesiac vyhodnotíme, čo fungovalo, a podľa toho upravíme ďalší obsah. Žiadne nahodené
                                príspevky raz za čas — pravidelný systém, ktorý stavia na tom, čo váš biznis reálne robí.
                            </p>
                        </div>
                        {/* Checklist box */}
                        <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '1.5rem' }}>Čo máte u nás vybavené</h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                                {[
                                    'Stratégia, témy a obsahový kalendár',
                                    'Scenáre, hooky a texty',
                                    'Natáčanie priamo u vás',
                                    'Strih, titulky a CTA vo videách',
                                    'Príspevky, carousely a stories',
                                    'Publikovanie a mesačné vyhodnotenie',
                                ].map((item) => (
                                    <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontWeight: 600, color: '#1e293b' }}>
                                        <CheckCircle size={20} color={ACCENT} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Reels a krátke videá — hlavná sekcia hneď za úvodom (podľa stratégie obsahu) */}
                <section className={styles.section}>
                    <div style={{ background: ACCENT_SOFT, borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)', border: `1px solid ${ACCENT_BORDER}` }}>
                        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                            <Clapperboard size={32} color={ACCENT} style={{ marginBottom: '1rem' }} />
                            <h2 style={{ marginBottom: '1rem' }}>Reels a krátke videá — hlavný formát dnešných sociálnych sietí</h2>
                            <p className={styles.text} style={{ marginBottom: '1rem' }}>
                                Krátke videá sú dnes najsilnejší organický formát. Reels, TikToky a Shorts dostávajú od
                                algoritmov najväčší priestor a často oslovia aj ľudí, ktorí vás ešte nepoznajú — bez
                                jediného eura do reklamy.
                            </p>
                            <p className={styles.text} style={{ marginBottom: '0.5rem' }}>
                                Väčšina firiem vie, že by mala točiť videá. Problém býva inde — nevedia, čo natáčať, ako to
                                uchopiť a kde vôbec začať. Presne s týmto vám pomôžeme: prevezmeme video od nápadu až po
                                hotovú verziu pripravenú na publikovanie. Dobré video totiž nestojí na drahej technike ani
                                hercoch — stojí na koncepte a silnom hooku.
                            </p>
                        </div>
                        <div className={styles.cardGrid} style={{ marginTop: '2.5rem' }}>
                            {[
                                { icon: Zap, title: 'Hook', text: 'Prvé sekundy, ktoré rozhodnú, či divák zostane alebo odscrolluje.' },
                                { icon: Scissors, title: 'Tempo a strih', text: 'Dynamika, strihy a rytmus prispôsobené formátu krátkeho videa.' },
                                { icon: Type, title: 'Titulky', text: 'Väčšina ľudí pozerá bez zvuku, preto každé video titulkujeme.' },
                                { icon: MessageSquare, title: 'Texty do obrazu', text: 'Kľúčové odkazy zvýraznené priamo vo videu.' },
                                { icon: MousePointerClick, title: 'CTA', text: 'Jasná výzva, čo má divák spraviť po dopozeraní.' },
                                { icon: Smartphone, title: 'Formát na mieru platforme', text: 'Reels, TikTok aj krátke videá na Facebook či Instagram.' },
                            ].map(({ icon: Icon, title, text }) => (
                                <div key={title} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                    <Icon size={22} color={ACCENT} style={{ marginBottom: '0.6rem' }} />
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>{title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: 0 }}>{text}</p>
                                </div>
                            ))}
                        </div>
                        <p className={styles.text} style={{ textAlign: 'center', maxWidth: '680px', margin: '2.5rem auto 0', fontSize: '0.95rem' }}>
                            Video je jedna z našich silných stránok — no nie jediná. Krátke videá vždy napájame na zvyšok
                            obsahu: statické príspevky, carousely a stories, aby vaša komunikácia dávala zmysel ako celok.
                        </p>
                    </div>
                </section>

                {/* Čo pre vás zabezpečíme — 6 oblastí */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Čo pre vás zabezpečíme</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        Kompletná starostlivosť o obsah rozdelená do šiestich oblastí — od stratégie po vyhodnotenie.
                    </p>
                    <div className={styles.cardGrid}>
                        {[
                            {
                                icon: CalendarDays, title: 'Stratégia a plánovanie',
                                items: ['Obsahová stratégia pre sociálne siete', 'Návrh tém a formátov', 'Plánovanie obsahu a obsahový kalendár'],
                            },
                            {
                                icon: PenLine, title: 'Scenáre a texty',
                                items: ['Tvorba scenárov na videá', 'Príprava hookov a textov do videí', 'Copywriting k príspevkom'],
                            },
                            {
                                icon: Camera, title: 'Natáčanie a krátke videá',
                                items: ['Natáčanie priamo u vás — v prevádzke, predajni alebo firme', 'Reels, TikToky a krátke videá od konceptu po finálnu verziu'],
                            },
                            {
                                icon: Scissors, title: 'Strih videí a titulky',
                                items: ['Strih krátkych videí — Reels, TikTok, YouTube Shorts', 'Titulky, texty do obrazu, hook a CTA priamo vo videu'],
                            },
                            {
                                icon: Layers, title: 'Príspevky a vizuály',
                                items: ['Statické príspevky', 'Carousely', 'Stories'],
                            },
                            {
                                icon: BarChart3, title: 'Správa a vyhodnocovanie',
                                items: ['Plánovanie a publikovanie príspevkov', 'Vyhodnocovanie výkonu obsahu', 'Odporúčania na zlepšenie komunikácie'],
                            },
                        ].map(({ icon: Icon, title, items }) => (
                            <div key={title} className={styles.card}>
                                <Icon className={styles.cardIcon} style={{ color: ACCENT }} />
                                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>{title}</h3>
                                <ul style={{ fontSize: '0.9rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.4rem', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                    {items.map((i) => <li key={i}>• {i}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ako spolupráca prebieha — 8 krokov */}
                <section className={styles.section} style={{ marginTop: '1rem' }}>
                    <div style={{ background: '#f8fafc', borderRadius: '24px', padding: 'clamp(1.5rem, 5vw, 3rem)', border: '1px solid #e2e8f0' }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Ako spolupráca prebieha</h2>
                        <p className={styles.text} style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                            Jednoduchý a predvídateľný proces — vždy viete, čo sa kedy deje.
                        </p>
                        <div className={styles.grid} style={{ alignItems: 'flex-start', gap: '2rem' }}>
                            {[
                                { n: '01.', t: 'Úvodná konzultácia', d: 'Spoznáme váš biznis, ciele a koho chcete osloviť.' },
                                { n: '02.', t: 'Obsahová stratégia', d: 'Navrhneme témy, formáty a plán na ďalšie obdobie.' },
                                { n: '03.', t: 'Príprava scenárov', d: 'Pripravíme scenáre, hooky a texty do videí aj príspevkov.' },
                                { n: '04.', t: 'Natáčací deň', d: 'Prídeme za vami a natočíme obsah na niekoľko týždňov dopredu.' },
                                { n: '05.', t: 'Strih a tvorba', d: 'Zostriháme videá, pripravíme statické príspevky, carousely a stories.' },
                                { n: '06.', t: 'Schválenie a plán', d: 'Odsúhlasíte obsah, my ho naplánujeme do kalendára.' },
                                { n: '07.', t: 'Publikovanie', d: 'Príspevky vychádzajú pravidelne, vy nemusíte na nič myslieť.' },
                                { n: '08.', t: 'Vyhodnotenie', d: 'Každý mesiac prejdeme výsledky a podľa nich upravíme ďalší obsah.' },
                            ].map((step) => (
                                <div key={step.n} style={{ background: 'white', padding: '1.5rem', borderRadius: '16px', border: `1px solid ${ACCENT_BORDER}` }}>
                                    <div style={{ color: ACCENT, fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>{step.n} {step.t}</div>
                                    <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: 0 }}>{step.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pre koho je služba vhodná */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Pre koho je služba vhodná</h2>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 3rem' }}>
                        Najlepšie sa hodí pre firmy, ktoré majú čo ukázať, ale nemajú čas ani kapacitu to pravidelne
                        natáčať a publikovať.
                    </p>
                    <div className={styles.gridTwo}>
                        <div className={styles.card}>
                            <Briefcase className={styles.cardIcon} style={{ color: ACCENT }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Malé a stredné firmy</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Bez interného marketéra alebo videomakera — sociálne siete dostanete kompletne na kľúč.</p>
                        </div>
                        <div className={styles.card}>
                            <Store className={styles.cardIcon} style={{ color: PURPLE }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Prevádzky a lokálne biznisy</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Reštaurácie, kliniky, predajne, služby — obsah natočený priamo u vás, z reálneho prostredia.</p>
                        </div>
                        <div className={styles.card}>
                            <ShoppingBag className={styles.cardIcon} style={{ color: '#f97316' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>E-shopy a značky</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Pravidelný a konzistentný obsah, ktorý buduje značku a dá sa použiť aj ako kreatíva do reklám.</p>
                        </div>
                        <div className={styles.card}>
                            <Users className={styles.cardIcon} style={{ color: '#10b981' }} />
                            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Podnikatelia</h3>
                            <p className={styles.text} style={{ fontSize: '0.92rem' }}>Profesionálna komunikácia bez budovania interného tímu — od stratégie po publikovanie.</p>
                        </div>
                    </div>
                </section>

                {/* Prečo to riešiť s nami */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Prečo to riešiť s nami</h2>
                    <div className={styles.gridTwo}>
                        {[
                            { icon: Clapperboard, t: 'Silné krátke videá', d: 'Reels, TikToky a Shorts robíme od konceptu po titulky — formát s najväčším organickým dosahom.' },
                            { icon: Camera, t: 'Obsah z reálneho biznisu', d: 'Natáčame to, čo naozaj robíte — nie generické vizuály z fotobánk.' },
                            { icon: CalendarDays, t: 'Pravidelnosť a systém', d: 'Obsahový kalendár namiesto nahodených príspevkov raz za čas.' },
                            { icon: CheckCircle, t: 'Kompletne na kľúč', d: 'Od nápadu po publikovanie. Medzi tým nemusíte riešiť nič.' },
                            { icon: MapPin, t: 'Natáčanie u vás', d: 'Prídeme za vami, vy nemusíte nikam chodiť ani nič pripravovať.' },
                            { icon: BarChart3, t: 'Rozhodovanie podľa dát', d: 'Sledujeme, čo funguje, a obsah upravíme podľa výsledkov.' },
                            { icon: Repeat, t: 'Videá aj do reklamy', d: 'Videá vieme použiť nielen organicky, ale aj ako kreatívy do Meta a TikTok reklám.' },
                        ].map(({ icon: Icon, t, d }) => (
                            <div key={t} className={styles.card} style={{ padding: '1.75rem' }}>
                                <Icon className={styles.cardIcon} style={{ color: ACCENT }} />
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{t}</h3>
                                <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: 0 }}>{d}</p>
                            </div>
                        ))}
                    </div>
                    <p className={styles.text} style={{ textAlign: 'center', maxWidth: '680px', margin: '2.5rem auto 0', fontSize: '0.95rem' }}>
                        <CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', color: '#10b981', marginRight: '0.4rem' }} />
                        Organický obsah a platená reklama u nás fungujú spolu — najlepšie videá z profilu vieme nasadiť
                        ako <Link href="/facebook-reklama" style={{ color: ACCENT, fontWeight: 600 }}>reklamy na Facebooku a Instagrame</Link>.
                    </p>
                </section>

                {/* FAQ */}
                <section className={styles.section}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Často kladené otázky o správe sociálnych sietí</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Koľko stojí správa sociálnych sietí?</summary>
                            <p className={styles.faqAnswer}>
                                Cena závisí od rozsahu — počtu sietí, formátov, frekvencie publikovania a natáčacích dní.
                                Po úvodnej konzultácii pripravíme ponuku na mieru presne podľa toho, čo váš biznis potrebuje.
                                Konzultácia aj ponuka sú nezáväzné.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Ktoré sociálne siete spravujete?</summary>
                            <p className={styles.faqAnswer}>
                                Primárne Instagram, Facebook a TikTok — teda siete, kde krátke videá a pravidelný obsah
                                prinášajú najväčší organický dosah. Krátke videá pripravujeme aj vo formáte YouTube Shorts.
                                Mix sietí navrhneme podľa toho, kde je vaša cieľová skupina.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Musíme k vám chodiť na natáčanie?</summary>
                            <p className={styles.faqAnswer}>
                                Nie — prídeme my k vám. Natáčame priamo vo vašej prevádzke, predajni alebo firme, kde vzniká
                                najautentickejší obsah. Počas jedného natáčacieho dňa pripravíme materiál na niekoľko týždňov
                                dopredu, takže vás natáčanie zdržiava minimálne.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Čo ak nevieme, čo by sme mali na sieťach komunikovať?</summary>
                            <p className={styles.faqAnswer}>
                                Presne na to slúži obsahová stratégia na začiatku spolupráce. Spoznáme váš biznis, zákazníkov
                                a ciele a navrhneme témy aj formáty, ktoré dávajú zmysel. Témy a scenáre potom pripravujeme my —
                                vy ich len odsúhlasíte.
                            </p>
                        </details>
                        <details className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>Dajú sa videá použiť aj do platenej reklamy?</summary>
                            <p className={styles.faqAnswer}>
                                Áno — a odporúčame to. Krátke videá, ktoré organicky fungujú, bývajú zároveň najvýkonnejšie
                                reklamné kreatívy. Keďže spravujeme aj Meta a TikTok kampane, vieme obsah a reklamu prepojiť
                                do jedného systému bez ďalšej réžie na vašej strane.
                            </p>
                        </details>
                    </div>
                </section>

                {/* CTA */}
                <div className={styles.ctaBox} style={{ background: ACCENT_SOFT, borderColor: ACCENT_BORDER, marginTop: '3rem' }}>
                    <h2 className={styles.ctaTitle}>Pustíme vaše sociálne siete do pohybu?</h2>
                    <p className={styles.text} style={{ maxWidth: '560px', margin: '0 auto 1.5rem' }}>
                        Napíšte nám pár slov o vašej firme. Ozveme sa, navrhneme, ako by mohol vyzerať váš obsah,
                        a pripravíme ponuku na mieru. Nezáväzne.
                    </p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ background: `linear-gradient(135deg, ${ACCENT} 0%, ${PURPLE} 100%)`, border: 'none', padding: '1rem 3rem' }}>
                        Chcem nezáväznú ponuku
                    </Link>
                </div>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "[{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Ko\u013eko stoj\u00ed spr\u00e1va soci\u00e1lnych siet\u00ed?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Cena z\u00e1vis\u00ed od rozsahu \u2014 po\u010dtu siet\u00ed, form\u00e1tov, frekvencie publikovania a nat\u00e1\u010dac\u00edch dn\u00ed. Po \u00favodnej konzult\u00e1cii priprav\u00edme ponuku na mieru presne pod\u013ea toho, \u010do v\u00e1\u0161 biznis potrebuje. Konzult\u00e1cia aj ponuka s\u00fa nez\u00e1v\u00e4zn\u00e9.\"}}, {\"@type\": \"Question\", \"name\": \"Ktor\u00e9 soci\u00e1lne siete spravujete?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Prim\u00e1rne Instagram, Facebook a TikTok \u2014 teda siete, kde kr\u00e1tke vide\u00e1 a pravideln\u00fd obsah prin\u00e1\u0161aj\u00fa najv\u00e4\u010d\u0161\u00ed organick\u00fd dosah. Kr\u00e1tke vide\u00e1 pripravujeme aj vo form\u00e1te YouTube Shorts. Mix siet\u00ed navrhneme pod\u013ea toho, kde je va\u0161a cie\u013eov\u00e1 skupina.\"}}, {\"@type\": \"Question\", \"name\": \"Mus\u00edme k v\u00e1m chodi\u0165 na nat\u00e1\u010danie?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Nie \u2014 pr\u00eddeme my k v\u00e1m. Nat\u00e1\u010dame priamo vo va\u0161ej prev\u00e1dzke, predajni alebo firme, kde vznik\u00e1 najautentickej\u0161\u00ed obsah. Po\u010das jedn\u00e9ho nat\u00e1\u010dacieho d\u0148a priprav\u00edme materi\u00e1l na nieko\u013eko t\u00fd\u017ed\u0148ov dopredu, tak\u017ee v\u00e1s nat\u00e1\u010danie zdr\u017eiava minim\u00e1lne.\"}}, {\"@type\": \"Question\", \"name\": \"\u010co ak nevieme, \u010do by sme mali na sie\u0165ach komunikova\u0165?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Presne na to sl\u00fa\u017ei obsahov\u00e1 strat\u00e9gia na za\u010diatku spolupr\u00e1ce. Spozn\u00e1me v\u00e1\u0161 biznis, z\u00e1kazn\u00edkov a ciele a navrhneme t\u00e9my aj form\u00e1ty, ktor\u00e9 d\u00e1vaj\u00fa zmysel. T\u00e9my a scen\u00e1re potom pripravujeme my \u2014 vy ich len ods\u00fahlas\u00edte.\"}}, {\"@type\": \"Question\", \"name\": \"Daj\u00fa sa vide\u00e1 pou\u017ei\u0165 aj do platenej reklamy?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u00c1no \u2014 a odpor\u00fa\u010dame to. Kr\u00e1tke vide\u00e1, ktor\u00e9 organicky funguj\u00fa, b\u00fdvaj\u00fa z\u00e1rove\u0148 najv\u00fdkonnej\u0161ie reklamn\u00e9 kreat\u00edvy. Ke\u010f\u017ee spravujeme aj Meta a TikTok kampane, vieme obsah a reklamu prepoji\u0165 do jedn\u00e9ho syst\u00e9mu bez \u010fal\u0161ej r\u00e9\u017eie na va\u0161ej strane.\"}}]}]" }} />
        </>
    );
}
