/* ==========================================================================
   CASE STUDY TEMPLATE
   Shared layout for all project case-study pages.
   Receives a CaseStudy data object and renders a consistent structure:
   breadcrumb → header → overview → sections → metrics → architecture
   → technologies → limitations → next steps → links
   IMPLEMENTATION_PLAN.md §10 · HOMEPAGE_SPEC.md §57–58
   ========================================================================== */

import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";
import styles from "./CaseStudyTemplate.module.css";

type Props = {
  study: CaseStudy;
};

export default function CaseStudyTemplate({ study }: Props) {
  const {
    title,
    category,
    year,
    status,
    overview,
    sections,
    metrics,
    technologies,
    architectureText,
    limitations,
    nextSteps,
    github,
    demo,
  } = study;

  const isInProgress =
    status === "IN DEVELOPMENT" || status.includes("IN PROGRESS");

  return (
    <article className={styles.page}>
      {/* Breadcrumb navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span className={styles.breadcrumbSep} aria-hidden="true">
          /
        </span>
        <Link href="/#projects" className={styles.breadcrumbLink}>
          Projects
        </Link>
        <span className={styles.breadcrumbSep} aria-hidden="true">
          /
        </span>
        <span className={styles.breadcrumbCurrent} aria-current="page">
          {title}
        </span>
      </nav>

      {/* Case study header */}
      <header className={styles.header}>
        <div className={styles.headerMeta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.year}>{year}</span>
          <span
            className={`${styles.statusBadge} ${isInProgress ? styles.statusActive : styles.statusComplete}`}
          >
            {status}
          </span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.overview}>{overview}</p>
      </header>

      <div className={styles.body}>
        {/* Verified metrics block — shown prominently when available */}
        {metrics && metrics.length > 0 && (
          <section className={styles.metricsBlock} aria-label="Project metrics">
            <p className={styles.sectionEyebrow}>RESULTS</p>
            <dl className={styles.metricGrid}>
              {metrics.map((m) => (
                <div key={m.label} className={styles.metricItem}>
                  <dd className={styles.metricValue}>{m.value}</dd>
                  <dt className={styles.metricLabel}>{m.label}</dt>
                  {m.context && (
                    <p className={styles.metricContext}>{m.context}</p>
                  )}
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Architecture visualization */}
        {architectureText && (
          <section
            className={styles.architectureBlock}
            aria-label="System architecture"
          >
            <p className={styles.sectionEyebrow}>ARCHITECTURE</p>
            <div className={styles.architectureDiagram}>
              {architectureText.split(/→|↓/).map((step, i, arr) => (
                <span key={i} className={styles.archStep}>
                  <span className={styles.archStepLabel}>{step.trim()}</span>
                  {i < arr.length - 1 && (
                    <span className={styles.archArrow} aria-hidden="true">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Content sections */}
        {sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.sectionHeading}>{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i} className={styles.sectionBody}>
                {para}
              </p>
            ))}
            {section.items && section.items.length > 0 && (
              <ul className={styles.sectionList}>
                {section.items.map((item) => (
                  <li key={item} className={styles.sectionListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.code && (
              <pre className={styles.codeBlock}>
                <code>{section.code}</code>
              </pre>
            )}
          </section>
        ))}

        {/* Technologies */}
        {technologies.length > 0 && (
          <section className={styles.techSection} aria-label="Technologies used">
            <p className={styles.sectionEyebrow}>TECHNOLOGIES</p>
            <ul className={styles.techList}>
              {technologies.map((tech) => (
                <li key={tech} className={styles.techTag}>
                  {tech}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Limitations */}
        {limitations.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Limitations</h2>
            <ul className={styles.sectionList}>
              {limitations.map((item) => (
                <li key={item} className={styles.sectionListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Next steps */}
        {nextSteps.length > 0 && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Next Steps</h2>
            <ul className={styles.sectionList}>
              {nextSteps.map((item) => (
                <li key={item} className={styles.sectionListItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* External links — only when real URLs exist */}
        {(github || demo) && (
          <section className={styles.linksSection} aria-label="Project links">
            <p className={styles.sectionEyebrow}>LINKS</p>
            <div className={styles.linksRow}>
              {github && (
                <a
                  href={github}
                  className={styles.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository (opens in new tab)"
                >
                  GitHub ↗
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  className={styles.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo (opens in new tab)"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </section>
        )}

        {/* Back navigation */}
        <div className={styles.backNav}>
          <Link href="/#projects" className={styles.backLink}>
            ← Back to projects
          </Link>
        </div>
      </div>
    </article>
  );
}
