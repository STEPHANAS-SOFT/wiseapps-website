import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Global Privacy Policy for WiseApps Dev mobile applications and website.',
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="legal-content">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: August 12, 2026</p>

          <p>
            Welcome to <strong>WiseApps Dev</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
            We are committed to protecting your personal information and your right to privacy.
            This Privacy Policy applies to all mobile applications developed and published by WiseApps Dev on the Google Play Store and Apple App Store, as well as our website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            Depending on the specific application you use, we may collect the following types of information:
          </p>
          <ul>
            <li>
              <strong>Account Information:</strong> For apps that support account creation (such as Bookora, PrepForge, AdPulse, and Subsify), we collect registration details such as your name, email address, and profile preferences.
            </li>
            <li>
              <strong>Usage Data &amp; Analytics:</strong> We collect anonymous device and usage metrics (such as crash reports, app performance data, device model, and OS version) using tools like Firebase Analytics and Google Analytics to improve our apps.
            </li>
            <li>
              <strong>Payment Information:</strong> Transactions processed for in-app items or subscriptions are securely handled by official store platforms (Google Play In-App Billing, Apple App Store Purchases) or licensed payment processors (Paystack/RevenueCat). We do not store financial or credit card credentials on our servers.
            </li>
            <li>
              <strong>User-Generated Content:</strong> For apps like PrepForge (PDF quiz generator) or SoundPad (MIDI/Beat recording), content you upload or save is processed strictly to provide the features of that application.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected data for the following legitimate business purposes:</p>
          <ul>
            <li>To provide, maintain, and improve our apps and services.</li>
            <li>To manage user accounts and facilitate authentication.</li>
            <li>To monitor app health, diagnose technical bugs, and reduce crash rates.</li>
            <li>To serve relevant ad content through Google AdMob (for free, ad-supported apps).</li>
            <li>To process customer support requests and communicate regarding updates.</li>
          </ul>

          <h2>3. Third-Party Services &amp; Advertisements</h2>
          <p>
            Some of our apps integrate third-party services that may collect information used to identify your device. These third parties operate under their own privacy policies:
          </p>
          <ul>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Services &amp; Firebase Analytics</a></li>
            <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">Google AdMob</a></li>
            <li><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat</a></li>
          </ul>

          <h2>4. Data Retention &amp; Security</h2>
          <p>
            We implement industry-standard administrative and technical security measures to safeguard your information. We retain personal data only for as long as necessary to fulfill the operational purposes described in this policy, or as required by law.
          </p>

          <h2>5. Your Data Rights &amp; Deletion Requests</h2>
          <p>
            You have the right to access, update, or request the deletion of your personal data.
            If you wish to permanently delete your account or any personal data associated with our applications, you can submit a request anytime through our web-accessible portal:
          </p>
          <p style={{ margin: '16px 0' }}>
            👉 <Link href="/data-deletion" style={{ fontWeight: 600 }}>Request Data &amp; Account Deletion</Link>
          </p>
          <p>
            Alternatively, you can contact us directly at <a href="mailto:wiseappsdev@gmail.com">wiseappsdev@gmail.com</a> with the subject line <em>&quot;Data Deletion Request&quot;</em>.
          </p>

          <h2>6. Children&apos;s Privacy</h2>
          <p>
            Our applications are not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you learn that a child has provided us with personal information without parental consent, please contact us immediately.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Updated versions will be posted on this page with a revised &quot;Last Updated&quot; date.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions, comments, or concerns about this Privacy Policy, please contact us at:
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
