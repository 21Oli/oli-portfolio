import styles from "./page.module.css";

/* Phase 1 — Minimal application shell placeholder.
   The homepage content (hero, projects, skills, etc.) will be
   implemented in Phase 3+ per IMPLEMENTATION_PLAN.md.
   This page confirms the foundation renders correctly. */

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>AI / ML / DATA ENGINEERING</p>
        <h1 className={styles.heading}>Portfolio Foundation</h1>
        <p className={styles.paragraph}>
          Application shell, design tokens, and typography are configured.
        </p>
        <p className={styles.paragraph}>
          Homepage implementation begins in Phase 3.
        </p>
        <p className={styles.status}>
          Phase 1 — Foundation Complete
        </p>
      </div>
    </div>
  );
}
