# IMPLEMENTATION_PLAN.md

## Portfolio Implementation Roadmap

**Project:** Oli Bakala — AI / ML / Data Engineering Portfolio  
**Version:** 1.0  
**Status:** Planning  
**Execution model:** Implement → Run → Verify → Fix → Document → Commit locally  
**Repository owner:** Oli Bakala

---

## 1. Purpose

This plan converts the portfolio specifications into an ordered, testable implementation process.

The coding AI must not attempt to build the entire portfolio in one unverified operation.

Each phase must have:

- A clear objective.
- Defined tasks.
- Expected outputs.
- Verification commands.
- Acceptance criteria.
- A documented status.

The repository owner reviews the results and performs all remote pushes.

---

## 2. Source Documents

Before making changes, read:

```text
PORTFOLIO_MASTER_SPEC.md
HOMEPAGE_SPEC.md
IMPLEMENTATION_PLAN.md
```

These documents define the approved direction.

Do not reinterpret the design, invent project content, or replace the agreed visual identity with a generic template.

---

## 3. Execution Rules

For every phase, follow this sequence:

```text
1. Inspect
2. Plan
3. Implement
4. Run
5. Verify
6. Fix
7. Re-run affected checks
8. Document
9. Review the diff
10. Report completion
11. Commit locally after approval
```

### Required behavior

- Inspect relevant files before editing.
- Make the smallest coherent change that satisfies the phase.
- Preserve existing working code.
- Avoid unrelated refactoring.
- Do not suppress errors to obtain a passing build.
- Do not claim a test passed unless it was actually run.
- Do not claim a page works without checking it.
- Do not commit secrets, private data, or generated build artifacts.
- Do not push to the remote repository.

### Phase reporting

At the end of each phase, report:

```text
Phase:
Status:
Files created:
Files modified:
Implementation summary:
Commands executed:
Verification results:
Known limitations:
Documentation updated:
Suggested commit message:
Next phase:
```

A phase is not complete while required checks fail.

---

# 4. Phase Overview

| Phase | Name | Main result |
|---|---|---|
| 0 | Repository audit | Understand existing stack and constraints |
| 1 | Foundation | Working application shell and design tokens |
| 2 | Global layout | Navigation, footer, theme infrastructure |
| 3 | Homepage hero | Hero content, portrait, system visualization |
| 4 | Project system | Data-driven project cards and selected work |
| 5 | Project case studies | Reusable case-study layout and initial routes |
| 6 | Engineering and skills | Process visualization and skill groups |
| 7 | Experience and About | Background and experience sections |
| 8 | Current focus and Learning Hub | Current project and learning content |
| 9 | Contact and metadata | Contact links, SEO, résumé integration |
| 10 | Responsive and accessibility | Cross-device and keyboard quality |
| 11 | Performance and final QA | Production readiness |
| 12 | Deployment preparation | Deployment configuration and handoff |
| Later | Ask Oli AI | Grounded portfolio assistant |

---

# 5. Phase 0 — Repository Audit

## Objective

Understand the current project before modifying it.

## Tasks

- Inspect the repository root.
- Identify the framework.
- Identify the package manager.
- Read `package.json` if present.
- Inspect existing source directories.
- Identify the existing entry point and routing system.
- Check current dependencies.
- Check existing styles and design tokens.
- Identify existing assets and fonts.
- Check existing scripts for development, linting, testing, and production build.
- Identify any existing work that must be preserved.

## Expected output

A concise repository audit report.

## Verification

Run the existing project's available checks before changing code.

Record baseline failures separately from new failures.

## Acceptance criteria

- [ ] Framework and package manager identified.
- [ ] Existing application structure documented.
- [ ] Baseline verification results recorded.
- [ ] Required dependencies identified.
- [ ] No files changed unnecessarily.

## Stop condition

If the repository is empty, incomplete, or has a major conflict with the specifications, report the issue and propose the smallest appropriate setup before proceeding.

