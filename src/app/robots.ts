import type { MetadataRoute } from "next";

/* ==========================================================================
   robots.ts — Next.js Metadata Route
   Generates /robots.txt at build time.
   Sitemap directive is included only when NEXT_PUBLIC_SITE_URL is set.

   After first Vercel deployment:
   1. Add NEXT_PUBLIC_SITE_URL = https://your-app.vercel.app to Vercel env vars.
   2. Redeploy — /robots.txt will include the sitemap reference.
   ========================================================================== */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    ...(baseUrl ? { sitemap: `${baseUrl}/sitemap.xml` } : {}),
  };
}
