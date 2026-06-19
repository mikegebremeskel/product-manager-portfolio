import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    order: z.number(),
    summary: z.string(),
    role: z.string(),
    timeline: z.string(),
    workedWith: z.string().optional(),
    competencies: z.array(z.string()),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
  }),
});

// Thought-leadership essays. To add one: drop a Markdown file in
// src/content/writing/ with title, summary, date, and order. No code changes.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.date(),
    order: z.number().optional(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { work, pages, writing };