---

# 6. Phase 1 — Application Foundation

## Objective

Create a reliable foundation without implementing every homepage section.

## Tasks

- Configure the application shell.
- Establish the main page layout.
- Configure global typography.
- Define centralized design tokens.
- Define responsive breakpoints.
- Establish reusable spacing and container rules.
- Configure global CSS/reset behavior.
- Add baseline metadata.
- Ensure development and production commands work.

## Expected output

A minimal working application with the approved design system.

## Verification

Run the project's existing lint, type-check, test, and build commands where available.

Open the application and confirm the page renders.

## Acceptance criteria

- [ ] Application starts successfully.
- [ ] Production build succeeds.
- [ ] Design tokens are centralized.
- [ ] Typography is configured.
- [ ] No unnecessary dependencies are added.
- [ ] Existing working features are preserved.

## Commit candidate

```text
chore: establish portfolio foundation
```

---

# 7. Phase 2 — Global Layout and Navigation

## Objective

Build the shared navigation and footer before adding the full page content.

## Tasks

- Implement desktop navigation.
- Implement mobile navigation.
- Add logo behavior.
- Add section-anchor navigation.
- Add external GitHub and LinkedIn links when verified URLs are available.
- Add résumé link only when the actual file is available.
- Implement the theme selector.
- Implement sticky navigation behavior.
- Implement the footer.
- Establish shared link and button styles.

## Verification

- Test every navigation link.
- Test keyboard operation.
- Test mobile menu opening and closing.
- Test scrolling behavior.
- Test theme selection and persistence.
- Confirm the page remains usable at mobile width.

## Acceptance criteria

- [ ] Navigation follows the approved specification.
- [ ] Logo returns to `/`.
- [ ] Mobile navigation works.
- [ ] Theme selector supports System, Light, and Dark.
- [ ] Theme preference persists.
- [ ] Links do not point to fabricated destinations.
- [ ] No console errors are introduced.

## Commit candidate

```text
feat: implement responsive navigation and theme controls
```

---

# 8. Phase 3 — Hero and Capability Signal

## Objective

Implement the first impression of the portfolio.

## Tasks

- Implement the exact approved hero eyebrow.
- Implement the exact approved headline.
- Implement the exact approved supporting text.
- Implement the primary CTA.
- Implement the résumé CTA when the real file is available.
- Add the current-project status.
- Add the portrait component or an explicitly documented temporary placeholder.
- Build the DATA → FEATURES → MODEL → API → APPLICATION visualization.
- Add subtle signal animation.
- Add the capability strip.
- Implement reduced-motion behavior.

## Verification

- Compare the content with `HOMEPAGE_SPEC.md`.
- Test desktop and mobile layouts.
- Check portrait cropping and image loading.
- Test both theme variants.
- Check text wrapping and button behavior.
- Check reduced-motion behavior.

## Acceptance criteria

- [ ] Hero copy matches the specification.
- [ ] Both portrait and system visualization are represented.
- [ ] System visualization is readable.
- [ ] Primary CTA targets the projects section.
- [ ] Résumé CTA works only if the file exists.
- [ ] No unsupported claims appear.
- [ ] Motion remains subtle and accessible.

## Commit candidate

```text
feat: build portfolio hero and system visualization
```

---

# 9. Phase 4 — Project Data and Selected Projects

## Objective

Create a reusable, data-driven project presentation system.

## Tasks

- Define the project data type.
- Create the project data file.
- Implement reusable project cards.
- Implement featured, standard, and compact variants.
- Implement technology tags.
- Implement metrics display.
- Implement architecture visuals or image slots.
- Implement conditional GitHub, demo, and case-study links.
- Implement the Selected Projects section.
- Add the initial flagship projects.
- Add secondary projects as the available space and content justify.

## Initial flagship projects

1. AI-Powered Visual Attendance System.
2. Probability of Default / Credit Scoring.
3. Neural Machine Translation.

