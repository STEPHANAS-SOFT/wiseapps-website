import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'WiseApps Dev — Mobile App Development',
    template: '%s | WiseApps Dev',
  },
  description:
    'WiseApps Dev builds mobile apps people love — from beat makers to news readers, appointment booking to AI-powered study tools. Available on Google Play and the App Store.',
  keywords: ['WiseApps Dev', 'mobile apps', 'Android apps', 'iOS apps', 'Nigeria', 'app development'],
  authors: [{ name: 'WiseApps Dev', url: 'https://wiseappsdev.vercel.app' }],
  openGraph: {
    type: 'website',
    siteName: 'WiseApps Dev',
    title: 'WiseApps Dev — Mobile App Development',
    description: 'Building mobile apps that people love — across Africa and beyond.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WiseApps Dev — Mobile App Development',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
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
      </body>
    </html>
  );
}
