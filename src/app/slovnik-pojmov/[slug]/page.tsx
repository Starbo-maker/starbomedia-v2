import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPagedTerms, getTerm, termHref } from '../../../data/glossary';
import styles from '../slovnik.module.css';

const SITE_URL = 'https://starbomedia.sk';

export function generateStaticParams() {
    return getPagedTerms().map((t) => ({ slug: t.slug }));
}

// Pojmy bez vlastnej stránky žijú len ako anchor na hube — neznáme slugy sú 404.
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const term = getTerm(slug);
    if (!term?.page) return {};
    const url = `${SITE_URL}/slovnik-pojmov/${term.slug}`;
    const title = `Čo je ${term.term}? | Slovník pojmov | Starbomedia`;
    return {
        title,
        description: term.short,
        alternates: { canonical: url },
        openGraph: {
            title: `Čo je ${term.term}?`,
            description: term.short,
            url,
            type: 'article',
        },
    };
}

export default async function GlossaryTermPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const term = getTerm(slug);
    if (!term?.page) notFound();
    const { page } = term;

    const url = `${SITE_URL}/slovnik-pojmov/${term.slug}`;
    const related = (term.related ?? [])
        .map((s) => getTerm(s))
        .filter((t): t is NonNullable<typeof t> => Boolean(t));

    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'DefinedTerm',
            '@id': url,
            name: term.term,
            ...(term.fullName ? { alternateName: term.fullName } : {}),
            description: page.quick,
            url,
            inLanguage: 'sk',
            inDefinedTermSet: {
                '@type': 'DefinedTermSet',
                '@id': `${SITE_URL}/slovnik-pojmov`,
                name: 'Slovník pojmov online marketingu',
            },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Domov', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Slovník pojmov', item: `${SITE_URL}/slovnik-pojmov` },
                { '@type': 'ListItem', position: 3, name: term.term, item: url },
            ],
        },
    ];

    return (
        <>
            <header className={styles.hero}>
                <div className="container">
                    <nav className={styles.breadcrumb} aria-label="Omrvinková navigácia">
                        <Link href="/slovnik-pojmov">Slovník pojmov</Link>
                        <span>/</span>
                        <span>{term.term}</span>
                    </nav>
                    <h1 className={styles.title}>Čo je {term.term}?</h1>
                    {term.fullName && <p className={styles.termPageFullName}>{term.fullName}</p>}
                </div>
            </header>

            <div className="container">
                <article className={styles.article}>
                    <div className={styles.quick}>
                        <p>{page.quick}</p>
                    </div>

                    {page.formula && <div className={styles.formula}>{page.formula}</div>}

                    {page.sections.map((s) => (
                        <section key={s.heading}>
                            <h2 className={styles.sectionHeading}>{s.heading}</h2>
                            {s.paragraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </section>
                    ))}

                    {related.length > 0 && (
                        <div className={styles.relatedBlock}>
                            <h2 className={styles.relatedTitle}>Súvisiace pojmy</h2>
                            <div className={styles.relatedChips}>
                                {related.map((r) => (
                                    <Link key={r.slug} href={termHref(r.slug)} className={styles.relatedChip}>
                                        {r.term}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {(term.links ?? []).length > 0 && (
                        <div className={styles.relatedBlock}>
                            <h2 className={styles.relatedTitle}>Kam ďalej</h2>
                            <ul className={styles.linksList}>
                                {(term.links ?? []).map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href}>{l.label} →</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className={styles.cta}>
                        <p>
                            <strong>Nechce sa vám to riešiť samým?</strong><br />
                            Výkonnostný marketing — od metrík po kampane — riešime za e-shopy a firmy každý deň.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary">Nezáväzná konzultácia</Link>
                    </div>
                </article>

                <div className={styles.footerNav}>
                    <Link
                        href="/slovnik-pojmov"
                        className="btn"
                        style={{ background: 'white', border: '1px solid #e2e8f0', color: '#0f172a', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <ArrowLeft size={16} /> Späť na slovník pojmov
                    </Link>
                </div>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
