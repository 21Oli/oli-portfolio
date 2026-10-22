# HOMEPAGE_SPEC.md

## Portfolio Homepage Specification

**Project:** Oli Bakala — AI / ML / Data Engineering Portfolio
**Document:** Homepage Wireframe, Content, UI, UX, and Interaction Specification
**Status:** Design specification — implementation-ready
**Version:** 1.0
**Primary page:** `/`

---

# 1. Purpose

The homepage is the primary entry point to Oli Bakala's portfolio.

Its job is to communicate, within the first few seconds:

1. Who Oli is.
2. What technical direction he is pursuing.
3. What kinds of systems he builds.
4. Which projects demonstrate those capabilities.
5. How his software engineering background connects to AI/ML and data engineering.
6. Where a visitor can inspect the code, case studies, learning work, résumé, and contact information.

The homepage must feel like an **engineering portfolio**, not a conventional résumé page.

The central visual idea is:

> **AI Engineering Lab × Editorial Minimalism**

The site should communicate:

> **Data → Intelligence → Software → Deployment**

---

# 2. Research Basis

The uploaded portfolio research identifies several recurring patterns in strong technical portfolios:

* Avoid generic tutorial/project presentation.
* Show production-oriented thinking, architecture, deployment, metrics, and engineering decisions.
* Make projects function as direct windows into GitHub repositories.
* Use architecture diagrams instead of relying only on screenshots.
* Keep visual design clean, high-contrast, readable, and restrained.
* Present technical writing as concise engineering documentation.
* Show end-to-end thinking from data ingestion through evaluation and deployment.
* Keep project presentation consistent across the portfolio.
* Make GitHub repositories part of the overall portfolio experience.
  The research also recommends a homepage structure containing a strong introduction, skills snapshot, featured projects, an About preview, and contact information, with projects leading visitors toward detailed case studies.

### Portfolio-specific interpretation

This portfolio will not copy the research examples literally.

Instead, the research principles are adapted to Oli's actual profile:

* Software Engineering graduate transitioning toward AI/ML.
* Strong emphasis on practical machine learning.
* Growing focus on AI applications and data systems.
* Project evidence is more important than claiming professional AI experience.
* The portfolio should demonstrate engineering maturity without exaggerating employment experience.
* The homepage should prioritize real project evidence over decorative effects.

---

# 3. Homepage Information Architecture

The homepage uses this section order:

```text
NAVIGATION
    ↓
HERO
    ↓
CAPABILITY SIGNAL
    ↓
SELECTED PROJECTS
    ↓
ENGINEERING APPROACH
    ↓
SKILLS
    ↓
EXPERIENCE
    ↓
ABOUT
    ↓
CURRENTLY BUILDING
    ↓
LEARNING HUB
    ↓
CONTACT
    ↓
FOOTER
```

### Why projects appear early

The portfolio belongs to an early-career engineer.

Therefore, the homepage should establish credibility through **evidence** rather than making the visitor read a long biography first.

The first major proof section after the hero is Selected Projects.

---

# 4. Global Visual Direction

## 4.1 Design language

The visual language is:

* technical
* editorial
* minimal
* structured
* high contrast
* calm
* engineering-oriented
* premium without being flashy

Avoid:

* generic AI landing-page aesthetics
* excessive gradients
* giant glowing blobs
* 3D particle backgrounds
* excessive glassmorphism
* rotating cards
* excessive shadows
* neon cyberpunk styling
* decorative animations with no informational purpose
* oversized icon collections
* template-like "AI developer" visuals

---

# 5. Color System

## 5.1 Dark mode — primary theme

```text
Background       #0A0E12
Surface          #11171D
Surface 2        #151C22
Surface 3        #1B232A
Border           #273139
Subtle Border    #1E282F

Primary Text     #F1F3F2
Secondary Text   #B0B8BD
Muted Text       #96A1A9

Accent           #61DED0
Strong Accent    #42CFC0
Accent Soft      rgba(97, 222, 208, 0.12)
```

Dark mode is the primary visual identity.

The accent must be used sparingly for:

* active navigation
* links
* key metrics
* system signals
* buttons
* status indicators
* important borders
* hover states

---

## 5.2 Light mode

```text
Background       #F4F5F2
Surface          #FFFFFF
Surface 2        #ECEFEB
Surface 3        #E3E7E3
Border           #D6DDD8
Subtle Border    #E2E6E3

Primary Text     #101518
Secondary Text   #465258
Muted Text       #68747A

Accent           #087F78
Strong Accent    #056B65
Accent Soft      rgba(8, 127, 120, 0.09)
```

Light mode should feel like an editorial technical document rather than a completely different website.

---

# 6. Typography

## Font families

Primary:

```text
Geist
```

Fallback:

```text
Inter
system-ui
sans-serif
```

Technical/metadata:

```text
Geist Mono
JetBrains Mono
monospace
```

Use monospace selectively for:

