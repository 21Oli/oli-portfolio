# MASTER_IMPLEMENTATION_PROMPT.md

## 1. Role and Responsibility

Act as a senior frontend engineer, Next.js architect, and UI implementation specialist.

Your responsibility is to implement my AI/ML/Data Engineering portfolio according to the approved specifications, with a strong emphasis on visual quality, accessibility, responsiveness, maintainability, and production readiness.

I am the project owner. I will personally manage Git initialization, commits, and pushes.

Follow an incremental workflow: inspect → implement → run → verify → fix → document → report.

Do not skip verification or claim that a task passed without actually running the relevant checks.

## 2. Source of Truth

Before making any changes, read these three documents completely:

1. `PORTFOLIO_MASTER_SPEC.md`
2. `HOMEPAGE_SPEC.md`
3. `IMPLEMENTATION_PLAN.md`

Treat these documents as the authoritative source for product requirements, design decisions, technical architecture, scope, and implementation order.

Do not silently replace approved decisions with personal preferences. If documents conflict, identify the conflict and ask me before making a significant architectural decision.

Preserve all existing specifications and project documentation.

## 3. Phase 1 Objective

Implement **Phase 1 only**, as defined in `IMPLEMENTATION_PLAN.md`.

Phase 1 establishes the application's foundation and the agreed Next.js scaffold. Do not implement subsequent phases unless the implementation plan explicitly includes them in Phase 1.

Do not invent additional features or expand the scope.

## 4. Approved Technology Decisions

Use the following configuration:

| Area | Approved choice |
|---|---|
| Framework | Next.js |
| Routing | App Router |
| Language | TypeScript |
| Styling | CSS Modules + CSS custom properties |
| Utility CSS framework | None |
| Linting | ESLint |
| Package manager | npm |
| Source directory | `src/` |
| Import alias | `@/*` |
| Themes | Dark and light, with system preference support where specified |
| Git operations | Managed exclusively by the project owner |

### Styling requirements

Do not use Tailwind CSS.

Do not introduce another utility-first CSS framework or an unapproved styling library.

Use CSS Modules for component-specific styles and CSS custom properties for shared design tokens.

Establish reusable tokens for:

- Backgrounds, surfaces, borders, and text colors.
- Primary and secondary accent colors.
- Typography, font sizes, weights, and line heights.
- Spacing and content widths.
- Border radii and shadows.
- Transitions, animation timing, and motion preferences.
- Responsive breakpoints and layout behavior.

Follow the approved dark graphite + teal visual direction and the light-theme specifications.

Use the exact design values documented in `PORTFOLIO_MASTER_SPEC.md` and `HOMEPAGE_SPEC.md`. Do not invent a competing color palette or redesign the visual identity.

Keep the styling modular, maintainable, responsive, and accessible.

## 5. Repository Safety Audit

Before running any scaffold command:

1. Confirm the current working directory.
2. Locate and inspect the existing `oli-portfolio/` directory.
3. Verify that all three specification documents are present and readable.
4. Inspect existing files, including hidden files and project configuration.
5. Check whether `oli-portfolio/` already contains a Next.js application or other files that could conflict with scaffolding.
6. Determine whether the requested scaffold can run without overwriting, deleting, or moving existing files.

The folder already contains project specifications. These must be preserved.

If scaffolding would overwrite existing files, if the folder structure conflicts with the requested command, or if the current directory is incorrect, stop and report the exact conflict. Do not delete files, move files, recreate the directory, or choose a workaround without my approval.

## 6. Approved Scaffold Command

From the parent directory of `oli-portfolio/`, use the following command if the repository audit confirms that it is safe:

```bash
npx create-next-app@latest oli-portfolio --typescript --eslint --app --src-dir --no-tailwind --use-npm --import-alias "@/*"
```

The command must be used with `--no-tailwind`.

Do not change the approved scaffold options without asking me first.

Use the package versions selected by the scaffold and report the actual versions installed. Do not install unrelated dependencies or add optional packages simply for convenience.

