/* ==========================================================================
   LEARNING CARD — reusable card for Learning Hub articles
   Used on both the homepage preview and the /learning listing page.
   ========================================================================== */

import Link from "next/link";
import type { LearningArticle } from "@/data/learning";
import styles from "./LearningCard.module.css";

type Props = {
  article: LearningArticle;
};

export default function LearningCard({ article }: Props) {
  const { title, category, description, date, route, readingTime } = article;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });

  return (
    <article className={styles.card} aria-label={title}>
      <Link href={route} className={styles.cardLink} aria-label={`Read: ${title}`}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.readTime}>{readingTime} min read</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.date}>{formattedDate}</span>
          <span className={styles.arrow} aria-hidden="true">→</span>
        </div>
      </Link>
    </article>
  );
}
