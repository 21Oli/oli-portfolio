import type { MetadataRoute } from "next";

/* ==========================================================================
   SITEMAP
   Generated at build time by Next.js Metadata Route API.
   Requires NEXT_PUBLIC_SITE_URL to be set for absolute URLs.
   Without it, the sitemap is not generated (returns empty array).

   After first Vercel deployment:
   1. Copy the assigned *.vercel.app URL.
   2. Add NEXT_PUBLIC_SITE_URL = https://your-app.vercel.app to Vercel env vars.
   3. Redeploy — the sitemap will be generated at /sitemap.xml.
   4. Add the sitemap directive to src/app/robots.ts.
   ========================================================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  /* Do not generate a sitemap without a confirmed production domain */
  if (!baseUrl) return [];

  const now = new Date().toISOString();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/learning`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/projects/visual-attendance`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects/credit-scoring`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/projects/neural-translation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/learning/attention-is-all-you-need`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/learning/cbow-vs-skipgram`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/learning/time-series-features`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/learning/word2vec`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
