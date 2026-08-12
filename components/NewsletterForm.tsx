'use client';
import { useState } from 'react';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success} role="alert">
        <span className={styles.successIcon}>🎉</span>
        <div>
          <p className={styles.successTitle}>You're on the list!</p>
          <p className={styles.successText}>We'll notify you when we launch something new. Thanks for subscribing!</p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.inputRow}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className={styles.input}
          required
          id="newsletter-email"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          className={styles.submitBtn}
          disabled={status === 'loading'}
          id="newsletter-submit-btn"
        >
          {status === 'loading' ? (
            <span className={styles.spinner} />
          ) : (
            <>
              Notify Me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
      {status === 'error' && (
        <p className={styles.errorText}>Something went wrong. Please try again.</p>
      )}
      <p className={styles.hint}>No spam. Unsubscribe anytime.</p>
    </form>
  );
}
