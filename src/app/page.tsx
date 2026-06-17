import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import LearningPaths from "@/components/LearningPaths";
import MultiLanguage from "@/components/MultiLanguage";
import LearningEcosystem from "@/components/LearningEcosystem";
import ProblemStatement from "@/components/ProblemStatement";
import RealTools from "@/components/RealTools";
import Certification from "@/components/Certification";
import FAQ from "@/components/FAQ";
import CTAFooter from "@/components/CTAFooter";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { faqSchemaData } from "@/lib/faq-data";

export default function Home() {
  return (
    <>
      {/* FAQ Page JSON-LD for Google Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchemaData)}
      </script>

      <ScrollProgress />
      <Navbar />
      <BackToTop />

      <main id="main-content">
        <Hero />

        <div className="divider" />
        <Mentors />

        <div className="divider" />
        <LearningPaths />

        <MultiLanguage />

        <div className="divider" />
        <LearningEcosystem />

        <ProblemStatement />

        <div className="divider" />
        <RealTools />

        <div className="divider" />
        <Certification />

        <div className="divider" />
        <FAQ />

        <CTAFooter />
      </main>

      <Footer />
    </>
  );
}

