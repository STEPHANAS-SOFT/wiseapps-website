import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Global Legal Privacy Policy for WiseApps Dev mobile applications, desktop software, and website.',
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="legal-content">
          <h1>Global Privacy Policy</h1>
          <p className="last-updated">Effective &amp; Last Updated: August 12, 2026</p>

          <p>
            This Privacy Policy governs the manner in which <strong>WiseApps Dev</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, maintains, discloses, and protects information collected from users (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) of our mobile applications (available on the Google Play Store and Apple App Store), desktop applications (including <em>VerseFlow</em>), and official website.
          </p>

          <h2>1. Regulatory Compliance Framework</h2>
          <p>
            WiseApps Dev adheres strictly to applicable international data protection standards, including:
          </p>
          <ul>
            <li><strong>NDPR &amp; NDPA:</strong> Nigeria Data Protection Regulation 2019 &amp; Nigeria Data Protection Act 2023.</li>
            <li><strong>Google Play Store Developer Policies:</strong> User Data Policy &amp; Data Safety disclosures.</li>
            <li><strong>Apple App Store Review Guidelines:</strong> Guideline 5.1 (Privacy &amp; Data Collection) &amp; Account Deletion Policy.</li>
            <li><strong>GDPR &amp; UK GDPR:</strong> General Data Protection Regulation for EU &amp; UK users.</li>
            <li><strong>CCPA / CPRA:</strong> California Consumer Privacy Act disclosures.</li>
          </ul>

          <h2>2. Scope of Data Collection</h2>
          <p>
            We collect minimal information necessary to deliver high-quality, reliable applications:
          </p>

          <h3>A. Information You Provide Directly</h3>
          <ul>
            <li><strong>Account &amp; Profile Data:</strong> Name, email address, and authentication credentials when creating an account in apps such as <em>Bookora</em>, <em>PrepForge</em>, <em>AdPulse</em>, <em>Subsify</em>, <em>VerseFlow</em>, <em>Buga Ride</em>, or <em>FastrPay</em>.</li>
            <li><strong>Customer Support Communications:</strong> Content of messages, bug reports, and correspondence submitted via our website or email.</li>
            <li><strong>User Content:</strong> Documents uploaded for AI processing (e.g. PDFs in <em>PrepForge</em>) or audio configuration data (e.g. <em>SoundPad</em> / <em>VerseFlow</em>). User documents are processed strictly to perform requested app functions.</li>
          </ul>

          <h3>B. Automatically Collected Technical Data</h3>
          <ul>
            <li><strong>Device &amp; Telemetry Data:</strong> Hardware model, operating system version, unique device identifiers (IDFV/Android ID), screen resolution, and language settings.</li>
            <li><strong>Crash &amp; Diagnostics Data:</strong> Anonymous stack traces and crash reports processed via Firebase Crashlytics to fix bugs and improve performance.</li>
            <li><strong>Analytics &amp; Usage Metrics:</strong> Aggregated, non-personally identifiable feature usage data via Firebase Analytics / GA4.</li>
          </ul>

          <h2>3. Financial &amp; Payment Security</h2>
          <p>
            WiseApps Dev does <strong>not</strong> collect, store, or process payment card numbers, bank account details, or PINs on our servers.
          </p>
          <ul>
            <li><strong>Mobile Store Purchases:</strong> In-app purchases and subscriptions are handled securely through Google Play In-App Billing or Apple App Store In-App Purchases, subject to Apple and Google privacy policies.</li>
            <li><strong>Subscription Management:</strong> Real-time subscription status and webhooks are handled securely via RevenueCat under TLS encryption.</li>
            <li><strong>Direct Utility Payments:</strong> Digital payments and bill processing (e.g. <em>Subsify</em> / <em>FastrPay</em>) are handled via licensed payment gateways (Paystack), operating under PCI-DSS Level 1 certification.</li>
          </ul>

          <h2>4. Third-Party Service Providers &amp; SDK Disclosures</h2>
          <p>
            To provide ad-supported free tiers, analytics, and infrastructure, our apps may integrate third-party SDKs that collect anonymous data under their respective policies:
          </p>
          <ul>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Services &amp; Firebase</a> (Analytics &amp; Crashlytics)</li>
            <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">Google AdMob</a> (Advertising)</li>
            <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat</a> (Subscription Lifecycle)</li>
            <li><a href="https://paystack.com/terms" target="_blank" rel="noopener noreferrer">Paystack Payment Gateway</a> (Payment Processing)</li>
          </ul>

          <h2>5. Audio &amp; Microphone Privacy Disclosures</h2>
          <p>
            For applications requiring microphone access (such as <em>SoundPad</em> or <em>VerseFlow</em>):
          </p>
          <ul>
            <li>Microphone access is utilized exclusively for real-time audio input, MIDI sampling, or live speech transcription.</li>
            <li>Audio streams processed locally on-device or via encrypted real-time transcription engines are <strong>never stored, sold, or used for advertising</strong>. Audio data is discarded immediately after processing.</li>
          </ul>

          <h2>6. Data Rights &amp; Automated Deletion Requests</h2>
          <p>
            Regardless of your geographic location, you possess the following rights regarding your data:
          </p>
          <ul>
            <li><strong>Right to Access &amp; Portability:</strong> Request a copy of personal data held about you.</li>
            <li><strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request the permanent deletion of your account and personal records.</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate personal data.</li>
          </ul>
          <p>
            To exercise your deletion rights without installing or opening our mobile app, visit our dedicated portal:
          </p>
          <p style={{ margin: '16px 0' }}>
            👉 <Link href="/data-deletion" style={{ fontWeight: 600 }}>Web-Based Account &amp; Data Deletion Portal</Link>
          </p>
          <p>
            Requests submitted via our portal are automatically logged and processed within 30 calendar days.
          </p>

          <h2>7. Data Retention &amp; Security Standards</h2>
          <p>
            We retain personal data only for as long as your account remains active or as needed to provide our services. We implement strict technical controls, including TLS 1.3 transport encryption, AES-256 storage encryption, and restricted database access.
          </p>
          <p>
            <em>Statutory Exception:</em> Transactional receipts and financial logs required for tax, accounting, or anti-fraud compliance will be retained for the minimum statutory period mandated by law.
          </p>

          <h2>8. Children&apos;s Privacy Protection</h2>
          <p>
            Our applications are not directed to children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us immediately for prompt deletion.
          </p>

          <h2>9. Limitation of Liability &amp; Disclaimers</h2>
          <p>
            While WiseApps Dev employs rigorous security practices, no method of electronic transmission or storage is 100% secure. WiseApps Dev disclaims liability for unauthorized access resulting from circumstances beyond reasonable control, including third-party platform breaches or user account credential neglect.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For privacy inquiries, data subject requests, or regulatory communications, contact our Data Protection Officer at:
          </p>
          <p>
            <strong>WiseApps Dev</strong><br />
            Attn: Data Protection Officer<br />
            Email: <a href="mailto:wiseappsdev@gmail.com">wiseappsdev@gmail.com</a><br />
            Location: Minna, Niger State, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