* technical labels
* project metadata
* status indicators
* architecture labels
* technology names
* small system annotations
* metrics where appropriate

Do not make the entire website monospace.

The research supports combining clean sans-serif typography with monospace technical elements to establish a developer-oriented visual language.

---

# 7. Typography Scale

## Desktop

```text
Hero headline       72px / 0.98 / 600
Section heading     48px / 1.05 / 600
Project title       40px / 1.05 / 600
Card title          24px / 1.2 / 600
Large body          19px / 1.55
Body                16px / 1.6
Metadata            12px / 1.3 / uppercase / 0.08em
```

## Mobile

```text
Hero headline       46px
Section heading     36px
Project title       30px
Card title          22px
Body                16px
Metadata            11px
```

---

# 8. Layout System

## Maximum content width

```text
1280px
```

## Horizontal padding

```text
Desktop: 32px
Tablet: 28px
Mobile: 20px
```

## Section spacing

```text
Desktop: approximately 120px
Mobile: approximately 80px
```

## Grid

Desktop:

```text
12 columns
24px gap
```

Tablet:

```text
8 columns
20px gap
```

Mobile:

```text
1 column
```

## The research specifically recommends structured desktop grids and responsive single-column mobile layouts.

# 9. Responsive Breakpoints

Use:

```text
640px
768px
1024px
1280px
1536px
```

Do not design a separate mobile website.

The same component system must adapt between breakpoints.

---

# 10. Navigation

## Desktop

Height:

```text
76px
```

Structure:

```text
[ OLI BAKALA ]

About
Skills
Experience
Projects
Learning Hub
Contact

GitHub
LinkedIn
Resume
Theme
```

### Navigation behavior

At the top:

```text
transparent
```

After approximately 24px scroll:

```text
sticky
backdrop blur
surface background
subtle bottom border
```

### Active section

Active navigation item:

* accent text
* small signal indicator
* subtle transition

Example:

```text
Projects
   •
```

The active indicator should be small and understated.

---

# 11. Mobile Navigation

Height:

```text
68px
```

Header:

```text
[ OB ]                         [ MENU ]
```

Opening the menu creates a full-screen or near-full-screen navigation overlay.

Items:

```text
About
Skills
Experience
Projects
Learning Hub
Contact

GitHub
LinkedIn
Résumé
Theme
```

The mobile navigation must be keyboard accessible.

---

# 12. Logo / Identity

Desktop:

```text
OLI BAKALA
```

Optional small technical descriptor:

```text
AI / ML / DATA
```

Mobile:

```text
OB
```

Clicking the logo returns to:

```text
/
```

---

# 13. HERO

## Purpose

The hero must immediately communicate:

* professional identity
* technical direction
* engineering background
* current project focus
* portfolio CTA

The research recommends a concise value proposition and clear primary/secondary calls to action.

---

# 14. Hero Layout

## Desktop

Minimum visual height:

```text
~92vh
```

Preferred content height:

```text
680–820px
```

Grid:

```text
7 columns — text
5 columns — visual system
```

Conceptual layout:

```text
┌──────────────────────────────────────────────────────────────┐
│ NAV                                                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  AI / ML / DATA ENGINEERING             ┌─────────────────┐ │
│                                         │                 │ │
│  I build intelligent systems            │   PORTRAIT      │ │
│  from data to deployment.               │       +         │ │
│                                         │ SYSTEM FLOW     │ │
│  Software Engineering graduate          │                 │ │
│  focused on machine learning,           │ DATA → MODEL    │ │
│  AI applications, data-driven           │ → API → APP     │ │
│  systems, and production-oriented       │                 │ │
│  software engineering.                  └─────────────────┘ │
│                                                              │
│  [ VIEW SELECTED WORK → ]   [ DOWNLOAD RÉSUMÉ ↓ ]           │
│                                                              │
│  ● CURRENTLY BUILDING AI-POWERED VISUAL ATTENDANCE SYSTEM   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

# 15. Hero Exact Content

## Eyebrow

```text
AI / ML / DATA ENGINEERING
```

Use uppercase monospace.

---

## Main headline

```text
I build intelligent systems from data to deployment.
```

Do not replace this with a generic:

```text
Welcome to my portfolio
```

or:

```text
Passionate AI Engineer
```

The headline should communicate what the portfolio demonstrates.

---

## Supporting text

```text
Software Engineering graduate focused on machine learning, AI applications, data-driven systems, and production-oriented software engineering.
```

---

## Primary CTA

```text
VIEW SELECTED WORK →
```

Target:

```text
#projects
```

---

## Secondary CTA

```text
DOWNLOAD RÉSUMÉ ↓
```

Target:

```text
Resume PDF
```

Use the actual résumé file once connected.

Do not create a fake download link.

---

## Current status

```text
● CURRENTLY BUILDING AI-POWERED VISUAL ATTENDANCE SYSTEM
```

This is a status indicator, not an employment claim.

---

# 16. Hero Visual System

The hero must contain both:

1. Professional portrait.
2. Technical system visualization.

The portrait and system visualization should feel like one composition rather than two unrelated cards.

---

## Portrait treatment

Format:

```text
4:5
```

Approximate desktop width:

```text
360–440px
```

Style:

* editorial crop
* monochrome or near-monochrome
* subtle contrast
* no heavy circular frame
* no cartoon treatment
* no large decorative border

The portrait should feel professional and understated.

---

# 17. Technical System Visualization

The visual metaphor is:

```text
DATA → FEATURES → MODEL → API → APPLICATION
```

Example:

```text
        DATA
          │
          ▼
      FEATURES
          │
          ▼
        MODEL
          │
          ▼
         API
          │
          ▼
    APPLICATION
