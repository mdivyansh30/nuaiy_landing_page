import styles from "./LearningPaths.module.css";

const paths = [
  {
    title: "AI Path",
    badge: "BUILDERS & OPERATORS",
    badgeColor: "#00EFFA",
    description:
      "Understand, use, and build with AI. Automate your work, design smarter workflows, and turn AI fluency into real career leverage.",
    tags: ["How AI works for business", "Design smarter workflows", "Create simple automations", "Turn AI fluency into leverage"],
  },
  {
    title: "Content Creator Path",
    badge: "CREATORS & FOUNDERS",
    badgeColor: "#9754FF",
    description:
      "Understand, use, and build with AI. Automate your work, design smarter workflows, and turn AI fluency into real career leverage.",
    tags: ["Create polished content", "Design social workflows", "Create simple automations", "Turn AI fluency into leverage"],
  },
  {
    title: "Digital Marketing Path",
    badge: "MARKETING & GROWTH",
    badgeColor: "#22C55E",
    description:
      "Understand, use, and build with AI. Automate your work, design smarter workflows, and turn AI fluency into real career leverage.",
    tags: ["How AI works for business", "Design smarter workflows", "Create simple automations", "Turn AI fluency into leverage"],
  },
  {
    title: "Financial Literacy Path",
    badge: "FINANCE & FREEDOM",
    badgeColor: "#FFB330",
    description:
      "Understand, use, and build with AI. Automate your work, design smarter workflows, and turn AI fluency into real career leverage.",
    tags: ["How AI works for business", "Design smarter workflows", "Create simple automations", "Turn AI fluency into leverage"],
  },
  {
    title: "Digital Economy Path",
    badge: "ECONOMY & SYSTEMS",
    badgeColor: "#F43F5E",
    description:
      "Understand, use, and build with AI. Automate your work, design smarter workflows, and turn AI fluency into real career leverage.",
    tags: ["How AI works for business", "Design smarter workflows", "Create simple automations", "Turn AI fluency into leverage"],
  },
  {
    title: "AI Youth Path",
    badge: "TEENS & PARENTS",
    badgeColor: "#3B82F6",
    description:
      "Understand, use, and build with AI. Automate your work, design smarter workflows, and turn AI fluency into real career leverage.",
    tags: ["How AI works for business", "Design smarter workflows", "Create simple automations", "Turn AI fluency into leverage"],
  },
];

export default function LearningPaths() {
  return (
    <section id="paths" className={`section ${styles.paths}`} aria-label="Learning Paths">
      <div className="container">
        <p className="section__label">Courses &amp; paths</p>
        <h2 className="section__title">
          Six learning paths. Which one is yours?
        </h2>
        <p className="section__subtitle">
          Each path is a complete career arc — designed to take you from beginner to a
          real, hireable skill set, with project-based learning at every step.
        </p>

        <div className={styles.pathGrid}>
          {paths.map((path, i) => (
            <article
              key={path.title}
              className={styles.pathCard}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.pathHeader}>
                <span
                  className={styles.pathBadge}
                  style={{
                    color: path.badgeColor,
                    borderColor: `${path.badgeColor}33`,
                    background: `${path.badgeColor}0D`,
                  }}
                >
                  {path.badge}
                </span>
                <h3 className={styles.pathTitle}>{path.title}</h3>
              </div>
              <p className={styles.pathDesc}>{path.description}</p>
              <div className={styles.pathTags}>
                {path.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <button className={styles.pathCta}>
                <span>View Roadmap</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
