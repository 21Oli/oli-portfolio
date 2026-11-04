import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

/* --------------------------------------------------------------------------
   FONTS — Geist (primary) + Geist Mono (technical/metadata)
   -------------------------------------------------------------------------- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* --------------------------------------------------------------------------
   METADATA — portfolio homepage metadata per HOMEPAGE_SPEC.md §49
   metadataBase: omitted — production domain not yet confirmed.
   OG images: omitted until a portrait or portfolio preview image is available.
   -------------------------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Oli Bakala — AI / ML / Data Engineering",
    template: "%s — Oli Bakala",
  },
  description:
    "Oli Bakala is a Software Engineering graduate focused on machine learning, artificial intelligence, data-driven systems, and production-oriented AI applications.",
  authors: [{ name: "Oli Bakala" }],
  creator: "Oli Bakala",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Oli Bakala — AI / ML / Data Engineering",
    description:
      "Software Engineering graduate focused on machine learning, AI applications, data-driven systems, and production-oriented software engineering.",
    type: "website",
    siteName: "Oli Bakala — AI / ML / Data Engineering",
    locale: "en_GB",
    /* url and images omitted — production domain and OG image not yet confirmed.
       Add when deploying:
       url: "https://your-domain.com",
       images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    */
  },
  twitter: {
    card: "summary",
    title: "Oli Bakala — AI / ML / Data Engineering",
    description:
      "Software Engineering graduate focused on machine learning, AI applications, data-driven systems, and production-oriented software engineering.",
    /* images omitted — no OG image available yet */
  },
};

/* --------------------------------------------------------------------------
   VIEWPORT
   -------------------------------------------------------------------------- */
export const viewport = {
  themeColor: "#0A0E12",
};

/* --------------------------------------------------------------------------
   JSON-LD STRUCTURED DATA — Person + WebSite
   Only verified information from PORTFOLIO_MASTER_SPEC.md §2.
   Rules applied:
   - jobTitle reflects actual current status (graduate/learner), not an aspiration.
   - sameAs uses canonical LinkedIn URL with www.
   - datePublished omitted — articles are educational writing, dates unverified.
   - No production URL — domain not yet confirmed.
   - JSON is serialized with < and > replaced to prevent any </script> injection risk.
   -------------------------------------------------------------------------- */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oli Bakala",
  description:
    "Software Engineering graduate developing expertise in machine learning, AI applications, data-driven systems, and production-oriented software engineering.",
  /* jobTitle: "AI / ML / Data Engineer" is a career aspiration, not a current held role.
     Omitted to avoid misrepresentation per PORTFOLIO_MASTER_SPEC.md §2 accuracy rules. */
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Engineering",
    "Software Engineering",
    "Natural Language Processing",
    "Computer Vision",
  ],
  sameAs: [
    "https://github.com/21Oli",
    "https://www.linkedin.com/in/oli-bakala/",
  ],
  /* url: omitted — production domain not yet confirmed */
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oli Bakala — AI / ML / Data Engineering",
  inLanguage: "en",
  /* url: omitted — production domain not yet confirmed */
};

/* Escape </script> sequences in JSON to prevent script injection.
   JSON.stringify produces valid JSON; the replace guards against any
   edge case where a string value contains "</script>". */
const structuredData = JSON.stringify([personSchema, websiteSchema])
  .replace(/</g, "\\u003c")
  .replace(/>/g, "\\u003e");

/* --------------------------------------------------------------------------
   NO-FOUC THEME SCRIPT
   -------------------------------------------------------------------------- */
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('oli-portfolio-theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {
    // localStorage unavailable — fall back to system preference via CSS
  }
})();
`;

/* --------------------------------------------------------------------------
   ROOT LAYOUT
   -------------------------------------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body>
        {/* Skip-to-content link for keyboard users */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
