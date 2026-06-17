"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import styles from "./Mentors.module.css";

const mentors = [
  {
    name: "Daniel",
    specialty: "Financial Literacy",
    image: "/images/ai_experts/Daniel, Financial Literacy educator.png",
  },
  {
    name: "Steve",
    specialty: "Digital Economy",
    image: "/images/ai_experts/Steve, Digital Economy educator.png",
  },
  {
    name: "Luke",
    specialty: "AI Youth",
    image: "/images/ai_experts/Luke, AI Youth educator.png",
  },
  {
    name: "Ryan",
    specialty: "AI",
    image: "/images/ai_experts/Ryan, AI educator.png",
  },
  {
    name: "Sarah",
    specialty: "Content Creator",
    image: "/images/ai_experts/Sarah, Content Creator educator.png",
  },
  {
    name: "Adam",
    specialty: "Digital Marketing",
    image: "/images/ai_experts/Adam, Digital Marketing educator.png",
  },
];

export default function Mentors() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { containerRef: gridRef, isVisible: gridVisible } = useStaggerReveal();

  return (
    <section id="mentors" className={`section ${styles.mentors}`} aria-label="AI Mentors">
      <div className="container">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "reveal--visible" : ""}`}
        >
          <p className="section__label">Meet your mentors</p>
          <h2 className="section__title">AI experts. Real specialties.</h2>
          <p className="section__subtitle">
            Seven AI Mentors, each leading the path they&apos;ve actually lived.
          </p>
        </div>

        <div className={styles.mentorGrid} ref={gridRef as React.RefObject<HTMLDivElement>}>
          {mentors.map((mentor, i) => (
            <article
              key={mentor.name}
              className={`${styles.mentorCard} stagger-child ${gridVisible ? "stagger-child--visible" : ""}`}
              style={{ "--stagger-index": i } as React.CSSProperties}
            >
              {/* Everything inside the card box */}
              <div className={styles.cardBox}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className={styles.avatarImg}
                />
                <h3 className={styles.mentorName}>{mentor.name}</h3>
                <p className={styles.mentorSpecialty}>{mentor.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
