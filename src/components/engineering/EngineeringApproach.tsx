/* ==========================================================================
   ENGINEERING APPROACH SECTION
   HOMEPAGE_SPEC.md §30–31 — horizontal on desktop, vertical on mobile.
   Data-driven: steps defined inline (no external data file needed —
   these are fixed, spec-approved descriptions).
   ========================================================================== */

import styles from "./EngineeringApproach.module.css";

type Step = {
  number: string;
  title: string;
  description: string;
};

/* Exact steps from HOMEPAGE_SPEC.md §31 */
const steps: Step[] = [
  {
    number: "01",
    title: "PROBLEM",
    description: "Define the actual task and success criteria.",
  },
  {
    number: "02",
    title: "DATA",
    description: "Understand sources, quality, structure, and limitations.",
  },
  {
    number: "03",
    title: "FEATURES",
    description: "Transform raw data into useful model inputs.",
  },
  {
    number: "04",
    title: "MODEL",
    description: "Select and train an appropriate approach.",
  },
  {
    number: "05",
    title: "EVALUATION",
    description: "Measure performance using meaningful metrics.",
  },
  {
    number: "06",
    title: "APPLICATION",
    description: "Expose the result through usable software.",
  },
  {
    number: "07",
    title: "ITERATION",
    description: "Test, improve, document, and refine.",
  },
];

export default function EngineeringApproach() {
  return (
    <section className={styles.section} aria-label="Engineering approach">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>How I build.</h2>
          <p className={styles.subheading}>
            From problem definition to working software, I focus on
            understanding the data, choosing an appropriate model, evaluating
            the result, and turning experiments into usable systems.
          </p>
        </div>

        {/* Process steps */}
        <ol className={styles.steps} aria-label="Engineering process steps">
          {steps.map((step, index) => (
            <li key={step.number} className={styles.step}>
              {/* Connector line between steps (desktop horizontal, not on last) */}
              {index < steps.length - 1 && (
                <span className={styles.connector} aria-hidden="true" />
              )}
              <div className={styles.stepContent}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {step.number}
                </span>
                <strong className={styles.stepTitle}>{step.title}</strong>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
