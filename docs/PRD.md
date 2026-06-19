# Portfolio site: product requirements document

| | |
|---|---|
| **Author** | Mike Gebremeskel |
| **Status** | v2.5 (live at mikegebremeskel.com) |
| **Last updated** | June 19, 2026 |
| **Reviewers** | (self) |
| **Related** | README.md, DESIGN.md, DECISIONS.md, src/content |

---

## 1. Summary

A fast, single-purpose personal site that presents Mike Gebremeskel as a product manager through four in-depth case studies. The site is static, hosted free on GitHub Pages under a custom domain, and built from Markdown content so the words stay separate from the code. The public repository doubles as a work sample: it contains this PRD and a clear README, so a reviewer can see not just the finished product but the product thinking and process behind it.

This document is the single source of truth for what the site must do. Design and stack details live in DESIGN.md and are finalized during the build.

---

## 2. Background and problem

Mike is applying for product manager roles. A resume and a generic profile link compress years of real product work into a few lines and a job title. They cannot show how he thinks, what he decided and why, or what he actually shipped.

The market context is concrete, not abstract. The average corporate role drew about 180 applicants per hire in 2024, with roughly a 3% interview rate ([CareerPlug, 2024](https://www.careerplug.com/recruiting-metrics-and-kpis/)), and recruiters spend an average of 7.4 seconds on a first resume scan ([Ladders eye-tracking study](https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/)). Meanwhile, work samples are among the strongest predictors of job performance ([Schmidt & Hunter meta-analysis](https://www.plum.io/blog/schmidt-hunter-meta-analysis)), and fewer than one in six product managers have a portfolio ([Aakash Gupta](https://www.aakashg.com/product-manager-portfolio-examples/)). A portfolio is the highest-leverage response to all four facts.

He has the raw material: four strong case studies grounded in real artifacts (a Jobs-to-be-Done map, process maps from customer discovery, shipped product screens, and outcomes including award wins and revenue). The gap is a credible, self-owned place to present them that a recruiter can scan in under a minute and a hiring manager can dig into for depth.

A portfolio site solves this. Building it in the open, driven by a PRD, also turns the site into a second piece of evidence: proof of product writing, scoping, and shipping for the reviewers who look closely.

---

## 3. Objectives and success metrics

Every objective has a measurable target and a way to verify it against the live site or the repo. That is deliberate: the point of this build is to walk the walk, so the claims are checkable, not just stated.

| Objective | Target (measurable) | How a reviewer can verify |
|---|---|---|
| Load fast | Largest Contentful Paint under 1.5s on a standard connection; Lighthouse Performance score 95 or higher | Run PageSpeed Insights or Lighthouse against the live URL |
| Communicate positioning fast | A first-time visitor can state Mike's positioning within 15 seconds | Five-second test with 3 to 5 people |
| Show depth in one click | Every case study is one click from the home page and presents problem, process, outcome, and a real artifact | Click through the live site |
| Accessible to everyone | WCAG 2.1 AA; Lighthouse Accessibility 95 or higher; no critical axe-core violations; contrast at least 4.5:1 | Run Lighthouse or axe against the live URL |
| Demonstrate design taste | One consistent visual system (type scale, color, spacing, icons) applied cleanly across every page and breakpoint | Inspect on desktop and mobile; review the design tokens in the repo |
| Convert interest into contact | A visitor can reach Mike through the contact form with no email exposed anywhere | Submit the form; search the page source for any email string |
| Stand as a work sample | The repo, PR/FAQ, and PRD read as evidence of how Mike works | Read the repo |
| Effortless to maintain | Any case study is edited by changing one Markdown file, no code | Inspect the /content folder in the repo |

Non-metrics (explicitly not chasing): traffic volume, SEO ranking for competitive terms, time-on-page. This is a conversion tool for a small, high-intent audience, not a content site.

---

## 4. Target users and jobs to be done

**Primary: the recruiter or sourcer (30-second scan).**
"When I open this link, I want to quickly understand who this person is and whether they fit the role, so I can decide to move them forward." Needs: instant positioning, clear roles and outcomes, an obvious way to save or share.

**Primary: the hiring manager (depth evaluation).**
"When I am seriously considering this candidate, I want to see how they actually think and what they have shipped, so I can decide whether to interview." Needs: full case studies, real artifacts, honest outcomes, evidence of judgment.

**Secondary: the PM-savvy reviewer (peeks at the repo).**
"I want to see whether this person can really do the work, so I will look at how they built the site itself." Needs: a readable PRD, a clean repo, clear decisions.

**Internal: Mike (maintenance).**
"I want to add or update a case study quickly without breaking anything." Needs: Markdown content, simple structure, one-command deploy.

---

## 5. Scope

**In scope (v1, shipped):**
- Home page with positioning, a hero with a photo, links to all case studies, an awards Recognition collage, and testimonials
- Four case study pages: Finding the wedge, Subscription activation, Accountant transaction workflow, How I run product
- About page (with headshot and a personal narrative)
- Experience page: role timeline, education, leadership and community, and honors, ending in a contact CTA (no resume download by design)
- Writing section: a growing set of thought-leadership essays, each editable as a single Markdown file, with an author CTA and related links per essay
- Contact form that does not expose Mike's email address
- Responsive layout (mobile and desktop), including a mobile nav menu
- Custom domain, hosted on GitHub Pages
- Public repo with README, this PRD, and a decision log

**Out of scope (v1, non-goals):**
- Blog or articles
- A CMS or admin interface (content is Markdown in the repo)
- User accounts, comments, or any login
- Analytics dashboards or A/B testing
- Dark/light theme toggle unless trivial in the chosen design system
- Animation beyond light, purposeful motion
- Resume download (deferred beyond v1)

---

## 6. Information architecture

```
/                       Home (positioning, case study index, recognition, testimonials)
/work/finding-the-wedge
/work/subscription-activation
/work/accountant-transaction-workflow
/work/how-i-run-product
/experience             Role timeline, education, leadership, honors
/writing                Thought-leadership essays (index)
/writing/<slug>         Individual essay
/about
/contact
```

Global navigation: Work, Writing, Experience, About, Contact (a hamburger menu on mobile). Persistent header with name linking home. Footer with LinkedIn, GitHub, and Substack icons and a contact link; the contact page and essay author blocks surface the same set. No exposed email anywhere.

---

## 7. Content model

Content lives as Markdown files in `/content`, one per page. Each case study follows a fixed schema so the set reads consistently:

- **Title** and **one-line summary**
- **Snapshot** (the TL;DR a scanner reads first)
- **Role, timeline, who I worked with, competencies**
- **Problem** (or Opportunity)
- **What I did and why** (the process and judgment)
- **Outcome** (honest, defensible results)
- **Artifact(s)** (image with caption)
- **Reflection** (one honest line)

The About page covers who Mike is, the kind of work he wants, and a short credibility line. The Contact page is the form only.

---

## 8. Functional requirements

**Home**
- States the positioning above the fold.
- Shows the four case studies as cards or a list, each with title, one-line hook, and a thumbnail.
- Links to About and Contact.

**Case study pages**
- Render the Markdown content per the schema in section 7.
- Display artifact images with captions; images open larger on click (lightbox or full-width) so dense diagrams are legible.
- Include previous/next navigation between case studies.

**About**
- Renders the About Markdown. Includes a photo (optional).

**Contact form**
- Fields: name, email (theirs), message. Optional: company, role.
- Submits without revealing Mike's email address. Uses a static-site-friendly form service (for example Formspree or Getform) that forwards submissions to Mike's inbox.
- Includes lightweight spam protection (honeypot field at minimum).
- Shows a clear success and error state after submission.

**Global**
- Header nav and footer on every page.
- 404 page.
- All outbound links open appropriately; no broken links.

---

## 9. Non-functional requirements

- **Performance:** Lighthouse Performance 95 or higher. Largest Contentful Paint under 1.5s and Cumulative Layout Shift under 0.1 on a standard broadband connection. Static pages, optimized and lazy-loaded images, lean initial page weight.
- **Accessibility:** WCAG 2.1 AA. Lighthouse Accessibility 95 or higher and no critical axe-core violations. Semantic headings, alt text on every image, keyboard-navigable nav and form, color contrast at least 4.5:1.
- **Responsive:** clean on mobile and desktop. Dense artifact images remain readable through zoom or a larger view.
- **SEO basics:** Lighthouse SEO 95 or higher. Title and meta description per page, Open Graph tags so the link previews well when shared.
- **Browser support:** current versions of major browsers.
- **Privacy:** no email exposed on the site or in the repo. No third-party tracking beyond what the form service requires.
- **Hosting:** GitHub Pages, custom domain via CNAME, HTTPS enforced.

---

## 10. Design

Design direction is finalized during the build (see DESIGN.md). Key input: the visual system is inherited from a prior tool Mike built, which has a fully defined design system including fonts and icons. The site should borrow those tokens (typography, color, spacing, iconography) so it feels consistent with his existing work and saves design time.

Principles to hold:
- Taste first. This site is itself a judgment sample, so restraint and polish matter more than features.
- Content forward. The work is the hero; chrome stays quiet.
- Legible artifacts. Diagrams and screens must be readable, with a way to view them larger.
- Purposeful motion only.

---

## 11. Technical approach and constraints

- **Static site**, content authored in Markdown, separated from presentation.
- **Hosting:** GitHub Pages from a public repository.
- **Custom domain:** mikegebremeskel.com, configured via a `public/CNAME` file and served at the root path. DNS (A and AAAA records for the apex, CNAME for www) is set at the Squarespace registrar.
- **Contact form:** GitHub Pages has no backend, so the form posts to a third-party form service that emails Mike. This is a deliberate constraint to keep hosting free and simple.
- **Build assistant:** built with Claude Code as an intentional, AI-assisted workflow. This is documented in the README rather than hidden.
- **Repo hygiene:** clear README, this PRD in /docs, content separated from code, meaningful commits.

---

## 12. Milestones and phasing

- **v1 (launch):** all four case studies, home, about, working contact form, responsive, deployed to GitHub Pages. ✅ Done.
- **v1.1 / v2:** custom domain (mikegebremeskel.com) connected; Experience page, awards Recognition collage, and testimonials added; design polish from the inherited system. ✅ Done. (HTTPS enforcement auto-applies once GitHub issues the certificate.)
- **v2 (later, optional):** light analytics if wanted, additional case studies, small motion polish.

---

## 13. Risks, assumptions, and decisions

- **Confidentiality:** case study artifacts come from a former company. Decision: use redacted versions only, describe rather than reproduce anything proprietary. All client and personal names in artifacts are removed before publishing.
- **Static form limitation:** no backend on GitHub Pages. Decision: use a hosted form service rather than stand up a server, accepting a light third-party dependency.
- **Meta-framing risk:** presenting the repo as a work sample only helps if the site itself is excellent. Decision: the live site must stand fully on its own; the repo is a depth layer, never an excuse for a weaker site.
- **Domain dependency (resolved):** the build proceeded on the github.io URL, then the custom domain (mikegebremeskel.com) was connected by adding a CNAME and switching the base path to root, with no rework needed.
- **Scope creep:** the temptation is to add a blog, animations, theming. Decision: hold v1 to the scope in section 5.

---

## 14. Open questions

Resolved (see DECISIONS.md):
- Stack: Astro + Tailwind v4 + MDX, deployed to GitHub Pages via Actions.
- Design direction: tekky tokens, dark mode only.
- Form service: Formspree (live).
- Headshot: included on the home hero and the About page.

Still open:
- The About "what I care about" narrative is a draft pending Mike's edit.

Recently resolved:
- Custom domain: mikegebremeskel.com purchased and connected (CNAME in `public/`, base served at root).

---

## 15. Appendix

- Source content currently lives in the Notion portfolio; it will be exported to Markdown for the repo.
- Case study set and competencies covered: Finding the wedge (product strategy), Subscription activation (execution and data-driven iteration), Accountant transaction workflow (zero-to-one in a new market), How I run product (operating: prioritization, specs, quality).

### References

- CareerPlug, 2024 Recruiting Metrics and Benchmarks: https://www.careerplug.com/recruiting-metrics-and-kpis/
- Ladders eye-tracking study (recruiters spend ~7.4s on a first resume scan), via HR Dive: https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/
- Schmidt & Hunter (1998) meta-analysis on predictors of job performance, summary via Plum: https://www.plum.io/blog/schmidt-hunter-meta-analysis
- Aakash Gupta, Product Manager Portfolio Examples: https://www.aakashg.com/product-manager-portfolio-examples/
