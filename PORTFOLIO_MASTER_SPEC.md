# PORTFOLIO_MASTER_SPEC.md

## Oli Bakala — AI / ML / Data Engineering Portfolio

**Version:** 1.0  
**Status:** Approved direction; implementation pending  
**Purpose:** Master product, design, content, and engineering specification

---

## 1. Product Vision

Build a professional, responsive portfolio that presents Oli Bakala as a Software Engineering graduate developing expertise in Machine Learning, Artificial Intelligence, Data Science, and production-oriented AI applications.

The portfolio must demonstrate technical ability through real projects, engineering decisions, documented experiments, and working software.

It must serve four purposes:

1. **Professional identity:** Clearly communicate Oli's technical direction.
2. **Project evidence:** Demonstrate practical skills through detailed projects and case studies.
3. **Technical communication:** Present explanations, research notes, experiments, and engineering decisions.
4. **Career opportunities:** Make it easy for recruiters, engineering teams, collaborators, and potential clients to evaluate the work and make contact.

### Core principle

**Show the work. Explain the engineering. Prove the claims.**

The portfolio should communicate professional growth without exaggerating experience, project maturity, or technical achievements.

---

## 2. Positioning

### Primary positioning

AI / ML / Data Engineering, supported by a Software Engineering foundation.

### Professional background

- BSc in Software Engineering, Arba Minch University, 2025.
- AI and Data Science training through the Qiyas and Addis Ababa University program.
- Four-month Full-Stack Developer internship at DAN ENERGY.
- Practical machine learning, data analysis, NLP, predictive modeling, and AI application projects.

### Positioning statement

Oli builds data-driven applications and machine learning projects, combining software engineering foundations with growing expertise in AI, ML, and data systems.

### Target opportunities

- Junior Data Scientist
- Junior Machine Learning Engineer
- AI Engineer / AI Application Developer
- Graduate Data Engineer
- Software Engineer working on AI-enabled applications

Do not imply years of professional AI engineering experience unless supported by actual work history.

---

## 3. Design Identity

### Design concept

**AI Engineering Lab × Editorial Minimalism**

The site should feel like a carefully designed technical workspace: structured, calm, modern, and evidence-driven.

### Visual metaphor

DATA → FEATURES → MODEL → API → APPLICATION

This metaphor should connect the hero visualization, engineering approach, project architecture diagrams, and broader visual language.

### Design principles

1. Content and project evidence take priority over decoration.
2. Technical visuals must communicate real concepts.
3. Typography establishes hierarchy.
4. Teal is a signal color, not a background color for everything.
5. Layouts should feel spacious without wasting space.
6. Components should be consistent and reusable.
7. Motion should communicate state, flow, or interaction.
8. Accessibility and mobile usability are mandatory.

### Avoid

- Generic AI landing-page templates.
- Excessive gradients and neon effects.
- Unnecessary 3D visuals and particle backgrounds.
- Decorative technology-logo walls.
- Excessive glassmorphism.
- Dramatic card rotations.
- Fake dashboards or invented metrics.
- Unnecessary animations and effects.
- Résumé content copied directly into cards without context.

---

## 4. Design Tokens

### Dark theme

| Token | Value |
|---|---|
| Background | `#0A0E12` |
| Surface | `#11171D` |
| Surface 2 | `#151C22` |
| Surface 3 | `#1B232A` |
| Border | `#273139` |
| Subtle border | `#1E282F` |
| Primary text | `#F1F3F2` |
| Secondary text | `#B0B8BD` |
| Muted text | `#96A1A9` |
| Accent | `#61DED0` |
| Strong accent | `#42CFC0` |
| Accent soft | `rgba(97, 222, 208, 0.12)` |

### Light theme

| Token | Value |
|---|---|
| Background | `#F4F5F2` |
| Surface | `#FFFFFF` |
| Surface 2 | `#ECEFEB` |
| Surface 3 | `#E3E7E3` |
| Border | `#D6DDD8` |
| Subtle border | `#E2E6E3` |
| Primary text | `#101518` |
| Secondary text | `#465258` |
| Muted text | `#68747A` |
| Accent | `#087F78` |
| Strong accent | `#056B65` |
| Accent soft | `rgba(8, 127, 120, 0.09)` |

Define these values centrally as design tokens. Do not scatter duplicated color values throughout components.

### Typography

Preferred:

- Geist for general text.
- Geist Mono for technical metadata.

Fallbacks:

- Inter / `system-ui` / sans-serif.
- JetBrains Mono / monospace.

### Layout

- Maximum content width: 1280px.
- Desktop horizontal padding: 32px.
- Tablet horizontal padding: 28px.
- Mobile horizontal padding: 20px.
- Desktop section spacing: approximately 120px.
- Mobile section spacing: approximately 80px.
- Desktop grid: 12 columns, 24px gap.
- Tablet grid: 8 columns, 20px gap.
- Mobile grid: one column.

### Breakpoints

Use 640px, 768px, 1024px, 1280px, and 1536px as the initial responsive breakpoints.

### Theme behavior

Support:

