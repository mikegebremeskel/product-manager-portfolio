# Design Direction

> v2.3, last updated 2026-06-19. See [DECISIONS.md](DECISIONS.md).

The visual system is inherited from **Tekky** (mikegebremeskel/tekky), a prior product whose design system is fully defined in code. Reusing those tokens keeps this site consistent with my existing work and removes the design-from-scratch tax.

Source of truth in the tekky repo: `frontend/tailwind.config.ts`, `frontend/src/app/globals.css`, `frontend/src/app/layout.tsx`, `frontend/components.json`.

## Principles (from the PRD)

- **Taste first.** This site is itself a judgment sample, so restraint and polish matter more than features.
- **Content forward.** The work is the hero; chrome stays quiet.
- **Legible artifacts.** Diagrams and screens must be readable, with a way to view them larger (lightbox or full-width).
- **Purposeful motion only.** No animation for its own sake.

## Mode

**Dark, single mode.** Tekky is dark-mode-first and the portfolio inherits that. No light/dark toggle in v1 (PRD §5 non-goal). The case-study artifacts (which were captured against light UIs in their original products) are presented inside cards on the dark surface; image backgrounds remain whatever they were captured as.

## Color tokens

Lifted verbatim from `tailwind.config.ts`.

### Surfaces (background depth scale)

| Token | Hex | Use |
|---|---|---|
| `background.primary` | `#0B0E11` | Page background |
| `background.surface` | `#141920` | Section backgrounds |
| `background.card` | `#1C2330` | Case study cards, artifact frames |
| `background.elevated` | `#243040` | Modals, lightbox, popovers |

### Text

| Token | Hex | Use |
|---|---|---|
| `text.primary` | `#FFFFFF` | Headings, primary body |
| `text.secondary` | `#8A9BB0` | Meta labels, secondary copy |
| `text.muted` | `#4A5568` | Placeholders, disabled states |

### Accent

| Token | Hex | Use |
|---|---|---|
| `accent.green` | `#05C46B` | Positive outcomes ($113K ARR, +80% activation), primary CTA |
| `accent.gold` | `#F5C842` | Award/recognition callouts (Product Hunt #1, This Week in Fintech) |

### Status

| Token | Hex | Use |
|---|---|---|
| `status.red` | `#E53E3E` | Errors (contact form), negative deltas |
| `status.blue` | `#3B82F6` | Informational, link hover |

### Contrast check

`text.primary` on `background.primary` = ~19:1 (passes WCAG AAA). `text.secondary` (#8A9BB0) on `background.primary` = ~6.8:1 (passes AA). `text.muted` is below 4.5:1 and is only used for disabled/placeholder, which is permitted.

## Typography

- **Family:** Inter, loaded via `next/font/google` as `--font-inter` with `display: swap`. All weights available.
- **Fallback stack:** `sans-serif`.
- **Scale:** Tailwind defaults (no custom scale in tekky). The site uses:
  - `text-5xl` / `font-semibold`: home hero headline
  - `text-3xl` / `font-semibold`: case study page title
  - `text-xl` / `font-medium`: section headings, card titles
  - `text-base`: body
  - `text-sm` / `text-text-secondary`: meta labels (role, timeline, competencies)
- **Line height:** Tailwind defaults; body uses `leading-relaxed` for long-form case studies.
- **Text balance:** apply `text-balance` utility (defined in tekky `globals.css`) to headlines.

## Spacing, radius, motion

- **Spacing:** Tailwind default 4px scale (no override in tekky).
- **Radius:** `--radius: 0.5rem` (8px) base; `lg` = `var(--radius)`, `md` = 6px, `sm` = 4px. Cards and the lightbox use `rounded-lg`.
- **Borders:** 1px, `hsl(var(--border))` (shadcn slate dark).
- **Shadows:** None on the page surface (the dark depth scale carries hierarchy). Lightbox uses a subtle elevated shadow only.
- **Motion:** `tailwindcss-animate` is available. Use it sparingly. Page transitions are instant; only the lightbox and contact form state changes animate (fade/scale, ≤200ms).

## Icons

- **Library:** `lucide-react` (the default that ships with shadcn/ui, which tekky uses via `components.json`).
- **Weight:** stroke 1.5, size 16–20px inline with text, 24px in nav.

## Components to define (built from tekky tokens)

- **Header / nav:** name on the left, links right (Work, About, Contact). Sticky, `bg-background-primary/80` with `backdrop-blur`, 1px bottom border.
- **Footer:** LinkedIn, GitHub, and Substack icons (shared `SocialLinks` component), "How this site was built" link to the repo, copyright. Quiet.
- **Case study card** (home index): `bg-background-card`, `rounded-lg`, hover lift to `background-elevated`. Title, one-line hook, thumbnail, competency chips.
- **Case study page layout**:
  - Snapshot block: blockquote treatment on `background-surface`
  - Meta block: two-column grid of label/value pairs, `text-text-secondary` labels
  - Section headings: `text-xl`, generous top spacing
  - Image with caption: full-width within content column, caption in `text-sm text-text-secondary` italic
  - Reflection: large blockquote, accent-gold left border
- **Image / artifact viewer (lightbox):** click any artifact to open at full size on `background-elevated`, dim the page. Closes on Escape and backdrop click.
- **Contact form:** name, email, message, honeypot. Inputs use shadcn slate-dark tokens; success state in `accent.green`, errors in `status.red`.
- **404 page:** minimal: heading, one line, link home.

Added since v1:
- **Home hero:** two-column on desktop (positioning text + headshot), stacking on mobile. Type scales up at `lg` (headline to `text-7xl`).
- **Recognition collage:** overlapping award arrangement ("Loved by users, awarded by peers") modeled on the Talisman site. Awwwards certificate as the base (its dark mat blends into the page), with the Product Hunt badge and three CSSDA medallions overlapping. The black Best UX badge gets a faint light edge so it reads on the dark background.
- **Testimonials:** equal-height cards with bottom-aligned attributions, linked to LinkedIn.
- **Experience timeline:** vertical role list with accent-green dots, plus leadership and honors lists and a contact CTA.
- **Mobile nav:** a no-JS disclosure (hamburger) menu below the `sm` breakpoint.
- **Writing index:** a simple list of essay title + one-line summary, no dates, evergreen framing.
- **Essay page:** eyebrow, title, summary subtitle, long-form prose (shared `.prose-portfolio`), a subtle date at the foot, an author block (headshot, name, Contact button, "See my work", and the shared social icons), and related-essay links.

## Targets this design must hit (from the PRD)

- Lighthouse Performance, Accessibility, and SEO each 95 or higher
- Largest Contentful Paint under 1.5s, Cumulative Layout Shift under 0.1
- WCAG 2.1 AA: contrast at least 4.5:1, alt text on every image, keyboard-navigable nav and form
- Clean on mobile and desktop

## What was deliberately not borrowed from tekky

- The shadcn light-mode CSS variables in `globals.css`: unused, since the portfolio is dark-only.
- Tekky-specific component patterns (stat cards, leaderboards, comparison tables): irrelevant to a portfolio.
