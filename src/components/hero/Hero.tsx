/* ==========================================================================
   HERO — Portfolio homepage hero section
   Exact approved copy from HOMEPAGE_SPEC.md §15.
   7/5 desktop grid: text (7 cols) + visual (5 cols).
   Entrance animation with staggered delays per HOMEPAGE_SPEC.md §19.
   Résumé CTA omitted — no résumé file available (per §15: do not fabricate).
   ========================================================================== */

import HeroPortrait from "./HeroPortrait";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Text column (7/12 on desktop) */}
          <div className={styles.textCol}>
            {/* Eyebrow */}
            <p className={styles.eyebrow}>
              AI / ML / DATA ENGINEERING
            </p>

            {/* Headline */}
            <h1 className={styles.headline}>
              I build intelligent systems from data to deployment.
            </h1>

            {/* Supporting text */}
            <p className={styles.supporting}>
              Software Engineering graduate focused on machine learning, AI
              applications, data-driven systems, and production-oriented
              software engineering.
            </p>

            {/* CTAs */}
            <div className={styles.ctas}>
              <a href="#projects" className={`btn btn-primary ${styles.ctaPrimary}`}>
                VIEW SELECTED WORK →
              </a>
              {/* Résumé CTA omitted — no résumé file available.
                  Do not fabricate a download link per HOMEPAGE_SPEC.md §15. */}
            </div>

            {/* Current status */}
            <div className={styles.status}>
              <span className={styles.statusDot} aria-hidden="true" />
              <span className={styles.statusText}>
                CURRENTLY BUILDING AI-POWERED VISUAL ATTENDANCE SYSTEM
              </span>
            </div>
          </div>

          {/* Visual column (5/12 on desktop) */}
          <div className={styles.visualCol}>
            <HeroPortrait />
          </div>
        </div>
      </div>
    </section>
  );
}
