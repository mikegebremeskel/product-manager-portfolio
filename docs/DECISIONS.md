# Decision log

The running record of significant decisions and document versions for this project. Update this whenever a decision changes the product or a doc materially. Newest entries first.

## Document versions

| Document | Version | Last updated |
|---|---|---|
| [PRD.md](PRD.md) | v2.6 | 2026-06-19 |
| [PRFAQ.md](PRFAQ.md) | v1.2 | 2026-06-19 |
| [DESIGN.md](DESIGN.md) | v2.3 | 2026-06-19 |
| [DECISIONS.md](DECISIONS.md) | v1.7 | 2026-06-19 |
| [../README.md](../README.md) | v1.4 | 2026-06-19 |
| [../ASSETS.md](../ASSETS.md) | v2.3 | 2026-06-19 |

Versioning convention: bump the minor (v1 to v1.1) for edits and clarifications; bump the major (v1 to v2) for a structural change or a reversed decision.

## Decisions

### 2026-06-19 (HTTPS live, docs, tidy)

- **HTTPS live.** GitHub issued the certificate and Enforce HTTPS is on. The site serves over HTTPS at mikegebremeskel.com, and HTTP redirects to it. (No CAA record was blocking issuance; it just took longer than the first watcher's window.)
- **Case study and essay cross-linked.** "Finding the wedge" links to the essay "Find the wedge, then narrow it again," and the essay links back, so the two reinforce each other instead of feeling redundant.
- **PRD and PR/FAQ brought fully current.** Both now reflect everything shipped: Experience, Writing, Recognition, testimonials, the About narrative, social links, the custom domain, and the Open Graph image. The PR/FAQ scope was reconciled (the Writing section is a small curated set, not the "blog" the original ruled out).
- **Repo tidy.** Moved the Open Graph card source to `scripts/og-card.html`, stopped tracking the local preview config (`.claude/` is now gitignored), and aligned the Markdown base-path default with the root build so local and CI builds match.

### 2026-06-19 (writing section)

- **Social links unified, Substack added.** A shared `SocialLinks` component (LinkedIn, GitHub, Substack) now renders in the footer, the contact page, and the essay author block. The essay author block was simplified to just the name plus actions and icons (dropped the title and the "exploring roles" line).
- **Writing section added.** New top-level "Writing," chosen over "Blog" or "Essays" per research: it reads as curated and senior and carries no implied posting cadence, so it never looks abandoned. Three essays published (write it down, find the wedge, teach your team to think in outcomes) as a `writing` content collection. The index is a simple title and summary list with no dates (evergreen framing). Each essay page has an author and contact CTA footer, related-essay links, and Article JSON-LD for SEO. The "source moments, not for publishing" footers were stripped, and titles were sentence-cased to match the site. Nav is now Work, Writing, Experience, About, Contact (mobile uses the hamburger). To add an essay: drop a Markdown file in `src/content/writing/` with title, summary, date, and order. No code changes.
- **Prose CSS centralized** into `global.css`, so case studies, About, and essays share one source.
- **Voice pass (decided, rollout pending).** Moderate intensity: adopt the voice guide's mechanics (short sentences, named opinions, the why, an occasional reader question and analogy) but not the Slack-only casual lexicon. Calibrate on one case study before applying across the rest. The voice and style guide stays out of the repo (it is built from private Slack history). The three essays are the voice reference standard.

### 2026-06-19 (later)

- **Social share card (Open Graph image).** Instead of letting platforms grab a photo, added a branded 1200x630 card (`public/assets/og.png`): the positioning line on the dark brand background with the MG monogram, name, and URL. Wired into `BaseLayout.astro` as `og:image` and `twitter:image`. Treated as a chance to show design taste. Monogram, name, and accents use the gold token (`#F5C842`). Source markup kept at `scripts/og-card.html` (rendered via headless Chrome, downscaled with sharp).
- **Custom domain live.** mikegebremeskel.com wired up: added `public/CNAME`, switched the build base from `/product-manager-portfolio` to root (`/`), and registered the domain with GitHub Pages. DNS configured at the Squarespace registrar (deleted the Squarespace Defaults preset; added four A and four AAAA records for the apex plus a `www` CNAME to `mikegebremeskel.github.io`). Site verified serving over HTTP; HTTPS enforcement auto-applies once GitHub issues the TLS certificate. The github.io URL redirects to the custom domain.
- **Home hero copy.** Tightened to "Venture-backed, co-founder of Talisman. PM for its award-winning launch."
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
