import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for WiseApps Dev applications and website.',
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="legal-content">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: August 12, 2026</p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of all mobile applications, software, and web services provided by <strong>WiseApps Dev</strong> (&quot;Company,&quot; &quot;we,&quot; or &quot;us&quot;).
            By downloading, installing, or using any of our applications, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptable Use</h2>
          <p>
            You agree to use our apps and services only for lawful purposes. You must not:
          </p>
          <ul>
            <li>Modify, reverse engineer, decompile, or attempt to extract source code from any WiseApps Dev application.</li>
            <li>Use the apps to transmit malicious software, spam, or unlawful content.</li>
            <li>Bypass or attempt to exploit any security controls, licensing mechanisms, or access restrictions.</li>
          </ul>

          <h2>2. User Accounts</h2>
          <p>
            For apps that require account registration, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. You agree to notify us immediately of any unauthorized account access.
          </p>

          <h2>3. Subscriptions &amp; In-App Purchases</h2>
          <p>
            Certain apps may offer premium features or digital content via one-time purchases or recurring subscriptions.
          </p>
          <ul>
            <li><strong>Billing:</strong> Billing is processed directly through Google Play In-App Purchases or the Apple App Store. Payments are subject to the terms and billing policies of the respective app store.</li>
            <li><strong>Cancellations:</strong> You can manage or cancel recurring subscriptions at any time through your Google Play Account or Apple ID settings.</li>
            <li><strong>Refunds:</strong> Refund requests are handled directly by Google Play or Apple according to their respective refund policies.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All original content, features, software code, logos, trademarks, and UI design across all WiseApps Dev applications remain the exclusive property of WiseApps Dev.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, WiseApps Dev shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our applications or services.
          </p>

          <h2>6. Data Protection &amp; Deletion</h2>
          <p>
            Your privacy is important to us. Please review our <Link href="/privacy">Privacy Policy</Link> to understand how we collect and manage data. If you wish to delete your account or personal data, visit our <Link href="/data-deletion">Data Deletion Request page</Link>.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to revise these Terms at any time. Your continued use of our applications following any updates constitutes acceptance of the modified Terms.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            For any questions concerning these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>WiseApps Dev</strong><br />
            Email: <a href="mailto:wiseappsdev@gmail.com">wiseappsdev@gmail.com</a><br />
            Location: Minna, Niger State, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
}
