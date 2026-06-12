import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import GtmProduction from '@/components/GtmProduction';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WebMcpTools from '@/components/WebMcpTools';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://starbomedia.sk'),
  title: {
    default: 'Starbomedia | Online marketing agentúra — Google Ads, Meta Ads, SEO',
    template: '%s',
  },
  description: 'Profesionálna online marketing agentúra. Google Ads, Meta Ads, SEO a AI nástroje pre e-shopy a firmy v strednej a východnej Európe.',
  // Self-canonical pre každú stránku (relatívna './' sa resolvuje per-route voči metadataBase).
  // Stránky s vlastným alternates (blog články) si ho prepíšu.
  alternates: { canonical: './' },
};

// Sitewide Organization + WebSite schema — vizitka firmy pre vyhľadávače a AI systémy.
const orgJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://starbomedia.sk/#organization',
    name: 'Starbomedia',
    legalName: 'Starbo Media s.r.o.',
    url: 'https://starbomedia.sk',
    logo: { '@type': 'ImageObject', url: 'https://starbomedia.sk/logo.png' },
    email: 'marketing@starbomedia.sk',
    telephone: '+421940782070',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dlhá nad Váhom 446',
      addressCountry: 'SK',
    },
    sameAs: [
      'https://www.facebook.com/starbomedia',
      'https://www.linkedin.com/company/starbomedia/',
      'https://twitter.com/starbomedia',
    ],
    description:
      'Online marketingová agentúra pre e-shopy a firmy: Google Ads, Meta Ads, SEO, správa sociálnych sietí, cenové porovnávače, webová analytika a AI nástroje. Od roku 2012, 13 trhov strednej a východnej Európy.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://starbomedia.sk/#website',
    name: 'Starbomedia',
    url: 'https://starbomedia.sk',
    inLanguage: 'sk',
    publisher: { '@id': 'https://starbomedia.sk/#organization' },
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={outfit.variable}>
      <body>
        <a href="#obsah" className="skip-link">Preskočiť na obsah</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <GtmProduction />
        <WebMcpTools />
        <Header />
        <main id="obsah">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
