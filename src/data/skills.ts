/* ==========================================================================
   SKILLS DATA — source of truth for the Skills section
   HOMEPAGE_SPEC.md §32–33 · PORTFOLIO_MASTER_SPEC.md §7

   Rules:
   - Only include technologies Oli can explain and demonstrate.
   - learning: true marks technologies being actively studied
     rather than applied in completed projects.
   - Do not add skills merely because they are popular.
   ========================================================================== */

export type SkillItem = {
  label: string;
  /** true = currently learning / exploring rather than applied in a completed project */
  learning?: boolean;
};

export type SkillGroup = {
  id: string;
  title: string;
  skills: SkillItem[];
};

/* --------------------------------------------------------------------------
   Four approved categories — HOMEPAGE_SPEC.md §33
   -------------------------------------------------------------------------- */
export const skillGroups: SkillGroup[] = [
  /* 1. AI / ML — core machine learning tools used across completed projects */
  {
    id: "ai-ml",
    title: "AI / ML",
    skills: [
      { label: "Python" },
      { label: "Scikit-learn" },
      { label: "XGBoost" },
      { label: "LightGBM" },
      { label: "TensorFlow" },
      { label: "Keras" },
      { label: "Machine Learning" },
      { label: "Deep Learning" },
      { label: "Computer Vision" },
      { label: "NLP" },
      { label: "Feature Engineering" },
      { label: "Model Evaluation" },
      { label: "Transformers", learning: true },
    ],
  },

  /* 2. Data — data handling and analysis tools */
  {
    id: "data",
    title: "Data",
    skills: [
      { label: "Pandas" },
      { label: "NumPy" },
      { label: "SQL" },
      { label: "PostgreSQL" },
      { label: "Data Analysis" },
      { label: "Data Cleaning" },
      { label: "Time-Series" },
      { label: "Statistical Analysis" },
      { label: "Feature Selection" },
    ],
  },

  /* 3. AI Applications — applied AI tooling and application development */
  {
    id: "ai-applications",
    title: "AI Applications",
    skills: [
      { label: "FastAPI" },
      { label: "Computer Vision Applications" },
      { label: "NLP Applications" },
      { label: "Model APIs" },
      { label: "Generative AI", learning: true },
      { label: "LLMs", learning: true },
      { label: "RAG", learning: true },
      { label: "AI Agents", learning: true },
    ],
  },

  /* 4. Engineering — software engineering foundations */
  {
    id: "engineering",
    title: "Engineering",
    skills: [
      { label: "Git" },
      { label: "GitHub" },
      { label: "REST APIs" },
      { label: "Software Architecture" },
      { label: "JavaScript" },
      { label: "Testing" },
      { label: "MLOps", learning: true },
      { label: "Cloud Computing", learning: true },
    ],
  },
];
