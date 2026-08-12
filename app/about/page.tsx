import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About WiseApps Dev',
  description:
    'WiseApps Dev is an indie software & mobile app studio based in Minna, Nigeria. Learn our story, mission, and the team behind 500K+ downloads across Android, iOS, Windows, and macOS.',
  openGraph: {
    title: 'About WiseApps Dev',
    description: 'Indie studio, global scale — building apps that solve real problems for real people.',
  },
};

const milestones = [
  { year: '2019', title: 'Founded', desc: 'WiseApps Dev launched as an indie mobile development studio in Minna, Nigeria.' },
  { year: '2021', title: '100K Downloads', desc: 'All Nigeria Newspapers crossed 100,000 installs, becoming our first breakout app.' },
  { year: '2023', title: 'Multi-Platform', desc: 'Expanded to iOS and desktop with VerseFlow, serving users on 4 platforms.' },
  { year: '2024', title: '500K+ Installs', desc: 'Combined downloads across all apps crossed the 500,000 milestone worldwide.' },
  { year: '2025', title: '11 Products', desc: 'Portfolio grew to 11 apps & software products across 6 categories.' },
];

const values = [
  {
    icon: '🎯',
    title: 'Purpose-Driven',
    desc: 'Every app we build solves a real, specific problem. We never build just to build — there has to be a genuine need behind it.',
  },
  {
    icon: '⚡',
    title: 'Performance First',
    desc: 'Fast, reliable, and lightweight. Our apps are built to work great on any device — from flagship phones to budget Android devices.',
  },
  {
    icon: '🎨',
    title: 'Beautiful by Default',
    desc: 'Great software should also look great. We invest heavily in clean UI design and smooth user experiences.',
  },
  {
    icon: '🌍',
    title: 'Built in Nigeria, For the World',
    desc: 'We are proudly Nigerian-built. Our apps serve users across Africa and globally — quality software knows no borders.',
  },
  {
    icon: '🔒',
    title: 'Privacy Respecting',
    desc: "We collect only what we need. No selling data, no dark patterns — we treat users the way we'd want to be treated.",
  },
  {
    icon: '📦',
    title: 'Always Shipping',
    desc: 'We believe in continuous improvement. Every week something is being built, tested, updated, or launched.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.blob1} />
          <div className={styles.blob2} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <p className="eyebrow">Our Story</p>
          <h1 className={`display-xl ${styles.heroTitle}`}>
            Indie Studio,{' '}
            <span className="text-gradient">Global Scale</span>
          </h1>
          <p className={styles.heroSubtitle}>
            WiseApps Dev is a one-person indie software studio based in Minna, Niger State, Nigeria —
            building mobile and desktop apps that solve real everyday problems for people across Africa and beyond.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/apps" className="btn btn-primary">See Our Apps</Link>
            <Link href="/support" className="btn btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { value: '500K+', label: 'Total Downloads' },
              { value: '11+', label: 'Apps & Software' },
              { value: '4', label: 'Platforms Supported' },
              { value: '4.5★', label: 'Avg. Store Rating' },
            ].map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <p className="eyebrow">The Beginning</p>
              <h2 className="display-lg" style={{ marginTop: 12, marginBottom: 20 }}>
                Started With a{' '}
                <span className="text-gradient">Problem to Solve</span>
              </h2>
              <p className={styles.storyText}>
                WiseApps Dev started in 2019 with a simple idea: build useful software that people
                actually need. The first app — All Nigeria Newspapers — was born out of the frustration of
                switching between a dozen different news apps just to follow Nigerian news. One app, every source.
              </p>
              <p className={styles.storyText}>
                That app grew to 500,000+ downloads and proved that well-made, focused software finds
                its audience regardless of where it's built. Since then, WiseApps Dev has shipped apps
                across music production, education, business, finance, transport, and church technology.
              </p>
              <p className={styles.storyText}>
                The studio is independently run — no investors, no external funding. Just a developer
                with a mission to build things that matter and the discipline to ship them.
              </p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.logoCard}>
                <Image src="/logo.png" alt="WiseApps Dev Logo" width={100} height={100} style={{ borderRadius: 20 }} unoptimized />
                <div className={styles.logoCardText}>
                  <div className={styles.logoCardTitle}>WiseApps Dev</div>
                  <div className={styles.logoCardSub}>Est. 2019 · Minna, Nigeria</div>
                </div>
              </div>
              <div className={styles.storesBadges}>
                <a
                  href="https://play.google.com/store/apps/developer?id=Wise+Apps+Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeBadge}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m3.18 23.76 11.31-11.32L3.26.26C2.97.68 2.78 1.17 2.78 1.72v20.56c0 .56.19 1.06.4 1.48zM20.08 10.65l-2.52-1.46-3.24 3.24 3.24 3.24 2.56-1.48a2.17 2.17 0 0 0 0-3.54zM4.87 24.28l12.12-6.97-2.85-2.85zM4.87-.27 17 6.7 14.14 9.55z" /></svg>
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com/developer/id1778404522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeBadge}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                  App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className={`section ${styles.founderSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">The Person Behind It</p>
            <h2 className="display-lg">
              Meet the <span className="text-gradient">Founder</span>
            </h2>
          </div>
          <div className={styles.founderCard}>
            <div className={styles.founderImageWrap}>
              <Image
                src="/founder.jpg"
                alt="Stephen Adeniran — Founder & Developer, WiseApps Dev"
                width={180}
                height={180}
                className={styles.founderImage}
                unoptimized
              />
              <div className={styles.founderGlow} />
            </div>
            <div className={styles.founderInfo}>
              <h3 className={styles.founderName}>Stephen Adeniran</h3>
              <p className={styles.founderTitle}>Founder &amp; Developer</p>
              <p className={styles.founderBio}>
                I&apos;m the developer behind every app at WiseApps Dev. Since 2019, I&apos;ve been
                building mobile and desktop software from Minna, Nigeria — solving everyday problems
                for people across Africa and beyond. From beat-making tools to church media software,
                every product I ship is something I&apos;d use myself.
              </p>
              <div className={styles.founderStats}>
                <div className={styles.founderStat}>
                  <span className={styles.founderStatValue}>11+</span>
                  <span className={styles.founderStatLabel}>Apps Shipped</span>
                </div>
                <div className={styles.founderStat}>
                  <span className={styles.founderStatValue}>500K+</span>
                  <span className={styles.founderStatLabel}>Total Downloads</span>
                </div>
                <div className={styles.founderStat}>
                  <span className={styles.founderStatValue}>6+</span>
                  <span className={styles.founderStatLabel}>Years Building</span>
                </div>
              </div>
              <a href="mailto:wiseappsdev@gmail.com" className={`btn btn-primary ${styles.founderCta}`}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="display-lg">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p>The principles behind every product we build.</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={`card ${styles.valueCard}`}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Our Journey</p>
            <h2 className="display-lg">
              Growing <span className="text-gradient-green">Year by Year</span>
            </h2>
          </div>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{m.year}</span>
                  <h3 className={styles.timelineTitle}>{m.title}</h3>
                  <p className={styles.timelineDesc}>{m.desc}</p>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className="display-lg">
              Have a Question or <span className="text-gradient">Collaboration Idea?</span>
            </h2>
            <p className={styles.ctaText}>
              Whether you need support, want to report a bug, or have a partnership idea — we'd love to hear from you.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/support" className="btn btn-primary">Contact Us</Link>
              <Link href="/apps" className="btn btn-secondary">Browse Our Apps</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
