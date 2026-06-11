import type { Metadata } from 'next';
import Link from 'next/link';
import { GLOSSARY_CATEGORIES, GLOSSARY_TERMS } from '../../data/glossary';
import GlossaryList from './GlossaryList';
import styles from './slovnik.module.css';

const SITE_URL = 'https://starbomedia.sk';

export const metadata: Metadata = {
    title: 'Slovník pojmov online marketingu | Starbomedia',
    description:
        'Zrozumiteľný slovník pojmov z online reklamy: PPC, Google Ads, Meta Ads, YouTube reklama, SEO, AI a webová analytika. Vyše 100 pojmov a metrík vysvetlených v slovenčine.',
    alternates: { canonical: `${SITE_URL}/slovnik-pojmov` },
    openGraph: {
        title: 'Slovník pojmov online marketingu',
        description:
            'PPC, Google Ads, Meta Ads, SEO, AI a metriky — vyše 100 pojmov online marketingu vysvetlených zrozumiteľne a v slovenčine.',
        url: `${SITE_URL}/slovnik-pojmov`,
        type: 'website',
    },
};

export default function GlossaryHubPage() {
    // DefinedTermSet — strojovo čitateľný slovník pre vyhľadávače a AI systémy.
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        '@id': `${SITE_URL}/slovnik-pojmov`,
        name: 'Slovník pojmov online marketingu',
        description:
            'Slovník pojmov z online reklamy, PPC, Google Ads, Meta Ads, SEO, AI a webovej analytiky.',
        inLanguage: 'sk',
        publisher: { '@type': 'Organization', name: 'Starbomedia', url: SITE_URL },
        hasDefinedTerm: GLOSSARY_TERMS.map((t) => ({
            '@type': 'DefinedTerm',
            name: t.term,
            description: t.short,
            url: t.page ? `${SITE_URL}/slovnik-pojmov/${t.slug}` : `${SITE_URL}/slovnik-pojmov#${t.slug}`,
        })),
    };

    const listTerms = GLOSSARY_TERMS.map((t) => ({
        slug: t.slug,
        term: t.term,
        fullName: t.fullName,
        short: t.short,
        category: t.category,
        hasPage: Boolean(t.page),
        links: t.links,
    }));

    return (
        <>
            <header className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">Domov</Link>
                        <span>/</span>
                        <span>Slovník pojmov</span>
                    </div>
                    <h1 className={styles.title}>Slovník pojmov online marketingu</h1>
                    <p className={styles.subtitle}>
                        PPC, Google Ads, Meta Ads, SEO, AI či webová analytika — marketing je plný skratiek.
                        V tomto slovníku ich vysvetľujeme zrozumiteľne a po slovensky, aby ste reportom
                        a návrhom kampaní rozumeli bez prekladača. Pojmy priebežne dopĺňame.
                    </p>
                </div>
            </header>

            <div className="container">
                <GlossaryList categories={GLOSSARY_CATEGORIES} terms={listTerms} />
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </>
    );
}
