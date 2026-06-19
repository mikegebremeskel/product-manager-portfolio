# Decision log

The running record of significant decisions and document versions for this project. Update this whenever a decision changes the product or a doc materially. Newest entries first.

## Document versions

| Document | Version | Last updated |
|---|---|---|
| [PRD.md](PRD.md) | v2.1 | 2026-06-19 |
| [PRFAQ.md](PRFAQ.md) | v1.1 | 2026-06-19 |
| [DESIGN.md](DESIGN.md) | v2.1 | 2026-06-19 |
| [DECISIONS.md](DECISIONS.md) | v1.1 | 2026-06-19 |
| [../README.md](../README.md) | v1.1 | 2026-06-19 |
| [../ASSETS.md](../ASSETS.md) | v2.1 | 2026-06-19 |

Versioning convention: bump the minor (v1 to v1.1) for edits and clarifications; bump the major (v1 to v2) for a structural change or a reversed decision.

## Decisions

### 2026-06-19 (later)

- **Home hero photo finalized.** Swapped the hero to a dedicated portrait (`hero.jpeg`), optimized for the web; the About page keeps the original headshot.
- **Contact page warmth and channels.** Reworded the intro to be inviting rather than private, and added LinkedIn and GitHub icon links for people who prefer those over the form.
- **Footer GitHub.** Added a GitHub profile icon next to LinkedIn.
- **Leadership and honors ordered reverse-chronologically** (resume style, most recent first).

### 2026-06-19

- **Hero photo on the home page.** Added a headshot to the home hero (two-column on desktop, stacked on mobile) to humanize the page. Backed by portfolio research that a photo helps for a PM. *Affects: home.*
- **Experience page added to scope.** New `/experience` page with a role timeline (from the master resume), education, leadership and community, and honors. Deliberately no resume download: the page ends in a contact CTA so resume requests come through the form, which also signals real interest. *Affects: PRD scope and IA, nav.*
- **Mobile nav menu.** With four nav links, a no-JS disclosure (hamburger) menu was added for small screens to prevent overflow. *Affects: header.*
- **Contact form is live on Formspree** (endpoint `xeewbbqj`) and restyled to match the card design language. Email stays out of the page source. *Resolves PRD open question on form service.*
- **Decision log started.** Adopted this file plus per-doc versioning so changes are traceable, since the PRD referenced a DECISIONS.md that did not exist yet.

### 2026-06-18

- **Awards framing (honesty).** Product Hunt is presented as Mike's launch result. Awwwards and CSSDA are presented as design recognition the team earned together with the design partners, not claimed personally. The home "Recognition" section is an overlapping collage modeled on the Talisman site. The Product Hunt "#1 SaaS Product of the Week" badge was recreated as a static SVG because the live embed badge is dynamic and now shows a different rank. *Affects: home.*
- **Testimonials from LinkedIn.** Four recommendations shown as cards, linked to Mike's LinkedIn recommendations, ordered Chiko, Ananda, Kyndra, Jawad. *Affects: home.*
- **Content style: no em dashes, sentence case.** All site copy avoids em dashes and uses sentence case except proper nouns. Applied to site content and docs. *Affects: all content.*
- **Stack: Astro + Tailwind v4 + MDX, deployed to GitHub Pages via Actions.** Chose Astro over Next.js because the PRD targets (LCP under 1.5s, Lighthouse 95+, static hosting, Markdown-first) favor Astro's near-zero-JS output. The tekky design tokens port as CSS custom properties. *Resolves PRD open questions on stack.*
- **Design system inherited from tekky, dark mode only.** Tokens (color, Inter, radius, lucide icons) lifted from the prior product. No light/dark toggle in v1. *See DESIGN.md.*
- **Public repo created** at github.com/mikegebremeskel/product-manager-portfolio, structured with docs/ for PR/FAQ, PRD, DESIGN, and content in src/content.
