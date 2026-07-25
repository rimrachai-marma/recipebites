import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const recipes = defineCollection({
  // loader: glob({ base: "src/content/recipes", pattern: "*.md" }),
  loader: glob({ base: "src/content/recipes", pattern: "**/index.md" }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      chef: z.string(),
      rating: z.number(),
      summary: z.string(),
      image: image().optional(),
      gallery: z.array(image()).optional(),
    }),
});

export const collections = { recipes };
