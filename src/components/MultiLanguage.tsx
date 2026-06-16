import styles from "./MultiLanguage.module.css";

const platforms = [
  { name: "Web", icon: "🌐" },
  { name: "iOS", icon: "📱" },
  { name: "Android", icon: "📲" },
];

export default function MultiLanguage() {
  return (
    <section className={`section ${styles.multiLang}`} aria-label="Multi-language support">
      <div className="container">
        <div className={styles.banner}>
          <p className={styles.bannerLabel}>MULTILINGUAL BY DESIGN</p>
          <h2 className={styles.bannerTitle}>
            Available in <span className="gradient-text">3 languages</span>, live in Sri Lanka
          </h2>

          <div className={styles.langButtons}>
            <button className={`${styles.langBtn} ${styles.active}`}>
              <span className={styles.langFlag}>🇬🇧</span>
              <span>English</span>
            </button>
            <button className={styles.langBtn}>
              <span className={styles.langFlag}>🇱🇰</span>
              <span>සිංහල</span>
            </button>
            <button className={styles.langBtn}>
              <span className={styles.langFlag}>🇱🇰</span>
              <span>தமிழ்</span>
            </button>
            <button className={styles.langBtn}>
              <span className={styles.langFlag}>🇯🇵</span>
              <span>日本語</span>
            </button>
            <button className={styles.langBtn}>
              <span className={styles.langFlag}>🇰🇷</span>
              <span>한국어</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