```

Use:

* thin 1px lines
* small circular nodes
* monospace labels
* teal signal
* subtle animated signal path

Do not use:

* 3D globe
* particle cloud
* neural-network background covering the entire hero
* excessive floating objects

---

# 18. Hero System Animation

Initial entrance:

```text
600ms activation
```

Signal animation:

```text
every 4–6 seconds
```

Animation should communicate movement through a system.

Example:

```text
DATA
  ●───────●
          ↓
FEATURES
          ●
          ↓
MODEL
          ●
          ↓
API
          ●
          ↓
APPLICATION
```

The signal should move subtly from one node to another.

Animation must stop or simplify under:

```css
prefers-reduced-motion
```

---

# 19. Hero Entrance Sequence

Recommended stagger:

```text
0ms       eyebrow
100ms     headline
220ms     supporting text
360ms     primary CTA
420ms     secondary CTA
520ms     status
600ms     portrait/system visualization
720ms     signal activation
```

The entrance should feel like a system initializing, not a presentation animation.

---

# 20. CAPABILITY SIGNAL

Immediately after the hero.

Height:

```text
64–72px
```

Border:

```text
top + bottom
```

Example:

```text
PYTHON
MACHINE LEARNING
NLP
COMPUTER VISION
DEEP LEARNING
SQL
FASTAPI
POSTGRESQL
GENERATIVE AI
```

Visual style:

* compact
* monochrome text
* accent only on hover/active signal
* no giant skill logos

Animation:

```text
25–40 second horizontal movement
```

Pause on hover.

On mobile, allow horizontal scrolling rather than forcing all skills into one line.

---

# 21. SELECTED PROJECTS

Anchor:

```text
#projects
```

Section purpose:

> Prove technical ability through real projects.

This section is one of the most important parts of the homepage.

## The research strongly emphasizes project evidence, architecture diagrams, metrics, engineering details, and direct repository access rather than generic screenshots.

# 22. Section Header

Eyebrow:

```text
SELECTED WORK
```

Heading:

```text
Systems I've built.
```

Supporting text:

```text
Selected machine learning, AI, and data projects showing how I move from problem definition and data to models, applications, and evaluation.
```

Right-side link:

```text
VIEW ALL PROJECTS →
```

Target:

```text
/projects
```

---

# 23. Featured Project Strategy

Use one reusable project-card component.

Variants:

```text
featured
standard
compact
```

Do not create a completely different component for every project.

Adding a new project should require adding project data rather than redesigning the page.

---

# 24. Flagship Projects

Initial flagship projects:

### 01 — AI-Powered Visual Attendance System

Category:

```text
COMPUTER VISION / AI APPLICATION
```

Status:

```text
IN DEVELOPMENT
```

Role in portfolio:

```text
Primary flagship engineering project
```

Visual emphasis:

```text
featured
```

---

### 02 — Probability of Default / Credit Scoring

Category:

```text
MACHINE LEARNING / CREDIT RISK
```

Role:

```text
featured / standard
```

Known metrics may include:

```text
F1: 0.7805
ROC-AUC: 0.9487
Recall: 0.6531
```

Only display metrics that have been verified from the project.

---

### 03 — Neural Machine Translation

Category:

```text
NLP / DEEP LEARNING
```

Role:

```text
standard
```

Do not invent final evaluation metrics.

If final metrics are not yet available, display:

```text
TRAINING / EVALUATION IN PROGRESS
```

or omit the metric area.

---

# 25. Secondary Projects

The homepage may expose additional projects after the flagship projects:

```text
Fraud Detection
Restaurant Sales Forecasting
Email Spam Detection
Heart Disease Ensemble Learning
House Price Prediction
```

These should use the `standard` or `compact` card variant.

---

# 26. Project Card Structure

Every project card should follow the same structure:

```text
CATEGORY
YEAR / STATUS

PROJECT TITLE

1–3 line description

[architecture / visual area]

TECHNOLOGY TAGS

METRICS

