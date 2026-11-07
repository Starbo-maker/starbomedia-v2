import postsData from '../../content/blog/posts.json';
import { getAuthor } from '../../data/authors';
import { resolveTopics } from '../../data/blogTopics';
import styles from '../service.module.css';
import BlogList, { type BlogListPost } from './BlogList';

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
    topics?: string[];
};

const POSTS = postsData as Post[];

export const metadata = {
    title: 'Blog o online marketingu – Google Ads, Meta, SEO | Starbomedia',
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
    const listPosts: BlogListPost[] = POSTS.map((post) => ({
        slug: post.slug,
        title: post.title,
        excerpt: shorten(post.excerpt),
        dateLabel: formatDate(post.date),
        authorName: getAuthor(post.author).name,
        topics: resolveTopics(post.title, post.topics),
        featuredImage: post.featuredImage,
        featuredW: post.featuredW,
        featuredH: post.featuredH,
    }));

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
                <BlogList posts={listPosts} />
            </div>
        </>
    );
}
