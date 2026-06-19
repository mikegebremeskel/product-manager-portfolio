---
title: "Keep a human in the loop where being wrong is expensive"
summary: "The question with AI isn't 'can it do this.' It's 'what does it cost when it gets this wrong.'"
date: 2025-02-02
order: 30
related: ["be-deliberate-about-data-and-trust", "the-durable-skills-in-the-ai-era"]
---

The question with AI is not "can it do this." It is "what does it cost when it gets this wrong." The answer tells you exactly where to put a human. Automate the high-confidence cases. Put a person on the rest. In a domain where a wrong answer destroys trust, like money, the model handles what it is sure of and people handle the edges.

We built our accountant product on exactly this principle.

## Automate the easy, review the hard

We built a model to identify the vendor behind a transaction. For most transactions, the model was confident and correct, and we let it run. But some transactions it could not confidently assign, and those are exactly the ones you do not let a machine guess on when the customer is an accountant trusting you with their books.

So we built a human review step for precisely those cases. As I recapped at the time, we did a human review of the transactions that the algorithm could not assign a vendor for. The model did the heavy lifting on the clear cases, which is most of them, and a person handled the ambiguous ones. That is not a failure of the AI. That is the correct design.

## Why the cost of being wrong sets the design

Here is the thinking underneath it. In some products, an AI mistake is cheap. A slightly off song recommendation costs you nothing. You can let the model run wide open.

In a financial product, an AI mistake is expensive. Miscategorize someone's transactions and you have not just made an error, you have broken the one thing the product exists to provide, which is trust in the numbers. Once an accountant catches the tool being confidently wrong about their money, they stop trusting all of it, even the parts that were right.

So the cost of a wrong answer is what decides how much autonomy you give the model. Low cost, let it run. High cost, keep a human on the cases where the model is unsure. You are not choosing between AI and people. You are drawing the line based on what an error would actually cost.

## Confidence is the dividing line

The practical version of this is to use the model's own confidence to route the work. Where the model is confident and the stakes are real, you can often still let it act, but you spot-check. Where the model is not confident and the stakes are real, that is the human's queue. Where the stakes are low, you can let it run more freely either way.

This keeps you from two bad extremes. You do not put a human on everything, which throws away the entire speed advantage of AI. And you do not automate everything, which is how you ship a confident, wrong answer in exactly the place it does the most damage. You let the machine scale the easy decisions and reserve human attention for where it actually matters.

## Where I land

AI does not change the oldest rule of building trustworthy products, it sharpens it. The more it costs to be wrong, the more a human belongs in the loop, and the model should be handling volume, not high-stakes judgment calls it is unsure about.

So before you fully automate something, ask the real question. Not "can AI do this," but "what happens to my customer's trust when it gets this wrong?" Where in your product would an AI mistake be cheap, and where would it be unforgivable?