- System
- Light
- Dark

Default to the operating system preference. Allow manual selection and persist the choice. Prevent an unnecessary flash of the wrong theme on initial render.

---

## 5. Site Architecture

### Main routes

```text
/
├── /projects
├── /projects/visual-attendance
├── /projects/credit-scoring
├── /projects/neural-translation
├── /projects/fraud-detection
├── /projects/restaurant-forecasting
├── /learning
├── /learning/attention-is-all-you-need
├── /learning/word2vec
├── /learning/cbow-vs-skipgram
├── /learning/time-series-features
└── /about
```

Create routes only when their corresponding content is available. Do not publish empty case studies or placeholder articles as finished content.

### Homepage section order

1. Navigation
2. Hero
3. Capability Signal
4. Selected Projects
5. Engineering Approach
6. Skills
7. Experience
8. About
9. Currently Building
10. Learning Hub
11. Contact
12. Footer

The homepage-specific implementation must follow `HOMEPAGE_SPEC.md`.

### Future functionality

A portfolio assistant named **Ask Oli AI** may be added after the core portfolio is complete.

It is not part of the initial implementation scope.

---

## 6. Navigation

Desktop navigation:

- About
- Skills
- Experience
- Projects
- Learning Hub
- Contact
- GitHub
- LinkedIn
- Résumé
- Theme selector

Use `OLI BAKALA` as the desktop identity and `OB` as the compact mobile identity.

The logo links to `/`.

Use a sticky navigation bar with a subtle backdrop and border after scrolling. Mobile navigation must be accessible by keyboard and touch.

---

## 7. Content Architecture

Separate content from presentation.

Recommended data files:

```text
data/
├── projects.ts
├── skills.ts
├── experience.ts
├── learning.ts
└── navigation.ts
```

The exact directory structure may adapt to the selected framework, but content should remain separate from visual components.

### Projects

Each project should support:

- Unique ID
- Title
- Category
- Year
- Description
- Technologies
- Verified metrics
- Visual or architecture diagram
- GitHub URL
- Demo URL
- Case-study route
- Featured status
- Card variant
- Development status

Optional fields should be omitted when unavailable rather than filled with invented values.

### Skills

Group skills into:

1. AI / ML
2. Data
3. AI Applications
4. Engineering

Include technologies only when Oli has sufficient practical familiarity to explain them accurately.

### Experience

Keep education, training, internships, and personal projects clearly distinguished.

Do not represent personal projects as employment or training as professional employment.

### Learning Hub

Use four categories:

- Insights
- Tutorials
- Experiments
- Research Notes

Prioritize useful explanations, technical experiments, research summaries, and reproducible examples.

---

## 8. Project Portfolio Strategy

### Flagship projects

**1. AI-Powered Visual Attendance System**

Primary engineering project. Emphasize computer vision, application architecture, testing, data handling, and progress toward a production-oriented system.

**2. Probability of Default / Credit Scoring**

Emphasize classification, class imbalance, model evaluation, and the relationship between precision, recall, F1, and ROC-AUC.

**3. Neural Machine Translation**

Emphasize NLP, deep learning, model architecture, training, evaluation, and engineering constraints. Publish final metrics only after verification.

### Secondary projects

- Fraud Detection
- Restaurant Sales Forecasting
- Email Spam Detection
- Heart Disease Ensemble Learning
- House Price Prediction

Use the same reusable project-card system throughout the site.

### Project presentation standard

Every detailed project should explain:

1. Problem and intended users.
2. Dataset and its limitations.
3. Approach and baseline.
4. Feature engineering or preprocessing.
5. Model and architecture.
6. Evaluation methodology.
7. Results and trade-offs.
8. Implementation and deployment status.
9. Limitations and next steps.
10. GitHub and demo links, when available.

---

## 9. Technical Accuracy and Evidence

Never invent:

- Evaluation results.
- Production deployments.
- Users or customers.
- Business impact.
- Employment history.
- Dataset sources.
- Certifications.
- Cloud infrastructure.
- Technologies used in a project.

Clearly distinguish:

- Completed work.
- Work in progress.
- Planned improvements.
- Experiment results.
- Production functionality.

### Existing project metrics

Use these only with their correct project and model context.

**Credit scoring**

- F1: 0.7805
- ROC-AUC: 0.9487
- Recall: 0.6531

**Fraud detection**

- Accuracy: 0.9994
- Precision: 0.9697
- Recall: 0.6531
- F1: 0.7805
- ROC-AUC: 0.9487

**Email spam detection**

- TF-IDF features: 10,000
- Accuracy: 0.9768
- F1: 0.9753

**Heart disease ensemble learning**

- Random Forest accuracy: 0.8750
- Random Forest F1: 0.8878
- Random Forest ROC-AUC: 0.9314
- Bagging ROC-AUC: 0.9132

**House price prediction**

- MAE: 784,877.3
- RMSE: 1,071,543.1
- R²: 0.6684

**Restaurant sales forecasting**

- Random Forest one-day RMSE: 136,506
- Linear Regression one-day RMSE: 322,009