If the command cannot safely scaffold the existing directory, stop and request approval before proceeding.

## 7. Git Ownership and Restrictions

I retain complete control over Git.

You must not:

- Run `git init`.
- Create commits.
- Amend existing commits.
- Push or force-push to any remote.
- Change Git remotes.
- Rewrite Git history.
- Perform destructive Git operations.

You may inspect the current Git status and branch if a Git repository already exists.

Leave all changes uncommitted so I can review and manage them myself.

## 8. Implementation Standards

Within Phase 1 scope:

- Use clear, descriptive component and file names.
- Keep components focused and reusable.
- Prefer explicit TypeScript types.
- Avoid unnecessary abstractions.
- Avoid duplicated design-token definitions.
- Use semantic HTML.
- Ensure keyboard accessibility and visible focus indicators where applicable.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary dependencies and configuration complexity.
- Keep the implementation aligned with the approved specifications.
- Do not create fake project data, placeholder claims, or fabricated performance metrics.
- Do not add features that belong to later phases.

Do not modify unrelated files.

## 9. Required Verification

After implementation, run each of the following commands and record its actual result:

### Development server

```bash
npm run dev
```

Confirm that the application starts and serves the local development page successfully. Then stop the server cleanly.

### Production build

```bash
npm run build
```

The production build must complete successfully.

### Linting

```bash
npm run lint
```

The lint check must pass using the script configured by the scaffold.

If the current Next.js version does not provide this script by default, inspect the installed version and ESLint configuration. Make only the smallest appropriate adjustment within Phase 1 scope, then rerun the command. Do not silently replace the required check with a different command.

### TypeScript

```bash
npx tsc --noEmit
```

The TypeScript check must complete without errors.

### Verification rules

- Run all four checks.
- Fix failures that are within Phase 1 scope.
- Rerun affected checks after fixes.
- Do not report an unexecuted check as passed.
- If a check cannot run because of an environmental issue, report the exact reason.
- Do not weaken lint rules, TypeScript checks, or build settings merely to obtain a passing result.

## 10. Final Report

When Phase 1 is complete, provide a concise report containing the following sections.

### A. Completion status

State whether Phase 1 is complete, partially complete, or blocked.

### B. Files created or modified

List the important files created or modified and explain their purpose.

Confirm that all three specification documents remain intact.

### C. Technology and architecture

Report:

- Actual Next.js and TypeScript versions.
- The styling approach used.
- The source directory and routing configuration.
- Any scaffold or configuration adjustments made.

### D. Verification results

Use a table:

| Check | Result | Notes |
|---|---|---|
| `npm run dev` | PASS / FAIL / BLOCKED | Actual result |
| `npm run build` | PASS / FAIL / BLOCKED | Actual result |
| `npm run lint` | PASS / FAIL / BLOCKED | Actual result |
| `npx tsc --noEmit` | PASS / FAIL / BLOCKED | Actual result |

### E. Remaining issues

List outstanding issues, unresolved conflicts, environmental blockers, and decisions requiring my approval.

### F. Next step

Identify the next phase in `IMPLEMENTATION_PLAN.md` without implementing it.

## 11. Definition of Done

Phase 1 is complete only when:

- All three specifications have been read.
- The repository has been inspected before scaffolding.
- Existing documentation has been preserved.
- The approved Next.js scaffold has been established safely.
- CSS Modules and CSS custom properties are used; Tailwind is absent.
- No unapproved dependencies or unrelated features have been introduced.
- All four required verification checks have been executed and their results reported honestly.
- No Git initialization, commits, or pushes have been performed.
- The final report clearly documents the result and any remaining issues.

## 12. Start Here

Begin by reading all three specification documents and auditing the existing `oli-portfolio/` directory.

Do not modify application files until the audit confirms that scaffolding can proceed safely.

If safe, implement Phase 1 using the exact approved scaffold command and the decisions in this document.

If blocked by a file conflict or architectural ambiguity, stop and explain the issue before taking further action.

At the end of Phase 1, report the results and wait for my review before proceeding to the next phase.