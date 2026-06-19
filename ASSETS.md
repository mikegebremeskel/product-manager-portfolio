# Image asset manifest

> v2.2, last updated 2026-06-19. See [docs/DECISIONS.md](docs/DECISIONS.md).

All images live in `public/assets/`. The Markdown in `src/content/` and the page components reference them by these exact filenames, so keep the names as-is.

## Case study artifacts

| File | Used in |
|---|---|
| `jtbd-board.png` | Finding the wedge |
| `sub-before-prototype.png` | Subscription activation (earliest prototype, the "before") |
| `sub-spend-overview-2.png` | Subscription activation (Spend Overview 2.0) |
| `sub-spend-overview-3.png` | Subscription activation (revamped "after") |
| `onboarding-1-connect.png` | Accountant transaction workflow |
| `onboarding-2-companies.png` | Accountant transaction workflow (client emails redacted) |
| `onboarding-3-request.png` | Accountant transaction workflow |
| `onboarding-4-clientadded.png` | Accountant transaction workflow |
| `process-map.png` | Accountant transaction workflow (names redacted) |
| `accountant-onboarding-flow.png` | Accountant transaction workflow |

## Photo

| File | Used in |
|---|---|
| `hero.jpeg` | Home hero (portrait) |
| `headshot.jpeg` | About page |

## Recognition (home Recognition collage)

| File | What it is |
|---|---|
| `producthunt-1-saas.svg` | Recreated Product Hunt "#1 SaaS Product of the Week" badge (static; the live embed is dynamic and drifts) |
| `awwwards-honors.png` | Awwwards Honors certificate (dark mat blends into the dark page) |
| `cssda-best-ui.png` | CSSDA Best UI Design medallion |
| `cssda-best-ux.png` | CSSDA Best UX Design medallion |
| `cssda-best-innovation.png` | CSSDA Best Innovation medallion |

## Also in public/

- `favicon.svg`: green "MG" monogram on the dark background.
- `og.png`: the 1200x630 social share card (Open Graph / Twitter image). A branded statement card, not a photo, generated from `scripts/og-card.html` and referenced in `BaseLayout.astro`.
- `CNAME`: custom domain (mikegebremeskel.com).

## Notes

- Every case study artifact is already redacted where needed (client names on the process map, client emails on the bulk-add screen).
- Awwwards and CSSDA marks are framed honestly as team design recognition, not Mike's personal design work. See [docs/DECISIONS.md](docs/DECISIONS.md).
- Images are optimized and lazy-loaded at build time to meet the performance targets in the PRD.
