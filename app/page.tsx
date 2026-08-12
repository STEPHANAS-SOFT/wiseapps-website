import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { apps } from '@/data/apps';
import AppCard from '@/components/AppCard';
import NewsletterForm from '@/components/NewsletterForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'WiseApps Dev — Mobile & Desktop App Development',
  description:
    'WiseApps Dev builds mobile and desktop apps people love — from beat makers to news readers, VerseFlow church media to AI study tools. Available on Google Play, App Store, Windows & macOS.',
};

const stats = [
  { value: '11+', label: 'Apps & Software' },
  { value: '3', label: 'Platforms (Mobile & Desktop)' },
  { value: '500K+', label: 'Downloads' },
  { value: '4.5★', label: 'Avg. Rating' },
];

const categories = [
  { icon: '💻', label: 'Desktop Software' },
  { icon: '🎵', label: 'Music & Audio' },
  { icon: '📰', label: 'News' },
  { icon: '💼', label: 'Business' },
  { icon: '🧠', label: 'Education' },
  { icon: '💳', label: 'Finance' },
];

const testimonials = [
  {
    name: 'Emeka O.',
    app: 'All Nigeria Newspapers',
    rating: 5,
    text: 'Best Nigerian news app I have used. Covers everything from Punch to Vanguard in one place. Fast and clean.',
    platform: 'Google Play',
  },
  {
    name: 'Tunde A.',
    app: 'SoundPad — Beat Maker',
    rating: 5,
    text: 'This app is a game changer. I use it with my MIDI keyboard every day to make beats. Highly recommended for producers.',
    platform: 'Google Play',
  },
  {
    name: 'Grace M.',
    app: 'Invoice Manager',
    rating: 5,
    text: 'Super easy to use. I send professional invoices to my clients within seconds. Saves me so much time running my business.',
    platform: 'App Store',
  },
  {
    name: 'Pastor Daniel K.',
    app: 'VerseFlow',
    rating: 5,
    text: 'VerseFlow has transformed our Sunday services. It picks up Bible verses automatically and displays them — our team loves it.',
    platform: 'verseflow.app',
  },
  {
    name: 'Chidi N.',
    app: 'Nigeria Comedy Sounds',
    rating: 5,
    text: 'Absolutely hilarious. I send these clips to my friends every day. The sound quality is great and there are so many to choose from.',
    platform: 'Google Play',
  },
  {
    name: 'Amara S.',
    app: 'PrepForge',
    rating: 5,
    text: 'I uploaded my lecture notes and it generated quiz questions immediately. My exam scores have improved a lot since I started using this.',
    platform: 'App Store',
  },
];

