# Design Direction

> Stub. Fill this in with Claude Code during the build, drawing the tokens, fonts, and icons from the design system of the prior tool.

## Principles (from the PRD)

- **Taste first.** This site is itself a judgment sample, so restraint and polish matter more than features.
- **Content forward.** The work is the hero; chrome stays quiet.
- **Legible artifacts.** Diagrams and screens must be readable, with a way to view them larger (lightbox or full-width).
- **Purposeful motion only.** No animation for its own sake.

## Source design system

The visual system is inherited from a prior product I built, which has a fully defined design system. Reuse its tokens so the site feels consistent with my existing work and saves design time.

To fill in with Claude Code:

- **Color tokens:** _[paste from the existing system: background, surface, text, accent, muted, border, success/error]_
- **Typography:** _[font families for headings and body, the type scale, weights, line heights]_
- **Spacing scale:** _[the spacing steps and base unit]_
- **Icons:** _[the icon set / library used in the existing system]_
- **Radius, shadows, borders:** _[fill in]_

## Components to define

- Header / nav and footer (footer carries the LinkedIn link and the "how this site was built" colophon link to the repo)
- Case study card (home index): title, one-line hook, thumbnail
- Case study page layout: snapshot block, meta block (role, timeline, worked with, competencies), section headings, image with caption, reflection block
- Image / artifact viewer (click to enlarge dense diagrams)
- Contact form (name, email, message; honeypot; success and error states)
- 404 page

## Targets this design must hit (from the PRD)

- Lighthouse Performance, Accessibility, and SEO each 95 or higher
- Largest Contentful Paint under 1.5s, Cumulative Layout Shift under 0.1
- WCAG 2.1 AA: contrast at least 4.5:1, alt text on every image, keyboard-navigable nav and form
- Clean on mobile and desktop
