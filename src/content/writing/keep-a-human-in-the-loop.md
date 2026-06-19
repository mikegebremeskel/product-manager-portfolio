---
title: "Keep a human in the loop where being wrong is expensive"
summary: "The cost of being wrong tells you where the human goes."
date: 2025-02-01
order: 30
related: ["be-deliberate-about-data-and-trust", "the-durable-skills-in-the-ai-era"]
---

The question with AI is not "can it do this." It is "what does it cost when it gets this wrong." The answer tells you exactly where to put a human. Automate the high-confidence cases. Put a person on the rest. In a domain where a wrong answer destroys trust, like money, the model handles what it is sure of and people handle the edges.

We built our accountant product on exactly this principle.

![Decision flow: a transaction is checked for model confidence; confident cases are auto-assigned and spot-checked, unsure or high-stakes cases go to human review, both producing a result the customer can trust.](/assets/30_Human_In_The_Loop_Flow.svg)

*Route by confidence and by the cost of being wrong. The model handles the volume; a human takes the unsure, high-stakes cases.*

## Automate the easy, review the hard

We built a model to identify the vendor behind a transaction. For most transactions, the model was confident and correct, and we let it run. But some transactions it could not confidently assign, and those are exactly the ones you do not let a machine guess on when the customer is an accountant trusting you with their books.

So we built a human review step for precisely those cases. As I recapped at the time, we did a human review of the transactions that the algorithm could not assign a vendor for. The model did the heavy lifting on the clear cases, which is most of them, and a person handled the ambiguous ones. That is not a failure of the AI. That is the correct design.

## Why the cost of being wrong sets the design

Here is the thinking underneath it. In some products, an AI mistake is cheap. A slightly off song recommendation costs you nothing. You can let the model run wide open.

In a financial product, an AI mistake is expensive. Miscategorize someone's transactions and you have not just made an error, you have broken the one thing the product exists to provide, which is trust in the numbers. Once an accountant catches the tool being confidently wrong about their money, they stop trusting all of it, even the parts that were right.

So the cost of a wrong answer is what decides how much autonomy you give the model. Low cost, let it run. High cost, keep a human on the cases where the model is unsure. You are not choosing between AI and people. You are drawing the line based on what an error would actually cost.

## Confidence is the dividing line

The practical version of this is to use the model's own confidence to route the work. But "is the model confident" is not a feeling, it is a number. The model produces a confidence score for its answer, and you set a threshold, a bar. Above the bar, the model acts on its own. Below it, the case goes to a human. The threshold is a dial, not a fixed truth. If being wrong is cheap, you can set the bar low and let more through automatically. If being wrong is expensive, like it is with someone's money, you raise the bar so only the model's surest answers go through untouched, and more borderline cases get a human look.

This keeps you from two bad extremes. You do not put a human on everything, which throws away the entire speed advantage of AI. And you do not automate everything, which is how you ship a confident, wrong answer in exactly the place it does the most damage. You let the machine scale the easy decisions and reserve human attention for where it actually matters.

## The humans are training the machine

There is one more reason this design is not a compromise. It is a flywheel. Every case a human reviews becomes labeled training data. The vendor the model could not confidently assign gets assigned by a person, and that correct answer feeds back into the model. The next time a similar transaction shows up, the model is a little more likely to clear it on its own, above the threshold, with no human needed.

So the human queue is not a fixed cost you carry forever. It is the exact set of cases the model has not learned yet, and it shrinks as the model learns from the reviews. You start with a conservative threshold and more human review, and over time more of the volume crosses the bar automatically. The people are not just catching errors. They are teaching the system to need them less.

## Where I land

AI does not change the oldest rule of building trustworthy products, it sharpens it. The more it costs to be wrong, the more a human belongs in the loop, and the model should be handling volume, not high-stakes judgment calls it is unsure about.

So before you fully automate something, ask the real question. Not "can AI do this," but "what happens to my customer's trust when it gets this wrong?" Where in your product would an AI mistake be cheap, and where would it be unforgivable?
