# Decision log

The running record of significant decisions and document versions for this project. Update this whenever a decision changes the product or a doc materially. Newest entries first.

## Document versions

| Document | Version | Last updated |
|---|---|---|
| [PRD.md](PRD.md) | v2.10 | 2026-06-19 |
| [PRFAQ.md](PRFAQ.md) | v1.3 | 2026-06-19 |
| [DESIGN.md](DESIGN.md) | v2.5 | 2026-06-19 |
| [DECISIONS.md](DECISIONS.md) | v1.14 | 2026-06-19 |
| [../README.md](../README.md) | v1.4 | 2026-06-19 |
| [../ASSETS.md](../ASSETS.md) | v2.5 | 2026-06-19 |

Versioning convention: bump the minor (v1 to v1.1) for edits and clarifications; bump the major (v1 to v2) for a structural change or a reversed decision.

## Decisions

### 2026-06-19 (experience synced to resume v8)

- **Leadership & community** reordered reverse-chronologically and synced to resume v8: ASPIRE ERG now shows both roles (Ambassador 2017–2018, then National Team Operations Lead 2018–2020, replacing the old 2019–2022); Toastmasters corrected to 2017–2020 with "President and inaugural Sergeant at Arms"; added the EOS Committee (McKesson Master Data, 2017–2019).
- **Honors & recognition** reordered reverse-chronologically: TPN National Leader of the Year (2024), On Deck Fellow (2021), TPN Dallas Leader of the Year (2021), TMAA Lekatit 11 Speech Contest Winner (2019), MDM Innovation Contest (2017). (The TMAA entry was briefly dropped, then restored at Mike's request; it belongs in the set.)

### 2026-06-19 (RSS feed for Substack)

- **Added a full-content RSS feed** at `/rss.xml` (all 20 essays, body rendered to HTML with absolute asset/internal links), plus `<link rel="alternate">` autodiscovery. Good for the portfolio on its own and the cleanest source for syndicating to Substack.
- **Substack plan (decided):** keep the portfolio as the canonical home; backfill the 20 essays to Substack as web-only, backdated archive posts (no email blast), then drip new essays on a cadence. SVG diagrams will need PNG versions for Substack. Starting with a test import of 2-3 essays before the full batch.

### 2026-06-19 (essay re-sync, follow-ups)

- **Foogin' essay (37) re-dated to September 2024** (the index had October; Mike's call wins) and the explicit word in the "Foogin'" origin lightly masked to `f***ing` to stay recruiter-safe while keeping the story and source. Note: the source folder still has the full word, so a future re-sync would need the mask reapplied.
- **PRD (v2.9) and PR/FAQ (v1.3) updated** to reflect the 20-essay Writing collection with inline diagrams and preserved source citations.

### 2026-06-19 (essay re-sync from folder)

- **Re-synced the Writing section from the source folder** via a deterministic script, so every live essay matches the source exactly. Added two new essays: 36 "AI didn't write this portfolio. My own archive did." (capstone) and 37 "The Foogin' Standards." Writing is now 20 essays.
- **Source-note policy** (per Mike): keep the publishable `Source:`/`Sources:` citations (LinkedIn posts, The Athletic) and all image captions; strip the internal "Source moments / Context (for your reference, not for publishing)" notes and the "Note for you / Companion to Essay" asides.
- **Six inline SVG diagrams** wired in (02, 03, 22, 30, 36, 37), rendered as white figure cards (lightbox-enabled). The seventh diagram in the folder (18) was not used because essay 18 is not published.
- **Dates and one-line hooks from `00_INDEX.md`** as the source of truth. Notably 01/02/03 moved from a placeholder June 2026 to Oct/Nov/Dec 2025, so they reorder down the index.
- **Flags raised:** essay 02 references essay 28 ("The Leap, and the Rejection That Found the Wedge"), which is not in the published set; essay 37 includes the phrase explaining the "Foogin'" name. Both left as written, pending Mike's call.

### 2026-06-19 (writing expanded)

- **Writing grew to 18 essays.** Added 15 more (on listening to behavior, the operator role, finding domain experts, quality, specs, speed, culture, buy-in, naming, AI judgment, and lived experience). Each essay carries a real "written" month as its date. The "source moments / not for publishing" footers and the screenshot placeholders were stripped; the original LinkedIn-post blockquotes were kept where present (culture, buy-in, lived experience). Titles sentence-cased. Essays are cross-linked via `related`.
- **Writing index now shows dates and sorts newest first** (reverses the earlier "no dates, evergreen" call, per Mike's request). The risk that dates make a paused blog look stale is mitigated by volume and by Mike continuing to add essays.
- **Speed essay screenshots added.** The three image slots in "Speed is a form of respect" are now filled: the 6:33am Slack report and 6:35am reply, the root cause and 11:43am verification, and the CEO's public LinkedIn recap (rare third-party validation). Optimized and lightbox-enabled; the customer's name is anonymized.

### 2026-06-19 (corrections, accessibility)

- **Nav: "Work" renamed to "Home"** and pointed at the home root (`/`) rather than the `#work` anchor.
- **Fixed an ARR timeframe inconsistency.** The accountant case study said "first five months" while the Experience page and résumé said "four months." Both the snapshot and outcome now say "four months." Conflicting numbers on the same site undermine credibility.
- **Reworded the venture-backed line.** "Venture-backed, co-founder of Talisman" implied the person was venture-backed. Changed to "Co-founder of venture-backed Talisman and the PM behind its award-winning launch," in the hero, the meta description, and the og:description.
- **Case study card link accessibility.** The whole card was one anchor, so a screen reader announced the entire card text as the link name. Switched to a stretched-link pattern: only the title is the link (its accessible name), the card stays fully clickable, and focus rings the card.
- **Performance and contrast pass (Lighthouse).** Optimized images (resized and recompressed: Awwwards 3MB to 33KB, the earliest prototype 4.6MB to 193KB, and the rest down proportionally), preloaded the Inter web font (the home page's LCP text was waiting on it), and stopped using the muted text token for real content (it failed WCAG AA contrast; switched those to the secondary token). Verified with Lighthouse on the home page: Performance 96, Accessibility 100, SEO 100 (LCP 2.9s, CLS 0).

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
