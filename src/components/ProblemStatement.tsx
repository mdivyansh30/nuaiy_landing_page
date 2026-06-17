"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import styles from "./ProblemStatement.module.css";

export default function ProblemStatement() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className={`section ${styles.problem}`} aria-label="Why nuaiy">
      <div className="container">
        <div
          className={`${styles.content} reveal ${isVisible ? "reveal--visible" : ""}`}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <p className={styles.text}>
            YouTube videos.{" "}
            <span className={styles.dim}>Saved posts.</span>{" "}
            <span className={styles.dim}>Half-finished courses.</span>
          </p>
          <p className={styles.textBig}>
            Information isn&apos;t your problem.{" "}
            <span className={`gradient-text ${styles.shimmer}`}>Structure is.</span>
          </p>
          <p className={styles.subtext}>
            Nuaiy was built to fix the one thing the rest of the internet can&apos;t — a program that actually finishes you.
          </p>
        </div>
      </div>
    </section>
  );
}
