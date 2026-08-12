import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Support & Contact',
  description: 'Get support or send inquiries to WiseApps Dev.',
};

export default function SupportPage() {
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
            Reach out to our team below.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Direct Contact Info */}
          <div className={styles.infoCol}>
            <div className={`card ${styles.card}`}>
              <div className={styles.icon}>📧</div>
              <h3>Email Support</h3>
              <p>For app support, bug reports, and general feedback.</p>
              <a href="mailto:wiseappsdev@gmail.com" className={styles.contactLink}>
                wiseappsdev@gmail.com
              </a>
            </div>

            <div className={`card ${styles.card}`}>
              <div className={styles.icon}>📱</div>
              <h3>Google Play Apps</h3>
              <p>Check out our developer page on Google Play for all our active apps.</p>
              <a
                href="https://play.google.com/store/apps/developer?id=Wise+Apps+Dev"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Wise Apps Dev on Play Store →
              </a>
            </div>

            <div className={`card ${styles.card}`}>
              <div className={styles.icon}>📍</div>
              <h3>Office Location</h3>
              <p>WiseApps Dev<br />Minna, Niger State, Nigeria</p>
            </div>
          </div>

          {/* Form */}
          <div className={`card ${styles.formCard}`}>
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <form
              action="mailto:wiseappsdev@gmail.com"
              method="GET"
              className={styles.form}
            >
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="subject"
                  className="form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="app">App (Optional)</label>
                <select id="app" className="form-select">
                  <option value="">General Inquiry</option>
                  <option value="SoundPad">SoundPad — Beat Maker &amp; DAW</option>
                  <option value="Bookora">Bookora – Appointment Booking</option>
                  <option value="NewsRadar">NewsRadar: Nigeria News</option>
                  <option value="All Nigeria Newspapers">All Nigeria Newspapers</option>
                  <option value="Invoice Manager">Invoice Manager</option>
                  <option value="PrepForge">PrepForge</option>
                  <option value="Nigeria Comedy Sounds">Nigeria Comedy Sounds &amp; Effect</option>
                  <option value="AdPulse">AdPulse</option>
                  <option value="Subsify">Subsify – Data &amp; Bills Payment</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="body"
                  className="form-textarea"
                  placeholder="Describe your issue or question..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
