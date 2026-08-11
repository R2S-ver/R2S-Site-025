import { defineCollection, z } from "astro:content";

const entries = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    type: z.enum(["projects", "lab", "note", "art"]),
    category: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    tools: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    collaboration: z.string().optional(),
    lang: z.enum(["en", "zh"]),
    translationKey: z.string(),
    gallery: z
      .array(
        z.object({
          file: z.string(),
          title: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { entries };
