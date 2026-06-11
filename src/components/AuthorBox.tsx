import Image from 'next/image';
import Link from 'next/link';
import type { Author } from '../data/authors';

/** E-E-A-T box autora pod článkom — foto, meno, rola, krátke bio, odkaz na tím. */
export default function AuthorBox({ author }: { author: Author }) {
    return (
        <aside
            aria-label={`O autorovi: ${author.name}`}
            style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                background: '#f8fafc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                padding: '1.5rem',
                margin: '3rem 0 0',
            }}
        >
            <Image
                src={author.photo}
                alt={author.name}
                width={72}
                height={72}
                style={{ borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
                <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-muted)', margin: '0 0 0.35rem' }}>
                    O autorovi
                </p>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.15rem' }}>{author.name}</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, margin: '0 0 0.6rem' }}>{author.role}</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {author.bio}{' '}
                    <Link href="/tim-starbomedia" style={{ color: 'var(--primary)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                        Spoznajte celý tím →
                    </Link>
                </p>
            </div>
        </aside>
    );
}
