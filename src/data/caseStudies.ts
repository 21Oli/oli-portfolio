/* ==========================================================================
   CASE STUDY DATA
   Detailed per-project content for the case study pages (Phase 5).
   Every claim here must be based on verified project evidence.
   Sections that cannot be verified are omitted or clearly labelled.
   IMPLEMENTATION_PLAN.md §10 · PORTFOLIO_MASTER_SPEC.md §8–9
   ========================================================================== */

export type CaseStudySection = {
  heading: string;
  body: string[];
  /** Optional inline code snippets or architecture text */
  code?: string;
  /** Optional list items for bullet-point presentation */
  items?: string[];
};

export type CaseStudyMetric = {
  label: string;
  value: string;
  context?: string;
};

export type CaseStudy = {
  projectId: string;
  title: string;
  category: string;
  year: string;
  status: string;
  overview: string;
  sections: CaseStudySection[];
  metrics?: CaseStudyMetric[];
  technologies: string[];
  architectureText?: string;
  limitations: string[];
  nextSteps: string[];
  /** Real GitHub URL — omitted when not available */
  github?: string;
  /** Real demo URL — omitted when not available */
  demo?: string;
};

/* --------------------------------------------------------------------------
   01 — AI-POWERED VISUAL ATTENDANCE SYSTEM
   Status: IN DEVELOPMENT
   Emphasize: computer vision pipeline, application architecture, progress.
   Metrics: NONE — system under active development.
   Content basis: general knowledge of the CV pipeline being built,
   per PORTFOLIO_MASTER_SPEC.md §8 guidance on this project.
   -------------------------------------------------------------------------- */
export const visualAttendanceCaseStudy: CaseStudy = {
  projectId: "visual-attendance",
  title: "AI-Powered Visual Attendance System",
  category: "COMPUTER VISION / AI APPLICATION",
  year: "2026",
  status: "IN DEVELOPMENT",
  overview:
    "A production-oriented computer vision system designed to automate employee attendance tracking through live face detection and recognition. The system integrates a real-time video pipeline, a face recognition engine, a structured employee database, and a reporting workflow.",

  sections: [
    {
      heading: "Problem",
      body: [
        "Manual attendance tracking in workplace environments is slow, error-prone, and difficult to audit. Signing sheets and card-based systems require physical interaction and produce data that is hard to query or report on.",
        "The goal of this project is to build a system that captures attendance automatically from a camera feed, matches detected faces to a known employee database, records attendance events, and surfaces the data through structured reports.",
      ],
    },
    {
      heading: "Intended Users",
      body: [
        "The intended deployment context is a small-to-medium organization that wants to reduce manual attendance administration. The primary users are administrators who need daily attendance records, and optionally a supervisory interface for reviewing who was present and when.",
      ],
    },
    {
      heading: "Technical Approach",
      body: [
        "The system is built around a classical computer vision pipeline rather than a large end-to-end deep learning model, which keeps the computational requirements manageable for deployment without dedicated GPU infrastructure.",
        "Face detection identifies and localizes face regions within each video frame. Face recognition computes embeddings for detected faces and matches them against a stored employee embedding database. Identity resolution produces a confidence-ranked match, and confirmed matches are logged as attendance events.",
      ],
      items: [
        "Frame capture from a connected camera using OpenCV",
        "Face detection using an established face detection model",
        "Face embedding extraction and comparison for recognition",
        "Employee data management with Pandas",
        "Attendance event logging and structured report generation",
        "API layer (FastAPI) for integration and data access",
      ],
    },
    {
      heading: "System Architecture",
      body: [
        "The pipeline moves from video input through detection, recognition, and identity resolution, terminating in an attendance record and reporting layer.",
      ],
      code: "CAMERA → FACE DETECTION → FACE RECOGNITION → IDENTITY MATCH → ATTENDANCE EVENT → DATA / REPORTS",
    },
    {
      heading: "Implementation Status",
      body: [
        "The system is currently in active development. The core computer vision pipeline components — camera capture, face detection, and recognition — are being implemented and integrated.",
        "The following components are implemented or in active development:",
      ],
      items: [
        "Camera capture and frame processing (OpenCV)",
        "Face detection and bounding-box extraction",
        "Face recognition and embedding matching",
        "Basic attendance event recording",
      ],
    },
    {
      heading: "Planned Work",
      body: [
        "The following components are planned but not yet implemented:",
      ],
      items: [
        "FastAPI backend for data access and integration",
        "Employee database management interface",
        "Structured report generation (daily/weekly summaries)",
        "Handling of edge cases: low-light, occlusion, multiple faces per frame",
        "Evaluation against a held-out set of employee images",
        "Performance testing under real deployment conditions",
      ],
    },
    {
      heading: "Engineering Decisions",
      body: [
        "The choice to use a classical CV pipeline rather than a full deep learning approach was made to keep deployment requirements manageable. Face recognition libraries built on established model architectures provide a reliable accuracy baseline without requiring model training from scratch.",
        "Pandas is used for employee data and attendance records during development, with the intention of moving to a more structured persistence layer as the system matures.",
      ],
    },
  ],

  technologies: ["Python", "OpenCV", "Face Recognition", "Pandas", "FastAPI"],

  architectureText:
    "CAMERA → FACE DETECTION → RECOGNITION → IDENTITY MATCH → ATTENDANCE EVENT → DATA / REPORTS",

  limitations: [
    "System is under active development — no production deployment exists.",
    "Recognition accuracy has not been formally evaluated against a held-out test set.",
    "Edge-case handling (low-light conditions, partial occlusion, multiple simultaneous faces) is not yet implemented.",
    "The current architecture is designed for a single camera and a small employee set; scaling has not been addressed.",
    "No user interface for administrators exists yet.",
  ],

  nextSteps: [
    "Complete the FastAPI backend and attendance data persistence layer.",
    "Build the employee database management interface.",
    "Implement and evaluate recognition accuracy on a representative test set.",
    "Add edge-case handling for challenging capture conditions.",
    "Implement reporting workflows for daily and weekly attendance summaries.",
    "Conduct end-to-end system testing under realistic conditions.",
  ],
};