Case Study →
GitHub ↗
Live Demo ↗
```

Only display links that actually exist.

Never show:

```text
Live Demo
```

if there is no live demo.

Never create fake disabled buttons.

---

# 27. Featured Project Card

The Visual Attendance project receives the strongest visual treatment.

Example:

```text
┌────────────────────────────────────────────────────────────┐
│ COMPUTER VISION / AI APPLICATION                 2026      │
│                                                            │
│ AI-Powered Visual Attendance System                        │
│                                                            │
│ Production-oriented computer vision system for live        │
│ employee recognition and attendance tracking.              │
│                                                            │
│ ┌────────────────────────────────────────────────────────┐ │
│ │                                                        │ │
│ │              SYSTEM ARCHITECTURE                       │ │
│ │                                                        │ │
│ │ CAMERA → FACE DETECTION → RECOGNITION → ATTENDANCE    │ │
│ │                         ↓                              │ │
│ │                    DATA / REPORTS                      │ │
│ │                                                        │ │
│ └────────────────────────────────────────────────────────┘ │
│                                                            │
│ Python   OpenCV   Face Recognition   Pandas                 │
│                                                            │
│ IN DEVELOPMENT                                             │
│                                                            │
│ Case Study →       GitHub ↗                                │
└────────────────────────────────────────────────────────────┘
```

---

# 28. Project Card Interaction

Hover:

```text
translateY(-4px)
```

Border:

```text
subtle accent transition
```

Architecture visual:

```text
translateX(4px)
```

Arrow:

```text
translateX(4px)
```

Signal line:

```text
opacity increase
```

Duration:

```text
220ms
```

Do not use:

* card rotation
* large scaling
* 3D transforms
* excessive glow

---

# 29. Project Data Model

Projects must be data-driven.

Recommended structure:

```ts
type Project = {
  id: string
  title: string
  category: string
  year: string
  description: string
  technologies: string[]
  metrics?: {
    label: string
    value: string
  }[]
  image?: string
  architecture?: string
  github?: string
  demo?: string
  caseStudy?: string
  featured: boolean
  variant: "featured" | "standard" | "compact"
  status?: string
}
```

Recommended location:

```text
data/projects.ts
```

The UI must consume project data rather than hard-coded project cards.

---

# 30. ENGINEERING APPROACH

Purpose:

Show visitors how Oli approaches technical problems.

Heading:

```text
How I build.
```

Supporting text:

```text
From problem definition to working software, I focus on understanding the data, choosing an appropriate model, evaluating the result, and turning experiments into usable systems.
```

---

# 31. Engineering Process

Desktop:

```text
PROBLEM
   →
DATA
   →
FEATURES
   →
MODEL
   →
EVALUATION
   →
APPLICATION
   →
ITERATION
```

Mobile:

```text
PROBLEM
   ↓
DATA
   ↓
FEATURES
   ↓
MODEL
   ↓
EVALUATION
   ↓
APPLICATION
   ↓
ITERATION
```

Each step gets:

* number
* title
* one-line explanation

Example:

```text
01
PROBLEM
Define the actual task and success criteria.

02
DATA
Understand sources, quality, structure, and limitations.

03
FEATURES
Transform raw data into useful model inputs.

04
MODEL
Select and train an appropriate approach.

05
EVALUATION
Measure performance using meaningful metrics.

06
APPLICATION
Expose the result through usable software.

07
ITERATION
Test, improve, document, and refine.
```

---

# 32. SKILLS

Anchor:

```text
#skills
```

Heading:

```text
Technical toolkit.
```

Supporting text:

```text
Tools and technologies I use across machine learning, data, AI applications, and software engineering.
```

---

# 33. Skills Layout

Four categories:

```text
AI / ML
DATA
AI APPLICATIONS
ENGINEERING
```

## AI / ML

```text
Python
Scikit-learn
XGBoost
LightGBM
Machine Learning
Deep Learning
Computer Vision
NLP
Transformers
Feature Engineering
Model Evaluation
```

## Data

```text
Pandas
NumPy
SQL
PostgreSQL
Data Analysis
Data Cleaning
Time-Series
Statistical Analysis
Feature Selection
```

## AI Applications

```text
Generative AI
LLMs
RAG
AI Agents
FastAPI
Model APIs
Computer Vision Applications
NLP Applications
```

## Engineering

```text
JavaScript
Git
GitHub
Testing
REST APIs
Software Architecture
MLOps
Cloud Computing
```

Only include technologies that Oli can comfortably explain and demonstrate.

The research explicitly recommends keeping skills honest and limiting the homepage to skills that can actually be discussed.

---

# 34. EXPERIENCE

Anchor:

```text
#experience
```

Heading:

```text
Experience & background.
```

Use a vertical timeline.

Do not present academic projects as professional employment.

---

# 35. Experience Timeline

Initial entries:

### AI & Data Science Training

```text
Qiyas × Addis Ababa University × Ministry of Labour and Skills
AI & Data Science Training
2026
```

Description should focus on the training and technical development actually completed.

---

### Software Engineering

```text
Arba Minch University
BSc Software Engineering
2025
```

---

### Software Engineering Internship

```text
DAN ENERGY
Full-Stack Developer Intern
4 months
```

Focus on actual software engineering responsibilities.

---

# 36. ABOUT

Anchor:

```text
#about
```

Heading:

```text
From software engineering to intelligent systems.
```

---

# 37. About Copy

Use a concise preview rather than a long biography.

Suggested copy:

```text
My foundation is in software engineering, where I developed an interest in building applications that solve practical problems.

