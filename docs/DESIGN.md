# Design Direction

> v3.0, last updated 2026-06-19. See [DECISIONS.md](DECISIONS.md).

The visual system is a dedicated **"Apple Editorial + glow"** design system built for this portfolio (the `mike-gebremeskel-design` Claude Design skill). It replaces the earlier dark, tekky-derived look. The skill is the brand source of truth (tokens, type, components, guidelines, a reference UI kit); this site's `src/styles/global.css` mirrors the subset it needs.

The direction: a light, warm-white, maximally-restrained base (true **SF Pro** via the Apple system stack, oversized tight-tracked headlines, hairline-bordered cards, almost no shadow) with one signature flourish borrowed from Linear, a soft accent **glow** behind hero moments. Inspirations: Apple, Teenage Engineering (kept subtle, monospace micro-labels only), Linear, and gettalisman.com.

## Principles (from the PRD)

- **Taste first.** This site is itself a judgment sample, so restraint and polish matter more than features.
- **Content forward.** The work is the hero; chrome stays quiet.
- **Legible artifacts.** Diagrams and screens must be readable, with a way to view them larger (lightbox or full-width).
- **Purposeful motion only.** No animation for its own sake; all motion respects `prefers-reduced-motion`.
- **Accessibility is non-negotiable.** Every text/background pairing meets WCAG 2.1 AA or better; status is never color-only; focus is always visible.

## Mode

**Light, single mode.** Warm white page, Apple-gray sections, white cards. No dark mode and no light/dark toggle (PRD §5 non-goal). Hierarchy comes from a four-step surface scale plus hairline borders, not shadow. Case-study artifacts and diagram SVGs (white-background figure cards) sit inside hairline-bordered frames on the warm-white page, so they stay legible.

## Color tokens

Defined in `src/styles/global.css` (Tailwind v4 `@theme`). Component markup references them as `var(--color-*)`.

### Surfaces (background depth scale)

| Token | Hex | Use |
|---|---|---|
| `bg-primary` | `#FBFBFD` | Page background (Apple warm white) |
| `bg-surface` | `#F5F5F7` | Alternating sections, form inputs |
| `bg-card` | `#FFFFFF` | Cards, artifact frames |
| `bg-elevated` | `#FFFFFF` | Modals/popovers (paired with a shadow) |

### Text

| Token | Hex | Use |
|---|---|---|
| `text-primary` | `#1D1D1F` | Headings, primary body (~17:1) |
| `text-secondary` | `#6E6E73` | Meta labels, secondary copy (~4.9:1) |
| `text-muted` | `#86868B` | Placeholders, UI-only (large text) |

### Accent (custom: lavender brand + readable violet)

The accent is a single swappable brand color. Mike chose lavender `#ADA8FF`. Because that hue is light, the role splits so every pairing stays AA:

| Token | Hex | Use |
|---|---|---|
| `accent` | `#ADA8FF` | Button fills, the glow, decorative accents |
| `accent-hover` | `#9B95FF` | Button hover |
| `accent-strong` | `#5B50D6` | Links, focus rings, accent text on light (~5.8:1) |
| `accent-contrast` | `#1D1D1F` | Dark ink text on a lavender fill (~7.9:1) |
| `positive` | `#00875A` | Positive outcomes/metrics, form success (~4.6:1) |
| `accent-gold` | `#B7791F` | Awards/recognition only (~4.5:1) |

`--color-accent-green` is kept as a back-compat alias to `--color-accent-strong`, so prior references resolve to the readable violet automatically.

### Status & lines

| Token | Value | Use |
|---|---|---|
| `status-red` | `#D70015` | Errors, negative deltas |
| `status-blue` | `#0071E3` | Informational |
| `border` | `rgba(0,0,0,0.08)` | Hairline dividers, card borders |
| `border-strong` | `rgba(0,0,0,0.14)` | Hover/emphasized edges, inputs |

### The glow

The signature motif: a feathered, low-opacity radial bloom in the accent hue behind hero content. Implemented as `--glow-hero` / `--glow-spot` and the `.glow-field` utility (an absolutely-positioned, masked, pointer-events-none layer). Used sparingly: the home hero. Optional slow 9s `breathe`, gated behind reduced-motion.

