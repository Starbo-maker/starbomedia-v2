import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import postsData from '../../content/blog/posts.json';
import { getAuthor } from '../../data/authors';
import styles from '../service.module.css';

type Post = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    featuredImage: string | null;
    featuredW?: number;
    featuredH?: number;
    author?: string;
};

const POSTS = postsData as Post[];

export const metadata = {
    title: 'Blog | Starbomedia',
    description: 'Novinky a know-how zo sveta online marketingu — Google Ads, Meta Ads, SEO, tracking a AI. Články z praxe od tímu Starbomedia.',
};

function formatDate(iso: string) {
    try {
        return new Intl.DateTimeFormat('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
    } catch {
        return (iso || '').slice(0, 10);
    }
}

function shorten(text: string, max = 140) {
    if (!text) return '';
    return text.length > max ? text.slice(0, max).trim() + '…' : text;
}

export default function BlogPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>Marketingový blog</h1>
                    <p className={styles.subtitle}>
                        Zdieľame naše know-how. Články, návody a postrehy z praxe — Google Ads, Meta Ads, SEO, tracking a AI.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.cardGrid}>
                    {POSTS.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/${post.slug}`}
                            className={styles.card}
                            style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}
                        >
                            {post.featuredImage && (
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    width={post.featuredW ?? 768}
                                    height={post.featuredH ?? 430}
                                    sizes="(max-width: 768px) 100vw, 380px"
                                    loading="lazy"
                                    style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }}
                                />
                            )}
                            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <span style={{ color: 'var(--primary)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {post.category}
                                </span>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', margin: '0.5rem 0 0.75rem', lineHeight: 1.3 }}>
                                    {post.title}
                                </h3>
                                <p className={styles.text} style={{ fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                                    {shorten(post.excerpt)}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                        <Calendar size={14} /> {formatDate(post.date)} · {getAuthor(post.author).name}
                                    </span>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                                        Čítať <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