I am now focusing that foundation on machine learning, artificial intelligence, data-driven systems, and production-oriented AI applications.

My goal is to understand the full path from data and experimentation to reliable software that people can actually use.
```

CTA:

```text
READ MORE ABOUT ME →
```

Target:

```text
/about
```

Do not claim professional AI employment unless supported by actual experience.

---

# 38. CURRENTLY BUILDING

Full-width feature panel.

Heading:

```text
Currently building.
```

Primary project:

```text
AI-Powered Visual Attendance System
```

Description:

```text
A production-oriented computer vision system for live employee attendance using face detection, recognition, structured employee data, and reporting workflows.
```

Architecture preview:

```text
CAMERA
   ↓
FACE DETECTION
   ↓
FACE RECOGNITION
   ↓
IDENTITY MATCH
   ↓
ATTENDANCE EVENT
   ↓
DATA / REPORT
```

CTA:

```text
EXPLORE PROJECT →
```

---

# 39. CURRENT LEARNING

Secondary panel:

```text
CURRENTLY LEARNING
```

Topics:

```text
Transformers
LLMs
RAG
AI Agents
MLOps
ML System Design
Research Papers
```

The purpose is to communicate active technical development without turning the homepage into a study diary.

---

# 40. LEARNING HUB

Anchor:

```text
#learning
```

Section title:

```text
Learning Hub.
```

Description:

```text
Insights, tutorials, experiments, and research notes from my journey through AI, Machine Learning, and Data.
```

Categories:

```text
INSIGHTS
TUTORIALS
EXPERIMENTS
RESEARCH NOTES
```

Example articles:

```text
Understanding Attention
CBOW vs Skip-gram
Building Time-Series Features
Feature Selection for Credit Risk
```

The Learning Hub should contain useful technical writing, not a chronological homework diary.

The research recommends concise technical writing that documents engineering decisions, bottlenecks, metrics, trade-offs, and lessons learned.
CTA:

```text
EXPLORE LEARNING HUB →
```

Target:

```text
/learning
```

---

# 41. CONTACT

Anchor:

```text
#contact
```

Heading:

```text
Let's build something useful.
```

Supporting text:

```text
Interested in AI, machine learning, data, or software engineering? Feel free to connect.
```

Primary actions:

```text
EMAIL →
LINKEDIN ↗
GITHUB ↗
```

Optional future CTA:

```text
OPEN TO AI / ML / DATA OPPORTUNITIES
```

Only display this if it accurately reflects the current job-search situation.

---

# 42. FOOTER

Minimal.

Structure:

```text
────────────────────────────────────────────────────────────

OLI BAKALA
AI / ML / DATA ENGINEERING

About
Skills
Experience
Projects
Learning Hub
Contact

GitHub
LinkedIn
Email
Résumé

© 2026 Oli Bakala
```

Optional technical footer:

```text
Built with Next.js
```

Only display framework information if the final implementation actually uses it.

---

# 43. Theme System

The theme selector supports:

```text
System
Light
Dark
```

Default:

```text
System preference
```

The user can manually override the system preference.

Theme choice should persist across visits.

Avoid flashing the wrong theme during page load.

---

# 44. Motion System

## Micro interactions

```text
150–220ms
```

Use for:

* hover
* links
* buttons
* borders
* arrows

## Section animations

```text
400–700ms
```

Use for:

* section reveal
* cards
* process diagrams

## Signature animations

```text
600–1200ms
```

Use only for:

* hero system visualization
* major visual transitions

---

# 45. Scroll Reveal

Default:

```text
opacity: 0 → 1
translateY: 20px → 0
```

Duration:

```text
550ms
```

Trigger:

```text
15–20% visible
```

Stagger:

```text
60–90ms
```

Do not animate every tiny element independently.

---

# 46. Reduced Motion

Respect:

```css
prefers-reduced-motion: reduce
```

When enabled:

* remove signal-loop animation
* remove large entrance movement
* reduce transition durations
* keep content immediately visible
* preserve functionality

Accessibility is more important than decorative animation.

---

# 47. Accessibility

Required:

* semantic HTML
* correct heading hierarchy
* keyboard navigation
* visible focus states
* accessible navigation
* sufficient color contrast
* descriptive image alt text
* accessible buttons
* accessible theme selector
* accessible mobile menu
* `aria-label` where necessary
* reduced-motion support

Do not rely on color alone to communicate status.

---

# 48. Image Requirements

Portrait:

```text
4:5
```

Project visuals:

```text
16:9 preferred
```

Architecture diagrams:

```text
SVG preferred
```

Images must be:

* optimized
* appropriately sized
* lazy loaded when below the fold
* supplied with meaningful alt text where informative

Avoid using screenshots simply as decoration.

The research recommends architecture diagrams, model outputs, dashboards, or meaningful application visuals as project evidence.

---

# 49. SEO / Metadata

Homepage title:

```text
Oli Bakala — AI / ML / Data Engineering
```

Description:

```text
Oli Bakala is a Software Engineering graduate focused on machine learning, artificial intelligence, data-driven systems, and production-oriented AI applications.
```

Open Graph:

```text
title
description
portrait or portfolio preview image
site URL
```

Add appropriate:

```text
favicon
OG image
canonical URL
robots metadata
```

---

# 50. Homepage Route

```text
/
```

Navigation anchors:

```text
#projects
#skills
#experience
#about
#learning
#contact
```

The logo always returns to `/`.

---

# 51. Homepage Component Structure

Recommended component hierarchy:

```text
app/
  page.tsx

