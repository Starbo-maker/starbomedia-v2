import Link from 'next/link';
import styles from '../service.module.css';

export const metadata = {
    title: 'Referencie | Starbomedia',
    description: 'Klienti, ktorým pomáhame rásť — Bubulákovo, Murat, Bežeckepotreby.sk, Športrysy, Ecoprodukt, Ecovacs, Stadlerform, Fabulo a ďalší. Google Ads, Meta Ads, SEO a cenové porovnávače.',
};

const SERVICE_COLORS: Record<string, string> = {
    'Google Ads': '#3b82f6',
    'Meta Ads': '#ec4899',
    'SEO': '#10b981',
    'Heureka': '#f97316',
    'Zboží': '#f97316',
    'Sklik': '#dc2626',
};

const CLIENTS: { name: string; services: string[] }[] = [
    { name: 'Bubulákovo', services: ['Google Ads'] },
    { name: 'Murat', services: ['Google Ads', 'Meta Ads', 'SEO', 'Heureka'] },
    { name: 'Bežeckepotreby.sk', services: ['Google Ads', 'Meta Ads', 'SEO', 'Heureka'] },
    { name: 'Športrysy', services: ['SEO', 'Google Ads'] },
    { name: 'Ecoprodukt', services: ['Google Ads', 'Meta Ads', 'Heureka', 'Zboží'] },
    { name: 'Ecovacs', services: ['Google Ads', 'Meta Ads', 'SEO'] },
    { name: 'Stadlerform', services: ['Google Ads', 'Meta Ads', 'SEO'] },
    { name: 'Fabulo', services: ['Google Ads', 'Meta Ads', 'Heureka', 'Sklik'] },
];

function ServiceBadge({ service }: { service: string }) {
    const color = SERVICE_COLORS[service] || '#8b5cf6';
    return (
        <span style={{
            display: 'inline-block',
            background: `${color}14`,
            color,
            fontSize: '0.8rem',
            fontWeight: 600,
            padding: '0.3rem 0.7rem',
            borderRadius: '8px',
            lineHeight: 1.2,
        }}>
            {service}
        </span>
    );
}

export default function ReferencesPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>Naše referencie</h1>
                    <p className={styles.subtitle}>
                        Dlhodobo sa staráme o rast e-shopov a značiek doma aj v zahraničí. Tu je výber klientov a toho, čo pre nich robíme.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <section className={styles.section}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))', gap: '1.5rem' }}>
                        {CLIENTS.map((client) => (
                            <div key={client.name} className={styles.card} style={{ display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>
                                    {client.name}
                                </h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                    {client.services.map((s) => (
                                        <ServiceBadge key={s} service={s} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section} style={{ textAlign: 'center', paddingTop: 0 }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2rem' }}>
                        … a mnohí ďalší
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', opacity: 0.55 }}>
                        {['iHRYsko', 'Emilove Sady', 'Madmat', 'Modos', 'MSD Company', 'E-spotrebiče'].map((client) => (
                            <span key={client} style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a' }}>{client}</span>
                        ))}
                    </div>
                </section>

                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaTitle}>Chcete sa pridať k nim?</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Chcem nezáväznú konzultáciu
                    </Link>
                </div>
            </div>
        </>
    );
}
