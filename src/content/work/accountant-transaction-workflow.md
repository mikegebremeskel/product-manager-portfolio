---
title: "Accountant transaction workflow"
company: "Talisman"
order: 3
summary: "Zero-to-one in a new market, built on discovery with 100+ accounting firms."
competencies: ["Customer discovery", "Zero-to-one", "Fintech and accounting domain", "Design", "Working with AI tooling"]
---

> **Snapshot.** After our Product Hunt launch, accountants signed up in waves. Our team did the discovery to understand why, met with 100+ firms to map how they work, designed the 10x experience with the team, and shipped the MVP that became Talisman's accountant-facing product. The signal was strong enough to help us raise $700K, and the product has reached $113K ARR in its first five months.

**My role:** Co-founder and COO, product owner for the accountant workflow.
**Timeline:** 2024 to 2026 (current product).
**Worked with:** my co-founder and the CEO, our CTO (prior accounting-software founder), engineering, product, and design.
**Competencies this shows:** deep customer discovery, zero-to-one, fintech and accounting domain, design, working with AI tooling.

## The opportunity

After the Product Hunt launch, a wave of accountants signed up. The reason mattered more than the numbers. Their clients had no good way to review their own finances. QuickBooks was too messy and did not give the clear picture Talisman did. So accountants wanted to clean up their clients' data in QuickBooks and then hand them Talisman.

That made accountants the customer with the deepest pain, and the inbound signal was strong enough that we anchored a $700K raise on it. The bet was clear. The work was turning that pain into a product accountants would trust enough to run their daily review on.

## Discovery: finding the real customer

We did not assume we understood accountants. We went and learned.

**We met with 100+ accounting firms** to map their actual processes and ground ourselves in what they needed, not what we imagined they needed. That is what told us where the real pain sat and what a better workflow had to do.

We also had a domain edge in the room. As COO I ran our own finances in QuickBooks, so I knew the tool first-hand. Our CTO had previously founded a startup in the accounting space with his co-founder and wife, a chartered accountant, so we had deep knowledge of how accounting products, specifically QBO and all of the Intuit APIs, and accountants actually work.

## Design: mapping the 10x experience

Once we had mapped the processes and pinned the pain points, we designed the 10x experience, what would make an accountant's review dramatically better rather than slightly better. That became the MVP and the foundation for the product we run today.

## Building the workflow

From there I owned the workflow where rules auto-categorize transactions from the bank feed and an accountant reviews, corrects, and approves them.

**We designed from the accountant's seat.** I worked through real decisions, for example: if I am reviewing a transaction and realize I need to ask the client a question, does it move to a client-clarifications view, and what happens to it meanwhile? I drove those edge cases to a decision rather than leaving them for engineering to guess.

**We figured out how the rules actually had to be configured.** When transactions were not showing up, we tested against the bank feed, found our setup was the inverse of what it needed to be, and wrote the corrected logic so transactions appeared as soon as they arrived.

**I caught a trust problem before it shipped.** Approved transactions were disappearing from their original tables, which to an accountant reads as "where did my transaction go." I specced the fix to keep them visible in both their original table and the approved queue.

**I ran the testing myself.** I set up sandbox accounts, published test transactions, and tracked what worked, recording the exact variables I changed so engineering could trace results. I also used AI tooling on the build, handing a bug to an AI agent with the prior pull request, the analysis, and the frontend design as context.

## Outcome

The MVP became the accountant-facing product Talisman runs today, and the workflow is the path every transaction flows through. In its first five months the product has reached $113K. The original inbound that started it all also helped anchor a $700K round, part of more than $1M raised in total.

## The shipped product

The accountant onboarding we built. Four screens from the live flow, in order.

![Connect with QuickBooks](/assets/onboarding-1-connect.png)
*Connect with QuickBooks. The accountant either connects a client's QBO account themselves or requests access from the client. This integration was the core technical bet.*

![Adding clients in bulk](/assets/onboarding-2-companies.png)
*Adding clients in bulk, with a per-client choice to connect it yourself or ask the client. Designed around how accountants actually manage many clients at once (these are not real emails).*

![The request-connection email to a client](/assets/onboarding-3-request.png)
*The request-connection email sent to a client when the accountant delegates. We handled the full delegation loop, not just the happy path. This was especially critical, as all admin owners receive a notification of an integration being connected to QBO. Sending this message from the accountant to the client as part of onboarding builds trust directly by proactively letting them know Talisman is being connected.*

![Client added confirmation](/assets/onboarding-4-clientadded.png)
*Client added. The payoff moment once a client is connected.*

## Artifacts

**Process map from the accountant discovery** (names redacted):

![Process map of a bookkeeping firm's transaction workflow](/assets/process-map.png)
*How a bookkeeping firm handles a single transaction, from intake and the client-document chase, through categorization, the reviewer QA loop, and month-end close. The daily, weekly, or monthly cadence depends on the client. One of the workflows we mapped across 100+ firms to ground the product.*

**Onboarding flow (the spec behind the screens above):**

![Accountant onboarding flow diagram](/assets/accountant-onboarding-flow.png)
*The onboarding flow I designed: the registration path, the decision tree for how a firm sets itself up, and the dashboard flow including how each client organization gets onboarded.*

**Source files** (internal, for interview walkthroughs only):

- Accounting Process Master, full board (Figma)
- Plaid to QuickBooks data-schema mapping for the QBO integration (Figma)

## Reflection

> **The greatest product insights come from not being married to a specific direction early on.** Had we ignored accountants and focused on our initial end user, business owners, we would have missed an insight that led to us uncovering a much larger problem, which enabled us to raise our pre-seed round.
