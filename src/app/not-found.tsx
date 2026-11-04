/* ==========================================================================
   404 NOT FOUND PAGE
   PORTFOLIO_MASTER_SPEC.md §15: "Useful 404 handling."
   Uses approved design tokens, accessible navigation, and a link back to
   the homepage. Consistent with the portfolio's editorial-minimalist style.
   ========================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.code} aria-hidden="true">404</p>
        <h1 className={styles.heading}>Page not found.</h1>
        <p className={styles.description}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className={styles.homeLink}>
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
