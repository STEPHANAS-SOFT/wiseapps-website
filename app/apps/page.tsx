import type { Metadata } from 'next';
import { apps } from '@/data/apps';
import AppCard from '@/components/AppCard';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Our Apps',
  description:
    'Browse all mobile apps by WiseApps Dev — available on Google Play and the Apple App Store.',
};

export default function AppsPage() {
  const androidApps = apps.filter((a) => a.platforms.includes('android'));
  const iosApps = apps.filter((a) => a.platforms.includes('ios'));

  return (
    <section className={`section ${styles.page}`}>
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <div className="container">
        <div className={`section-header ${styles.header}`}>
          <p className="eyebrow">App Portfolio</p>
          <h1 className="display-lg">
            All Our <span className="text-gradient">Apps</span>
          </h1>
          <p>
            {apps.length} apps published across Google Play and the Apple App Store.
            Quality-built, regularly updated.
          </p>
        </div>

        {/* All Apps Grid */}
        <div className={styles.grid}>
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        {/* Platform counts */}
        <div className={styles.platformRow}>
          <div className={styles.platformPill}>
            <GooglePlayIcon />
            <span>{androidApps.length} apps on Google Play</span>
          </div>
          <div className={styles.platformPill}>
            <AppleIcon />
            <span>{iosApps.length} apps on App Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m3.18 23.76 11.31-11.32L3.26.26C2.97.68 2.78 1.17 2.78 1.72v20.56c0 .56.19 1.06.4 1.48zM20.08 10.65l-2.52-1.46-3.24 3.24 3.24 3.24 2.56-1.48a2.17 2.17 0 0 0 0-3.54zM4.87 24.28l12.12-6.97-2.85-2.85zM4.87-.27 17 6.7 14.14 9.55z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
