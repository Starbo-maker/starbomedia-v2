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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={outfit.variable}>
      <body>
        <a href="#obsah" className="skip-link">Preskočiť na obsah</a>
        <GtmProduction />
        <WebMcpTools />
        <Header />
        <main id="obsah">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
