import Link from 'next/link';
import { Camera, Video, MessageSquare, Monitor, BarChart, Smartphone, Mic, Layers, Wand2, ArrowRight, Sparkles, Bot, Zap } from 'lucide-react';
import styles from '../ai-studio.module.css';

export const metadata = {
    title: 'AI Studio | Starbomedia',
    description: 'Vaša vízia, naša AI technológia. Transformujeme váš biznis pomocou umelej inteligencie.',
};

export default function AiStudioPage() {
    const services = [
        {
            id: 'produktova-fotografia',
            title: 'AI Produktová fotografia',
            desc: 'Transformujeme bežné fotky na profesionálne produktové snímky.',
            icon: <Camera size={28} />,
        },
        {
            id: 'product-to-video',
            title: 'Product to Video',
            desc: 'Vytvárame pútavé videá z produktových fotografií.',
            icon: <Video size={28} />,
        },
        {
            id: 'voice-boti',
            title: 'AI Voice Boti',
            desc: 'Inteligentní hlasoví asistenti pre váš biznis.',
            icon: <Mic size={28} />,
        },
        {
            id: 'marketing-bannery',
            title: 'Marketing Bannery',
            desc: 'AI-generované reklamné materiály na počkanie.',
            icon: <Layers size={28} />,
        },
        {
            id: 'vibecode-weby',
            title: 'VibeCode Webstránky',
            desc: 'Moderné weby vytvorené s AI asistenciou.',
            icon: <Monitor size={28} />,
        },
        {
            id: 'report-vizualizacia',
            title: 'Report Vizualizácia',
            desc: 'Premeňte tabuľky na interaktívne dashboardy.',
            icon: <BarChart size={28} />,
        },
        {
            id: 'video-prezentacie',
            title: 'Video Prezentácie',
            desc: 'Profesionálne firemné prezentácie s AI avatarmy.',
            icon: <Smartphone size={28} />,
        },
        {
            id: 'ai-influencer',
            title: 'AI Influencer & Lip Sync',
            desc: 'Virtuálni influenceri pre vašu značku.',
            icon: <Wand2 size={28} />,
        },
        {
            id: 'multilingual-dubbing',
            title: 'Viacjazyčný dabing',
            desc: 'Automatický dabing videí do 40+ jazykov.',
            icon: <MessageSquare size={28} />,
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
                            Využite silu umelej inteligencie pre exponenciálny rast.
                            Od generovania obsahu až po automatizáciu procesov. Budúcnosť je tu.
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

            {/* Services Grid */}
            <section id="sluzby" className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.cardIcon}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.desc}</p>
                            <Link href={`/ai-studio/${service.id}`} className={styles.cardLink}>
                                Zistiť viac <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
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
