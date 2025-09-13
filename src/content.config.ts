import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const ProjectStatus = {
  live: "live",
  inProgress: "inProgress",
  outdated: "outdated",
} as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techUsed: z.array(z.string()),
    image: z.string(),
    status: z.nativeEnum(ProjectStatus),
    repoLink: z.string().optional(),
    liveLink: z.string().optional(),
  }),
});

export const collections = { projects };
