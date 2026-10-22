/* ==========================================================================
   CAPABILITY SIGNAL — technology/capability strip
   Immediately after the hero per HOMEPAGE_SPEC.md §20.
   Compact, monochrome, accent on hover. Horizontal animation on desktop,
   scroll on mobile. No giant skill logos.
   ========================================================================== */

import styles from "./CapabilitySignal.module.css";

const technologies = [
  "PYTHON",
  "MACHINE LEARNING",
  "NLP",
  "COMPUTER VISION",
  "DEEP LEARNING",
  "SQL",
  "FASTAPI",
  "POSTGRESQL",
  "GENERATIVE AI",
];

export default function CapabilitySignal() {
  return (
    <div
      className={styles.strip}
      role="region"
      aria-label="Technical capabilities"
    >
      {/* Desktop: animated marquee. Mobile: horizontal scroll. */}
      <div className={styles.track}>
        {/* Render the list twice for seamless loop animation */}
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className={styles.list}
            aria-hidden={dup === 1 ? true : undefined}
          >
            {technologies.map((tech) => (
              <li key={`${dup}-${tech}`} className={styles.item}>
                {tech}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
