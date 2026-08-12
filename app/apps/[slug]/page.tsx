import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { apps } from '@/data/apps';
import styles from './page.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) return {};
  return {
    title: app.name,
    description: app.description,
  };
}

export default async function AppDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = apps.find((a) => a.slug === slug);
  if (!app) notFound();

  return (
    <section className={`section ${styles.page}`}>
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.blob} style={{ background: app.iconBg }} />
      </div>

      <div className="container">
        {/* Back link */}
        <Link href="/apps" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Apps &amp; Software
        </Link>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.iconWrap}>
            <Image
              src={app.iconUrl}
              alt={`${app.name} Icon`}
              width={100}
              height={100}
              style={{ borderRadius: 'var(--radius-xl)', objectFit: 'cover' }}
              unoptimized
            />
          </div>

          <div className={styles.headerInfo}>
            <span
              className={styles.category}
              style={{
                background: `${app.categoryColor}1A`,
                color: app.categoryColor,
                border: `1px solid ${app.categoryColor}33`,
              }}
            >
              {app.category}
            </span>
            <h1 className={`display-md ${styles.appName}`}>{app.name}</h1>
            <p className={styles.tagline}>{app.tagline}</p>

            {/* Platform badges */}
            <div className={styles.platforms}>
              {app.platforms.map((p) => (
                <span key={p} className={styles.platformBadge}>
                  {p === 'android' ? 'Android' : p === 'ios' ? 'iOS' : p === 'windows' ? 'Windows' : 'macOS'}
                </span>
              ))}
            </div>

            {/* Store / Download / Website buttons */}
            <div className={styles.storeButtons}>
              {app.websiteUrl && (
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  id={`website-${app.id}`}
                >
                  Visit Official Website →
                </a>
              )}
              {app.playStoreUrl && (
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                  id={`play-store-${app.id}`}
                >
                  <GooglePlayIcon />
                  <div>
                    <div className="store-badge-label">Get it on</div>
                    <div className="store-badge-name">Google Play</div>
                  </div>
                </a>
              )}
              {app.appStoreUrl && (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge"
                  id={`app-store-${app.id}`}
                >
                  <AppleIcon />
                  <div>
                    <div className="store-badge-label">Download on the</div>
                    <div className="store-badge-name">App Store</div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className={styles.contentGrid}>
          {/* Description */}
          <div>
            <div className={`card ${styles.descCard}`}>
              <h2 className={styles.sectionTitle}>About This Product</h2>
              <p className={styles.description}>{app.description}</p>
            </div>

            {/* Key Features */}
            <div className={`card ${styles.featuresCard}`}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureList}>
                {app.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.featureCheck}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={`card ${styles.infoCard}`}>
              <h3 className={styles.infoTitle}>Product Information</h3>
              <div className={styles.infoList}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Developer</span>
                  <span className={styles.infoValue}>WiseApps Dev</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Category</span>
                  <span className={styles.infoValue}>{app.category}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Platforms</span>
                  <span className={styles.infoValue}>
                    {app.platforms.map((p) => (p === 'android' ? 'Android' : p === 'ios' ? 'iOS' : p === 'windows' ? 'Windows' : 'macOS')).join(', ')}
                  </span>
                </div>
                {app.downloads && (
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Downloads</span>
                    <span className={styles.infoValue}>{app.downloads}</span>
                  </div>
                )}
                {app.rating && (
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Rating</span>
                    <span className={styles.infoValue}>{app.rating}</span>
                  </div>
                )}
              </div>
            </div>

            <div className={`card ${styles.linksCard}`}>
              <h3 className={styles.infoTitle}>Legal &amp; Support</h3>
              <div className={styles.linksList}>
                <Link href="/privacy" className={styles.legalLink}>
                  <span>🔒</span> Privacy Policy
                </Link>
                <Link href="/terms" className={styles.legalLink}>
                  <span>📜</span> Terms of Service
                </Link>
                {app.hasAccount && (
                  <Link href="/data-deletion" className={styles.legalLink}>
                    <span>🗑️</span> Data Deletion Request
                  </Link>
                )}
                <Link href="/support" className={styles.legalLink}>
                  <span>💬</span> Get Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m3.18 23.76 11.31-11.32L3.26.26C2.97.68 2.78 1.17 2.78 1.72v20.56c0 .56.19 1.06.4 1.48zM20.08 10.65l-2.52-1.46-3.24 3.24 3.24 3.24 2.56-1.48a2.17 2.17 0 0 0 0-3.54zM4.87 24.28l12.12-6.97-2.85-2.85zM4.87-.27 17 6.7 14.14 9.55z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
