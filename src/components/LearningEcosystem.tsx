"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import styles from "./LearningEcosystem.module.css";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
    title: "Track your progress",
    description: "Visual dashboards & milestone tracking",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 2,7 12,12 22,7" />
        <polyline points="2,17 12,22 22,17" />
        <polyline points="2,12 12,17 22,12" />
      </svg>
    ),
    title: "Lessons + simulations",
    description: "Learn by doing, then practice in the real-world",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    title: "XP & streaks",
    description: "Gamified learning with XP points & daily streaks",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "AI quests",
    description: "AI-created challenges that adapt to your pace",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "AI Lab",
    description: "Prompt-first, auto-evaluate, hands-on tools",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
      </svg>
    ),
    title: "Certification",
    description: "Proof of skill, auto-evaluated by AI standards",
  },
];

export default function LearningEcosystem() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { containerRef: listRef, isVisible: listVisible } = useStaggerReveal();
  const { ref: mockupRef, isVisible: mockupVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="features" className={`section ${styles.ecosystem}`} aria-label="Learning Ecosystem">
      <div className="container">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "reveal--visible" : ""}`}
        >
          <p className="section__label">INSIDE THE APP</p>
          <h2 className="section__title">A learning ecosystem</h2>
          <p className="section__subtitle">
            Project walkthroughs, gamified progress, XP, and streaks — built to actually finish.
          </p>
        </div>

        <div className={styles.content}>
          {/* Feature List */}
          <div className={styles.featureList} ref={listRef as React.RefObject<HTMLDivElement>}>
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`${styles.featureItem} stagger-child ${listVisible ? "stagger-child--visible" : ""}`}
                style={{ "--stagger-index": i } as React.CSSProperties}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div
            className={`${styles.mockupSide} reveal-right ${mockupVisible ? "reveal-right--visible" : ""}`}
            ref={mockupRef as React.RefObject<HTMLDivElement>}
          >
            <div className={styles.mockupGlow} />
            <div className={styles.phoneWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/iPhone_learning_eco.png"
                alt="nuaiy learning ecosystem app screen"
                className={styles.phoneImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
