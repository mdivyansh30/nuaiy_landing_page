"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import styles from "./Certification.module.css";

const stats = [
  { value: "175", label: "Countries live" },
  { value: "3", label: "Languages" },
  { value: "6", label: "Career paths" },
  { value: "6", label: "Ecosystem features" },
];

export default function Certification() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: certRef, isVisible: certVisible } = useScrollReveal({ threshold: 0.2 });
  const { containerRef: statsRef, isVisible: statsVisible } = useStaggerReveal();
  const { containerRef: featRef, isVisible: featVisible } = useStaggerReveal();

  return (
    <section id="certifications" className={`section ${styles.cert}`} aria-label="Certification">
      <div className="container">
        <div className={styles.certContent}>
          <div
            className={styles.certInfo}
            ref={headerRef as React.RefObject<HTMLDivElement>}
          >
            <div className={`reveal ${headerVisible ? "reveal--visible" : ""}`}>
              <p className="section__label">NUAIY CERTIFICATION</p>
              <h2 className={`section__title ${styles.certTitle}`}>
                Proof of skill, not proof of<br />attendance.
              </h2>
              <p className="section__subtitle">
                NUAIY certifications aren&apos;t participation certificates — they have to be
                <strong> proof of work</strong>. Each certification is auto-evaluated for completing a
                course and building a project that passes all evaluation standards set by AI.
              </p>
            </div>

            <ul className={styles.certFeatures} ref={featRef as React.RefObject<HTMLUListElement>}>
              <li
                className={`${styles.certFeature} stagger-child ${featVisible ? "stagger-child--visible" : ""}`}
                style={{ "--stagger-index": 0 } as React.CSSProperties}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                <span>Project-validated, not quiz-validated</span>
              </li>
              <li
                className={`${styles.certFeature} stagger-child ${featVisible ? "stagger-child--visible" : ""}`}
                style={{ "--stagger-index": 1 } as React.CSSProperties}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                <span>AI-graded performance rubrics</span>
              </li>
              <li
                className={`${styles.certFeature} stagger-child ${featVisible ? "stagger-child--visible" : ""}`}
                style={{ "--stagger-index": 2 } as React.CSSProperties}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20,6 9,17 4,12" />
                </svg>
                <span>MOQC-accredited certification working with Dubai Government</span>
              </li>
            </ul>
          </div>

          {/* Certificate Image */}
          <div
            className={`${styles.certMockup} reveal-scale ${certVisible ? "reveal-scale--visible" : ""}`}
            ref={certRef as React.RefObject<HTMLDivElement>}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/certificate.png"
              alt="Nuaiy AI Automation Professional Certificate"
              className={styles.certImage}
            />
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid} ref={statsRef as React.RefObject<HTMLDivElement>}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${styles.statCard} stagger-child ${statsVisible ? "stagger-child--visible" : ""}`}
              style={{ "--stagger-index": i } as React.CSSProperties}
            >
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
