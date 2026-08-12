'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/apps', label: 'Apps' },
  { href: '/support', label: 'Support' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <Image src="/logo.png" alt="WiseApps Dev" width={36} height={36} priority />
          <span className={styles.logoText}>
            WiseApps <span className={styles.logoAccent}>Dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={`${styles.links} hide-mobile`} aria-label="Main navigation">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className={`${styles.actions} hide-mobile`}>
          <Link href="/data-deletion" className="btn btn-ghost">
            Data Deletion
          </Link>
          <Link href="/support" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`${styles.burger} hide-desktop`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          id="nav-menu-btn"
        >
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen1 : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen2 : ''}`} />
          <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen3 : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.drawer} aria-modal="true" role="dialog">
          <nav className={styles.drawerLinks}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={styles.drawerLink}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/data-deletion"
              className={styles.drawerLink}
              onClick={() => setMenuOpen(false)}
            >
              Data Deletion
            </Link>
            <Link
              href="/support"
              className={`btn btn-primary ${styles.drawerCta}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
