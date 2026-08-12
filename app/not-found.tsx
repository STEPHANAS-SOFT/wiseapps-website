'use client';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>
      <div className={styles.content}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.subtitle}>
          Looks like this page took a wrong turn. It might have been moved, deleted, or it never existed.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/apps" className="btn btn-secondary">Browse Apps</Link>
          <Link href="/support" className="btn btn-secondary">Get Support</Link>
        </div>
      </div>
    </div>
  );
}
