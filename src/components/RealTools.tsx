"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useStaggerReveal } from "@/lib/useStaggerReveal";
import styles from "./RealTools.module.css";

const tools = [
  {
    name: "Claude",
    category: "REASONING & WRITING",
    iconSrc: "/images/tools_logo/Claude logo.png",
  },
  {
    name: "Descript",
    category: "AUDIO & VIDEO",
    iconSrc: "/images/tools_logo/Descript logo.png",
  },
  {
    name: "Perplexity",
    category: "RESEARCH",
    iconSrc: "/images/tools_logo/perplexity.png",
  },
  {
    name: "Relevance AI",
    category: "AGENTS & OPS",
    iconSrc: "/images/tools_logo/Relevance AI logo.png",
  },
  {
    name: "n8n",
    category: "WORKFLOW AUTOMATION",
    iconSrc: "/images/tools_logo/n8n logo.png",
  },
];

export default function RealTools() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { containerRef: gridRef, isVisible: gridVisible } = useStaggerReveal();

  return (
    <section id="tools" className={`section ${styles.tools}`} aria-label="Real Tools">
      <div className="container">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "reveal--visible" : ""}`}
        >
          <p className="section__label">USE REAL TOOLS</p>
          <h2 className="section__title">
            The same tools the pros are billing for.
          </h2>
          <p className="section__subtitle">
            Not toy projects. Production-quality walkthroughs of the AI tools you&apos;ll actually
            be hired to use — taught in the language you choose.
            <br />
            &nbsp;
          </p>
        </div>

        <div className={styles.toolGrid} ref={gridRef as React.RefObject<HTMLDivElement>}>
          {tools.map((tool, i) => (
            <article
              key={tool.name}
              className={`${styles.toolCard} stagger-child ${gridVisible ? "stagger-child--visible" : ""}`}
              style={{ "--stagger-index": i } as React.CSSProperties}
            >
              <div className={styles.toolIcon}>
                <Image
                  src={tool.iconSrc}
                  alt={`${tool.name} logo`}
                  width={40}
                  height={40}
                  className={styles.iconImage}
                />
              </div>
              <div className={styles.toolInfo}>
                <h3 className={styles.toolName}>{tool.name}</h3>
                <p className={styles.toolCategory}>{tool.category}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.footnote}>
          + a growing library of tool walkthroughs in every path
        </p>
      </div>
    </section>
  );
}
