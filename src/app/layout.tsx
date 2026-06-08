import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import GtmProduction from '@/components/GtmProduction';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={outfit.variable}>
      <GtmProduction />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
