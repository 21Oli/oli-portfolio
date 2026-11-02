/* ==========================================================================
   ARTICLE TEMPLATE — shared layout for Learning Hub articles
   Provides consistent navigation, header, body structure, and back link.
   Content is passed as children — each article page controls its own content.
   ========================================================================== */

import Link from "next/link";
import type { LearningCategory } from "@/data/learning";
import styles from "./ArticleTemplate.module.css";

type Props = {
  title: string;
  category: LearningCategory;
  date: string;
  readingTime: number;
  children: React.ReactNode;
};

export default function ArticleTemplate({
  title,
  category,
  date,
  readingTime,
  children,
}: Props) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className={styles.page}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.sep} aria-hidden="true">/</span>
        <Link href="/learning" className={styles.breadcrumbLink}>Learning Hub</Link>
        <span className={styles.sep} aria-hidden="true">/</span>
        <span className={styles.current} aria-current="page">{title}</span>
      </nav>

      {/* Article header */}
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{formattedDate}</span>
          <span className={styles.readTime}>{readingTime} min read</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
      </header>

      {/* Article body */}
      <div className={styles.body}>{children}</div>

      {/* Back navigation */}
      <div className={styles.backNav}>
        <Link href="/learning" className={styles.backLink}>
          ← Back to Learning Hub
        </Link>
      </div>
    </article>
  );
}
