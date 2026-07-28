import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    language: z.enum(["zh", "en"]),
    translationKey: z.string(),
    path: z.string(),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    role: z.string(),
    tech: z.array(z.string()),
    year: z.string(),
    language: z.enum(["zh", "en"]),
    translationKey: z.string(),
    repo: z.string().url(),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  })
});

export const collections = { blog, projects };
