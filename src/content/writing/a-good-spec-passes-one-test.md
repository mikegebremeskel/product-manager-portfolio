---
title: "A good spec passes one test"
summary: "Could someone build it without asking you a single question?"
date: 2023-07-01
order: 11
related: ["spec-the-outcome-not-the-story", "quality-is-a-process-not-a-vibe"]
---

Here is the only test a spec or a ticket needs to pass. Could a teammate pick it up and build it without coming back to ask you what you meant? If yes, it is done. If no, it is not, no matter how much is written on it.

I use this as a hard line, and it has saved us a lot of wasted work.

## The standard I actually used

When I reviewed a teammate's tickets one week, my feedback was blunt and it captured the whole idea. There was a lot of work needed, I told him, to get this to a place where I could take the ticket and actually work it myself.

That is the bar. Not "is there text in the ticket." Not "does it look thorough." The bar is whether someone other than the author could execute it cleanly. If I, reading it cold, could not pick it up and build it without a follow up conversation, then the ticket was not finished. It was a placeholder pretending to be a spec.

## Why the ambiguity has to die up front

Every spec has some ambiguity in it. The only question is when you resolve it.

If you resolve it up front, in the writing, it costs a little time and everyone moves fast afterward. If you leave it in, the builder hits it in the middle of building, at the worst possible moment, and has to stop and guess or chase you down. Multiply that by a team and you get a product full of small guesses, each one a little off from what was intended.

So I wrote requirements to absorb the ambiguity before anyone started. The job the user was doing. Where the thing lived on the screen. How it behaved. The logic, spelled out step by step. The point was never to sound thorough. The point was that the next person never had to fill in a blank I left them.

## How to write one that passes

The routine is straightforward.

Start with the user's job, in their words, so the builder knows what success looks like from the user's side. Then the specifics. Where it appears. How it behaves in the normal case. What happens in the edge cases, like an empty state or an error. The acceptance criteria, written so they can be checked as true or false.

Then do the one thing most people skip. Read it back as the builder, not as the author. You wrote it, so you know all the things you left unsaid. The builder does not. Read it as someone who knows nothing beyond the page, and you will spot the gaps fast.

## The honest cost

This is more work for the person writing the spec, and that is exactly why people avoid it. It is easier to write a vague ticket and answer questions later. It feels faster.

It is not faster. It just moves the work from one careful hour of yours to many interrupted hours across the team, plus the rework when someone guesses wrong. Front loading the clarity is the cheaper path. It only looks more expensive because the cost is visible and lands on you.

A spec is not a description of what you want. It is a set of instructions precise enough that someone else can act on them without you in the room. That is a higher bar than most tickets clear, and it is the bar worth holding.

Before you hand off your next ticket, read it once as the person who has to build it. Could they finish it without a single question for you? If not, you are not done writing yet.
