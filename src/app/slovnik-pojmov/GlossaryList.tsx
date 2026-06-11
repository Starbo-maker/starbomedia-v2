'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import styles from './slovnik.module.css';

// Klientsky filter nad pojmami — dáta prichádzajú zo servera ako serializovateľné props,
// celý zoznam je vyrenderovaný aj bez JS (filter je progressive enhancement).

export type ListTerm = {
    slug: string;
    term: string;
    fullName?: string;
    short: string;
    category: string;
    hasPage: boolean;
    links?: { label: string; href: string }[];
};

export type ListCategory = {
    id: string;
    title: string;
};

/** Porovnávanie bez diakritiky a veľkosti písmen („klucove" nájde „kľúčové"). */
function fold(s: string): string {
    return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export default function GlossaryList({ categories, terms }: { categories: ListCategory[]; terms: ListTerm[] }) {
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = fold(query.trim());
        if (!q) return terms;
        return terms.filter((t) =>
            fold(`${t.term} ${t.fullName ?? ''} ${t.short}`).includes(q)
        );
    }, [query, terms]);

    const visibleCategories = categories.filter((c) => filtered.some((t) => t.category === c.id));

    return (
        <>
            <div className={styles.searchWrap}>
                <Search size={18} className={styles.searchIcon} aria-hidden />
                <input
                    type="search"
                    className={styles.searchInput}
                    placeholder="Hľadať pojem… (napr. ROAS, konverzia, backlink)"
                    aria-label="Hľadať pojem v slovníku"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {!query && (
                <nav className={styles.catNav} aria-label="Kategórie slovníka">
                    {categories.map((c) => (
                        <a key={c.id} href={`#kategoria-${c.id}`} className={styles.catChip}>
                            {c.title}
                        </a>
                    ))}
                </nav>
            )}

            <div className={styles.listSection}>
                {visibleCategories.length === 0 && (
                    <p className={styles.noResults}>
                        Pre „{query}" sme nenašli žiadny pojem. Skúste iný výraz — alebo nám napíšte, ktorý pojem v slovníku chýba.
                    </p>
                )}

                {visibleCategories.map((cat) => (
                    <section key={cat.id} id={`kategoria-${cat.id}`} className={styles.categoryBlock}>
                        <h2 className={styles.categoryTitle}>{cat.title}</h2>
                        <div className={styles.termGrid}>
                            {filtered
                                .filter((t) => t.category === cat.id)
                                .map((t) => (
                                    <article key={t.slug} id={t.slug} className={styles.termCard}>
                                        <h3 className={styles.termName}>
                                            {t.hasPage ? <Link href={`/slovnik-pojmov/${t.slug}`}>{t.term}</Link> : t.term}
                                        </h3>
                                        {t.fullName && <span className={styles.termFullName}>{t.fullName}</span>}
                                        <p className={styles.termShort}>{t.short}</p>
                                        <div className={styles.termLinks}>
                                            {t.hasPage && (
                                                <Link href={`/slovnik-pojmov/${t.slug}`}>Celá definícia →</Link>
                                            )}
                                            {(t.links ?? []).map((l) => (
                                                <Link key={l.href} href={l.href}>{l.label}</Link>
                                            ))}
                                        </div>
                                    </article>
                                ))}
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
