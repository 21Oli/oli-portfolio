import type { MetadataRoute } from "next";

/* ==========================================================================
   robots.ts — Next.js Metadata Route
   Generates /robots.txt at build time.
   Production domain is not yet confirmed — no Sitemap directive is
   included until the domain is known. Add the following line when
   the domain is confirmed:
     sitemap: "https://your-domain.com/sitemap.xml",
   ========================================================================== */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        /* Disallow nothing — all public routes are indexable */
      },
    ],
    /* sitemap: "https://your-domain.com/sitemap.xml", — add when domain is confirmed */
  };
}