/* --------------------------------------------------------------------------
   02 — PROBABILITY OF DEFAULT / CREDIT SCORING
   Status: COMPLETED
   Metrics: F1 0.7805, ROC-AUC 0.9487, Recall 0.6531 (verified, PORTFOLIO_MASTER_SPEC.md §9)
   Content basis: standard credit risk ML workflow; metrics from spec.
   Emphasize: class imbalance, precision-recall trade-off, evaluation methodology.
   -------------------------------------------------------------------------- */
export const creditScoringCaseStudy: CaseStudy = {
  projectId: "credit-scoring",
  title: "Probability of Default — Credit Scoring",
  category: "MACHINE LEARNING / CREDIT RISK",
  year: "2025",
  status: "COMPLETED",
  overview:
    "A binary classification model that predicts the probability that a borrower will default on a loan. The project focuses on handling class imbalance, selecting an appropriate evaluation framework for credit risk, and understanding the trade-offs between precision and recall in a financial decision-making context.",

  sections: [
    {
      heading: "Problem",
      body: [
        "Credit risk assessment is a core task for lending institutions. The goal is to predict, for a given loan applicant, whether they are likely to default — that is, fail to repay the loan under the agreed terms.",
        "A well-calibrated model helps lenders make more consistent decisions, reduce default losses, and avoid over-rejecting creditworthy applicants. The key challenge is that defaults are rare relative to non-defaults, which creates a class imbalance that standard accuracy metrics handle poorly.",
      ],
    },
    {
      heading: "Data and Preprocessing",
      body: [
        "The dataset contains loan application records with financial features and a binary default label.",
        "Class imbalance is a defining characteristic of credit scoring datasets. The project explores techniques for addressing imbalance during training and evaluates their effect on recall — the ability to identify actual defaults.",
      ],
      items: [
        "Feature selection and handling of missing values",
        "Encoding of categorical variables",
        "Addressing class imbalance (e.g., class weighting or resampling techniques)",
        "Train-test split with stratification to preserve class distribution",
      ],
    },
    {
      heading: "Approach and Models",
      body: [
        "The project evaluates multiple classification approaches, with a focus on gradient-boosted trees which are well-suited to tabular financial data.",
        "XGBoost is used as the primary model due to its strong performance on structured data and built-in support for class imbalance handling through scale_pos_weight.",
        "Scikit-learn is used for baseline models, preprocessing pipelines, and evaluation utilities.",
      ],
    },
    {
      heading: "Evaluation Methodology",
      body: [
        "For credit risk, accuracy alone is a misleading metric because a classifier that predicts no defaults achieves high accuracy on an imbalanced dataset. The evaluation uses metrics that reflect the cost structure of credit decisions:",
      ],
      items: [
        "ROC-AUC: measures the model's ability to rank defaulters above non-defaulters across all thresholds — the primary discrimination metric.",
        "F1 score: balances precision and recall, penalising models that ignore the minority class.",
        "Recall: the fraction of actual defaults correctly identified — critical for limiting default losses.",
        "Precision: the fraction of predicted defaults that are actual defaults — relevant for avoiding unnecessary rejections.",
      ],
    },
    {
      heading: "Results",
      body: [
        "The model achieves the following results on the held-out test set:",
      ],
      items: [
        "ROC-AUC: 0.9487 — strong discrimination between defaulters and non-defaulters.",
        "F1: 0.7805 — reasonable balance between precision and recall.",
        "Recall: 0.6531 — the model correctly identifies approximately 65% of actual defaults.",
      ],
    },
    {
      heading: "Trade-offs and Context",
      body: [
        "The recall of 0.6531 means the model misses approximately 35% of actual defaults. Whether this is acceptable depends entirely on the business cost of missed defaults versus the cost of incorrectly rejecting good applicants.",
        "The ROC-AUC of 0.9487 indicates the model has strong discriminative ability. The decision threshold can be adjusted to shift the precision-recall trade-off, depending on operational requirements.",
        "These results reflect the trained model configuration on this dataset. Performance on a different dataset or with a different train-test split should not be assumed to be equivalent.",
      ],
    },
    {
      heading: "Engineering Details",
      body: [
        "The project uses a Scikit-learn pipeline to chain preprocessing and modelling steps, which ensures that preprocessing parameters are fitted only on training data and applied consistently to the test set.",
        "Feature importance is examined to understand which variables drive the model's decisions — a useful step for both model validation and explaining predictions.",
      ],
    },
  ],

  metrics: [
    {
      label: "ROC-AUC",
      value: "0.9487",
      context: "Discrimination between defaulters and non-defaulters",
    },
    {
      label: "F1",
      value: "0.7805",
      context: "Balance of precision and recall on the test set",
    },
    {
      label: "Recall",
      value: "0.6531",
      context: "Fraction of actual defaults correctly identified",
    },
  ],

  technologies: [
    "Python",
    "Scikit-learn",
    "XGBoost",
    "Pandas",
    "NumPy",
    "Matplotlib",
  ],

  limitations: [
    "Recall of 0.6531 means approximately 35% of actual defaults are missed at the default classification threshold.",
    "Results are specific to this dataset and model configuration — they should not be generalised without re-evaluation.",
    "The model does not account for temporal drift in borrower behaviour.",
    "No deployment or production integration has been built.",
    "The evaluation does not include calibration analysis — the raw probability outputs may not be well-calibrated.",
  ],

  nextSteps: [
    "Explore threshold tuning to optimise for specific business cost structures.",
    "Investigate probability calibration to ensure confidence scores are meaningful.",
    "Evaluate feature engineering approaches for improving recall.",
    "Compare additional models (e.g., LightGBM, logistic regression with L2 regularisation) for the same task.",
    "Build a simple API endpoint to expose the model for scoring new applications.",
  ],
};

