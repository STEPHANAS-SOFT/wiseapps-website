'use client';

import { useState } from 'react';
import { apps } from '@/data/apps';
import styles from './page.module.css';

export default function DataDeletionPage() {
  const [selectedApp, setSelectedApp] = useState('');
  const [email, setEmail] = useState('');
  const [deletionType, setDeletionType] = useState('full');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reqId, setReqId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedApp) return;

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/data-deletion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appName: selectedApp,
          email: email,
          deletionType: deletionType,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setReqId(data.referenceId);
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit deletion request. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Data Deletion Request [${reqId}] - ${selectedApp}`);
    const body = encodeURIComponent(
      `DATA DELETION REQUEST DETAILS:\n\nReference ID: ${reqId}\nApp Name: ${selectedApp}\nUser Email: ${email}\nScope: ${
        deletionType === 'full' ? 'Full Account & Data Deletion' : 'Partial Data Removal'
      }\nDate: ${new Date().toISOString()}\n\nPlease process this request within 30 days.`
    );
    return `mailto:wiseappsdev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className={`section ${styles.page}`}>
      <div className="container">
        {/* Compliance Header */}
        <div className="section-header">
          <p className="eyebrow">Store Compliance &amp; Privacy</p>
          <h1 className="display-lg">
            Account &amp; Data <span className="text-gradient">Deletion Request</span>
          </h1>
          <p>
            In compliance with Google Play Store &amp; Apple App Store user data policies,
            you can request the deletion of your account and all associated personal data below.
          </p>
        </div>

        <div className={styles.container}>
          {/* Main Card */}
          <div className={`card ${styles.card}`}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.badge}>
                  <span>🔒</span> Official Data Deletion Portal
                </div>

                <p className={styles.instructions}>
                  Please specify the app you are using and the email address associated with your account.
                  Your request is submitted automatically to wiseappsdev@gmail.com for processing within 30 days.
                </p>

                {errorMessage && (
                  <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius-md)', color: '#FCA5A5', fontSize: '0.9rem' }}>
                    ⚠️ {errorMessage}
                  </div>
                )}

                {/* Select App */}
                <div className="form-group">
                  <label className="form-label" htmlFor="app-select">
                    Select Application <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <select
                    id="app-select"
                    className="form-select"
                    value={selectedApp}
                    onChange={(e) => setSelectedApp(e.target.value)}
                    required
                  >
                    <option value="">-- Choose an App --</option>
                    {apps.map((app) => (
                      <option key={app.id} value={app.name}>
                        {app.name} {app.hasAccount ? '(Account Supported)' : ''}
                      </option>
                    ))}
                    <option value="Other WiseApps Dev App">Other WiseApps Dev App</option>
                  </select>
                </div>

                {/* User Email */}
                <div className="form-group">
                  <label className="form-label" htmlFor="user-email">
                    Account Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="user-email"
                    className="form-input"
                    placeholder="Enter the email used in the app"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className={styles.fieldHint}>
                    Deletion details will be dispatched to wiseappsdev@gmail.com.
                  </span>
                </div>

                {/* Deletion Type */}
                <div className="form-group">
                  <label className="form-label">Scope of Deletion</label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="deletionType"
                        value="full"
                        checked={deletionType === 'full'}
                        onChange={() => setDeletionType('full')}
                      />
                      <div>
                        <strong>Full Account &amp; Data Deletion (Recommended)</strong>
                        <span>Permanently delete your profile, user data, activity history, and credentials.</span>
                      </div>
                    </label>

                    <label className={styles.radioLabel}>
                      <input
                        type="radio"
                        name="deletionType"
                        value="partial"
                        checked={deletionType === 'partial'}
                        onChange={() => setDeletionType('partial')}
                      />
                      <div>
                        <strong>Partial Data Removal</strong>
                        <span>Keep my account active but delete optional app history/content.</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
                  disabled={loading}
                  id="submit-deletion-btn"
                >
                  {loading ? 'Submitting Request...' : 'Submit Deletion Request'}
                </button>
              </form>
            ) : (
              /* Success Confirmation */
              <div className={styles.successState}>
                <div className={styles.successIcon}>✓</div>
                <h2>Data Deletion Request Recorded</h2>
                <p className={styles.reqRef}>
                  Reference ID: <code>{reqId}</code>
                </p>
                <p className={styles.successText}>
                  Your data deletion request for <strong>{selectedApp}</strong> ({email}) has been recorded.
                </p>

                <div className={styles.infoBox}>
                  <h4>What happens next?</h4>
                  <ul>
                    <li>Your account data has been queued for permanent deletion.</li>
                    <li>Account access and personal data will be wiped within 30 days.</li>
                  </ul>
                </div>

                <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <a href={getMailtoLink()} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
                    ✉️ Open Email App Backup
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setEmail(''); setSelectedApp(''); }}
                    className="btn btn-primary"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Policy & Guidance Sidebar */}
          <div className={styles.sidebar}>
            <div className={`card ${styles.policyCard}`}>
              <h3>📋 Google Play &amp; Apple Store Compliance</h3>
              <p>
                This deletion portal satisfies Google Play&apos;s <em>Data safety requirement</em> and Apple App Store&apos;s <em>Account Deletion requirement</em>.
              </p>
              <ul className={styles.policyList}>
                <li>
                  <strong>Web Accessibility:</strong> Users can request deletion directly from the browser without reinstalling the mobile app.
                </li>
                <li>
                  <strong>Data Scope:</strong> Requests delete account credentials along with all personal data collected by the application.
                </li>
                <li>
                  <strong>Retention Rules:</strong> Data legally required for tax, fraud prevention, or financial compliance (e.g. store purchase receipts) may be retained as permitted by law.
                </li>
              </ul>
            </div>

            <div className={`card ${styles.policyCard}`}>
              <h3>✉️ Direct Email Support</h3>
              <p>
                You can also email your deletion request directly to our privacy officer at:
              </p>
              <a href="mailto:wiseappsdev@gmail.com?subject=Data%20Deletion%20Request" className={styles.emailButton}>
                wiseappsdev@gmail.com
              </a>
              <p style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Please include your registered account email and the name of the app in your message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
