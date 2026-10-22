/* ==========================================================================
   PROJECT DATA — source of truth for all portfolio projects
   PORTFOLIO_MASTER_SPEC.md §7–9 · HOMEPAGE_SPEC.md §24–29

   Rules:
   - Only include fields that contain real, verified information.
   - Optional fields must be omitted (not null/empty) when unavailable.
   - Do not invent metrics, URLs, deployment status, or user counts.
   - Metrics must be attributed to the correct project and model configuration.
   - GitHub URLs are omitted until verified repository links are available.
   - Case study routes are omitted until content exists (Phase 5).
   ========================================================================== */

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  featured: boolean;
  variant: "featured" | "standard" | "compact";
  /** Honest status: "IN DEVELOPMENT", "COMPLETED", etc. */
  status?: string;
  /** Architecture overview — short text description used in visual area */
  architecture?: string;
  /** Verified metrics only — see PORTFOLIO_MASTER_SPEC.md §9 */
  metrics?: ProjectMetric[];
  /** Real GitHub URL when available */
  github?: string;
  /** Real live demo URL when available */
  demo?: string;
  /** Case study route — only when page exists (Phase 5) */
  caseStudy?: string;
};

/* --------------------------------------------------------------------------
   FLAGSHIP PROJECTS
   -------------------------------------------------------------------------- */
export const projects: Project[] = [
  /* 01 — AI-Powered Visual Attendance System
     Category: COMPUTER VISION / AI APPLICATION
     Status: IN DEVELOPMENT
     Visual Attendance is the primary flagship project — featured variant.
     Emphasize computer vision pipeline, application architecture, and progress.
     No metrics: system is under active development.
     GitHub and case-study routes: omitted until available. */
  {
    id: "visual-attendance",
    title: "AI-Powered Visual Attendance System",
    category: "COMPUTER VISION / AI APPLICATION",
    year: "2026",
    description:
      "Production-oriented computer vision system for live employee recognition and attendance tracking. Integrates face detection, recognition, and structured reporting workflows.",
    technologies: ["Python", "OpenCV", "Face Recognition", "Pandas", "FastAPI"],
    featured: true,
    variant: "featured",
    status: "IN DEVELOPMENT",
    architecture:
      "CAMERA → FACE DETECTION → RECOGNITION → IDENTITY MATCH → ATTENDANCE EVENT → DATA / REPORTS",
  },

  /* 02 — Probability of Default / Credit Scoring
     Category: MACHINE LEARNING / CREDIT RISK
     Metrics: verified from PORTFOLIO_MASTER_SPEC.md §9 (Credit scoring).
     Emphasize classification, class imbalance handling, and model evaluation. */
  {
    id: "credit-scoring",
    title: "Probability of Default — Credit Scoring",
    category: "MACHINE LEARNING / CREDIT RISK",
    year: "2025",
    description:
      "Binary classification model predicting the probability of loan default. Addresses class imbalance and evaluates precision-recall trade-offs for credit risk decision-making.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    featured: true,
    variant: "standard",
    status: "COMPLETED",
    metrics: [
      { label: "F1", value: "0.7805" },
      { label: "ROC-AUC", value: "0.9487" },
      { label: "Recall", value: "0.6531" },
    ],
  },

  /* 03 — Neural Machine Translation
     Category: NLP / DEEP LEARNING
     Metrics: OMITTED — spec states final metrics must be verified before
     publishing. HOMEPAGE_SPEC.md §24: "Do not invent final evaluation
     metrics." Status shown instead. */
  {
    id: "neural-translation",
    title: "Neural Machine Translation",
    category: "NLP / DEEP LEARNING",
    year: "2025",
    description:
      "Sequence-to-sequence neural machine translation system. Explores encoder-decoder architecture, attention mechanisms, and the engineering constraints of training NLP models.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "NLTK",
      "NumPy",
    ],
    featured: false,
    variant: "standard",
    status: "TRAINING / EVALUATION IN PROGRESS",
  },
];

/* --------------------------------------------------------------------------
   FEATURED PROJECT (convenience selector — first featured variant)
   -------------------------------------------------------------------------- */
export const featuredProject = projects.find((p) => p.variant === "featured");

/* --------------------------------------------------------------------------
   HOMEPAGE DISPLAY PROJECTS
   Show flagship three on the homepage selected-projects section.
   Secondary projects will be added in a later phase when content is ready.
   -------------------------------------------------------------------------- */
export const homepageProjects = projects.filter((p) =>
  ["visual-attendance", "credit-scoring", "neural-translation"].includes(p.id)
);
