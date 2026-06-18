# Image asset manifest

All images live in `public/assets/`. The Markdown in `content/` references them by these exact filenames, so keep the names as-is.

## Present in `public/assets/`

| File | Used in |
|---|---|
| `jtbd-board.png` | Finding the Wedge |
| `sub-before-prototype.png` | Subscription Activation (the earliest hand-built prototype, the "before") |
| `sub-spend-overview-2.png` | Subscription Activation (Spend Overview 2.0, contract designer pass) |
| `sub-spend-overview-3.png` | Subscription Activation (the revamped "after") |
| `onboarding-1-connect.png` | Accountant Transaction Workflow |
| `onboarding-2-companies.png` | Accountant Transaction Workflow (client emails already redacted) |
| `onboarding-3-request.png` | Accountant Transaction Workflow |
| `onboarding-4-clientadded.png` | Accountant Transaction Workflow |
| `process-map.png` | Accountant Transaction Workflow (names already redacted) |
| `accountant-onboarding-flow.png` | Accountant Transaction Workflow |

## Optional

- A full-resolution PDF of the process map (`Accounting_Process_Master.pdf`) if you want it downloadable. The `process-map.png` already covers on-page display, so this is optional.

## Notes

- Every included image is already redacted where needed (client names on the process map, client emails on the bulk-add screen).
- Optimize and lazy-load images at build time to meet the performance targets in the PRD.
