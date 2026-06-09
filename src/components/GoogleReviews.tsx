import Link from 'next/link';
import { Star } from 'lucide-react';
import { REVIEWS, REVIEW_AGGREGATE, type Review } from '../data/reviews';
import styles from './GoogleReviews.module.css';

const STAR_COLOR = '#fbbc04'; // Google žltá

function GoogleG({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
            <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
            <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
        </svg>
    );
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
    return (
        <span className={styles.stars} aria-label={`${rating} z 5 hviezdičiek`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={size} fill={i < rating ? STAR_COLOR : 'none'} color={i < rating ? STAR_COLOR : '#cbd5e1'} strokeWidth={1.5} />
            ))}
        </span>
    );
}

const AVATAR_COLORS = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#06b6d4', '#ef4444'];

function initials(name: string) {
    const words = name.replace(/s\.r\.o\.?/i, '').trim().split(/\s+/).filter(Boolean);
    const first = words[0]?.[0] ?? '';
    const second = words[1]?.[0] ?? '';
    return (first + second).toUpperCase() || '★';
}

function colorFor(name: string) {
    let h = 0;
    for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
}

type Props = {
    reviews?: Review[];
    aggregate?: typeof REVIEW_AGGREGATE;
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    limit?: number;
    ctaHref?: string;
    ctaLabel?: string;
};

export default function GoogleReviews({
    reviews = REVIEWS,
    aggregate = REVIEW_AGGREGATE,
    eyebrow = 'Recenzie',
    title = 'Čo o nás hovoria klienti',
    subtitle = 'Skutočné hodnotenia z nášho Google profilu — od e-shopov a značiek, ktoré s nami rastú.',
    limit,
    ctaHref,
    ctaLabel = 'Zobraziť všetky referencie',
}: Props) {
    const list = limit ? reviews.slice(0, limit) : reviews;

    return (
        <section className={styles.wrap}>
            <div className="container">
                <div className={styles.head}>
                    <span className={styles.eyebrow}>{eyebrow}</span>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.sub}>{subtitle}</p>

                    <a
                        className={styles.badge}
                        href={aggregate.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Hodnotenie ${aggregate.rating.toFixed(1)} z 5 na základe ${aggregate.count} Google recenzií — otvoriť profil`}
                    >
                        <GoogleG size={22} />
                        <span className={styles.badgeScore}>{aggregate.rating.toFixed(1).replace('.', ',')}</span>
                        <Stars rating={Math.round(aggregate.rating)} size={18} />
                        <span className={styles.badgeMeta}>{aggregate.count} recenzií na Google</span>
                        <span className={styles.badgeLink}>Zobraziť na Google →</span>
                    </a>
                </div>

                <div className={styles.masonry}>
                    {list.map((r, i) => (
                        <article key={`${r.author}-${i}`} className={styles.card}>
                            <div className={styles.cardTop}>
                                <Stars rating={r.rating} />
                                <GoogleG size={18} />
                            </div>
                            <p className={styles.text}>{r.text}</p>
                            <div className={styles.foot}>
                                <span className={styles.avatar} style={{ background: colorFor(r.author) }} aria-hidden="true">
                                    {initials(r.author)}
                                </span>
                                <span className={styles.who}>
                                    <span className={styles.name}>{r.author}</span>
                                    <span className={styles.meta}>Recenzia na Google · {r.year}</span>
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {ctaHref && (
                    <div className={styles.cta}>
                        <Link href={ctaHref} className="btn btn-secondary btn-lg">
                            {ctaLabel}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
