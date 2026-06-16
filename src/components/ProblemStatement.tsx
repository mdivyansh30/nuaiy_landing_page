import styles from "./ProblemStatement.module.css";

export default function ProblemStatement() {
  return (
    <section className={`section ${styles.problem}`} aria-label="Why nuaiy">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.text}>
            YouTube videos.{" "}
            <span className={styles.dim}>Saved posts.</span>{" "}
            <span className={styles.dim}>Half-finished courses.</span>
          </p>
          <p className={styles.textBig}>
            Information isn&apos;t your problem.{" "}
            <span className="gradient-text">Structure is.</span>
          </p>
          <p className={styles.subtext}>
            Nuaiy was built to fix the one thing the rest of the internet can&apos;t — a program that actually finishes you.
          </p>
        </div>
      </div>
    </section>
  );
}
