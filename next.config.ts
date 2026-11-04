import type { NextConfig } from "next";

/* ==========================================================================
   NEXT.JS CONFIGURATION
   ========================================================================== */

const securityHeaders = [
  /* Prevents MIME-type sniffing */
  { key: "X-Content-Type-Options", value: "nosniff" },
  /* Controls referrer information in requests */
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  /* Prevents the site from being embedded in a frame (clickjacking protection).
     Note: X-Frame-Options is largely superseded by CSP frame-ancestors in modern
     browsers, but remains useful for legacy browser support. */
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  /* X-XSS-Protection: removed — deprecated header, disabled in modern browsers,
     and can introduce security regressions in some configurations. */
  /* DNS prefetch control */
  { key: "X-DNS-Prefetch-Control", value: "on" },
  /* Permissions policy — disable unnecessary browser APIs */
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  /* Content-Security-Policy: NOT yet configured — requires testing compatibility
     with the existing inline no-FOUC theme script in layout.tsx and Next.js
     internal inline scripts. Implement as a Phase 12 hardening task after
     deployment, using nonces or hashes for the inline scripts. */
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
