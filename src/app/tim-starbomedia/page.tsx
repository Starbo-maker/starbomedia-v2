import Link from 'next/link';
import { Users, Target, Rocket } from 'lucide-react';
import styles from '../service.module.css';

export const metadata = {
    title: 'O nás | Tím Starbo Media',
    description: 'Sme digitálna agentúra zameraná na výsledky. Zoznámte sa s naším tímom a filozofiou.',
};

export default function AboutPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124, 58, 237, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>O nás</h1>
                    <p className={styles.subtitle}>
                        Sme Starbo Media. Digitálna agentúra, ktorá pomáha firmám rásť v online prostredí.
                        Kombinujeme dáta, kreativitu a technológie.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <section className={`${styles.section} ${styles.grid}`}>
                    <div>
                        <h2>Naša Filozofia</h2>
                        <p className={styles.text}>
                            Veríme v transparentnosť a partnerstvo. Nie sme len dodávateľom služieb, ale partnerom pre váš biznis.
                            Náš úspech meriame vaším rastom. Preferujeme dlhodobú spoluprácu založenú na dôvere a výsledkoch.
                        </p>
                    </div>
                    <div className={styles.card} style={{ borderColor: '#8b5cf6' }}>
                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}><Target className={styles.featureIcon} /> Orientácia na výkon (Performance)</li>
                            <li className={styles.featureItem}><Users className={styles.featureIcon} /> Osobný prístup ku klientovi</li>
                            <li className={styles.featureItem}><Rocket className={styles.featureIcon} /> Inovatívne riešenia</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section} style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '3rem' }}>Náš Tím</h2>
                    <p className={styles.text} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Špecialisti na PPC, SEO, sociálne siete a tvorbu webov. Neustále sa vzdelávame a sledujeme trendy, aby sme vám prinášali tie najlepšie výsledky.
                    </p>
                </section>
            </div>
        </>
    );
}
