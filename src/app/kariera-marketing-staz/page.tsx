import Link from 'next/link';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { ArrowLeft } from 'lucide-react';
import serviceStyles from '../service.module.css';
import legalStyles from '../ochrana-osobnych-udajov/gdpr.module.css';

export const metadata = {
    title: 'Marketing stáž (Šaľa) | Kariéra | Starbomedia',
    description: 'Hľadáme kreatívneho a technologicky zvedavého človeka na marketingovú stáž v Šali. Tvorba obsahu s AI (ChatGPT, Claude, Gemini) a moderný digitálny marketing v praxi.',
};

export default function MarketingStazPage() {
    const html = readFileSync(path.join(process.cwd(), 'src/content/kariera-marketing-staz.html'), 'utf8');

    return (
        <>
            <header className={serviceStyles.header} style={{ padding: '6rem 0 2rem' }}>
                <div className={`container ${serviceStyles.headerContent}`}>
                    <span style={{ display: 'inline-block', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--primary-dark)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0.35rem 0.9rem', borderRadius: '50px', marginBottom: '1.25rem' }}>
                        Kariéra · Šaľa
                    </span>
                    <h1 className={serviceStyles.title} style={{ fontSize: '2.5rem' }}>Marketing stáž</h1>
                </div>
            </header>

            <div className={`container ${serviceStyles.content}`}>
                <section className={serviceStyles.section} style={{ padding: '0 0 2rem' }}>
                    <div className={legalStyles.legal} dangerouslySetInnerHTML={{ __html: html }} />

                    <div style={{ maxWidth: '860px', margin: '3rem auto 0', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <Link href="/kariera" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <ArrowLeft size={16} /> Späť na kariéru
                        </Link>
                        <Link href="/kontakt" className="btn btn-primary">Mám záujem o pozíciu</Link>
                    </div>
                </section>
            </div>
        </>
    );
}
