import Link from 'next/link';
import styles from '../service.module.css';
import GoogleReviews from '../../components/GoogleReviews';
import CountryFlags from '../../components/CountryFlags';
import { REVIEWS, REVIEW_AGGREGATE } from '../../data/reviews';

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

const CLIENTS: { name: string; note?: string; services: string[]; countries: string[] }[] = [
    { name: 'Bubulákovo', services: ['Google Ads'], countries: ['SK', 'CZ', 'HU', 'DE', 'HR', 'SI', 'PL', 'AT', 'RO', 'IT', 'FR', 'BE'] },
    { name: 'Murat', services: ['Google Ads', 'Meta Ads', 'SEO', 'Heureka'], countries: ['SK'] },
    { name: 'Bežeckepotreby.sk', services: ['Google Ads', 'Meta Ads', 'SEO', 'Heureka'], countries: ['SK', 'CZ', 'HU'] },
    { name: 'Športrysy', services: ['SEO', 'Google Ads'], countries: ['SK'] },
    { name: 'Ecoprodukt', note: 'v zahraničí Edimo', services: ['Google Ads', 'Meta Ads', 'Heureka', 'Zboží'], countries: ['SK', 'CZ', 'HU', 'RO', 'AT'] },
    { name: 'Ecovacs', services: ['Google Ads', 'Meta Ads', 'SEO'], countries: ['SK', 'CZ'] },
    { name: 'Stadlerform', services: ['Google Ads', 'Meta Ads', 'SEO'], countries: ['SK', 'CZ'] },
    { name: 'Fabulo', services: ['Google Ads', 'Meta Ads', 'Heureka', 'Sklik'], countries: ['SK', 'CZ', 'RO', 'HU'] },
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

const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Starbo Media',
    url: 'https://starbomedia.sk',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: REVIEW_AGGREGATE.rating.toFixed(1),
        reviewCount: String(REVIEW_AGGREGATE.count),
        bestRating: '5',
        worstRating: '1',
    },
    review: REVIEWS.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5' },
        reviewBody: r.text,
    })),
};

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
                                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: client.note ? '0.25rem' : '1.25rem' }}>
                                    {client.name}
                                </h3>
                                {client.note && (
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: '0 0 1rem' }}>
                                        {client.note}
                                    </p>
                                )}
                                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {client.services.map((s) => (
                                            <ServiceBadge key={s} service={s} />
                                        ))}
                                    </div>
                                    <CountryFlags codes={client.countries} size={22} />
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
            </div>

            <GoogleReviews />

            <div className="container">
                <div className={styles.ctaBox}>
                    <h2 className={styles.ctaTitle}>Chcete sa pridať k nim?</h2>
                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
                        Chcem nezáväznú konzultáciu
                    </Link>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
        </>
    );
}
