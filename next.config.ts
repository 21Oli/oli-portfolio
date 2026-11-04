import type { NextConfig } from "next";

/* ==========================================================================
   NEXT.JS CONFIGURATION

   Environment variables used:
   - NEXT_PUBLIC_SITE_URL: Set to the deployed URL (e.g. https://your-app.vercel.app)
     after the first Vercel deployment. Used by layout.tsx for metadataBase.
     No environment variables are required for the build to succeed.

   Content Security Policy (CSP): NOT yet implemented.
   The application renders 30+ inline Next.js RSC payload scripts per page.
   These change with every build, making hash-based CSP infeasible with
   static generation. A proper CSP requires either:
   - A Next.js middleware that generates a nonce per request (requires SSR/Edge)
   - Vercel's CSP configuration with nonce injection
   This is a post-deployment hardening task.
   ========================================================================== */

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  /* Strict-Transport-Security: only effective over HTTPS — Vercel handles this
     via its own HSTS configuration on production deployments. */
];

const nextConfig: NextConfig = {
  /* Remove the X-Powered-By: Next.js response header */
  poweredByHeader: false,

  /* Cache React Server Components for better performance */
  cacheComponents: true,

  /* Prefetch route segments in the background */
  partialPrefetching: true,

  /* Security headers applied to all routes */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