/* --------------------------------------------------------------------------
   03 — NEURAL MACHINE TRANSLATION
   Status: TRAINING / EVALUATION IN PROGRESS
   Metrics: NONE — not yet verified. Must not be invented.
   Content basis: standard seq2seq / attention-based NMT design;
   emphasise architecture, engineering constraints, training process.
   HOMEPAGE_SPEC.md §24: "Do not invent final evaluation metrics."
   -------------------------------------------------------------------------- */
export const neuralTranslationCaseStudy: CaseStudy = {
  projectId: "neural-translation",
  title: "Neural Machine Translation",
  category: "NLP / DEEP LEARNING",
  year: "2025",
  status: "TRAINING / EVALUATION IN PROGRESS",
  overview:
    "A sequence-to-sequence neural machine translation system built to explore encoder-decoder architectures and attention mechanisms. The project emphasises understanding the engineering constraints of training and evaluating NLP models rather than claiming production-ready translation quality.",

  sections: [
    {
      heading: "Problem",
      body: [
        "Machine translation is the task of automatically converting text from one language to another while preserving meaning. It is one of the foundational problems in NLP and serves as a useful vehicle for understanding deep learning architectures that process sequential data.",
        "The goal of this project is to build, train, and evaluate a sequence-to-sequence translation model, with attention to the engineering choices involved: vocabulary construction, sequence encoding, decoding strategy, and evaluation methodology.",
      ],
    },
    {
      heading: "Data",
      body: [
        "The project uses a sentence-pair dataset for training and evaluation. Text preprocessing includes tokenisation, vocabulary construction, and sequence padding.",
        "Vocabulary size and maximum sequence length are significant engineering constraints — they directly affect model size, training memory requirements, and the coverage of rare words.",
      ],
      items: [
        "Sentence-pair alignment and cleaning",
        "Tokenisation using NLTK",
        "Vocabulary construction with frequency thresholds",
        "Sequence padding and masking for variable-length inputs",
        "Train, validation, and test split",
      ],
    },
    {
      heading: "Architecture",
      body: [
        "The system is built around a sequence-to-sequence architecture with an attention mechanism. The encoder processes the source sentence and produces a context representation; the attention mechanism allows the decoder to selectively focus on different parts of the encoder's output at each decoding step.",
      ],
      code: "SOURCE TOKENS → ENCODER → CONTEXT → ATTENTION → DECODER → TARGET TOKENS",
      items: [
        "Encoder: recurrent or convolutional layer processing source tokens",
        "Context vector: summary of encoder hidden states",
        "Attention mechanism: weighted alignment between encoder states and decoder position",
        "Decoder: step-by-step token generation conditioned on attention output",
        "Output projection: dense layer mapping decoder output to vocabulary probabilities",
      ],
    },
    {
      heading: "Training",
      body: [
        "The model is trained using teacher forcing — feeding the ground-truth target token as input to each decoder step during training, which improves training stability compared to using the model's own predictions.",
        "Training is ongoing. Hyperparameter tuning, learning rate scheduling, and regularisation choices are being evaluated.",
      ],
      items: [
        "Loss: categorical cross-entropy over the target vocabulary",
        "Optimiser: Adam",
        "Teacher forcing during training",
        "Validation loss monitored per epoch to detect overfitting",
      ],
    },
    {
      heading: "Evaluation",
      body: [
        "Translation quality for NMT systems is commonly measured using BLEU (Bilingual Evaluation Understudy), which compares n-gram overlap between model output and reference translations.",
        "Final evaluation metrics will be published once training and evaluation are complete and the results have been verified.",
      ],
      items: [
        "BLEU score evaluation is planned on the held-out test set.",
        "Qualitative review of sample translations will accompany quantitative results.",
        "Results will only be published after verification — they are not available at this stage.",
      ],
    },
    {
      heading: "Engineering Constraints",
      body: [
        "Sequence-to-sequence models are computationally intensive. Training time, memory usage, and the quality of the vocabulary construction all significantly affect the output quality.",
        "The choice of model depth, hidden size, and attention mechanism involves trade-offs between expressiveness and training cost. The project documents these decisions as part of the engineering narrative.",
      ],
    },
  ],

  technologies: ["Python", "TensorFlow", "Keras", "NLTK", "NumPy"],

  architectureText:
    "SOURCE TOKENS → ENCODER → CONTEXT → ATTENTION → DECODER → TARGET TOKENS",

  limitations: [
    "Final evaluation metrics (BLEU and others) are not yet available — training and evaluation are in progress.",
    "The model has not been deployed or tested in a production translation context.",
    "Vocabulary coverage is limited by the training data and frequency thresholds applied.",
    "Teacher forcing during training can lead to exposure bias at inference time.",
    "The project does not use a transformer-based architecture — modern high-performance NMT systems use transformers, which are not implemented here.",
  ],

  nextSteps: [
    "Complete training and run evaluation on the held-out test set.",
    "Measure and publish BLEU score with appropriate context.",
    "Qualitatively review a sample of translations to identify systematic errors.",
    "Explore beam search decoding as an alternative to greedy decoding.",
    "Document the architecture decisions and their effect on training dynamics.",
    "Consider experimenting with a transformer-based architecture in a follow-up project.",
  ],
};

/* --------------------------------------------------------------------------
   LOOKUP MAP — keyed by project ID for easy route access
   -------------------------------------------------------------------------- */
export const caseStudies: Record<string, CaseStudy> = {
  "visual-attendance": visualAttendanceCaseStudy,
  "credit-scoring": creditScoringCaseStudy,
  "neural-translation": neuralTranslationCaseStudy,
};