components/
  navigation/
    Navbar
    MobileMenu
    ThemeSelector

  hero/
    Hero
    HeroSystemVisualization
    HeroPortrait

  capabilities/
    CapabilitySignal

  projects/
    ProjectSection
    ProjectCard
    ProjectMetrics
    ProjectLinks

  engineering/
    EngineeringApproach
    EngineeringStep

  skills/
    SkillsSection
    SkillGroup
    SkillItem

  experience/
    ExperienceTimeline
    ExperienceItem

  about/
    AboutPreview

  current/
    CurrentlyBuilding
    CurrentLearning

  learning/
    LearningHubPreview
    LearningCard

  contact/
    ContactSection

  footer/
    Footer
```

Component names may change to match the actual framework conventions, but responsibilities should remain separated.

---

# 52. Data Separation

Do not put all portfolio content directly into JSX/TSX components.

Recommended:

```text
data/
  projects.ts
  skills.ts
  experience.ts
  learning.ts
  navigation.ts
```

This allows content updates without redesigning components.

---

# 53. Project Content Integrity

Project information must be based on actual project evidence.

Do not invent:

* metrics
* deployment status
* users
* companies
* production usage
* business impact
* datasets
* model performance
* cloud deployments

If a metric has not been verified, omit it.

If a project is unfinished, label it:

```text
IN DEVELOPMENT
```

or:

```text
TRAINING / EVALUATION IN PROGRESS
```

This is particularly important for the Neural Machine Translation project.

---

# 54. Verified Project Metrics Available for Use

Where applicable, verified project metrics include:

### Credit Scoring

```text
F1: 0.7805
ROC-AUC: 0.9487
Recall: 0.6531
```

### Fraud Detection

```text
Accuracy: 0.9994
Precision: 0.9697
Recall: 0.6531
F1: 0.7805
ROC-AUC: 0.9487
```

### Email Spam Detection

```text
TF-IDF features: 10,000
Accuracy: 0.9768
F1: 0.9753
```

### Heart Disease Ensemble Learning

```text
Random Forest Accuracy: 0.8750
Random Forest F1: 0.8878
Random Forest ROC-AUC: 0.9314
Bagging ROC-AUC: 0.9132
```

### House Price Prediction

```text
MAE: 784,877.3
RMSE: 1,071,543.1
R²: 0.6684
```

### Restaurant Sales Forecasting

```text
Random Forest 1-day RMSE: 136,506
Linear Regression 1-day RMSE: 322,009
```

Do not combine metrics from unrelated datasets or models.

---

# 55. GitHub Integration

Every project should have a clear path to its repository when a repository exists.

Example:

```text
GitHub ↗
```

The research treats GitHub as an extension of the portfolio and recommends repositories with clear README structure, architecture diagrams, commands, metrics, limitations, and reproducibility information.

The homepage should therefore never hide the code behind unnecessary interaction.

---

# 56. Live Demo Integration

Show:

```text
Live Demo ↗
```

only when an actual deployed demo exists.

Potential technologies may include:

```text
Streamlit
Hugging Face Spaces
Vercel
Render
FastAPI deployment
```

But the homepage should only list the deployment that actually exists for each project.

---

# 57. Case Study Integration

Featured projects should link to dedicated case studies.

Example routes:

```text
/projects/visual-attendance
/projects/credit-scoring
/projects/neural-translation
/projects/fraud-detection
/projects/restaurant-forecasting
```

The research recommends case studies covering:

```text
Problem
Data
Approach
Architecture
Results
Engineering details
Lessons / next steps
Links
```

The homepage should provide only the concise version.

---

# 58. Homepage Project Card → Case Study Flow

Example:

```text
Homepage
   ↓
Project Card
   ↓
Case Study
   ↓
Problem
   ↓
Data
   ↓
Approach
   ↓
