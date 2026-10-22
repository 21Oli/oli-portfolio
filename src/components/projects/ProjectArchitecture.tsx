/* ==========================================================================
   PROJECT ARCHITECTURE VISUAL
   Renders the architecture string as a styled monospace diagram.
   Used inside ProjectCard for the featured and standard variants.
   ========================================================================== */

import styles from "./ProjectArchitecture.module.css";

type Props = {
  architecture: string;
  projectTitle: string;
};

export default function ProjectArchitecture({
  architecture,
  projectTitle,
}: Props) {
  /* Split on → or newlines so we can render a visual flow */
  const steps = architecture
    .split(/→|↓|\n/)
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div
      className={styles.container}
      aria-label={`System architecture for ${projectTitle}`}
    >
      <p className={styles.label} aria-hidden="true">
        SYSTEM ARCHITECTURE
      </p>
      <div className={styles.flow}>
        {steps.map((step, index) => (
          <div key={step} className={styles.step}>
            <span className={styles.stepLabel}>{step}</span>
            {index < steps.length - 1 && (
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
