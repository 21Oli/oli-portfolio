/* ==========================================================================
   LEARNING DATA — source of truth for Learning Hub articles and topics
   HOMEPAGE_SPEC.md §39–40 · IMPLEMENTATION_PLAN.md §13
   PORTFOLIO_MASTER_SPEC.md §7 (Learning Hub categories)

   Rules:
   - Only create routes for articles with real content.
   - Categories: Insights, Tutorials, Experiments, Research Notes
   - Do not fabricate experiments, benchmarks, citations, or personal results.
   - Distinguish educational explanations from personal implementation results.
   ========================================================================== */

export type LearningCategory =
  | "INSIGHTS"
  | "TUTORIALS"
  | "EXPERIMENTS"
  | "RESEARCH NOTES";

export type LearningArticle = {
  id: string;
  title: string;
  category: LearningCategory;
  description: string;
  /** ISO date string */
  date: string;
  /** Next.js route */
  route: string;
  /** Reading time estimate in minutes */
  readingTime: number;
};

/* --------------------------------------------------------------------------
   APPROVED INITIAL ARTICLES — all four have routes and real content
   IMPLEMENTATION_PLAN.md §13: initial learning topics
   -------------------------------------------------------------------------- */
export const learningArticles: LearningArticle[] = [
  {
    id: "attention-is-all-you-need",
    title: "Understanding Attention",
    category: "RESEARCH NOTES",
    description:
      "A walkthrough of the attention mechanism and why it changed how we think about sequence-to-sequence tasks in natural language processing.",
    date: "2025-10-01",
    route: "/learning/attention-is-all-you-need",
    readingTime: 8,
  },
  {
    id: "cbow-vs-skipgram",
    title: "CBOW vs Skip-gram",
    category: "INSIGHTS",
    description:
      "Word2Vec's two training objectives compared — what each optimises, how they differ in practice, and which tends to work better for different tasks.",
    date: "2025-09-15",
    route: "/learning/cbow-vs-skipgram",
    readingTime: 6,
  },
  {
    id: "time-series-features",
    title: "Building Time-Series Features",
    category: "TUTORIALS",
    description:
      "Practical feature engineering for time-series data: lag features, rolling windows, seasonal decomposition, and what to watch out for.",
    date: "2025-08-20",
    route: "/learning/time-series-features",
    readingTime: 7,
  },
  {
    id: "word2vec",
    title: "Word2Vec Explained",
    category: "INSIGHTS",
    description:
      "How Word2Vec learns dense vector representations of words, why distributional similarity works, and what the resulting embeddings capture.",
    date: "2025-09-01",
    route: "/learning/word2vec",
    readingTime: 5,
  },
];

/* --------------------------------------------------------------------------
   CURRENTLY LEARNING TOPICS — HOMEPAGE_SPEC.md §39
   These reflect active learning areas, not completed work.
   -------------------------------------------------------------------------- */
export const currentLearningTopics: string[] = [
  "Transformers",
  "LLMs",
  "RAG",
  "AI Agents",
  "MLOps",
  "ML System Design",
  "Research Papers",
];

/* --------------------------------------------------------------------------
   HOMEPAGE PREVIEW — show a subset on the homepage
   -------------------------------------------------------------------------- */
export const homepageLearningArticles = learningArticles.slice(0, 3);
