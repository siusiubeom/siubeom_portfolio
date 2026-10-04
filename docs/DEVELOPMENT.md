# Siu Beom — siubeom.com

Personal portfolio migrated from the supplied Notion HTML export into Next.js App Router. Korean project descriptions, research results, publications, experience, awards, and all 12 PNG assets are preserved locally. No Notion account, database, API keys, or environment variables are needed.

## Local development

```sh
npm ci
npm run dev
```

Use Node.js 24 (also pinned in `.nvmrc` and `package.json`). Open http://localhost:3000. Validate production with `npm run check` (ESLint followed by the production build).

For a local production preview, run `npm run build` then `npm run start`. After editing and rebuilding, restart the production server to serve the new build. Use `npm run dev` during editing for automatic updates.

## Editing

- `content/portfolio.json`: project descriptions, links, lists, and image dimensions.
- `app/portfolio.tsx`: shared bilingual portfolio, introduction, skills, and navigation.
- `content/english.ts`: English translations of the Korean source copy.
- `app/(ko)/page.tsx` and `app/en/page.tsx`: Korean (`/`) and English (`/en`) routes. The header language switch links between them; the URL preserves the language on reload.
- `public/portfolio/`: original images. Clicking a project image opens the full-resolution file.
- `app/globals.css`: responsive layout and print styles.
- `app/(ko)/layout.tsx`, `app/en/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`: localized metadata, language alternates, and production domain.
- `app/font-faces.css` and `public/fonts/`: locally hosted Pretendard fonts with their SIL OFL license. Design references VetSync's teal palette, neutral surfaces, typography, and rounded controls.

English translates the page text and image descriptions; original screenshots and research posters retain their source language.

The site uses a Field Notebook theme with a Korean greeting (and an English version), a character illustration, and a paper-sticker link to Field Notes. Its sections are Field Notes, Side Quests, Research Notes, How I got here, Happy Moments, and A note about me. Original project detail text remains available in expandable notes. `public/images/work-note.png` is the generated button artwork; its prompt is recorded in `design/work-note.prompt.txt`.

The original ZIP, exported PDFs/screenshots (`exports/`), and IDE files (`.idea/`) stay on disk but are excluded from Git and deployment uploads. Keep the source content, all assets under `public/`, and the font license in the repository. Generated PDF previews are historical snapshots; use Resume to print the current site.

The footer’s Resume button opens the browser print dialog with expanded project details and a print-specific layout. Visitors can save this as PDF; no separate resume file is assumed. `app/mascot.tsx` contains the shared hero/footer character, and `app/resume-button.tsx` handles printing.

## Deploy to Vercel

1. Commit and push this project to your Git repository, then import it at https://vercel.com/new. If no Git remote exists yet, create an empty repository in your Git provider and add its actual URL with `git remote add origin <repository-url>` before pushing your branch.
2. Choose the **Next.js** framework preset and the repository root (`./`) as the root directory. `vercel.json` sets installation to `npm ci` and the build to `npm run check`; Node.js is pinned to `24.x`. Leave Output Directory at its framework default. No environment variables are required.
3. Deploy and check both `/` and `/en` on the generated Vercel URL. Check the images, language switch, project links, and Resume print button. Vercel automatically deploys subsequent pushes after the Git repository is connected. Alternatively, run `npx vercel` to link a project and create a preview, then `npx vercel --prod` for production.
4. In the Vercel project, open **Settings → Domains** and add `siubeom.com`. Optionally add `www.siubeom.com` and redirect it to `siubeom.com`.
5. At your domain's DNS provider, apply the exact DNS records Vercel displays for this project. Keep unrelated mail records intact. Wait for domain verification and HTTPS provisioning, then open https://siubeom.com.

Official instructions: [Git deployments](https://vercel.com/docs/git), [custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain), [Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

Setting metadata to siubeom.com does not configure DNS or publish the site. This working copy has not yet been linked to a Vercel project.

Before committing, review `git status --short` and `git diff`. Then stage and commit the site together:

```sh
git add -A
git diff --cached --stat
git commit -m "Prepare bilingual portfolio for Vercel"
```

After configuring your remote, push the current branch with `git push -u origin HEAD`. In Vercel, make sure that branch is selected as the Production Branch. Domain verification requires access to the domain registrar; use the exact DNS records Vercel provides rather than a hard-coded example IP. The canonical URLs, language alternates, `robots.txt`, and `sitemap.xml` already point to `https://siubeom.com`.
