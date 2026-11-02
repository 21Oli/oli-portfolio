import type { Metadata } from "next";
import Link from "next/link";
import { learningArticles } from "@/data/learning";
import LearningCard from "@/components/learning/LearningCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Learning Hub — Oli Bakala",
  description:
    "Insights, tutorials, experiments, and research notes on AI, Machine Learning, and Data from Oli Bakala.",
};

export default function LearningPage() {
  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.sep} aria-hidden="true">/</span>
        <span className={styles.current} aria-current="page">Learning Hub</span>
      </nav>

      <header className={styles.header}>
        <p className={styles.eyebrow}>LEARNING HUB</p>
        <h1 className={styles.heading}>Learning Hub.</h1>
        <p className={styles.subheading}>
          Insights, tutorials, experiments, and research notes from my journey
          through AI, Machine Learning, and Data.
        </p>
      </header>

      <div className={styles.grid}>
        {learningArticles.map((article) => (
          <LearningCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