Architecture
   ↓
Results
   ↓
Engineering Details
   ↓
GitHub / Demo
```

This keeps the homepage concise while allowing technical depth elsewhere.

---

# 59. Performance Requirements

The homepage should be lightweight.

Required:

* optimized images
* lazy loading below-fold images
* avoid unnecessary JavaScript
* avoid large animation libraries when CSS is sufficient
* avoid oversized hero assets
* minimize layout shift
* no blocking third-party scripts unless necessary
* use framework image optimization where available

Target:

```text
Fast initial render
Low layout shift
Minimal client-side JavaScript
```

---

# 60. Responsive Wireframe

## Desktop

```text
┌─────────────────────────────────────────────────────────────┐
│ NAV                                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ HERO TEXT                    PORTRAIT + SYSTEM VISUAL       │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ CAPABILITY SIGNAL                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ SELECTED PROJECTS                                            │
│                                                             │
│ ┌───────────────────────────┐ ┌───────────────────────────┐ │
│ │ FEATURED                  │ │ PROJECT                   │ │
│ │ VISUAL ATTENDANCE        │ │ CREDIT SCORING             │ │
│ │                           │ │                            │ │
│ └───────────────────────────┘ └───────────────────────────┘ │
│                                                             │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ NEURAL MACHINE TRANSLATION                              │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ ENGINEERING APPROACH                                         │
├─────────────────────────────────────────────────────────────┤
│ SKILLS                                                       │
├─────────────────────────────────────────────────────────────┤
│ EXPERIENCE                                                   │
├─────────────────────────────────────────────────────────────┤
│ ABOUT                                                        │
├─────────────────────────────────────────────────────────────┤
│ CURRENTLY BUILDING                                           │
├─────────────────────────────────────────────────────────────┤
│ LEARNING HUB                                                 │
├─────────────────────────────────────────────────────────────┤
│ CONTACT                                                       │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└─────────────────────────────────────────────────────────────┘
```

---

# 61. Tablet Wireframe

```text
NAV

HERO
  TEXT
  PORTRAIT
  SYSTEM VISUALIZATION

CAPABILITY SIGNAL

SELECTED PROJECTS
  FEATURED
  STANDARD
  STANDARD

ENGINEERING APPROACH

SKILLS
  2 × 2

EXPERIENCE

ABOUT

CURRENTLY BUILDING

LEARNING HUB

CONTACT

FOOTER
```

---

# 62. Mobile Wireframe

```text
┌─────────────────────────┐
│ OB                 MENU │
├─────────────────────────┤
│                         │
│ AI / ML / DATA          │
│                         │
│ I build intelligent     │
│ systems from data to    │
│ deployment.             │
│                         │
│ supporting text         │
│                         │
│ [ VIEW WORK ]            │
│ [ DOWNLOAD RÉSUMÉ ]     │
│                         │
│ PORTRAIT                │
│ SYSTEM VISUALIZATION    │
│                         │
│ CURRENTLY BUILDING...   │
│                         │
├─────────────────────────┤
│ CAPABILITY SIGNAL       │
├─────────────────────────┤
│ SELECTED PROJECTS       │
│                         │
│ FEATURED PROJECT        │
│                         │
│ PROJECT                 │
│                         │
│ PROJECT                 │
├─────────────────────────┤
│ ENGINEERING APPROACH    │
├─────────────────────────┤
│ SKILLS                  │
├─────────────────────────┤
│ EXPERIENCE              │
├─────────────────────────┤
│ ABOUT                   │
├─────────────────────────┤
│ CURRENTLY BUILDING      │
├─────────────────────────┤
│ LEARNING HUB            │
├─────────────────────────┤
│ CONTACT                 │
├─────────────────────────┤
│ FOOTER                  │
└─────────────────────────┘
```

---

# 63. Mobile Behavior

On mobile:

* hero becomes one column
* portrait moves above or beside the system visualization depending on available width
* project cards become one column
* engineering process becomes vertical
* skills become stacked groups
* experience timeline becomes vertical
* capability signal becomes horizontally scrollable
* navigation becomes overlay
* decorative motion is reduced
* buttons remain large enough for touch interaction

---

# 64. Content Density Rule

The homepage should be informative but not overloaded.

Every section must answer one question.

```text
Hero
Who are you and what do you build?

Projects
What have you actually built?

Engineering Approach
How do you work?

Skills
What tools do you use?

Experience
What is your background?

About
How did you get here?

Currently Building
What are you working on now?

Learning Hub
How do you think and communicate technically?

Contact
How can someone reach you?
```

---

# 65. What the Homepage Must NOT Become

Do not turn the homepage into:

```text
A résumé copied into HTML
```

Do not turn it into:

```text
A generic AI landing page
```

Do not turn it into:

```text
A collection of technology logos
```

Do not turn it into:

```text
A visual animation showcase
```

Do not turn it into:

```text
A chatbot interface
```

Do not turn it into:

```text
A long personal biography
```

The portfolio is primarily an **engineering evidence platform**.

---

# 66. Future Ask Oli AI

A portfolio chatbot may be added later.

Name:

```text
Ask Oli AI
```

It should not be implemented during the initial homepage build.

When eventually implemented, its architecture should be:

```text
User Question
      ↓
