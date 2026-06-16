/* FAQ data shared between the FAQ component and JSON-LD schema */

export const faqs = [
  {
    question: "I'm a complete beginner. Is this for me?",
    answer:
      "Absolutely! nuaiy is designed from the ground up for complete beginners. Our AI mentors adapt to your pace and level, starting with fundamentals and building up to industry-ready skills. No prior experience needed.",
  },
  {
    question: "How is this different from the 500 AI courses online?",
    answer:
      "Unlike passive courses, nuaiy is an immersive ecosystem. You learn by doing — with AI-generated quests, real tools (Claude, Canva, Blender), live simulations, and project-based certifications. It's not just content, it's a structured path that actually finishes you.",
  },
  {
    question: "Will it actually finish?",
    answer:
      "Yes! That's our core promise. Each learning path is designed as a complete career arc with milestones, streaks, and AI accountability. Our completion rate is 8x higher than traditional online courses.",
  },
  {
    question: "Is the AI Mentor really useful or a gimmick?",
    answer:
      "Our AI mentors are trained on mastery-level knowledge in their respective fields. They provide personalized guidance, answer questions in context, review your work, and adapt the curriculum to your learning style. They're the core of the experience, not an add-on.",
  },
  {
    question: "What languages can I learn in?",
    answer:
      "nuaiy is currently available in English, Sinhala (සිංහල), and Tamil (தமிழ்), with Japanese and Korean coming soon. All content, AI mentors, and certifications work seamlessly across all supported languages.",
  },
  {
    question: "Is the certification recognized?",
    answer:
      "nuaiy certifications are project-validated and AI-graded — not participation certificates. We're working with MOQC accreditation through the Dubai Government, and our certificates demonstrate real, verifiable skills to employers.",
  },
  {
    question: "Can teams use it?",
    answer:
      "Yes! nuaiy offers team plans for businesses looking to upskill their workforce in AI, digital marketing, and content creation. Contact us for enterprise pricing and custom learning paths.",
  },
];

/* FAQPage JSON-LD schema for Google rich snippets */
export const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
