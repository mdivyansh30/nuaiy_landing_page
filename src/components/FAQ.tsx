"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import styles from "./FAQ.module.css";
import { faqs } from "@/lib/faq-data";


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: listRef, isVisible: listVisible } = useScrollReveal({ threshold: 0.1 });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section ${styles.faq}`} aria-label="Frequently Asked Questions">
      <div className="container">
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${headerVisible ? "reveal--visible" : ""}`}
        >
          <p className="section__label">Honest answers</p>
          <h2 className="section__title">
            Questions you&apos;re about to ask.
          </h2>
        </div>

        <div
          className={`${styles.faqList} reveal ${listVisible ? "reveal--visible" : ""}`}
          ref={listRef as React.RefObject<HTMLDivElement>}
          role="list"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.faqItem} ${openIndex === i ? styles.faqOpen : ""}`}
              role="listitem"
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{faq.question}</span>
                <span className={styles.faqIcon} aria-hidden="true">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={styles.faqAnswer}
                role="region"
                aria-labelledby={`faq-question-${i}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