## Secondary projects

- Fraud Detection.
- Restaurant Sales Forecasting.
- Email Spam Detection.
- Heart Disease Ensemble Learning.
- House Price Prediction.

## Verification

- Confirm every displayed metric belongs to the correct project.
- Check all project URLs.
- Confirm absent URLs do not produce fake buttons.
- Confirm all card variants render.
- Test card behavior at mobile and desktop widths.
- Check image fallback behavior.

## Acceptance criteria

- [ ] Project cards use reusable components.
- [ ] Project content is data-driven.
- [ ] The featured project receives appropriate emphasis.
- [ ] Metrics are accurate and correctly attributed.
- [ ] Missing links are omitted.
- [ ] Project status is honest.
- [ ] No project facts are invented.

## Commit candidate

```text
feat: add data-driven project cards
```

---

# 10. Phase 5 — Project Case Studies

## Objective

Build a reusable case-study template and connect the flagship projects to it.

## Tasks

- Define a consistent case-study structure.
- Implement problem statement.
- Implement data and preprocessing sections.
- Implement approach and methodology.
- Implement architecture presentation.
- Implement evaluation and metrics.
- Implement limitations and next steps.
- Implement GitHub and demo links.
- Create the available flagship project routes.
- Add related-project navigation where useful.

## Case-study structure

```text
Project Overview
    ↓
Problem
    ↓
Data
    ↓
Approach
    ↓
Architecture
    ↓
Evaluation
    ↓
Results
    ↓
Engineering Details
    ↓
Limitations
    ↓
Next Steps
    ↓
GitHub / Demo
```

## Verification

- Test each route directly.
- Test links from homepage cards.
- Confirm page titles and headings.
- Confirm architecture visuals load.
- Check metrics against project evidence.
- Confirm unfinished content is not presented as completed work.

## Acceptance criteria

- [ ] Case studies share a consistent template.
- [ ] Routes are valid.
- [ ] Project-specific content is accurate.
- [ ] Metrics include appropriate context.
- [ ] Limitations are disclosed.
- [ ] No empty or fabricated case studies are published.

## Commit candidate

```text
feat: add reusable project case studies
```

---

# 11. Phase 6 — Engineering Approach and Skills

## Objective

Explain the engineering process and technical toolkit.

## Tasks

- Implement the Engineering Approach section.
- Show Problem → Data → Features → Model → Evaluation → Application → Iteration.
- Make the process responsive.
- Implement four skill groups.
- Ensure skills are readable without relying on logos.
- Keep content separate from presentation.

## Verification

- Check the process sequence.
- Test hover and focus interactions.
- Test mobile layout.
- Review every listed technology for accuracy.

## Acceptance criteria

- [ ] Process order is correct.
- [ ] Process descriptions are concise.
- [ ] Skills use the four approved categories.
- [ ] Unsupported skill claims are excluded.
- [ ] Layout works across screen sizes.

## Commit candidate

```text
feat: add engineering approach and skills sections
```

---

# 12. Phase 7 — Experience and About

## Objective

Present educational background, training, internship, and professional direction accurately.

## Tasks

- Implement the experience timeline.
- Add Arba Minch University education.
- Add AI and Data Science training.
- Add DAN ENERGY internship.
- Implement the About preview.
- Explain the progression from software engineering to intelligent systems.
- Keep academic, training, personal, and employment experience distinct.

## Verification

- Review dates and descriptions.
- Check timeline behavior at mobile widths.
- Confirm no unsupported employment claims.
- Check consistency with the résumé.

## Acceptance criteria

- [ ] Timeline is readable.
- [ ] Education and employment are clearly distinguished.
- [ ] Training is described accurately.
- [ ] About copy follows the approved direction.
- [ ] No inflated experience claims appear.

## Commit candidate

```text
feat: add experience timeline and about section
```

---

# 13. Phase 8 — Currently Building and Learning Hub

## Objective

Show current technical focus and establish a path for technical writing.

