"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import styles from "./Certification.module.css";

const stats = [
  { value: "Sri Lanka", label: "Country/live" },
  { value: "3", label: "Languages" },
  { value: "4", label: "Course paths" },
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
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "reveal--visible" : ""}`}
        >
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

        <div className={styles.certContent}>
          <div className={styles.certInfo}>
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

          {/* Certificate Mockup */}
          <div
            className={`${styles.certMockup} reveal-scale ${certVisible ? "reveal-scale--visible" : ""}`}
            ref={certRef as React.RefObject<HTMLDivElement>}
          >
            <div className={styles.certCard}>
              <div className={styles.certHeader}>
                <span className={styles.certLogo}>nuaiy</span>
              </div>
              <h3 className={styles.certName}>AI AUTOMATION</h3>
              <h4 className={styles.certSub}>PROFESSIONAL CERTIFICATE</h4>
              <div className={styles.certDivider} />
              <p className={styles.certIssuedTo}>Issued to</p>
              <p className={styles.certRecipient}>Sample Graduate</p>
              <div className={styles.certSignature}>
                <div className={styles.sigLine} />
                <p className={styles.sigName}>Program Director</p>
              </div>
            </div>
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
