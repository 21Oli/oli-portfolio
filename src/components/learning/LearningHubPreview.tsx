/* ==========================================================================
   LEARNING HUB PREVIEW — homepage section
   HOMEPAGE_SPEC.md §40 — anchor: #learning
   Shows a subset of articles with a CTA to /learning.
   ========================================================================== */

import Link from "next/link";
import { homepageLearningArticles } from "@/data/learning";
import LearningCard from "./LearningCard";
import styles from "./LearningHubPreview.module.css";

export default function LearningHubPreview() {
  return (
    <section id="learning" className={styles.section} aria-label="Learning Hub">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <div className={styles.headingGroup}>
            <p className={styles.eyebrow}>LEARNING</p>
            <h2 className={styles.heading}>Learning Hub.</h2>
            <p className={styles.subheading}>
              Insights, tutorials, experiments, and research notes from my
              journey through AI, Machine Learning, and Data.
            </p>
          </div>
          {/* Category labels from spec */}
          <div className={styles.categories} aria-label="Article categories">
            {(["INSIGHTS", "TUTORIALS", "EXPERIMENTS", "RESEARCH NOTES"] as const).map(
              (cat) => (
                <span key={cat} className={styles.catBadge}>
                  {cat}
                </span>
              )
            )}
          </div>
        </div>

        {/* Article cards */}
        <div className={styles.cards}>
          {homepageLearningArticles.map((article) => (
            <LearningCard key={article.id} article={article} />
          ))}
        </div>

        {/* CTA — links to the /learning listing route */}
        <div className={styles.ctaRow}>
          <Link href="/learning" className={styles.cta}>
            EXPLORE LEARNING HUB →
          </Link>
        </div>
      </div>
    </section>
  );
}
