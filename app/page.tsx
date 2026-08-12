import type { Metadata } from 'next';
import Link from 'next/link';
import { apps } from '@/data/apps';
import AppCard from '@/components/AppCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'WiseApps Dev — Mobile App Development',
  description:
    'WiseApps Dev builds mobile apps people love — from beat makers to news readers, appointment booking to AI-powered study tools. Available on Google Play and the App Store.',
};

const stats = [
  { value: '9+', label: 'Apps Published' },
  { value: '2', label: 'Platforms' },
  { value: '50K+', label: 'Downloads' },
  { value: '4.5★', label: 'Avg. Rating' },
];

const categories = [
  { icon: '🎵', label: 'Music & Audio' },
  { icon: '📰', label: 'News' },
  { icon: '💼', label: 'Business' },
  { icon: '🧠', label: 'Education' },
  { icon: '💳', label: 'Finance' },
  { icon: '😂', label: 'Entertainment' },
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
            WiseApps Dev creates mobile applications that millions of users rely on every day
            — from music production tools to AI study assistants, all built for Android and iOS.
          </p>

          <div className={`${styles.heroCtas} animate-fade-in-up delay-300`}>
            <Link href="/apps" className="btn btn-primary">
              Explore Our Apps
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/support" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>

          {/* Store links */}
          <div className={`${styles.storeLinks} animate-fade-in-up delay-400`}>
            <a
              href="https://play.google.com/store/apps/developer?id=Wise+Apps+Dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storePill}
              id="hero-play-store-link"
            >
              <GooglePlayIcon />
              <span>View on Google Play</span>
            </a>
          </div>
        </div>

        {/* Floating cards decoration */}
        <div className={`${styles.floatingCards} hide-mobile`} aria-hidden="true">
          <div className={`${styles.floatCard} ${styles.floatCard1} animate-float`}>
            <span>🎹</span>
            <span>SoundPad</span>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard2} animate-float delay-200`}>
            <span>📅</span>
            <span>Bookora</span>
          </div>
          <div className={`${styles.floatCard} ${styles.floatCard3} animate-float delay-400`}>
            <span>🧠</span>
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
              Apps People <span className="text-gradient">Love to Use</span>
            </h2>
            <p>
              From productivity tools to entertainment apps, every product we ship is crafted with
              care and shipped with quality.
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
                View All {apps.length} Apps
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
              Diverse Apps,{' '}
              <span className="text-gradient">One Vision</span>
            </h2>
            <p>We build across categories — from audio production to fintech to news aggregation.</p>
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
                Small Team,{' '}
                <span className="text-gradient">Big Impact</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '16px' }}>
                WiseApps Dev is an indie mobile app development studio based in Minna, Nigeria.
                We build products that solve real problems for real people — whether that's helping
                a musician make beats, a student study smarter, or a business owner manage their
                appointments.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '28px' }}>
                Every app we ship goes through rigorous quality testing and is built with the end
                user&apos;s experience at the forefront. We believe in clean UI, fast performance,
                and apps that just work.
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
                  <div className={styles.aboutCardTitle}>Cross-Platform</div>
                  <div className={styles.aboutCardSub}>Android & iOS apps</div>
                </div>
              </div>
              <div className={styles.aboutCard}>
                <div className={styles.aboutCardIcon}>⚡</div>
                <div>
                  <div className={styles.aboutCardTitle}>Quality First</div>
                  <div className={styles.aboutCardSub}>4.5★ average rating</div>
                </div>
              </div>
            </div>
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