## Tasks

- Implement the Currently Building panel.
- Feature the AI-Powered Visual Attendance System.
- Show the system architecture.
- Add the Current Learning topics.
- Implement the Learning Hub preview.
- Create a reusable learning-card component.
- Define article metadata and categories.
- Add the `/learning` route when content is ready.
- Create article routes only for available content.

## Initial learning topics

- Understanding Attention.
- CBOW vs Skip-gram.
- Building Time-Series Features.
- Feature Selection for Credit Risk.

## Verification

- Test every published article link.
- Confirm unfinished articles are not presented as complete.
- Check category labels.
- Check responsive layout.
- Confirm technical explanations have appropriate source material.

## Acceptance criteria

- [ ] Current project status is accurate.
- [ ] Learning topics are clearly presented.
- [ ] Learning Hub is distinct from a generic blog.
- [ ] Links lead to real content.
- [ ] No placeholder article content is published as finished work.

## Commit candidate

```text
feat: add current focus and learning hub
```

---

# 14. Phase 9 — Contact, Résumé, and Metadata

## Objective

Make the portfolio actionable and discoverable.

## Tasks

- Implement the Contact section.
- Add verified email link.
- Add verified LinkedIn URL.
- Add verified GitHub URL.
- Add the résumé download.
- Add homepage metadata.
- Add Open Graph metadata.
- Add favicon.
- Add appropriate canonical URL configuration.
- Add a 404 page if not already supported.

## Verification

- Test each external link.
- Download and open the résumé.
- Inspect page title and description.
- Inspect social preview metadata.
- Test the 404 route.

## Acceptance criteria

- [ ] Contact methods work.
- [ ] Résumé download works.
- [ ] Metadata is descriptive and accurate.
- [ ] No placeholder URLs remain in published content.
- [ ] Missing routes are handled gracefully.

## Commit candidate

```text
feat: add contact and portfolio metadata
```

---

# 15. Phase 10 — Responsive and Accessibility Review

## Objective

Ensure the completed site is usable across screen sizes and interaction methods.

## Tasks

Test at minimum:

```text
Mobile: 375px
Mobile: 390px
Tablet: 768px
Desktop: 1024px
Desktop: 1440px
```

Also test the agreed breakpoints and intermediate widths.

Check:

- navigation
- hero
- portrait
- system visualization
- project cards
- metrics
- engineering process
- skill groups
- timeline
- Learning Hub
- contact
- footer
- theme selector

Check keyboard navigation, focus states, semantic structure, contrast, alt text, and reduced motion.

## Acceptance criteria

- [ ] No horizontal overflow.
- [ ] No clipped text or controls.
- [ ] Mobile menu works.
- [ ] Keyboard navigation works.
- [ ] Focus states are visible.
- [ ] Theme controls are accessible.
- [ ] Images have appropriate alt text.
- [ ] Reduced-motion behavior works.
- [ ] Contrast is acceptable.

## Commit candidate

```text
fix: improve responsive layout and accessibility
```

---

# 16. Phase 11 — Performance and Final QA

## Objective

Verify that the complete portfolio is reliable and ready for production.

## Tasks

- Optimize image sizes.
- Check image loading behavior.
- Remove unused dependencies and code.
- Review client-side JavaScript.
- Check layout shift.
- Review animation performance.
- Run lint and type checks.
- Run automated tests where available.
- Run the production build.
- Inspect browser console.
- Test all routes.
- Test all internal and external links.
- Test both themes.
- Review metadata.
- Review content accuracy.
- Fix issues and rerun affected checks.

## Verification checklist

- [ ] Development server starts.
- [ ] Production build succeeds.
- [ ] Lint passes, where configured.
- [ ] Type checking passes, where configured.
- [ ] Tests pass, where configured.
- [ ] No new console errors.
- [ ] No broken images.
- [ ] No broken links.
- [ ] No fake project links.
- [ ] No unsupported metrics.
- [ ] No horizontal overflow.
- [ ] Dark mode works.
- [ ] Light mode works.
- [ ] Mobile navigation works.
- [ ] Résumé download works.
- [ ] All published routes work.
- [ ] 404 behavior is appropriate.
- [ ] Reduced-motion behavior works.

