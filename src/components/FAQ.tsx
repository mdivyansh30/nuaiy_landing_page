"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { faqs } from "@/lib/faq-data";


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section ${styles.faq}`} aria-label="Frequently Asked Questions">
      <div className="container">
        <p className="section__label">Honest answers</p>
        <h2 className="section__title">
          Questions you&apos;re about to ask.
        </h2>

        <div className={styles.faqList} role="list">
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
                hidden={openIndex !== i}
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
