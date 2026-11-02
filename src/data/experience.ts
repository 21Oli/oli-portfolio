/* ==========================================================================
   EXPERIENCE DATA — source of truth for the Experience timeline
   HOMEPAGE_SPEC.md §34–35 · IMPLEMENTATION_PLAN.md §12
   PORTFOLIO_MASTER_SPEC.md §2

   Accuracy rules (from spec and Phase 7 instructions):
   - Keep education, training, internships, and personal projects distinct.
   - Do not represent training as employment.
   - Do not claim a qualification or certificate has been awarded unless
     the source materials establish that it has.
   - Do not invent dates, accomplishments, metrics, or technologies.
   - Do not imply professional AI employment.
   ========================================================================== */

export type ExperienceType = "education" | "training" | "internship";

export type ExperienceEntry = {
  id: string;
  type: ExperienceType;
  /** Display label for the type badge */
  typeLabel: string;
  organization: string;
  /** Secondary line — role or programme name */
  role: string;
  /** Year or duration string — only what is known and accurate */
  period: string;
  /** Short description — only factual, verified content */
  description: string;
};

export const experienceEntries: ExperienceEntry[] = [
  /* 1. AI & Data Science Training
     Type: training (not employment)
     Source: HOMEPAGE_SPEC.md §35, PORTFOLIO_MASTER_SPEC.md §2
     Note: described as a training programme through Qiyas ×
     Addis Ababa University × Ministry of Labour and Skills.
     No certificate awarded or claimed here — described as training. */
  {
    id: "ai-ds-training",
    type: "training",
    typeLabel: "TRAINING",
    organization: "Qiyas × Addis Ababa University × Ministry of Labour and Skills",
    role: "AI & Data Science Training",
    period: "2026",
    description:
      "Intensive training programme in artificial intelligence and data science, covering machine learning, data analysis, and practical AI applications.",
  },

  /* 2. BSc Software Engineering
     Type: education
     Source: HOMEPAGE_SPEC.md §35, PORTFOLIO_MASTER_SPEC.md §2 */
  {
    id: "bsc-software-engineering",
    type: "education",
    typeLabel: "EDUCATION",
    organization: "Arba Minch University",
    role: "BSc Software Engineering",
    period: "2025",
    description:
      "Four-year undergraduate degree in Software Engineering. Foundation in software development, systems design, algorithms, and engineering principles.",
  },

  /* 3. Full-Stack Developer Internship at DAN ENERGY
     Type: internship
     Source: HOMEPAGE_SPEC.md §35, PORTFOLIO_MASTER_SPEC.md §2
     Note: "Focus on actual software engineering responsibilities."
     Technologies and accomplishments not invented. */
  {
    id: "dan-energy-internship",
    type: "internship",
    typeLabel: "INTERNSHIP",
    organization: "DAN ENERGY",
    role: "Full-Stack Developer Intern",
    period: "4 months",
    description:
      "Full-stack software engineering internship. Contributed to web application development with responsibilities spanning both frontend and backend engineering tasks.",
  },
];
