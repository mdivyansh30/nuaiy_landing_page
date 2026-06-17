"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import styles from "./CTAFooter.module.css";

export default function CTAFooter() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="download" className={`section ${styles.cta}`} aria-label="Download the app">
      <div className="container">
        <div
          className={`${styles.ctaBox} reveal-scale ${isVisible ? "reveal-scale--visible" : ""}`}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <div className={styles.ctaContent}>
            <p className={styles.ctaLabel}>Get Brainified</p>
            <h2 className={styles.ctaTitle}>
              OWN YOUR<br />FUTURE here
            </h2>
            <p className={styles.ctaSubtitle}>
              Pick your path. Meet your AI mentor. Ship your first project in the week.
            </p>

            <div className={styles.ctaButtons}>
              <a href="#" className={styles.storeBtn} aria-label="Download on the App Store">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text-primary)" aria-hidden="true">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.7 12.56 5.7C13.34 5.7 14.85 4.63 16.4 4.8C17.06 4.83 18.89 5.08 20.06 6.72C19.95 6.79 17.67 8.08 17.69 10.83C17.72 14.12 20.6 15.19 20.63 15.2C20.6 15.27 20.18 16.72 19.13 18.23L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeSmall}>Download on the</span>
                  <span className={styles.storeBig}>App Store</span>
                </div>
              </a>
              <a href="#" className={styles.storeBtn} aria-label="Get it on Google Play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text-primary)" aria-hidden="true">
                  <path d="M3.18 23.48C2.88 23.38 2.59 23.2 2.38 22.93C2.14 22.6 2 22.15 2 21.69V2.31C2 1.85 2.14 1.4 2.38 1.07C2.59 0.8 2.88 0.62 3.18 0.52L13.41 12L3.18 23.48ZM14.54 13.34L5.16 23.02L17.42 15.64L14.54 13.34ZM20.72 10.84L18.09 9.3L15.19 12L18.09 14.7L20.72 13.16C21.23 12.83 21.5 12.41 21.5 12C21.5 11.59 21.23 11.17 20.72 10.84ZM5.16 0.98L14.54 10.66L17.42 8.36L5.16 0.98Z" />
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeSmall}>Get it on</span>
                  <span className={styles.storeBig}>Google Play</span>
                </div>
              </a>
            </div>

            <p className={styles.ctaNote}>
              Available on iOS &amp; Android · Free to start · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
