import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background decorative robots */}
      <div className={styles.robotLeft} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/leftsiderobot.png" alt="" />
      </div>
      <div className={styles.robotRight} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/rightrobot.png" alt="" />
      </div>

      {/* Blur orbs */}
      <div className={styles.bgOrb1} aria-hidden="true" />
      <div className={styles.bgOrb2} aria-hidden="true" />

      <div className="container">
        <div className={styles.heroInner}>
          {/* Badge */}
          <div className="badge">
            <span className="badge__dot" />
            <span>Live in 3 languages</span>
          </div>

          {/* Title */}
          <h1 className={styles.heroTitle}>
            The way you learn is<br />about to <span className="gradient-text">change.</span>
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            Nuaiy isn&apos;t another course platform. It&apos;s a complete AI-powered
            learning ecosystem that guides you from foundation to mastery.
          </p>

          {/* Download section */}
          <p className={styles.downloadLabel}>Download the app · Free to start</p>

          <div className={styles.storeButtons}>
            {/* App Store */}
            <a href="#" className="btn btn--store" aria-label="Download on the App Store">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--text-secondary)" aria-hidden="true">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.81 11.78 5.7 12.56 5.7C13.34 5.7 14.85 4.63 16.4 4.8C17.06 4.83 18.89 5.08 20.06 6.72C19.95 6.79 17.67 8.08 17.69 10.83C17.72 14.12 20.6 15.19 20.63 15.2C20.6 15.27 20.18 16.72 19.13 18.23L18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.09 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className={styles.storeText}>
                <span className={styles.storeSmall}>Download on the</span>
                <span className={styles.storeBig}>App Store</span>
              </div>
            </a>

            {/* Google Play */}
            <a href="#" className="btn btn--store" aria-label="Get it on Google Play">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3.18 23.48C2.88 23.38 2.59 23.2 2.38 22.93C2.14 22.6 2 22.15 2 21.69V2.31C2 1.85 2.14 1.4 2.38 1.07L13.41 12L3.18 23.48Z" fill="url(#gp1)" />
                <path d="M17.42 15.64L5.16 23.02L14.54 13.34L17.42 15.64Z" fill="url(#gp2)" />
                <path d="M20.72 10.84L18.09 9.3L15.19 12L18.09 14.7L20.72 13.16C21.23 12.83 21.5 12.41 21.5 12C21.5 11.59 21.23 11.17 20.72 10.84Z" fill="url(#gp3)" />
                <path d="M5.16 0.98L14.54 10.66L17.42 8.36L5.16 0.98Z" fill="url(#gp4)" />
                <defs>
                  <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="100%"><stop stopColor="#00EFFA" /><stop offset="1" stopColor="#9754FF" /></linearGradient>
                  <linearGradient id="gp2" x1="0%" y1="0%" x2="100%" y2="100%"><stop stopColor="#FFB330" /><stop offset="1" stopColor="#FF9348" /></linearGradient>
                  <linearGradient id="gp3" x1="0%" y1="0%" x2="100%" y2="100%"><stop stopColor="#1BD79E" /><stop offset="1" stopColor="#00EFFA" /></linearGradient>
                  <linearGradient id="gp4" x1="0%" y1="0%" x2="100%" y2="100%"><stop stopColor="#FF40D9" /><stop offset="1" stopColor="#F9423D" /></linearGradient>
                </defs>
              </svg>
              <div className={styles.storeText}>
                <span className={styles.storeSmall}>Get it on</span>
                <span className={styles.storeBig}>Google Play</span>
              </div>
            </a>
          </div>

          {/* Link */}
          <a href="#features" className={styles.ecosystemLink}>
            Or see how the ecosystem works →
          </a>

          {/* Trust line */}
          <div className={styles.trustLine}>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green-check)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20,6 9,17 4,12" /></svg>
              Project-led, not video-soup
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green-check)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20,6 9,17 4,12" /></svg>
              Built-in AI mentor
            </span>
            <span className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green-check)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20,6 9,17 4,12" /></svg>
              Earn certified proof of skill
            </span>
          </div>

          {/* Phone Mockups */}
          <div className={styles.phonesContainer}>
            <div className={styles.phoneLeft}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/iphone_leftside.png" alt="nuaiy app screen" />
            </div>
            <div className={styles.phoneCenter}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/iphone_center.png" alt="nuaiy app main screen" />
            </div>
            <div className={styles.phoneRight}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/iphone_rightside.png" alt="nuaiy app screen" />
            </div>
            {/* Glow behind phones */}
            <div className={styles.phoneGlow} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
