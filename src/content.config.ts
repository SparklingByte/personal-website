import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export enum ProjectStatus {
  live = "Live",
  inProgress = "In Progress",
  outdated = "Deprecated",
  archived = "Archived",
}

type ProjectStatusKeys = keyof typeof ProjectStatus;

const statusKeys = Object.keys(ProjectStatus) as [
  ProjectStatusKeys,
  ...ProjectStatusKeys[],
];

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techUsed: z.array(z.string()),
    image: z.string(),
    status: z.enum(statusKeys),
    repoLink: z.string().optional(),
    liveLink: z.string().optional(),
  }),
});

export const collections = { projects };
