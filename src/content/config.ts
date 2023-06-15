import { defineCollection, z } from 'astro:content';

const education = defineCollection({
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        school: z.string(),
        description: z.string(),
        competences: z.array(z.string()),
        // Transform string to Date object
        pubDate: z
            .string()
            .or(z.date())
            .transform((val) => new Date(val)),
        updatedDate: z
            .string()
            .or(z.date())
            .transform((val2) => new Date(val2)),
        heroImage: z.string().optional(),
    }),
});

export const collections = { education };
