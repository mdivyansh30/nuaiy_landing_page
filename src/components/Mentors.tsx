import styles from "./Mentors.module.css";

const mentors = [
  { name: "Saaraa", specialty: "AI Strategy", color: "#8B5CF6" },
  { name: "Shane", specialty: "Content", color: "#00EFFA" },
  { name: "Loki", specialty: "Marketing", color: "#22C55E" },
  { name: "Daya", specialty: "Finance", color: "#F97316" },
  { name: "Ryan", specialty: "Youth", color: "#F43F5E" },
  { name: "Celine", specialty: "Economy", color: "#3B82F6" },
];

export default function Mentors() {
  return (
    <section id="mentors" className={`section ${styles.mentors}`} aria-label="AI Mentors">
      <div className="container">
        <div className={styles.mentorsContent}>
          <p className="section__label">Meet your mentors</p>
          <h2 className="section__title">
            AI experts. Real specialties.
          </h2>
          <p className="section__subtitle">
            Trained on mastery, each meeting the gold bar. Meet the mentors who&apos;ll
            guide your path.
          </p>
        </div>

        <div className={styles.mentorGrid}>
          {mentors.map((mentor, i) => (
            <article key={mentor.name} className={styles.mentorCard} style={{ animationDelay: `${i * 0.1}s` }}>
              <div
                className={styles.avatar}
                style={{
                  borderColor: mentor.color,
                  boxShadow: `0 0 24px ${mentor.color}33`,
                }}
              >
                <div
                  className={styles.avatarInner}
                  style={{ background: `linear-gradient(135deg, ${mentor.color}22, ${mentor.color}08)` }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="20" cy="14" r="8" fill={`${mentor.color}44`} stroke={mentor.color} strokeWidth="1.5" />
                    <path
                      d="M8 36C8 28.268 13.373 24 20 24C26.627 24 32 28.268 32 36"
                      stroke={mentor.color}
                      strokeWidth="1.5"
                      fill={`${mentor.color}22`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className={styles.mentorName}>{mentor.name}</h3>
              <p className={styles.mentorSpecialty}>{mentor.specialty}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
