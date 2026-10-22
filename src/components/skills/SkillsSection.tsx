/* ==========================================================================
   SKILLS SECTION
   HOMEPAGE_SPEC.md §32–33 · anchor: #skills
   Data-driven from src/data/skills.ts.
   No skill logos — editorial monospace tags, readable without icons.
   learning: true items show a subtle "LEARNING" badge.
   ========================================================================== */

import { skillGroups } from "@/data/skills";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section id="skills" className={styles.section} aria-label="Technical skills">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>TECHNICAL TOOLKIT</p>
          <h2 className={styles.heading}>Technical toolkit.</h2>
          <p className={styles.subheading}>
            Tools and technologies I use across machine learning, data, AI
            applications, and software engineering.
          </p>
        </div>

        {/* Four skill groups */}
        <div className={styles.groups} role="list">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className={styles.group}
              role="listitem"
              aria-label={`${group.title} skills`}
            >
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.skillList} aria-label={`${group.title} technologies`}>
                {group.skills.map((skill) => (
                  <li key={skill.label} className={styles.skillItem}>
                    <span className={styles.skillLabel}>{skill.label}</span>
                    {skill.learning && (
                      <span
                        className={styles.learningBadge}
                        aria-label="currently learning"
                        title="Currently learning"
                      >
                        LEARNING
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
