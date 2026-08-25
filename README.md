# Ebuka Solomon — Portfolio

A static, no-build portfolio site: plain HTML/CSS/JS, deploys straight to GitHub Pages for free.

## Structure

```
index.html              → Home (Hero, Services grid, Featured Work, Resume, Contact)
css/styles.css           → Shared design system (colors, type, components)
js/main.js                → Mobile nav, scroll reveal, project filter pills
images/                    → All project thumbnails go here
files/                     → All PDFs go here (resume, case studies, briefs)
brand-identity/index.html → Service page template (COMPLETE — duplicate for the rest)
```

## Publishing to GitHub Pages (free)

1. Create a repo named exactly `yourusername.github.io` on GitHub, set to Public.
2. Upload all these files/folders to it (drag-and-drop in the GitHub web UI, or `git push`).
3. In the repo: **Settings → Pages** → confirm source is the `main` branch. Save.
4. Your site is live at `https://yourusername.github.io` within a minute or two.
5. Each service page becomes its own shareable link automatically, e.g.
   `https://yourusername.github.io/brand-identity/` — perfect for pasting into an Upwork proposal.

## Adding the 7 remaining service pages

`brand-identity/` is the fully built template. To create each new service:

1. Duplicate the whole `brand-identity` folder, rename it to match the slug:
   - `logo-design/`
   - `flyer-design/`
   - `ui-ux-design/`
   - `press-kit/`
   - `photo-retouch/`
   - `color-grading/`
   - `wordpress-design/`
2. Inside the new folder's `index.html`, update:
   - `<title>` and meta description
   - The breadcrumb text and "Service 0X" eyebrow number
   - The H1 headline and intro paragraph
   - The 4 "What's included" cards
   - The project cards (see below)
3. Everything else (header, nav, footer, CSS/JS paths using `../`) stays as-is.

Just paste the URL of this conversation to Claude and ask it to generate the remaining 7 pages using `brand-identity/index.html` as the template — that's the fastest way.

## Adding a project to any service page

For each project:

1. Save the thumbnail image into `/images` (e.g. `images/acme-rebrand.jpg`).
2. Save the case-study or brief PDF into `/files` (e.g. `files/acme-rebrand.pdf`), if you have one.
3. Duplicate a `.project-card` block in that service's `index.html` and update:
   - `src="../images/your-image.jpg"`
   - Title and description text
   - `href="../files/your-file.pdf"` (or delete the PDF link entirely if there isn't one)

## Notes

- All PDFs and images currently in `/files` and `/images` are placeholders — replace them with your real files, keeping the same filenames, or update the `href`/`src` paths to match new filenames.
- The palette and gradient are pulled directly from your color palette reference (`#E85002` orange, black, and the orange→red→black gradient).
- Fonts are loaded from Google Fonts (Manrope for headings, Inter for body) — no local font files needed.
