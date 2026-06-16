import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nuaiy.com"),
  title: {
    default: "nuaiy — AI-Powered Learning Ecosystem | Learn AI, Marketing & Content Creation",
    template: "%s | nuaiy",
  },
  description:
    "nuaiy is a complete AI-powered learning ecosystem that guides you from complete beginner to industry-ready. Master AI, content creation, digital marketing with real tools the pros use. Available in 3 languages, live in Sri Lanka.",
  keywords: [
    "AI learning platform",
    "learn AI",
    "AI courses",
    "digital marketing course",
    "content creation",
    "AI certification",
    "online learning",
    "Sri Lanka education",
    "AI mentors",
    "machine learning course",
    "nuaiy",
    "AI powered education",
  ],
  authors: [{ name: "nuaiy", url: "https://nuaiy.com" }],
  creator: "nuaiy",
  publisher: "nuaiy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nuaiy.com",
    siteName: "nuaiy",
    title: "nuaiy — AI-Powered Learning Ecosystem",
    description:
      "A complete AI-powered learning ecosystem that guides you from complete beginner to industry-ready. Master AI, content creation, digital marketing with real tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "nuaiy — AI-Powered Learning Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nuaiy — AI-Powered Learning Ecosystem",
    description:
      "A complete AI-powered learning ecosystem. Master AI, content creation & digital marketing with real tools the pros use.",
    images: ["/og-image.png"],
    creator: "@nuaiy",
  },
  alternates: {
    canonical: "https://nuaiy.com",
  },
  category: "Education",
};

/* JSON-LD Structured Data */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "nuaiy",
  url: "https://nuaiy.com",
  logo: "https://nuaiy.com/logo.png",
  description:
    "AI-powered learning ecosystem that guides learners from complete beginner to industry-ready.",
  sameAs: [
    "https://twitter.com/nuaiy",
    "https://instagram.com/nuaiy",
    "https://tiktok.com/@nuaiy",
    "https://youtube.com/@nuaiy",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Sinhala", "Tamil"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "nuaiy",
  url: "https://nuaiy.com",
  description: "AI-Powered Learning Ecosystem",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nuaiy.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "nuaiy",
  operatingSystem: "iOS, Android",
  applicationCategory: "EducationalApplication",
  description:
    "AI-powered learning ecosystem with AI mentors, real-world tools, and professional certifications.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1200",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#141C29" />
      </head>
      <body>
        <script
          type="application/ld+json"
        >
          {JSON.stringify(organizationSchema)}
        </script>
        <script
          type="application/ld+json"
        >
          {JSON.stringify(websiteSchema)}
        </script>
        <script
          type="application/ld+json"
        >
          {JSON.stringify(softwareAppSchema)}
        </script>
        {children}
      </body>
    </html>
  );
}
