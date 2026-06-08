import { readFileSync } from 'node:fs';
import path from 'node:path';
import serviceStyles from '../service.module.css';
import styles from './gdpr.module.css';

export const metadata = {
    title: 'Ochrana osobných údajov | Starbomedia',
    description: 'Informácie o spracúvaní osobných údajov v súlade s GDPR.',
};

export default function PrivacyPage() {
    const html = readFileSync(path.join(process.cwd(), 'src/content/gdpr.html'), 'utf8');

    return (
        <>
            <header className={serviceStyles.header} style={{ padding: '6rem 0 3rem' }}>
                <div className={`container ${serviceStyles.headerContent}`}>
                    <h1 className={serviceStyles.title} style={{ fontSize: '2.5rem' }}>Ochrana osobných údajov</h1>
                </div>
            </header>

            <div className={`container ${serviceStyles.content}`}>
                <section className={serviceStyles.section} style={{ padding: '0 0 5rem' }}>
                    <div className={styles.legal} dangerouslySetInnerHTML={{ __html: html }} />
                </section>
            </div>
        </>
    );
}
