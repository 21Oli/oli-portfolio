/* ==========================================================================
   EXPERIENCE TIMELINE
   HOMEPAGE_SPEC.md §34–35 — vertical timeline, id="experience"
   Data-driven from src/data/experience.ts.
   Entry types (education, training, internship) are clearly distinguished.
   ========================================================================== */

import { experienceEntries } from "@/data/experience";
import styles from "./ExperienceTimeline.module.css";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className={styles.section} aria-label="Experience and background">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>BACKGROUND</p>
          <h2 className={styles.heading}>Experience &amp; background.</h2>
        </div>

        {/* Timeline */}
        <ol className={styles.timeline} aria-label="Timeline of experience">
          {experienceEntries.map((entry, index) => (
            <li
              key={entry.id}
              className={styles.entry}
            >
              {/* Timeline track: dot + line */}
              <div className={styles.track} aria-hidden="true">
                <span className={styles.dot} />
                {index < experienceEntries.length - 1 && (
                  <span className={styles.line} />
                )}
              </div>

              {/* Entry content */}
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span
                    className={`${styles.typeBadge} ${styles[entry.type]}`}
                  >
                    {entry.typeLabel}
                  </span>
                  <span className={styles.period}>{entry.period}</span>
                </div>
                <h3 className={styles.organization}>{entry.organization}</h3>
                <p className={styles.role}>{entry.role}</p>
                <p className={styles.description}>{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