export default function HomePage() {
  const featuredApps = apps.slice(0, 6);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.meshBg}>
          <div className={`${styles.blob} ${styles.blob1}`} />
          <div className={`${styles.blob} ${styles.blob2}`} />
          <div className={`${styles.blob} ${styles.blob3}`} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroBadge} animate-fade-in`}>
            <span>🇳🇬</span>
            <span>Built in Nigeria · Available Worldwide</span>
          </div>

          <h1 className={`display-xl ${styles.heroTitle} animate-fade-in-up delay-100`}>
            Apps Built With{' '}
            <span className="text-gradient">Purpose</span>,{' '}
            <br className={styles.heroBreak} />
            Shipped With{' '}
            <span className="text-gradient-green">Passion</span>
          </h1>

          <p className={`${styles.heroSubtitle} animate-fade-in-up delay-200`}>
            WiseApps Dev creates high-performance mobile and desktop applications trusted by
            hundreds of thousands of users worldwide — from church media software and beat makers
            to AI study assistants.
          </p>

          <div className={`${styles.heroCtas} animate-fade-in-up delay-300`}>
            <Link href="/apps" className="btn btn-primary">
              Explore All Apps
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/support" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>

          {/* Store & Platform links (App Store + Play Store) */}
          <div className={`${styles.storeLinks} animate-fade-in-up delay-400`}>
            <a
              href="https://play.google.com/store/apps/developer?id=Wise+Apps+Dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storePill}
              id="hero-play-store-link"
            >
              <GooglePlayIcon />
              <span>Google Play</span>
            </a>

            <a
              href="https://apps.apple.com/developer/id1778404522"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storePill}
              id="hero-app-store-link"
            >
              <AppleIcon />
              <span>App Store</span>
            </a>

            <a
              href="https://verseflow.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storePillDesktop}
              id="hero-verseflow-link"
            >
              <DesktopIcon />
              <span>VerseFlow Desktop</span>
            </a>
          </div>
        </div>

        {/* Floating cards decoration with real icons */}
        <div className={`${styles.floatingCards} hide-mobile`} aria-hidden="true">
          <div className={`${styles.floatCard} ${styles.floatCard1} animate-float`}>
            <Image src="/icons/verseflow.png" alt="VerseFlow" width={28} height={28} style={{ borderRadius: 6 }} unoptimized />
            <span>VerseFlow</span>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard2} animate-float delay-200`}>
            <Image src="/icons/soundpad.png" alt="SoundPad" width={28} height={28} style={{ borderRadius: 6 }} unoptimized />
            <span>SoundPad</span>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard3} animate-float delay-400`}>
            <Image src="/icons/prepforge.png" alt="PrepForge" width={28} height={28} style={{ borderRadius: 6 }} unoptimized />
            <span>PrepForge</span>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apps Showcase ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Portfolio</p>
            <h2 className="display-lg">
              Software People <span className="text-gradient">Love to Use</span>
            </h2>
            <p>
              From mobile productivity tools to desktop church presentation software,
              every product we ship is crafted with care.
            </p>
          </div>

          <div className={styles.appsGrid}>
            {featuredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          {apps.length > 6 && (
            <div className={styles.viewAll}>
              <Link href="/apps" className="btn btn-secondary">
                View All {apps.length} Apps &amp; Software
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────── */}
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What We Build</p>
            <h2 className="display-lg">
              Diverse Products,{' '}
              <span className="text-gradient">One Vision</span>
            </h2>
            <p>We build across categories — mobile apps for Android &amp; iOS, plus desktop software for Windows &amp; macOS.</p>
          </div>
          <div className={styles.categoriesGrid}>
            {categories.map((c) => (
              <div key={c.label} className={`card ${styles.categoryCard}`}>
                <span className={styles.categoryIcon}>{c.icon}</span>
                <span className={styles.categoryLabel}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <p className="eyebrow">About Us</p>
              <h2 className="display-lg" style={{ marginTop: '12px', marginBottom: '20px' }}>
                Indie Studio,{' '}
                <span className="text-gradient">Global Scale</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                WiseApps Dev is an indie software &amp; mobile app development studio based in Minna, Nigeria.
                We build products that solve real problems for real people — whether that&apos;s helping
                a church media team present live Scripture &amp; lyrics with VerseFlow, a musician make beats
                on mobile with SoundPad, or a business owner manage their appointments with Bookora.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                Every app we ship goes through rigorous quality testing and is built with clean UI, fast
                performance, and reliability at the core.
              </p>
              <div className={styles.aboutCtas}>
                <Link href="/apps" className="btn btn-primary">See Our Apps</Link>
                <Link href="/support" className="btn btn-secondary">Contact Us</Link>
              </div>
            </div>
            <div className={styles.aboutDecor} aria-hidden="true">
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardIcon}>🇳🇬</div>
                <div>
                  <div className={styles.aboutCardTitle}>Based in Nigeria</div>
                  <div className={styles.aboutCardSub}>Minna, Niger State</div>
                </div>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardIcon}>📱</div>
                <div>
                  <div className={styles.aboutCardTitle}>Multi-Platform</div>
                  <div className={styles.aboutCardSub}>Android, iOS, Windows &amp; macOS</div>
                </div>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardIcon}>⚡</div>
                <div>
                  <div className={styles.aboutCardTitle}>Over 500,000+ Installs</div>
                  <div className={styles.aboutCardSub}>4.5★ average rating across stores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What Users Say</p>
            <h2 className="display-lg">
              Loved by <span className="text-gradient">Hundreds of Thousands</span>
            </h2>
            <p>Real reviews from real users across Google Play and the App Store.</p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <div key={t.name + t.app} className={`card ${styles.testimonialCard}`}>
                <div className={styles.testimonialStars}>
                  {'★'.repeat(t.rating)}
                </div>
                <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialMeta}>{t.app} · {t.platform}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────── */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterBg} aria-hidden="true">
          <div className={styles.newsletterBlob1} />
          <div className={styles.newsletterBlob2} />
        </div>
        <div className="container">
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterIcon}>📬</div>
            <h2 className={`display-lg ${styles.newsletterTitle}`}>
              Stay Updated on <span className="text-gradient">New Apps</span>
            </h2>
            <p className={styles.newsletterSubtitle}>
              Get notified when we launch new apps, release major updates, or have something exciting to share. No spam, ever.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} aria-hidden="true">
          <div className={styles.ctaBlob1} />
          <div className={styles.ctaBlob2} />
        </div>
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={`${styles.ctaBadge}`}>📧 Get in Touch</div>
            <h2 className="display-lg">
              Need Help or Have a{' '}
              <span className="text-gradient">Question?</span>
            </h2>
            <p className={styles.ctaText}>
              Reach out to our support team for help with any of our apps, feedback,
              or general inquiries. We respond within 24 hours.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/support" className="btn btn-primary" id="cta-support-btn">
                Contact Support
              </Link>
              <Link href="/privacy" className="btn btn-secondary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m3.18 23.76 11.31-11.32L3.26.26C2.97.68 2.78 1.17 2.78 1.72v20.56c0 .56.19 1.06.4 1.48zM20.08 10.65l-2.52-1.46-3.24 3.24 3.24 3.24 2.56-1.48a2.17 2.17 0 0 0 0-3.54zM4.87 24.28l12.12-6.97-2.85-2.85zM4.87-.27 17 6.7 14.14 9.55z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6l-2 3v1h8v-1l-2-3h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z" />
    </svg>
  );
}
