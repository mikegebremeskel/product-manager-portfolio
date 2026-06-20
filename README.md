# Mike Gebremeskel: product portfolio

A product manager's portfolio, and a work sample of how I build.

**Live site:** https://mikegebremeskel.com

---

## Why this repo is public

This repo is two things at once. It is my product portfolio, and it is evidence of how I work as a product manager.

Most portfolios show finished screens with no thinking behind them. I built this one the way I build products: I researched the problem, wrote a PR/FAQ to align on the users and the why, specified it in a PRD with measurable targets, then shipped it. Those documents are in this repo. So a reviewer does not have to take my word for how I work. They can read it.

If you only have a minute, open the live site. If you want to see the thinking, read on.

## Read it in this order

1. **`docs/PRFAQ.md`**: the why and the who. Written working backwards from the two users of this site: the hiring team evaluating me, and me trying to stand out. Start here.
2. **`docs/PRD.md`**: the what and the how. Scope, requirements, information architecture, and success metrics written as measurable targets anyone can verify against the live site.
3. **`src/content/`**: the four case studies and the About page, as Markdown.
4. **The live site**: the result.

## What's inside

```
.
├── README.md              You are here
├── ASSETS.md              Image asset manifest
├── astro.config.mjs       Astro config (site URL, base, Markdown plugins)
├── package.json
├── docs/
│   ├── PRFAQ.md           Product narrative (Working Backwards)
│   ├── PRD.md             Product requirements and verifiable targets
│   ├── DESIGN.md          Design direction and tokens
│   └── DECISIONS.md       Decision log and document versions
├── public/
│   └── assets/            Images, artifacts, favicon
├── src/
│   ├── content/
│   │   ├── work/          The four case studies, as Markdown
│   │   ├── writing/       Thought-leadership essays, as Markdown
│   │   └── pages/         About, as Markdown
│   ├── content.config.ts  Content collection schema
│   ├── pages/             Routes (home, work/[slug], about, contact, 404)
│   ├── layouts/           Base page layout
│   ├── components/        Header, footer, case study card
│   ├── scripts/           Scroll reveal + image lightbox
│   ├── lib/               Small helpers (URL building, remark plugin)
│   └── styles/            Global CSS + design tokens
└── .github/workflows/     GitHub Pages deploy
```

Content lives in `src/content/` as plain Markdown, separate from the presentation code, so any case study can be edited without touching the build. That separation is intentional.

## The case studies

1. **Finding the wedge**, product strategy: mapping a broad opportunity and narrowing to the wedge that worked.
2. **Subscription activation**, execution and data-driven iteration: a revamp and an activation fix that took onboarding completion from near zero to roughly 80%.
3. **Accountant transaction workflow**: zero-to-one in a new market, grounded in discovery with 100+ firms.
4. **How I run product**, the operating system: prioritization, specs, releases, and quality.

## How it is built

- A static site built with **Astro**, styled with **Tailwind CSS v4**, case studies authored in Markdown and kept separate from presentation.
- Hosted free on **GitHub Pages** via a GitHub Actions workflow, served from the custom domain **mikegebremeskel.com**.
- The visual system is a dedicated "Apple Editorial + glow" design system built for this portfolio: a light, warm-white base with SF Pro (Inter as the fallback), hairline cards, pill buttons, an Apple blue accent, and a soft accent "glow" behind the hero.
- Built with **Claude Code** as an intentional, AI-assisted workflow. That is a deliberate choice, documented rather than hidden.
- Stack: Astro, Tailwind CSS v4, Markdown content collections, deployed to GitHub Pages.

## Goals you can verify

The PRD sets the bar as measurable targets rather than adjectives, and most can be checked against the live site:

- Largest Contentful Paint under 1.5 seconds and Lighthouse Performance of 95 or higher.
- Lighthouse Accessibility of 95 or higher, WCAG 2.1 AA, no critical axe-core violations.
- No email address exposed anywhere in the page source.

Run PageSpeed Insights or Lighthouse against the live URL to confirm. The full target list, and how to verify each, is in `docs/PRD.md`.

## Running locally

```
npm install
npm run dev      # local dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # preview the production build
```

Requires Node 18 or newer.

## A note on the research

The market findings behind this approach (how competitive hiring has become, how little time a resume gets, why work samples matter) are cited with sources in `docs/PRFAQ.md` and `docs/PRD.md`.

## Contact

Through the contact form on the live site. My email is intentionally not exposed here or on the site.
