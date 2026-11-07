'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { BLOG_TOPICS, type BlogTopicId } from '../../data/blogTopics';
import styles from './blog.module.css';

export type BlogListPost = {
    slug: string;
    title: string;
    excerpt: string;
    dateLabel: string;
    authorName: string;
    topics: BlogTopicId[];
    featuredImage: string | null;
    featuredW?: number;
    featuredH?: number;
};

const PAGE_SIZE = 12;
type Filter = BlogTopicId | 'vsetko';

// Všetky články sú v HTML vždy (kvôli SEO a interným odkazom) — filter a stránkovanie ich len skrývajú.
export default function BlogList({ posts }: { posts: BlogListPost[] }) {
    const [filter, setFilter] = useState<Filter>('vsetko');
    const [limit, setLimit] = useState(PAGE_SIZE);

    useEffect(() => {
        const tema = new URLSearchParams(window.location.search).get('tema');
        if (tema && BLOG_TOPICS.some((t) => t.id === tema)) setFilter(tema as BlogTopicId);
    }, []);

    const choose = (next: Filter) => {
        setFilter(next);
        setLimit(PAGE_SIZE);
        const url = new URL(window.location.href);
        if (next === 'vsetko') url.searchParams.delete('tema');
        else url.searchParams.set('tema', next);
        window.history.replaceState(null, '', url);
    };

    const matches = (p: BlogListPost) => filter === 'vsetko' || p.topics.includes(filter);
    const total = posts.filter(matches).length;
    const shown = Math.min(limit, total);

    const chips: { id: Filter; label: string; count: number }[] = [
        { id: 'vsetko', label: 'Všetko', count: posts.length },
        ...BLOG_TOPICS.map((t) => ({ id: t.id, label: t.label, count: posts.filter((p) => p.topics.includes(t.id)).length })),
    ];

    let rank = 0;

    return (
        <>
            <div className={styles.filterBar} role="group" aria-label="Filtrovať články podľa témy">
                <div className={styles.chips}>
                    {chips.filter((c) => c.count > 0).map((c) => (
                        <button
                            key={c.id}
                            type="button"
                            className={`${styles.chip} ${filter === c.id ? styles.chipActive : ''}`}
                            aria-pressed={filter === c.id}
                            onClick={() => choose(c.id)}
                        >
                            {c.label}
                            <span className={styles.chipCount}>{c.count}</span>
                        </button>
                    ))}
                </div>
            </div>

            <p className={styles.resultInfo} aria-live="polite">
                Zobrazených {shown} z {total} {total === 1 ? 'článku' : 'článkov'}
            </p>

            <div className={styles.grid}>
                {posts.map((post) => {
                    const visible = matches(post) && rank++ < limit;
                    return (
                        <Link key={post.slug} href={`/${post.slug}`} className={`${styles.card} ${visible ? '' : styles.hidden}`}>
                            {post.featuredImage && (
                                <Image
                                    src={post.featuredImage}
                                    alt={post.title}
                                    width={post.featuredW ?? 768}
                                    height={post.featuredH ?? 430}
                                    sizes="(max-width: 768px) 100vw, 380px"
                                    loading="lazy"
                                    className={styles.cardImage}
                                />
                            )}
                            <div className={styles.cardBody}>
                                <span className={styles.cardTopic}>
                                    {post.topics.map((id) => BLOG_TOPICS.find((t) => t.id === id)?.label).join(' · ')}
                                </span>
                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <div className={styles.cardMeta}>
                                    <span className={styles.cardDate}>
                                        <Calendar size={14} aria-hidden="true" /> {post.dateLabel} · {post.authorName}
                                    </span>
                                    <span className={styles.cardMore}>
                                        Čítať <ArrowRight size={14} aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {shown < total && (
                <div className={styles.moreWrap}>
                    <button type="button" className="btn btn-secondary" onClick={() => setLimit((l) => l + PAGE_SIZE)}>
                        Zobraziť ďalšie ({total - shown})
                    </button>
                </div>
            )}
        </>
    );
}
