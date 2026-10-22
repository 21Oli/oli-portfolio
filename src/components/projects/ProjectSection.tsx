/* ==========================================================================
   SELECTED PROJECTS SECTION
   Homepage section — anchor id="projects" (activates navbar CTA)
   HOMEPAGE_SPEC.md §21–27
   ========================================================================== */

import { homepageProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectSection.module.css";

export default function ProjectSection() {
  /* Separate featured card from the standard grid */
  const featured = homepageProjects.find((p) => p.variant === "featured");
  const standard = homepageProjects.filter((p) => p.variant !== "featured");

  return (
    <section
      id="projects"
      className={styles.section}
      aria-label="Selected projects"
    >
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>SELECTED WORK</p>
            <h2 className={styles.heading}>Systems I&apos;ve built.</h2>
            <p className={styles.subheading}>
              Selected machine learning, AI, and data projects showing how I
              move from problem definition and data to models, applications, and
              evaluation.
            </p>
          </div>
          {/* "View all" link — /projects route does not exist yet (Phase 5).
              Omitted to avoid broken navigation per spec rules. */}
        </div>

        {/* Featured card — full width */}
        {featured && (
          <div className={styles.featuredSlot}>
            <ProjectCard project={featured} />
          </div>
        )}

        {/* Standard cards — two-column grid */}
        {standard.length > 0 && (
          <div className={styles.standardGrid}>
            {standard.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
