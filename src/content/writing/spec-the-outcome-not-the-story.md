---
title: "Spec the outcome, not the story"
summary: "Hand engineers testable acceptance criteria, not a loose narrative. Given, when, then beats a paragraph of intent."
date: 2022-11-01
order: 22
related: ["a-good-spec-passes-one-test", "quality-is-a-process-not-a-vibe"]
---

Hand engineers testable acceptance criteria, not a loose narrative of what you had in mind. A clear "given this, when that, then this" beats a paragraph of intent every time. Engineers do not need your story. They need to know exactly what is true when the work is done.

This was a deliberate change I made to how we wrote tickets.

## From scenarios to criteria

Early on, our tickets read like little stories. A description of a situation, some context, a general sense of what should happen. It felt thorough. But a story leaves room for interpretation, and interpretation is where a build drifts from what you meant.

So I set a standing task to fix it. We rewrote each ticket to show acceptance criteria, not scenarios. Concretely, that meant the "given, when, then" format. Given the user is on this page, when they click this, then this specific thing happens. Each line is a condition you can check as true or false. There is no room left to guess, because the finished state is written as a set of facts, not a mood.

The difference matters most at the end. With a narrative ticket, "is it done?" is a judgment call. With acceptance criteria, done is simply whether every line is true. The ticket grades itself.

## Structure the big ones as shells

For larger pieces of work, I used a structure that kept this clean. The parent ticket became a shell. It held the user story and the high level acceptance criteria, and it pointed to subissues that carried the detail for each step.

That way the parent answered "what is this and what does success look like," and each subissue answered "here is exactly what to build for this slice." An engineer could see the whole shape from the parent and get the precise instructions from the subissue. Nothing important lived only in someone's memory or a Slack thread.

## How this differs from just writing a clear spec

I have a related rule that a good spec passes one test: could someone build it without asking you a question. This is the companion to that, and it is more specific. That rule is about clarity in general. This one is about format.

You can write a clear, well intentioned paragraph that still fails an engineer, because a paragraph describes and acceptance criteria verify. The format itself does work for you. Writing "given, when, then" forces you to think in concrete, checkable outcomes, which catches the gaps a narrative would have glossed over. The structure is not bureaucracy. It is a thinking tool that happens to also be the cleanest handoff.

## Where I land

When you hand work to an engineer, you are really handing them a definition of done. Make that definition something they can check, not something they have to interpret.

Write the outcome as testable criteria. Use the parent ticket for the story and the why, and let the criteria carry the what. Before you hand off your next ticket, look at it and ask, is the finished state here a set of facts I could check off, or a story someone has to read my mind to complete?
