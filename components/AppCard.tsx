import Link from 'next/link';
import Image from 'next/image';
import { App } from '@/data/apps';
import styles from './AppCard.module.css';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  return (
    <Link href={`/apps/${app.slug}`} className={`card ${styles.card}`} id={`app-card-${app.id}`}>
      {/* Real App Icon */}
      <div className={styles.iconWrap}>
        <Image
          src={app.iconUrl}
          alt={`${app.name} Icon`}
          width={60}
          height={60}
          className={styles.iconImg}
          unoptimized
        />
      </div>

      {/* Category badge */}
      <div className={styles.meta}>
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
        {app.downloads && (
          <span className={styles.downloadsBadge}>
            ⚡ {app.downloads}
          </span>
        )}
      </div>

      <h3 className={styles.name}>{app.name}</h3>
      <p className={styles.tagline}>{app.tagline}</p>

      {/* Platform badges */}
      <div className={styles.platforms}>
        {app.platforms.includes('android') && (
          <span className={`badge ${styles.platform}`}>
            <AndroidIcon />
            Android
          </span>
        )}
        {app.platforms.includes('ios') && (
          <span className={`badge ${styles.platform}`}>
            <AppleIcon />
            iOS
          </span>
        )}
        {(app.platforms.includes('windows') || app.platforms.includes('mac')) && (
          <span className={`badge ${styles.platformDesktop}`}>
            <DesktopIcon />
            Desktop ({app.platforms.map((p) => p === 'windows' ? 'Win' : 'macOS').join('/')})
          </span>
        )}
      </div>

      {/* Arrow */}
      <div className={styles.arrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </Link>
  );
}

function AndroidIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.523 15.341A1 1 0 0 0 18 14.5V9.5a1 1 0 0 0-.477-.841l-5-3a1 1 0 0 0-1.046 0l-5 3A1 1 0 0 0 6 9.5v5a1 1 0 0 0 .477.841l5 3a1 1 0 0 0 1.046 0l5-3z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6l-2 3v1h8v-1l-2-3h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z" />
    </svg>
  );
}
