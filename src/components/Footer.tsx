import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="Starbo Media Logo"
                            width={120}
                            height={32}
                        />
                    </Link>
                    <p className={styles.description}>
                        Profesionálna online marketing agentúra.
                        Špecializujeme sa na rast e-shopov a firiem prostredníctvom dátami riadenej reklamy.
                    </p>
                </div>

                <div className={styles.column}>
                    <h3>Služby</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/google-reklama">Google Reklama</Link></li>
                        <li><Link href="/facebook-reklama">Facebook Reklama</Link></li>
                        <li><Link href="/seo">SEO Optimalizácia</Link></li>
                        <li><Link href="/cenove-porovnavace">Cenové Porovnávače</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Spoločnosť</h3>
                    <ul className={styles.linkList}>
                        <li><Link href="/tim-starbomedia">O nás</Link></li>
                        <li><Link href="/kariera">Kariéra</Link></li>
                        <li><Link href="/referencie-2">Prípadové štúdie</Link></li>
                        <li><Link href="/kontakt">Kontakt</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Kontakt</h3>
                    <div className={styles.contactInfo}>
                        <p>
                            <span className={styles.contactLabel}>Email</span>
                            <a href="mailto:marketing@starbomedia.sk">marketing@starbomedia.sk</a>
                        </p>
                        <p>
                            <span className={styles.contactLabel}>Telefón</span>
                            <a href="tel:+421940782070">+421 940 782 070</a>
                        </p>
                        <p>
                            <span className={styles.contactLabel}>Adresa</span>
                            <span>Dlhá nad Váhom 446</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={`container ${styles.bottom}`}>
                <div className={styles.copyright}>
                    © {currentYear} Starbo Media s.r.o.
                    <span style={{ margin: '0 0.5rem' }}>•</span>
                    <Link href="/ochrana-osobnych-udajov">Ochrana súkromia</Link>
                </div>

                <div className={styles.socials}>
                    <a href="https://www.facebook.com/starbomedia" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                        <Facebook size={18} />
                    </a>
                    <a href="https://www.linkedin.com/company/starbomedia/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://twitter.com/Staarbo" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
