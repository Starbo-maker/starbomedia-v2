import Link from 'next/link';
import Image from 'next/image';
import { Users, Target, Rocket } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'O nás | Tím Starbo Media',
    description: 'Sme digitálna agentúra zameraná na výsledky. Zoznámte sa s naším tímom a filozofiou.',
};

const TEAM: { name: string; role: string; photo?: string }[] = [
    { name: 'Peter Štrbo', role: 'Head of Marketing' },
    { name: 'Štefan Gajdošík', role: 'Online marketing konzultant', photo: '/team/stefan-gajdosik.webp' },
    { name: 'Dávid Barczi', role: 'Online marketing konzultant', photo: '/team/david-barczi.webp' },
    { name: 'Tatiana Takáčová', role: 'Online marketing konzultant & grafička', photo: '/team/tatiana-takacova.webp' },
    { name: 'Monika Alaxinová', role: 'Online marketing konzultant' },
    { name: 'Marek Hollý', role: 'Online marketing konzultant' },
    { name: 'Daniel Špendla', role: 'Online marketing konzultant' },
    { name: 'Miroslava Štrbová', role: 'Account manager' },
    { name: 'Natália Hrneková', role: 'Content marketing specialist' },
];

const TEAM_COLORS = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#06b6d4', '#ef4444', '#7c3aed'];

function teamInitials(name: string) {
    const w = name.trim().split(/\s+/);
    return ((w[0]?.[0] ?? '') + (w[1]?.[0] ?? '')).toUpperCase();
}

function teamColor(name: string) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return TEAM_COLORS[h % TEAM_COLORS.length];
}

export default function AboutPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>O nás</h1>
                    <p className={styles.subtitle}>
                        Sme Starbo Media. Digitálna agentúra, ktorá pomáha firmám rásť v online prostredí.
                        Kombinujeme dáta, kreativitu a technológie.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <section className={`${styles.section} ${styles.grid}`}>
                    <div>
                        <h2>Naša Filozofia</h2>
                        <p className={styles.text}>
                            Veríme v transparentnosť a partnerstvo. Nie sme len dodávateľom služieb, ale partnerom pre váš biznis.
                            Náš úspech meriame vaším rastom. Preferujeme dlhodobú spoluprácu založenú na dôvere a výsledkoch.
                        </p>
                    </div>
                    <div className={styles.card} style={{ borderColor: '#8b5cf6' }}>
                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}><Target className={styles.featureIcon} /> Orientácia na výkon (Performance)</li>
                            <li className={styles.featureItem}><Users className={styles.featureIcon} /> Osobný prístup ku klientovi</li>
                            <li className={styles.featureItem}><Rocket className={styles.featureIcon} /> Inovatívne riešenia</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Náš tím</h2>
                        <p className={styles.text}>
                            Špecialisti na PPC, SEO, sociálne siete, dáta a obsah. Neustále sa vzdelávame a sledujeme trendy, aby sme vám prinášali tie najlepšie výsledky.
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))', gap: '1.5rem' }}>
                        {TEAM.map((m) => (
                            <div key={m.name} className={styles.card} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                                {m.photo ? (
                                    <Image
                                        src={m.photo}
                                        alt={m.name}
                                        width={76}
                                        height={76}
                                        style={{ borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block' }}
                                    />
                                ) : (
                                    <div
                                        style={{ width: 76, height: 76, borderRadius: '50%', background: teamColor(m.name), color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.6rem', margin: '0 auto 1rem' }}
                                        aria-hidden="true"
                                    >
                                        {teamInitials(m.name)}
                                    </div>
                                )}
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem' }}>{m.name}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>{m.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