## Acceptance criteria

The site is considered ready only when all critical checks pass or any remaining limitation is explicitly documented and approved.

## Commit candidate

```text
chore: complete portfolio quality assurance
```

---

# 17. Phase 12 — Deployment Preparation

## Objective

Prepare the portfolio for deployment without exposing secrets or breaking existing functionality.

## Tasks

- Confirm the deployment platform.
- Review environment variables.
- Confirm the production build.
- Configure the production URL.
- Verify canonical and social metadata.
- Check deployment-specific settings.
- Document deployment instructions.
- Verify the deployed site after the owner publishes it.

## Acceptance criteria

- [ ] Deployment configuration is documented.
- [ ] No secrets are committed.
- [ ] Production build succeeds.
- [ ] Required environment variables are documented.
- [ ] Deployment instructions are clear.
- [ ] Deployed pages and links are checked.

The coding AI must not push code or deploy without explicit approval.

## Commit candidate

```text
docs: document portfolio deployment
```

---

# 18. Later Phase — Ask Oli AI

This feature is deliberately postponed.

## Objective

Build a grounded assistant that answers questions about Oli's real portfolio.

## Knowledge sources

- Project descriptions and case studies.
- Résumé.
- Experience and education.
- Skills.
- Learning Hub articles.
- Verified public portfolio content.

## Intended flow

```text
Visitor Question
      ↓
Query Processing
      ↓
Portfolio Knowledge Retrieval
      ↓
Grounded Answer
      ↓
Relevant Project / Article / Contact Links
```

## Requirements

- Do not invent credentials or experience.
- Do not fabricate metrics.
- Use approved portfolio content as the source of truth.
- Provide links to relevant pages.
- Keep API credentials server-side.
- Handle unknown questions honestly.
- Document limitations.
- Add evaluation tests for factual grounding.

## Entry condition

Begin only after the core portfolio is complete, responsive, accessible, and verified.

---

# 19. Documentation Maintenance

Maintain a concise `DEVELOPMENT_STATUS.md` or equivalent status file.

After each phase, record:

- Completed work.
- Files changed.
- Verification commands.
- Verification results.
- Known issues.
- Remaining tasks.
- Current phase.

Do not mark work complete based solely on code generation.

Completion requires execution and verification.

---

# 20. Commit and Ownership Rules

The repository owner performs all remote pushes.

The coding AI may prepare a commit recommendation but must not push to GitHub.

Before each local commit:

1. Review the diff.
2. Check for accidental secrets or sensitive data.
3. Check for unrelated changes.
4. Run the required verification.
5. Confirm the phase's acceptance criteria.
6. Obtain owner approval.

Do not create a commit when critical checks are failing.

---

# 21. Final Completion Criteria

The portfolio is complete when:

- The approved design is implemented.
- The homepage follows `HOMEPAGE_SPEC.md`.
- Navigation and theme switching work.
- Project content is data-driven.
- Published project case studies are accurate.
- Skills, experience, and About sections are complete.
- The Learning Hub contains real content.
- Contact and résumé links work.
- Responsive layouts are verified.
- Accessibility has been checked.
- Performance and production build have been reviewed.
- SEO metadata is configured.
- No critical errors or broken links remain.
- Documentation reflects the actual implementation.
- The owner has reviewed the final result.

---

# 22. Next Action

Start with **Phase 0 — Repository Audit**.

Do not begin the full implementation until the coding AI has read all three specification documents and reported its repository audit.

After Phase 0, implement only Phase 1 and verify it before proceeding.

The required workflow remains:

**Implement → Run → Verify → Fix → Document → Review → Commit locally.**