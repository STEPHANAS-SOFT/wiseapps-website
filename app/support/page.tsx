'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function SupportPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [appName, setAppName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          appName,
          message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setTicketId(data.ticketId);
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit support request. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Support Ticket ${ticketId}] ${appName ? appName + ' - ' : ''}From ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nApp: ${appName || 'General Inquiry'}\n\nMessage:\n${message}`);
    return `mailto:wiseappsdev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Help &amp; Support</p>
          <h1 className="display-lg">
            We&apos;re Here to <span className="text-gradient">Help</span>
          </h1>
          <p>
            Have a question about one of our apps, need technical assistance, or want to send feedback?
            Reach out to our support team below.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Direct Contact Info & Store Cards */}
          <div className={styles.infoCol}>
            <div className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBadge}>📧</div>
                <div>
                  <h3>Email Support</h3>
                  <p>For app support, bug reports, and general inquiries.</p>
                </div>
              </div>
              <a href="mailto:wiseappsdev@gmail.com" className={styles.contactLink}>
                wiseappsdev@gmail.com →
              </a>
            </div>

            <div className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBadgePlay}>
                  <GooglePlayIcon />
                </div>
                <div>
                  <h3>Google Play Store</h3>
                  <p>Check out all our active Android apps on Google Play.</p>
                </div>
              </div>
              <a
                href="https://play.google.com/store/apps/developer?id=Wise+Apps+Dev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                id="support-play-store-link"
              >
                Wise Apps Dev on Google Play →
              </a>
            </div>

            <div className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBadgeApple}>
                  <AppleIcon />
                </div>
                <div>
                  <h3>Apple App Store</h3>
                  <p>Browse our iOS apps on the Apple App Store.</p>
                </div>
              </div>
              <a
                href="https://apps.apple.com/developer/id1778404522"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                id="support-app-store-link"
              >
                Wise Apps Dev on App Store →
              </a>
            </div>

            <div className={`card ${styles.card}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBadge}>📍</div>
                <div>
                  <h3>Office Location</h3>
                  <p>WiseApps Dev<br />Minna, Niger State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`card ${styles.formCard}`}>
            {!submitted ? (
              <>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                {errorMessage && (
                  <div style={{ padding: '12px 16px', marginBottom: '16px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius-md)', color: '#FCA5A5', fontSize: '0.9rem' }}>
                    ⚠️ {errorMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Your Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Your Email <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="app">App (Optional)</label>
                    <select
                      id="app"
                      className="form-select"
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                    >
                      <option value="">General Inquiry</option>
                      <option value="VerseFlow">VerseFlow (Desktop App)</option>
                      <option value="SoundPad">SoundPad — Beat Maker &amp; DAW</option>
                      <option value="Bookora">Bookora – Appointment Booking</option>
                      <option value="NewsRadar">NewsRadar: Nigeria News</option>
                      <option value="All Nigeria Newspapers">All Nigeria Newspapers</option>
                      <option value="Invoice Manager">Invoice Manager</option>
                      <option value="PrepForge">PrepForge</option>
                      <option value="Nigeria Comedy Sounds">Nigeria Comedy Sounds &amp; Effect</option>
                      <option value="AdPulse">AdPulse</option>
                      <option value="Subsify">Subsify – Data &amp; Bills Payment</option>
                      <option value="Buga Ride">Buga Ride</option>
                      <option value="FastrPay">FastrPay</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Message <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      placeholder="Describe your issue or question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={loading}
                    id="submit-support-btn"
                  >
                    {loading ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              </>
            ) : (
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h2>Message Received!</h2>
                <p className={styles.ticketRef}>
                  Ticket Reference: <code>{ticketId}</code>
                </p>
                <p className={styles.successText}>
                  Thank you, <strong>{name}</strong>! Your support request has been logged and sent to <code>wiseappsdev@gmail.com</code>. We will respond to <strong>{email}</strong> within 24 hours.
                </p>
                <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a href={getMailtoLink()} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
                    ✉️ Open Email App Backup
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setName(''); setEmail(''); setAppName(''); setMessage(''); }}
                    className="btn btn-primary"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m3.18 23.76 11.31-11.32L3.26.26C2.97.68 2.78 1.17 2.78 1.72v20.56c0 .56.19 1.06.4 1.48zM20.08 10.65l-2.52-1.46-3.24 3.24 3.24 3.24 2.56-1.48a2.17 2.17 0 0 0 0-3.54zM4.87 24.28l12.12-6.97-2.85-2.85zM4.87-.27 17 6.7 14.14 9.55z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
