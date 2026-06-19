---
title: "When the domain is not yours, go find the expert"
summary: "Borrow the mental model of someone who lives in the domain."
date: 2026-05-01
order: 8
related: ["ask-the-dumb-question"]
---

When your product touches a domain you do not own, stop guessing and go find the one person who lives in it. Do not reason it out from scratch. Borrow the mental model of someone who has already spent a career on the problem.

I learned to lean on this the hard way, by hitting a wall I had no business trying to climb alone.

## The wall was accounting

We were building software that showed people their spend, which meant we ran straight into accounting questions we were not equipped to answer. Two in particular stopped us.

The first was how to display a transaction that covered two separate months. The second was how to calculate year to date for a subscription that was bought in one year and ran into the next. These sound small. They are not. Get them wrong and the numbers your product shows are simply incorrect, which for a finance tool is fatal.

We could have argued about it among ourselves for a week and shipped our best guess. We had opinions. The problem was that our opinions were worth nothing here, because none of us actually knew how this was supposed to work.

## So I went to someone who did

One of our angel investors, Ian, was a Chief Audit Officer. So instead of guessing, I asked him how this actually works.

His answer did not just solve the two problems. It reframed them. What I learned from Ian was that our confusion came from how we intended the data to be displayed, and that there are a couple of standard ways financial data gets shown. Once I understood that, the design choice that had felt impossible to us became obvious. The thing we had been stuck on for days was a solved problem in his world. We were not facing a hard question. We were facing a question that was hard only because we did not live where the answer lived.

That is the whole lesson in one moment. The wall was not really there. It only looked like a wall because we were standing in the wrong field.

## Asking well is a skill

Here is the part that is easy to skip. Going to an expert is not the same as showing up and saying, "help, I am confused." You get a good answer by asking a precise question.

So before I sat down with a finance person on another set of these issues, I wrote the questions down exactly. How do we handle year to date for an annual subscription that does not start in January? Do we count from January, or from the date the subscription was paid? How do we handle something that is no longer active, like a tool we stopped using? Each question was specific enough that the expert could give me a specific answer.

That preparation respects the expert's time and gets you a usable answer instead of a vague one. The clearer your question, the sharper the model you get back. A fuzzy question gets you a fuzzy lecture. A precise question gets you the exact rule you can go build against.

## Build a bench before you need it

Over time this became a habit, not a one off. I tried to keep experts on tap before I needed them.

When we needed to understand security, I went looking for people in that field to build a small panel we could call on. When we needed our financial model checked, I sent it to an accountant friend who actually knew the numbers. Our advisors were not decoration. They were a bench of borrowed expertise I could pull from the moment we wandered into territory we did not own.

There is a bigger version of this idea too. The deeper we got into the financial side, the more it made sense to lean the whole product toward the people who live in those numbers all day, the accountants themselves. The instinct that started with one question for Ian, go to where the real expertise is, scaled all the way up to a direction for the company.

## Where I land

You are going to build things that touch domains you do not understand. Finance, legal, compliance, security, all of it. When that happens, your first move should not be to think harder by yourself. Someone has already spent years on this exact problem.

Find that person. Ask them a precise, well prepared question. Take the model they hand you and design around it. You do not need to become the expert. You need to know who the expert is and how to ask them well.

The smartest thing you can do in an unfamiliar domain is admit it is unfamiliar. What is the wall in front of you right now that is only a wall because you are standing in the wrong field?
