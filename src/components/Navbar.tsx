"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Paths", href: "#paths" },
  { label: "Features", href: "#features" },
  { label: "Certification", href: "#certifications" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="nuaiy home">
          <img
            src="/images/logo.png"
            alt="nuaiy"
            className={styles.logoImg}
            onError={(e) => {
              /* Fallback if logo image missing */
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove(styles.hidden);
            }}
          />
          {/* <span className={styles.logoText}>nuaiy</span> */}
        </a>

        {/* Nav Links */}
        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}

          {/* Watch button */}
          <button className={styles.watchBtn} aria-label="Watch intro video">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--text-primary)" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Watch</span>
          </button>

          {/* Theme toggle */}
          <button className={styles.themeToggle} aria-label="Toggle theme">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.menuLine} ${menuOpen ? styles.menuLineOpen1 : ""}`} />
          <span className={`${styles.menuLine} ${menuOpen ? styles.menuLineOpen2 : ""}`} />
          <span className={`${styles.menuLine} ${menuOpen ? styles.menuLineOpen3 : ""}`} />
        </button>
      </div>
    </header>
  );
}
