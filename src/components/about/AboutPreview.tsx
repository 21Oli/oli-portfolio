/* ==========================================================================
   ABOUT PREVIEW
   HOMEPAGE_SPEC.md §36–37 — id="about", approved copy.
   "READ MORE ABOUT ME →" CTA omitted: the /about route does not yet exist.
   Per spec: "Create routes only when their corresponding content is available."
   The CTA will be added when /about is implemented (a later phase).
   ========================================================================== */

import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section id="about" className={styles.section} aria-label="About">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>ABOUT</p>
          <h2 className={styles.heading}>
            From software engineering to intelligent systems.
          </h2>
        </div>

        {/* Approved copy from HOMEPAGE_SPEC.md §37 */}
        <div className={styles.body}>
          <p className={styles.paragraph}>
            My foundation is in software engineering, where I developed an
            interest in building applications that solve practical problems.
          </p>
          <p className={styles.paragraph}>
            I am now focusing that foundation on machine learning, artificial
            intelligence, data-driven systems, and production-oriented AI
            applications.
          </p>
          <p className={styles.paragraph}>
            My goal is to understand the full path from data and
            experimentation to reliable software that people can actually use.
          </p>
        </div>
      </div>
    </section>
  );
}
