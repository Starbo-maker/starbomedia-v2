import Link from 'next/link';
import styles from '../service.module.css';

export const metadata = {
    title: 'Blog | Starbo Media',
    description: 'Novinky zo sveta online marketingu. Tipy a triky pre Google Ads, SEO a sociálne siete.',
};

export default function BlogPage() {
    const posts = [
        {
            title: 'Ako na efektívne Google Ads v roku 2025?',
            excerpt: 'Prehľad noviniek a stratégií, ktoré fungujú. Performance Max, AI a automatizácia.',
            date: '28. Dec 2024',
            category: 'Google Ads',
            color: '#3b82f6'
        },
        {
            title: 'SEO Audit: Na čo nezabudnúť?',
            excerpt: 'Kompletný checklist pre technické SEO. Skontrolujte si svoj web.',
            date: '15. Dec 2024',
            category: 'SEO',
            color: '#10b981'
        },
        {
            title: 'Prečo investovať do brandu na YouTube?',
            excerpt: 'Video obsah je budúcnosť. Ako začať s reklamou na YouTube efektívne.',
            date: '10. Nov 2024',
            category: 'Youtube',
            color: '#ef4444'
        }
    ];

    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>Marketingový Blog</h1>
                    <p className={styles.subtitle}>
                        Zdieľame naše know-how. Články, návody a postrehy z praxe.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <div className={styles.cardGrid}>
                    {posts.map((post, index) => (
                        <div key={index} className={styles.card}>
                            <span style={{ color: post.color, fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>{post.category}</span>
                            <h3 className={styles.cardTitle} style={{ margin: '0.5rem 0' }}>{post.title}</h3>
                            <p className={styles.text} style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.date}</span>
                                {/* <Link href="#" style={{ color: 'var(--primary)', fontWeight: 600 }}>Čítať viac</Link> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
