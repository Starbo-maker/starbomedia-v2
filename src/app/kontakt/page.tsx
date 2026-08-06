import { Mail, Phone, MapPin } from 'lucide-react';
import styles from '../service.module.css';
import ContactForm from '../../components/ContactForm';

export const metadata = {
    title: 'Kontakt | Starbomedia',
    description: 'Kontaktujte nás pre nezáväznú konzultáciu. Starbomedia — vaša online marketing agentúra.',
};

export default function ContactPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerBackground} style={{ background: 'radial-gradient(circle at 50% 0%, rgba(249, 115, 22, 0.1), transparent 70%)' }} />
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title}>Kontaktujte nás</h1>
                    <p className={styles.subtitle}>
                        Ste pripravení posunúť svoj biznis na vyšší level? Napíšte nám alebo zavolajte.
                        Tešíme sa na spoluprácu.
                    </p>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <section className={styles.grid} style={{ alignItems: 'start' }}>
                    {/* Contact Info */}
                    <div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle} style={{ marginBottom: '2rem' }}>Kontaktné údaje</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '12px' }}>
                                        <Mail size={24} color="#3b82f6" />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</p>
                                        <a href="mailto:marketing@starbomedia.sk" style={{ fontSize: '1.1rem', fontWeight: 600 }}>marketing@starbomedia.sk</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '12px' }}>
                                        <Phone size={24} color="#10b981" />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mobil</p>
                                        <a href="tel:+421940782070" style={{ fontSize: '1.1rem', fontWeight: 600 }}>+421 940 782 070</a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: '#f5f3ff', padding: '1rem', borderRadius: '12px' }}>
                                        <MapPin size={24} color="#8b5cf6" />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Kancelária</p>
                                        <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Dlhá nad Váhom 268</p>
                                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>927 05 Dlhá nad Váhom</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.6rem' }}>
                                            Sídlo spoločnosti: Dlhá nad Váhom 446
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.card} style={{ background: '#fff', borderColor: '#e2e8f0' }}>
                        <h3 className={styles.cardTitle}>Napíšte nám</h3>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </>
    );
}
