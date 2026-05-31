import Link from 'next/link';
import { Camera, Layers, Video, Wand2, Monitor, Mic, Languages, FileText, Search, BarChart3, ArrowRight, Sparkles, Bot, Zap } from 'lucide-react';
import styles from '../ai-studio.module.css';

export const metadata = {
    title: 'AI Studio | Starbomedia',
    description: 'AI nástroje pre marketing, ktoré reálne používame pre klientov — produktová fotografia, marketing bannery, video z produktov, viacjazyčný dabing, SEO obsah, weby aj automatizované reporty.',
};

type Service = {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    beta?: boolean;
};

type Category = {
    name: string;
    services: Service[];
};

export default function AiStudioPage() {
    const categories: Category[] = [
        {
            name: 'Vizuál',
            services: [
                {
                    id: 'produktova-fotografia',
                    title: 'AI produktová fotografia',
                    desc: 'Z jednej fotky produktu vytvárame desiatky profesionálnych reklamných scén.',
                    icon: <Camera size={28} />,
                },
                {
                    id: 'marketing-bannery',
                    title: 'Marketing bannery',
                    desc: 'AI-generované reklamné bannery vo formátoch pripravených do kampaní.',
                    icon: <Layers size={28} />,
                },
            ],
        },
        {
            name: 'Video & Hlas',
            services: [
                {
                    id: 'product-to-video',
                    title: 'Product to Video',
                    desc: 'Z produktových fotiek tvoríme pútavé krátke videá pre reklamu a sociálne siete.',
                    icon: <Video size={28} />,
                },
                {
                    id: 'ai-influencer',
                    title: 'AI influencer & lip sync',
                    desc: 'Virtuálni influenceri a videá so synchronizáciou pier pre vašu značku.',
                    icon: <Wand2 size={28} />,
                    beta: true,
                },
                {
                    id: 'video-prezentacie',
                    title: 'AI video prezentácie',
                    desc: 'Firemné prezentácie a videá generované pomocou AI.',
                    icon: <Monitor size={28} />,
                    beta: true,
                },
                {
                    id: 'voice-boti',
                    title: 'AI voice boti',
                    desc: 'Hlasoví asistenti, ktorí dokážu komunikovať so zákazníkmi.',
                    icon: <Mic size={28} />,
                    beta: true,
                },
                {
                    id: 'multilingual-dubbing',
                    title: 'Viacjazyčný dabing',
                    desc: 'Automatický dabing videí do viacerých jazykov pre zahraničné trhy.',
                    icon: <Languages size={28} />,
                },
            ],
        },
        {
            name: 'Obsah & SEO',
            services: [
                {
                    id: 'seo-clanky',
                    title: 'AI tvorba SEO článkov',
                    desc: 'Optimalizované články pre vyhľadávače tvorené s podporou AI.',
                    icon: <FileText size={28} />,
                },
                {
                    id: 'seo-meta-texty',
                    title: 'Hromadné SEO meta a alt texty',
                    desc: 'Hromadné generovanie meta popisov a alt textov pre celý katalóg.',
                    icon: <Search size={28} />,
                },
            ],
        },
        {
            name: 'Web & Dáta',
            services: [
                {
                    id: 'vibecode-weby',
                    title: 'VibeCode weby',
                    desc: 'Moderné webstránky vytvorené rýchlo s asistenciou AI.',
                    icon: <Monitor size={28} />,
                },
                {
                    id: 'report-vizualizacia',
                    title: 'Automatizované reporty & dáta',
                    desc: 'Premena dát z tabuliek na prehľadné reporty a vizualizácie.',
                    icon: <BarChart3 size={28} />,
                },
            ],
        },
    ];

    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    {/* Text Content */}
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <Sparkles size={16} /> Starbomedia AI Studio
                        </div>
                        <h1 className={styles.title}>
                            Vaša vízia,<br />
                            naša AI technológia.
                        </h1>
                        <p className={styles.subtitle}>
                            Od produktovej fotografie cez SEO obsah až po automatizované reporty —
                            nástroje, ktoré reálne používame pre klientov.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link href="#sluzby" className="btn btn-primary" style={{ padding: '1rem 2.5rem', background: 'var(--ai-gradient)' }}>
                                Preskúmať služby
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} />
                            <div className={styles.orbCore} />

                            {/* Floating Elements */}
                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Bot size={20} color="#6366f1" /> AI Chatbot
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Video size={20} color="#f97316" /> Tvorba videa
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc3}`}>
                                <Zap size={20} color="#10b981" /> Automatizácia
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Services by Category */}
            <section id="sluzby" className="container" style={{ paddingBottom: '8rem' }}>
                {categories.map((category, index) => (
                    <div key={category.name} style={{ marginTop: index === 0 ? 0 : '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem', color: '#1e293b' }}>
                            {category.name}
                        </h2>
                        <div className={styles.grid}>
                            {category.services.map((service) => (
                                <div key={service.id} className={styles.card}>
                                    <div className={styles.cardIcon}>
                                        {service.icon}
                                    </div>
                                    <h3 className={styles.cardTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                                        {service.title}
                                        {service.beta && (
                                            <span style={{
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.04em',
                                                color: '#f97316',
                                                background: 'rgba(249, 115, 22, 0.1)',
                                                border: '1px solid rgba(249, 115, 22, 0.2)',
                                                borderRadius: '50px',
                                                padding: '0.2rem 0.7rem',
                                                whiteSpace: 'nowrap',
                                            }}>
                                                na vyžiadanie
                                            </span>
                                        )}
                                    </h3>
                                    <p className={styles.cardDesc}>{service.desc}</p>
                                    <Link href={`/ai-studio/${service.id}`} className={styles.cardLink}>
                                        Zistiť viac <ArrowRight size={18} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Process Section */}
            <section className={styles.processSection} style={{ background: '#f8fafc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '5rem', fontSize: '3rem' }}>Ako to funguje?</h2>
                    <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>01</div>
                            <h3>Konzultácia</h3>
                            <p style={{ color: '#64748b' }}>Analyzujeme vaše potreby.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>02</div>
                            <h3>AI spracovanie</h3>
                            <p style={{ color: '#64748b' }}>Modely spracujú dáta.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>03</div>
                            <h3>Optimalizácia</h3>
                            <p style={{ color: '#64748b' }}>Ľudská kontrola kvality.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>04</div>
                            <h3>Dodanie</h3>
                            <p style={{ color: '#64748b' }}>Nasadenie do praxe.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="container" style={{ paddingBottom: '5rem' }}>
                <div className={styles.ctaBox}>
                    <div className={styles.pulseGlow} />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Pripravení na transformáciu?</h2>
                        <Link href="/kontakt" className="btn" style={{ background: 'white', color: '#6366f1', padding: '1rem 3rem' }}>
                            Kontaktovať AI tím
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