Verify the relevant source files before publishing these metrics. Do not imply that metrics from different projects or experimental configurations are directly comparable.

---

## 10. GitHub and Repository Quality

GitHub is an essential part of the portfolio experience.

Where a repository exists, provide a clear link from the corresponding project.

Repositories should aim to include:

- A clear README.
- Problem statement and intended use.
- Dataset and license information.
- Installation instructions.
- Reproducible run commands.
- Architecture diagram where useful.
- Evaluation metrics.
- Limitations.
- Tests where appropriate.
- Appropriate dependency files.
- A clear separation between code, tests, data, and documentation.

Never commit credentials, private data, sensitive biometric data, or large datasets that should not be public.

---

## 11. Technology Selection

The implementation technology must be chosen after inspecting the existing repository.

Preferred direction, if starting from an empty repository:

- TypeScript
- React
- Next.js
- CSS Modules or a consistent utility-based styling system
- Framework-supported image optimization
- A lightweight animation approach
- Markdown or MDX for technical articles, if appropriate

This is a proposed default, not permission to replace an existing working stack.

Before implementation:

1. Inspect the repository.
2. Identify the framework and package manager.
3. Review existing dependencies and conventions.
4. Preserve useful existing work.
5. Propose changes if the existing stack materially conflicts with the specification.
6. Obtain approval before major architectural changes.

Do not introduce dependencies without a clear need.

---

## 12. Component Standards

Create reusable components for:

- Navigation and mobile menu.
- Theme selector.
- Hero and system visualization.
- Capability signal.
- Project cards and project links.
- Metrics.
- Engineering process steps.
- Skill groups.
- Experience timeline.
- Learning cards.
- Contact links.
- Footer.

Project cards must use variants rather than separate implementations for each project.

Components should have clear responsibilities and consistent naming.

---

## 13. Interaction and Motion

Use subtle, purposeful animation.

- Micro-interactions: approximately 150–220ms.
- Section transitions: approximately 400–700ms.
- Hero system animation: approximately 600–1200ms.

Use small movement, opacity, border, and signal transitions.

Respect `prefers-reduced-motion`.

Do not make content dependent on animation to become visible or usable.

---

## 14. Accessibility

Required:

- Semantic HTML.
- Logical heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Accessible mobile menu.
- Accessible theme controls.
- Appropriate image alternative text.
- Adequate contrast.
- Reduced-motion support.
- Descriptive link labels.
- Touch-friendly interactive targets.

Accessibility must be tested, not merely assumed from the design.

---

## 15. SEO and Performance

Provide:

- Descriptive page titles.
- Meta descriptions.
- Open Graph metadata.
- Favicon.
- Appropriate canonical URLs.
- Optimized images.
- Responsive image sizing.
- Lazy loading below the fold where appropriate.
- No unnecessary client-side JavaScript.
- Minimal layout shift.
- Useful 404 handling.

Avoid adding third-party scripts without a demonstrated benefit.

---

## 16. Security and Privacy

- Never expose API keys or secrets in frontend code.
- Use environment variables for configuration that requires them.
- Do not publish private personal information.
- Do not expose sensitive employee or biometric data from the attendance project.
- Do not upload credentials, private datasets, or model artifacts containing sensitive information.
- Avoid collecting visitor information unless required and disclosed.

If Ask Oli AI is introduced later, use a defined knowledge source and protect server-side API credentials.

---

## 17. Git and Ownership

The repository owner is responsible for all final commits and pushes.

The coding AI may assist with implementation and local verification, but must not push to a remote repository on the owner's behalf.

Use meaningful commit messages, for example:

```text
chore: establish portfolio foundation
feat: implement responsive navigation
feat: build homepage hero
feat: add data-driven project cards
feat: implement theme switching
fix: correct mobile project layout
docs: update implementation status
```

Do not commit unfinished or unverified work simply to mark a phase complete.

---

## 18. Definition of Success

The portfolio succeeds when a visitor can quickly understand:

- Who Oli is.
- Which roles align with his direction.
- What he has actually built.
- How his projects work.
- What evidence supports the results.
- How to inspect his code.
- What he is learning and building now.
- How to contact him.

The site should be polished, fast, responsive, accessible, honest, and easy to maintain.

---

## 19. Source-of-Truth Hierarchy

Use the following order when resolving conflicts:

1. Explicit user-approved decisions.
2. `PORTFOLIO_MASTER_SPEC.md`.
3. `HOMEPAGE_SPEC.md` for homepage-specific behavior.
4. `IMPLEMENTATION_PLAN.md` for build order and verification.
5. Existing repository conventions, where compatible.
6. General coding-AI preferences.

Do not override an approved design decision merely because another implementation is fashionable or easier.

If a real technical conflict arises, document it and propose the smallest reasonable alternative before making a major change.

---

## 20. Final Principle

Build a portfolio that demonstrates **trajectory through evidence**:

Software Engineering → Application Development → Data → Machine Learning → AI Applications → Production-Oriented Systems.

The site should be ambitious in design, honest in claims, rigorous in project presentation, and practical to maintain.