## Typography

- **Family:** SF Pro via the Apple system stack (`-apple-system, BlinkMacSystemFont, ...`); self-hosted **Inter Variable** (`@fontsource-variable/inter`) is the cross-platform fallback, preloaded in `BaseLayout.astro`. No webfont CDN. Mono labels use a system `ui-monospace` stack (SF Mono).
- **Weights:** 400 / 500 / 600 only (Apple tops out at 600).
- **Display:** large and tight; the home hero uses `--tracking-tighter` (`-0.035em`). Headings use `--tracking-tight`. `text-balance` on headlines.
- **Body:** 16px at `line-height: 1.75`; prose measure 65ch.
- **Eyebrows:** the one Teenage-Engineering touch, a mono uppercase micro-label (`.eyebrow` utility): `font-mono`, 0.75rem, `letter-spacing: 0.08em`, in `text-secondary`.

## Spacing, radius, motion

- **Spacing:** Tailwind default 4px scale; generous section rhythm (80–96px).
- **Radius:** `sm` 4px, `md` 6px, `lg` 8px, `2xl` 16px (cards, hero photo), `full` (pill buttons).
- **Borders:** 1px hairlines (`border` / `border-strong`).
- **Shadows:** essentially none on the page. Reserved for floating things: the award collage (`--shadow-collage`) and the lightbox/popovers (`--shadow-overlay`). Cards lift 2px and strengthen their border on hover, no shadow.
- **Motion:** calm decelerate easing (`--ease-out`); 150ms hover color shifts; a 500ms transform-only scroll reveal (`.reveal`, gated by `.motion-ready` from `reveal.ts` so content is never hidden if JS fails); a 9s glow breathe. All respect `prefers-reduced-motion`.

## Icons

- Inline brand-glyph SVGs for LinkedIn / GitHub / Substack (shared `SocialLinks`), `currentColor`, secondary → primary on hover. No emoji.

## Components

- **Header / nav:** name left (with a trailing accent period brand mark, `Mike Gebremeskel.`), links right. Sticky and transparent at the top, fading to a translucent `blur(20px)` white once scrolled (`#site-header.is-scrolled`).
- **Footer:** shared `SocialLinks`, "How this site was built" repo link, copyright. Quiet.
- **Case study card** (home): white surface, 16px radius, 1px hairline; hover = 2px lift + `border-strong`; title goes to `accent-strong`.
- **Case study page:** eyebrow, title, summary, competency chips, a meta grid, long-form `.prose-portfolio`, prev/next nav.
- **Recognition collage:** overlapping award arrangement ("Loved by users, awarded by peers"). On light, each piece gets a soft drop-shadow (`--shadow-collage` / `--shadow-overlay`) so it reads as a floating object; no white-edge hack.
- **Testimonials:** equal-height hairline cards, hover-lift, linked to LinkedIn.
- **Experience timeline:** vertical role list with accent dots, leadership and honors lists, a pill contact CTA.
- **Contact form:** inputs on `bg-surface` with hairline borders; pill **Send** button (lavender fill, dark ink); success in `positive`, errors in `status-red`; Formspree, no email in source.
- **Lightbox:** click any article image to open full-size on a neutral dark scrim; Escape / backdrop to close.
- **Buttons:** full pills (`--radius-full`); primary = lavender fill + dark ink, hover to `accent-hover`.
- **404:** minimal eyebrow, heading, one line, link home.

## Targets this design must hit (from the PRD)

- Lighthouse Performance, Accessibility, and SEO each 95 or higher (current: 96 / 100 / 100, best-practices 100).
- Largest Contentful Paint under 1.5s, Cumulative Layout Shift under 0.1.
- WCAG 2.1 AA: contrast at least 4.5:1, alt text on every image, keyboard-navigable nav and form, visible focus.
- Clean on mobile and desktop.

## Relationship to the design-system skill

`~/.claude/skills/mike-gebremeskel-design/` holds the full system (token CSS, React reference components, a portfolio UI kit, guideline specimen cards, brand assets). It is local tooling (gitignored), not part of this repo. When the brand evolves, update the skill, then re-port the affected tokens/components here.
