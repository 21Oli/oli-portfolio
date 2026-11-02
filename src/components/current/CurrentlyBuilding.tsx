/* ==========================================================================
   CURRENTLY BUILDING
   HOMEPAGE_SPEC.md §38–39 — full-width feature panel + current learning.
   Reuses Visual Attendance data from projects.ts to avoid duplication.
   Does NOT imply the system is complete, deployed, or achieving results.
   ========================================================================== */

import Link from "next/link";
import { projects } from "@/data/projects";
import { currentLearningTopics } from "@/data/learning";
import styles from "./CurrentlyBuilding.module.css";

/* Retrieve the Visual Attendance project from the central data file */
const attendanceProject = projects.find((p) => p.id === "visual-attendance")!;

/* Architecture steps from the spec §38 (vertical presentation) */
const archSteps = [
  "CAMERA",
  "FACE DETECTION",
  "FACE RECOGNITION",
  "IDENTITY MATCH",
  "ATTENDANCE EVENT",
  "DATA / REPORT",
];

export default function CurrentlyBuilding() {
  return (
    <section className={styles.section} aria-label="Currently building">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* --- Primary panel: Current project --- */}
          <div className={styles.primaryPanel}>
            <div className={styles.panelHeader}>
              <p className={styles.eyebrow}>CURRENTLY BUILDING</p>
              <h2 className={styles.heading}>Currently building.</h2>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectMeta}>
                <span className={styles.category}>{attendanceProject.category}</span>
                <span className={styles.statusBadge}>{attendanceProject.status}</span>
              </div>

              <h3 className={styles.projectTitle}>{attendanceProject.title}</h3>

              {/* Exact approved description from HOMEPAGE_SPEC.md §38 */}
              <p className={styles.projectDescription}>
                A production-oriented computer vision system for live employee
                attendance using face detection, recognition, structured employee
                data, and reporting workflows.
              </p>

              {/* Architecture preview — vertical per spec §38 */}
              <div
                className={styles.architecture}
                aria-label="System architecture preview"
              >
                <p className={styles.archLabel} aria-hidden="true">
                  PIPELINE
                </p>
                <ol className={styles.archSteps}>
                  {archSteps.map((step, i) => (
                    <li key={step} className={styles.archStep}>
                      <span className={styles.archDot} aria-hidden="true" />
                      <span className={styles.archStepLabel}>{step}</span>
                      {i < archSteps.length - 1 && (
                        <span className={styles.archLine} aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA — links to case study (Phase 5 route) */}
              {attendanceProject.caseStudy && (
                <Link
                  href={attendanceProject.caseStudy}
                  className={styles.cta}
                  aria-label={`Explore ${attendanceProject.title}`}
                >
                  EXPLORE PROJECT →
                </Link>
              )}
            </div>
          </div>

          {/* --- Secondary panel: Current learning --- */}
          <div className={styles.secondaryPanel}>
            <p className={styles.learningEyebrow}>CURRENTLY LEARNING</p>
            <ul className={styles.topicList} aria-label="Current learning topics">
              {currentLearningTopics.map((topic) => (
                <li key={topic} className={styles.topic}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
