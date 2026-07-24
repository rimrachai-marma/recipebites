import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const recipes = defineCollection({
  loader: glob({ base: "src/content/recipes", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    chef: z.string(),
    rating: z.number(),
    summary: z.string(),
  }),
});

export const collections = { recipes };
