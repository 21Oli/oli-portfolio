/* ==========================================================================
   PROJECT CARD
   Reusable component supporting featured / standard / compact variants.
   All content is data-driven from the Project type.
   Links are only rendered when their destinations are genuine.
   No fake disabled buttons. No invented metrics.
   HOMEPAGE_SPEC.md §23, §26–28
   ========================================================================== */

import type { Project } from "@/data/projects";
import ProjectArchitecture from "./ProjectArchitecture";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const {
    title,
    category,
    year,
    description,
    technologies,
    metrics,
    architecture,
    github,
    demo,
    caseStudy,
    variant,
    status,
  } = project;

  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      className={`${styles.card} ${styles[variant]}`}
      aria-label={title}
    >
      {/* Header: category + year */}
      <header className={styles.header}>
        <span className={styles.category}>{category}</span>
        <span className={styles.year}>{year}</span>
      </header>

      {/* Title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Description */}
      {!isCompact && (
        <p className={styles.description}>{description}</p>
      )}

      {/* Architecture visual — featured and standard only */}
      {!isCompact && architecture && (
        <div className={styles.architectureSlot}>
          <ProjectArchitecture
            architecture={architecture}
            projectTitle={title}
          />
        </div>
      )}

      {/* Technology tags */}
      {technologies.length > 0 && (
        <ul className={styles.tags} aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
      )}

      {/* Metrics — only if verified metrics exist */}
      {metrics && metrics.length > 0 && (
        <dl className={styles.metrics} aria-label="Project metrics">
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <dd className={styles.metricValue}>{m.value}</dd>
              <dt className={styles.metricLabel}>{m.label}</dt>
            </div>
          ))}
        </dl>
      )}

      {/* Status badge — shown when no metrics or when status is important */}
      {status && (
        <p className={`${styles.status} ${isFeatured ? styles.statusFeatured : ""}`}>
          {status}
        </p>
      )}

      {/* Links — only rendered when destination is real */}
      {(caseStudy || github || demo) && (
        <footer className={styles.links}>
          {caseStudy && (
            <a
              href={caseStudy}
              className={styles.link}
              aria-label={`Case study for ${title}`}
            >
              Case Study{" "}
              <span className={styles.linkArrow} aria-hidden="true">
                →
              </span>
            </a>
          )}
          {github && (
            <a
              href={github}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title} (opens in new tab)`}
            >
              GitHub{" "}
              <span className={styles.linkArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${title} (opens in new tab)`}
            >
              Live Demo{" "}
              <span className={styles.linkArrow} aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </footer>
      )}
    </article>
  );
}
