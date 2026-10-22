import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		hideHero: z.boolean().optional(),
		slides: z
			.array(
				z.object({
					image: z.string(),
					titleEn: z.string(),
					titleNl: z.string(),
					descEn: z.string(),
					descNl: z.string(),
				})
			)
			.optional(),
	}),
});

export const collections = { projects };
