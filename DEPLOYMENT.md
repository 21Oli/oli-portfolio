# Deployment Guide — Oli Bakala Portfolio

**Hosting platform:** Vercel  
**Framework:** Next.js 16 (App Router)  
**Package manager:** npm  

---

## 1. Prerequisites

- Node.js 20 or later (check with `node -v`)
- npm 10 or later (check with `npm -v`)
- A GitHub account with this repository pushed
- A Vercel account (free tier is sufficient)

---

## 2. Local Development

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
# → http://localhost:3000

# Production build (verify before deploying)
npm run build

# Run linting
npm run lint

# Run TypeScript type check
npm run type-check
```

---

## 3. Production Build

```bash
npm run build
```

Generates optimized static HTML for all routes. All pages are statically prerendered — no server is required at runtime.

---

## 4. Connecting to Vercel

1. Push the project to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New → Project**.
4. Import your GitHub repository.

---

## 5. Vercel Project Configuration

When Vercel prompts for project settings:

| Setting | Value |
|---|---|
| **Framework Preset** | Next.js |
| **Root Directory** | `.` (repository root) |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` (auto-detected) |
| **Install Command** | `npm install` |
| **Node.js Version** | 20.x (recommended) |

No custom build or output directory needs to be set — Vercel's Next.js preset handles this automatically.

---

## 6. Environment Variables

### Currently required

None. The portfolio builds and runs fully without any environment variables.

### Required after deployment (for full functionality)

| Variable | Purpose | When to add |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Enables `metadataBase`, sitemap, and canonical URLs | After first deployment — see step 8 |

### How to add in Vercel

1. Go to your Vercel project dashboard.
2. Click **Settings → Environment Variables**.
3. Add `NEXT_PUBLIC_SITE_URL` with value `https://your-app.vercel.app`.
4. Apply to: **Production** environment.
5. Redeploy.

**Never commit environment variable values to the repository.**

---

## 7. First Production Deployment

1. Complete steps 4–5 above.
2. Click **Deploy**.
3. Wait for the build to complete (approximately 1–2 minutes).
4. Vercel will assign a URL: `https://your-app-name.vercel.app`.

---

## 8. Configuring the Production URL

After the first deployment:

1. Copy the assigned URL from the Vercel dashboard (e.g., `https://oli-portfolio.vercel.app`).
2. Add `NEXT_PUBLIC_SITE_URL = https://oli-portfolio.vercel.app` as a Vercel environment variable (see step 6).
3. In `src/app/layout.tsx`, the `metadataBase` will be set automatically when the variable is present.
4. Trigger a redeployment (push a new commit or use **Redeploy** in the Vercel dashboard).
5. After redeployment:
   - `/robots.txt` will include the sitemap reference.
   - `/sitemap.xml` will be generated with absolute URLs.
   - Open Graph `url` metadata will resolve correctly.

---

## 9. What Happens Without `NEXT_PUBLIC_SITE_URL`

The site works fully without it. The only differences:
- `metadataBase` is not set → relative OG URLs are not resolved to absolute URLs.
- `/sitemap.xml` returns an empty sitemap.
- `/robots.txt` has no sitemap directive.

These only affect SEO crawling, not site functionality.

---

## 10. Verifying the Live Deployment

After deployment:

1. Open `https://your-app.vercel.app` in a browser.
2. Verify the homepage loads with the hero, portrait, and navigation.
3. Click **VIEW SELECTED WORK →** — should scroll to the projects section.
4. Click **DOWNLOAD RÉSUMÉ ↓** — should download `Oli-Bakala-Resume.pdf`.
5. Click project cards → should navigate to case-study pages.
6. Test dark/light theme toggle.
7. Open the mobile navigation (resize browser or use DevTools).
8. Visit `/learning` and click an article.
9. Visit `/projects/visual-attendance`.
10. Visit a non-existent route — should show the custom 404 page.
11. Visit `https://your-app.vercel.app/robots.txt` — should return a valid robots file.

---

## 11. Configuring Canonical Metadata (after domain is known)

When `NEXT_PUBLIC_SITE_URL` is set, the following are automatically configured:

- `metadataBase` in `src/app/layout.tsx`
- Sitemap in `src/app/sitemap.ts`
- Sitemap directive in `src/app/robots.ts`

No code changes are needed — only the environment variable.

---

## 12. Enabling Production Indexing

The site is configured with `robots: { index: true, follow: true }` by default. Search engines will be able to index it once the sitemap is live.

If you want to delay indexing (e.g., while the site is in progress):
- Add a temporary `robots.ts` rule to disallow crawling before launch.
- Remove it when you are ready to go live.

---

## 13. Open Graph Image (Outstanding)

A dedicated 1200×630 Open Graph image is not yet available.

When ready:
1. Create `public/images/og.jpg` (1200×630 pixels).
2. In `src/app/layout.tsx`, add to the `openGraph` and `twitter` objects:
   ```ts
   images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
   ```
3. Commit and redeploy.

The portrait (`portrait.png` at 1122×1402px) is not suitable as an OG image because its dimensions do not match the 1200×630 horizontal format.

---

## 14. Troubleshooting Common Failures

### Build fails: TypeScript errors
```bash
npm run type-check
```
Fix any type errors before deploying.

### Build fails: ESLint errors
```bash
npm run lint
```
Fix all lint errors (none are suppressed in this project).

### Images not showing
- Confirm `portrait.png` is in `public/images/`.
- Confirm file is committed and pushed to GitHub.
- Check the Vercel build logs for file-not-found errors.

### Résumé download not working
- Confirm `resume.pdf` is in `public/resume/`.
- Confirm file is committed and pushed.
- Test the URL directly: `https://your-app.vercel.app/resume/resume.pdf`.

### Sitemap empty
- Confirm `NEXT_PUBLIC_SITE_URL` is set in Vercel environment variables.
- Trigger a redeployment after setting the variable.

### 404 page not showing
- The custom 404 is at `src/app/not-found.tsx`.
- Vercel Next.js deployments use this automatically.

---

## 15. Future Phases (Not Deployed Yet)

The following features are not yet implemented and should be considered after the initial deployment is stable:

- Contact form backend
- Email integration
- Analytics
- Content Security Policy (CSP)
- Ask Oli AI (portfolio assistant)
