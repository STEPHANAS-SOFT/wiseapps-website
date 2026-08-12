'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('wad-cookie-consent');
    if (!consent) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('wad-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('wad-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.inner}>
        <div className={styles.icon}>🍪</div>
        <div className={styles.text}>
          <p className={styles.title}>We use cookies</p>
          <p className={styles.desc}>
            We use analytics cookies to understand how visitors use our site so we can improve it.
            No personal data is sold. Read our{' '}
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>.
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={decline} className={styles.declineBtn} id="cookie-decline-btn">Decline</button>
          <button onClick={accept} className={styles.acceptBtn} id="cookie-accept-btn">Accept</button>
        </div>
      </div>
    </div>
  );
}
