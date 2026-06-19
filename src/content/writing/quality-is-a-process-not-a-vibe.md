---
title: "Quality is a process, not a vibe"
summary: "Write the definition of done before you build, and refuse to ship below it."
date: 2022-10-01
order: 10
related: ["a-good-spec-passes-one-test", "spec-the-outcome-not-the-story"]
---

Quality is not a feeling you have about your product. It is a bar you write down before you build, and then refuse to ship below. Teams that treat quality as a vibe ship inconsistent work. Teams that treat it as a written standard ship the same high bar every time.

I am strict about this, and the strictness is the point.

## Write the finish line before the race

Before our first launch, I pinned a Definition of Done where the whole team could see it. Not a feeling, a list. Concrete statements written from the user's side. As a user, I can log into the production version, connect my bank or card, and see my spend. Each line was something you could check as true or not true.

That pinned doc did something important. It turned "are we ready?" from an argument into a checklist. Nobody had to debate whether we were done, because done was written down in advance. You either met the bar or you did not.

This is the core of it. Quality becomes a process the moment you define the finish line before you start running. Without that, every release turns into a judgment call, and judgment calls under deadline pressure always drift downward.

## The bar applies to every handoff, not just the final ship

I held the same line earlier in the chain, not just at launch.

On design, my rule was simple. We would not attach a design to a development ticket unless it was exact. As I said to the team, we will not attach them to a story unless they are picture perfect and are exactly what we need. When a designer was handing over work that was not ready, I named it plainly. We needed things designed so they were truly pixel perfect and ready for development.

That is not me being difficult. A blurry design handed to a developer becomes a guess, and a guess becomes a bug, and a bug becomes a worse user experience. The cost of a low bar does not disappear. It just moves downstream and gets bigger. Catching it at the handoff is the cheapest place to catch it.

We backed it with rhythm too. Daily QA, testing in staging and in production, logging bugs the moment we found them. Quality was not a final inspection. It was something we did every day.

## The bar is scoped, not infinite

Here is the part that keeps this from turning into perfectionism. A Definition of Done is scoped to the thing you are shipping, not to some ideal version that never ends.

My pinned standard was the Definition of Done for that first launch. It was not a wish list of everything the product could ever be. It was the specific, finite set of things that had to be true for this release to count. That scoping is what makes it usable. An infinite bar paralyzes you. A clear, finite bar ships you.

So the discipline is two sided. High enough that you are proud of what goes out, and bounded enough that it actually goes out. You write down what done means for this release, you hit all of it, and you do not let "done" quietly expand while the deadline sits still.

## Where I land

If your team argues about whether something is ready, you do not have a quality problem. You have a definition problem. Nobody wrote down what good looks like, so everyone is using their own private version.

Fix it upstream. Write the Definition of Done before you build. Hold the bar at every handoff, not just the last one. Keep it scoped to the release in front of you. Quality stops being a feeling you argue about and becomes a line everyone can see.

What does done actually mean for the thing your team is shipping this week? If you cannot point to where that is written, that is the first thing to fix.
