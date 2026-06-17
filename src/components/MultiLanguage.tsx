"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import styles from "./MultiLanguage.module.css";

const languages = [
  { name: "English", flag: "/images/flags/eng.png" },
  { name: "Tamil", flag: "/images/flags/tamil.png" },
  { name: "Sinhala", flag: "/images/flags/sinhala.png" },
];

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
            Available in 3 <span className={styles.highlight}>languages</span>, live in 175 countries.
          </h2>

          <div className={styles.langButtons} ref={btnRef as React.RefObject<HTMLDivElement>}>
            {languages.map((lang, i) => (
              <button
                key={lang.name}
                className={`${styles.langBtn} stagger-child ${btnVisible ? "stagger-child--visible" : ""}`}
                style={{ "--stagger-index": i } as React.CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className={styles.flagImg}
                />
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
