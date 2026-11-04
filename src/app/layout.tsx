import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

/* --------------------------------------------------------------------------
   FONTS — Geist (primary) + Geist Mono (technical/metadata)
   CSS variables exposed: --font-geist-sans, --font-geist-mono
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
   Do not set a localhost or invented URL as metadataBase.
   Add when the production domain is confirmed:
     metadataBase: new URL("https://your-domain.com"),
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
    /* url and images omitted — production domain and OG image not yet confirmed.
       Add when deploying:
       url: "https://your-domain.com",
       images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    */
  },
};

/* --------------------------------------------------------------------------
   VIEWPORT
   -------------------------------------------------------------------------- */
export const viewport = {
  themeColor: "#0A0E12",
};

/* --------------------------------------------------------------------------
   NO-FOUC THEME SCRIPT
   Runs synchronously before paint to set [data-theme] from localStorage.
   If no saved preference, leaves attribute unset — CSS @media handles
   system preference. Prevents flash of wrong theme on initial render.
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
      </head>
      <body>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
