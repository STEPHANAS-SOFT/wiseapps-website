import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

const footerLinks: Record<string, FooterLink[]> = {
  Company: [
    { href: '/', label: 'Home' },
    { href: '/apps', label: 'Our Apps' },
    { href: '/about', label: 'About Us' },
    { href: '/support', label: 'Support' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/data-deletion', label: 'Data Deletion' },
  ],
  Connect: [
    { href: 'https://play.google.com/store/apps/developer?id=Wise+Apps+Dev', label: 'Google Play', external: true },
    { href: 'https://apps.apple.com/developer/id1778404522', label: 'App Store', external: true },
    { href: 'mailto:wiseappsdev@gmail.com', label: 'Email Us', external: true },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLogo}>
              <Image src="/logo.png" alt="WiseApps Dev" width={40} height={40} />
              <span className={styles.brandName}>
                WiseApps <span className={styles.brandAccent}>Dev</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Building mobile &amp; desktop apps that people love — across Africa and beyond.
            </p>
            <div className={styles.location}>
              <span>🇳🇬</span>
              <span>Minna, Nigeria</span>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linksGrid}>
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group} className={styles.linkGroup}>
                <h3 className={styles.groupTitle}>{group}</h3>
                <ul className={styles.linkList}>
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={styles.link}
                        {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {l.label}
                        {l.external && (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path d="M2 2h6v6M8 2L2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="divider" />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} WiseApps Dev. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy</Link>
            <Link href="/terms" className={styles.bottomLink}>Terms</Link>
            <Link href="/data-deletion" className={styles.bottomLink}>Data Deletion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
