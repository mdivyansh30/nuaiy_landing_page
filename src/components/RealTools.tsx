import styles from "./RealTools.module.css";

const tools = [
  {
    name: "Claude",
    category: "REASONING & WRITING",
    color: "#D97706",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Canva",
    category: "DESIGN & VISUALS",
    color: "#00C4CC",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21,15 16,10 5,21" />
      </svg>
    ),
  },
  {
    name: "Blender",
    category: "3D & ANIMATION",
    color: "#E87D0D",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22,8.5 12,15.5 2,8.5" />
      </svg>
    ),
  },
  {
    name: "Repository",
    category: "CODE & PROJECTS",
    color: "#8B5CF6",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
  },
  {
    name: "Resources AI",
    category: "RESEARCH & DATA",
    color: "#3B82F6",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    name: "Automation",
    category: "WORKFLOWS & OPS",
    color: "#22C55E",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
    ),
  },
];

export default function RealTools() {
  return (
    <section id="tools" className={`section ${styles.tools}`} aria-label="Real Tools">
      <div className="container">
        <p className="section__label">USE REAL TOOLS</p>
        <h2 className="section__title">
          The same tools the pros are billing for.
        </h2>
        <p className="section__subtitle">
          Not toy projects. Practice with the actual tools of the trade so you don&apos;t have to
          learn twice to use — regardless of the language you choose.
        </p>

        <div className={styles.toolGrid}>
          {tools.map((tool, i) => (
            <article
              key={tool.name}
              className={`glass-card ${styles.toolCard}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className={styles.toolIcon}
                style={{
                  color: tool.color,
                  borderColor: `${tool.color}33`,
                  background: `${tool.color}11`,
                }}
              >
                {tool.icon}
              </div>
              <div className={styles.toolInfo}>
                <h3 className={styles.toolName}>{tool.name}</h3>
                <p className={styles.toolCategory}>{tool.category}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.footnote}>
          + a growing library of tool walkthroughs built to every path.
        </p>
      </div>
    </section>
  );
}
