import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import postsData from '../../content/blog/posts.json';
import styles from './article.module.css';

const SITE_URL = 'https://starbomedia.sk';

type Post = {
    slug: string;
    title: string;
    date: string;
    modified?: string;
    excerpt: string;
    category: string;
    featuredImage: string | null;
    featuredW?: number;
    featuredH?: number;
};

const POSTS = postsData as Post[];

export function generateStaticParams() {
    return POSTS.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

function getPost(slug: string) {
    return POSTS.find((p) => p.slug === slug);
}

function formatDate(iso: string) {
    try {
        return new Intl.DateTimeFormat('sk-SK', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
    } catch {
        return (iso || '').slice(0, 10);
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};
    const url = `${SITE_URL}/${slug}/`;
    const img = post.featuredImage ? `${SITE_URL}${post.featuredImage}` : undefined;
    return {
        title: `${post.title} | Starbomedia`,
        description: post.excerpt,
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.modified || post.date,
            images: img ? [{ url: img }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: img ? [img] : [],
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    const html = readFileSync(path.join(process.cwd(), 'src/content/blog/html', `${slug}.html`), 'utf8');

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.modified || post.date,
        author: { '@type': 'Person', name: 'Peter Štrbo' },
        publisher: {
            '@type': 'Organization',
            name: 'Starbomedia',
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
        },
        image: post.featuredImage ? `${SITE_URL}${post.featuredImage}` : undefined,
        mainEntityOfPage: `${SITE_URL}/${slug}/`,
    };

    return (
        <>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroInner}`}>
                    <div className={styles.breadcrumb}>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span>{post.category}</span>
                    </div>
                    <span className={styles.category}>{post.category}</span>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.metaItem}><Calendar size={16} /> {formatDate(post.date)}</span>
                        <span className={styles.metaItem}><User size={16} /> Peter Štrbo</span>
                    </div>
                </div>
                {post.featuredImage && (
                    <div className="container">
                        <Image
                            src={post.featuredImage}
                            alt={post.title}
                            width={post.featuredW ?? 1200}
                            height={post.featuredH ?? 630}
                            className={styles.featured}
                            priority
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                    </div>
                )}
            </header>

            <div className="container">
                <div className={styles.entry} dangerouslySetInnerHTML={{ __html: html }} />

                <div className={styles.footerNav}>
                    <Link href="/blog" className="btn" style={{ background: 'white', border: '1px solid #e2e8f0', color: '#0f172a', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <ArrowLeft size={16} /> Späť na blog
                    </Link>
                    <Link href="/kontakt" className="btn btn-primary">Chcem nezáväznú konzultáciu</Link>
                </div>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
