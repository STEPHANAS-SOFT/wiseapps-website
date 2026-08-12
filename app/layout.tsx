import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import BackToTop from '@/components/BackToTop';

const BASE_URL = 'https://wiseapps-website.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'WiseApps Dev — Mobile & Desktop App Development',
    template: '%s | WiseApps Dev',
  },
  description:
    'WiseApps Dev builds mobile and desktop apps people love — from beat makers to news readers, VerseFlow church media to AI study tools. 500K+ downloads on Google Play, App Store, Windows & macOS.',
  keywords: [
    'WiseApps Dev', 'mobile apps', 'Android apps', 'iOS apps', 'Nigeria',
    'app development', 'SoundPad', 'VerseFlow', 'Bookora', 'PrepForge',
    'indie developer', 'Google Play', 'App Store',
  ],
  authors: [{ name: 'WiseApps Dev', url: BASE_URL }],
  creator: 'WiseApps Dev',
  publisher: 'WiseApps Dev',
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'WiseApps Dev',
    title: 'WiseApps Dev — Mobile & Desktop App Development',
    description:
      'Building mobile and desktop apps that people love — 500K+ downloads across Android, iOS, Windows & macOS. Based in Nigeria, trusted worldwide.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'WiseApps Dev — Mobile & Desktop App Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WiseApps Dev — Mobile & Desktop App Development',
    description: 'Building mobile and desktop apps that people love — 500K+ downloads worldwide.',
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