Query Processing
      ↓
Portfolio Knowledge Retrieval
      ↓
Projects / CV / Experience / Learning Hub
      ↓
Grounded Response
      ↓
Relevant Portfolio Links
```

It must not invent:

* qualifications
* projects
* employment
* metrics
* technologies
* achievements

Implementation priority is after the core portfolio is complete.

---

# 67. Implementation Priority

Build in this order:

```text
01. Design tokens
02. Global layout
03. Navigation
04. Hero
05. Hero system visualization
06. Capability signal
07. Project data model
08. Project cards
09. Selected Projects section
10. Case-study routing/template
11. Engineering Approach
12. Skills
13. Experience
14. About
15. Currently Building
16. Learning Hub
17. Contact
18. Footer
19. Theme switching
20. Responsive behavior
21. Motion
22. Accessibility
23. Performance optimization
24. SEO / Open Graph
25. Final QA
26. Ask Oli AI — later phase
```

---

# 68. Definition of Done

The homepage is not considered complete until:

### Visual

* [ ] Desktop layout is polished.
* [ ] Tablet layout is polished.
* [ ] Mobile layout is polished.
* [ ] Dark mode works.
* [ ] Light mode works.
* [ ] System theme works.
* [ ] Typography is consistent.
* [ ] Spacing is consistent.
* [ ] Project cards share a reusable visual system.

### Content

* [ ] Hero copy is correct.
* [ ] Selected projects are correct.
* [ ] Project metrics are verified.
* [ ] No unsupported claims exist.
* [ ] GitHub links are correct.
* [ ] Demo links are correct where available.
* [ ] Résumé link works.
* [ ] LinkedIn link works.
* [ ] Email link works.
* [ ] Learning Hub links work.

### Engineering

* [ ] Project data is separated from presentation.
* [ ] Components are reusable.
* [ ] No duplicated project-card implementations.
* [ ] No hard-coded fake project data.
* [ ] No broken routes.
* [ ] No console errors.
* [ ] No broken images.
* [ ] No dead buttons.

### Accessibility

* [ ] Keyboard navigation works.
* [ ] Focus states are visible.
* [ ] Mobile navigation is accessible.
* [ ] Theme selector is accessible.
* [ ] Images have appropriate alt text.
* [ ] Reduced-motion behavior works.
* [ ] Color contrast is acceptable.

### Performance

* [ ] Images are optimized.
* [ ] No unnecessary animation libraries.
* [ ] No excessive client-side JavaScript.
* [ ] Layout shift is minimized.
* [ ] Hero loads efficiently.

### Final QA

* [ ] Test at mobile width.
* [ ] Test at tablet width.
* [ ] Test at desktop width.
* [ ] Test dark mode.
* [ ] Test light mode.
* [ ] Test navigation anchors.
* [ ] Test external links.
* [ ] Test project routes.
* [ ] Test résumé download.
* [ ] Test keyboard navigation.
* [ ] Check browser console.
* [ ] Check production build.

---

# 69. Implementation Constraint

The coding AI must treat this document as a specification, not a suggestion.

It must:

1. Follow the structure.
2. Follow the visual hierarchy.
3. Preserve the exact approved hero copy.
4. Use reusable components.
5. Keep project content data-driven.
6. Never invent project facts.
7. Never redesign the navigation without approval.
8. Never replace the visual identity with generic AI aesthetics.
9. Never add decorative effects simply because they are technically possible.
10. Ask for approval before making major structural changes.

If a technical limitation requires a change, document the limitation and propose the smallest compatible alternative.

---

# 70. Source-of-Truth Hierarchy

When instructions conflict, use this priority:

```text
1. User-approved decisions in the current project
2. PORTFOLIO_MASTER_SPEC.md
3. HOMEPAGE_SPEC.md
4. IMPLEMENTATION_PLAN.md
5. Project-specific implementation requirements
6. General framework conventions
```

The coding AI must not reinterpret the design based on generic portfolio templates.

---

# 71. Final Design Principle

The homepage should make the visitor think:

> This is a software engineer building toward AI/ML who can show the systems, models, experiments, and engineering decisions behind the work.

It should not attempt to make the visitor think:

> This is an experienced AI engineer with years of production experience.

The portfolio should communicate **trajectory through evidence**:

```text
SOFTWARE ENGINEERING
        ↓
APPLICATION DEVELOPMENT
        ↓
DATA
        ↓
MACHINE LEARNING
        ↓
AI APPLICATIONS
        ↓
PRODUCTION-ORIENTED SYSTEMS
```

The design, content, and interaction should reinforce that progression consistently.
