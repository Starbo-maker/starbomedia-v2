'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
    Menu, X, ChevronDown, Globe, Search, Share2, Clapperboard,
    Youtube, TrendingUp, ShoppingBag, BarChart3,
} from 'lucide-react';
import styles from './Header.module.css';

// Položky rozbaľovacieho menu Služby — poradie podľa dôležitosti pre biznis.
const services = [
    { name: 'Prehľad služieb', desc: 'Online reklama od A po Z', href: '/reklama-na-internete', icon: Globe },
    { name: 'Google reklama', desc: 'Search, Shopping, PMax', href: '/google-reklama', icon: Search },
    { name: 'Facebook a Instagram', desc: 'Výkonnostné Meta Ads', href: '/facebook-reklama', icon: Share2 },
    { name: 'Sociálne siete a obsah', desc: 'Správa profilov, Reels a videá', href: '/sprava-socialnych-sieti', icon: Clapperboard },
    { name: 'YouTube reklama', desc: 'Video kampane', href: '/youtube-reklama', icon: Youtube },
    { name: 'SEO optimalizácia', desc: 'Organická viditeľnosť', href: '/seo', icon: TrendingUp },
    { name: 'Cenové porovnávače', desc: 'Heureka a produktové feedy', href: '/cenove-porovnavace', icon: ShoppingBag },
    { name: 'Webová analytika', desc: 'GA4, GTM, server-side meranie', href: '/analyza-webu', icon: BarChart3 },
    { name: 'Google Ads audit', desc: '74-bodová kontrola účtu zdarma', href: '/google-ads-audit', icon: Search },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Zmena stránky zatvorí dropdown aj mobilné menu.
    useEffect(() => {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Escape zatvorí dropdown (prístupnosť z klávesnice).
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsServicesOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const navLinks = [
        { name: 'Domov', href: '/' },
        { name: 'AI Studio', href: '/ai-studio' },
        { name: 'Cenník', href: '/cennik' },
        { name: 'Referencie', href: '/referencie-2' },
        { name: 'O nás', href: '/tim-starbomedia' },
        { name: 'Blog', href: '/blog' },
        { name: 'Kontakt', href: '/kontakt' },
    ];

    const isServiceActive = services.some((s) => pathname === s.href);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Starbo Media Logo"
                        width={110}
                        height={48}
                        className={styles.logo}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.navLinkActive : ''}`}>
                        Domov
                    </Link>

                    {/* Služby — rozbaľovacie menu */}
                    <div
                        className={styles.navItemWrap}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        {/* Disclosure pattern (nie ARIA menu) — bežné odkazy bez menu rolí */}
                        <button
                            type="button"
                            className={`${styles.navLink} ${styles.navTrigger} ${isServiceActive ? styles.navLinkActive : ''}`}
                            aria-expanded={isServicesOpen}
                            aria-controls="sluzby-dropdown"
                            onClick={() => setIsServicesOpen((o) => !o)}
                        >
                            Služby
                            <ChevronDown size={16} className={`${styles.chevron} ${isServicesOpen ? styles.chevronOpen : ''}`} />
                        </button>

                        <div id="sluzby-dropdown" className={`${styles.dropdown} ${isServicesOpen ? styles.dropdownOpen : ''}`}>
                            {services.map(({ name, desc, href, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`${styles.dropdownItem} ${pathname === href ? styles.dropdownItemActive : ''}`}
                                    onClick={() => setIsServicesOpen(false)}
                                >
                                    <span className={styles.dropdownIcon}><Icon size={18} /></span>
                                    <span>
                                        <span className={styles.dropdownName}>{name}</span>
                                        <span className={styles.dropdownDesc}>{desc}</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {navLinks.slice(1).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/kontakt" className={styles.ctaButton}>
                        Rýchly Audit
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Otvoriť menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu — mimo kapsuly: backdrop-filter na .container by z neho
                spravil containing block a fixed pozicovanie by sa počítalo voči kapsule.
                inert: zatvorené menu nesmie byť vo fokusovateľnom strome (je len odsunuté transformom) */}
            <div
                className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
                inert={!isMobileMenuOpen}
            >
                    <Link href="/" className={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                        Domov
                    </Link>

                    {/* Služby — akordeón */}
                    <div>
                        <button
                            type="button"
                            className={styles.mobileServicesBtn}
                            aria-expanded={isMobileServicesOpen}
                            onClick={() => setIsMobileServicesOpen((o) => !o)}
                        >
                            Služby
                            <ChevronDown size={22} className={`${styles.chevron} ${isMobileServicesOpen ? styles.chevronOpen : ''}`} />
                        </button>
                        {isMobileServicesOpen && (
                            <div className={styles.mobileSubmenu}>
                                {services.map(({ name, href, icon: Icon }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className={styles.mobileSubLink}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon size={18} />
                                        {name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {navLinks.slice(1).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
            </div>
        </header>
    );
};

export default Header;
