"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import styles from "./MultiLanguage.module.css";

export default function MultiLanguage() {
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollReveal();
  const { containerRef: btnRef, isVisible: btnVisible } = useStaggerReveal();

  return (
    <section className={`section ${styles.multiLang}`} aria-label="Multi-language support">
      <div className="container">
        <div
          className={`${styles.banner} reveal-scale ${bannerVisible ? "reveal-scale--visible" : ""}`}
          ref={bannerRef as React.RefObject<HTMLDivElement>}
        >
          <p className={styles.bannerLabel}>MULTILINGUAL BY DESIGN</p>
          <h2 className={styles.bannerTitle}>
            Available in <span className="gradient-text">3 languages</span>, live in Sri Lanka
          </h2>

          <div className={styles.langButtons} ref={btnRef as React.RefObject<HTMLDivElement>}>
            <button className={`${styles.langBtn} ${styles.active} stagger-child ${btnVisible ? "stagger-child--visible" : ""}`} style={{ "--stagger-index": 0 } as React.CSSProperties}>
              <span className={styles.langFlag}>🇬🇧</span>
              <span>English</span>
            </button>
            <button className={`${styles.langBtn} stagger-child ${btnVisible ? "stagger-child--visible" : ""}`} style={{ "--stagger-index": 1 } as React.CSSProperties}>
              <span className={styles.langFlag}>🇱🇰</span>
              <span>සිංහල</span>
            </button>
            <button className={`${styles.langBtn} stagger-child ${btnVisible ? "stagger-child--visible" : ""}`} style={{ "--stagger-index": 2 } as React.CSSProperties}>
              <span className={styles.langFlag}>🇱🇰</span>
              <span>தமிழ்</span>
            </button>
            <button className={`${styles.langBtn} stagger-child ${btnVisible ? "stagger-child--visible" : ""}`} style={{ "--stagger-index": 3 } as React.CSSProperties}>
              <span className={styles.langFlag}>🇯🇵</span>
              <span>日本語</span>
            </button>
            <button className={`${styles.langBtn} stagger-child ${btnVisible ? "stagger-child--visible" : ""}`} style={{ "--stagger-index": 4 } as React.CSSProperties}>
              <span className={styles.langFlag}>🇰🇷</span>
              <span>한국어</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
