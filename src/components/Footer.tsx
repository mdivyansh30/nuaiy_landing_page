import styles from "./Footer.module.css";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/nuaiy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@nuaiy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89A2.89 2.89 0 0 1 9.49 12.4c.3 0 .59.04.86.12V9a6.27 6.27 0 0 0-.86-.06 6.33 6.33 0 0 0-6.33 6.33A6.33 6.33 0 0 0 9.49 21.6a6.33 6.33 0 0 0 6.33-6.33V8.87a8.18 8.18 0 0 0 3.77.92V6.69z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@nuaiy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/nuaiy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Follow section */}
      <div className={styles.followSection}>
        <p className={styles.followLabel}>FOLLOW @NUAIY</p>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={styles.socialLink}
              aria-label={`Follow nuaiy on ${link.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.divider} />

      {/* Bottom bar */}
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerLeft}>
          <a href="#" className={styles.footerLogo} aria-label="nuaiy home">
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="14" stroke="#00D4FF" strokeWidth="2" fill="none" />
              <path d="M10 20V12L16 18L22 12V20" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span>nuaiy</span>
          </a>
          <p className={styles.footerTagline}>IMMERSIVE LEARNING WITH AI</p>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.footerLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} nuaiy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
