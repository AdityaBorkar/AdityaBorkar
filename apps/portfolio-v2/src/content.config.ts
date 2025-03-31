import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const blogs = defineCollection({
	loader: glob({
		pattern: '**/!(wip-)*.md',
		base: './cms/blog',
	}),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		// description: z.string(),
		// index: z.number().optional(),
		// group: z
		//   .enum([
		//     'getting-started',
		//     'adapters/framework',
		//     'adapters/client-db',
		//     'adapters/server-db',
		//     'adapters/pubsub',
		//     'adapters/orm',
		//     'comparisons',
		//     'contributing',
		//   ])
		//   .optional(),
	}),
});

const projects = defineCollection({
	loader: glob({
		pattern: '**/!(wip-)*.md',
		base: './cms/projects',
	}),
	schema: z.object({
		index: z.number().optional(),
		title: z.string(),
		description: z.string(),
		hero_image: z.string().nullable(),
		categories: z.array(z.string()),
		tags: z.array(z.string()),
		preview_link: z.string().nullable(),
		github_link: z.string().nullable(),
		featured: z.boolean().optional(),
		open_source: z.boolean().optional(),
	}),
});

const clients = defineCollection({
	loader: file('./cms/clients.json'),
	schema: z.object({
		id: z.string(),
		logo: z.string(),
		className: z.string().optional(),
	}),
});

const mockups = defineCollection({
	loader: file('./cms/mockups.json'),
	schema: z.object({
		id: z.string(),
		img: z.string(),
	}),
});

const testimonials = defineCollection({
	loader: file('./cms/testimonials.json'),
	schema: z.object({
		id: z.string(),
		role: z.string(),
		text: z.string(),
		proof: z
			.object({
				name: z.string(),
				url: z.string(),
			})
			.optional(),
	}),
});

const technologies = defineCollection({
	loader: file('./cms/technologies.json'),
	schema: z.object({
		id: z.string(),
		logo: z.string(),
	}),
});

export const collections = {
	blogs,
	projects,
	clients,
	mockups,
	testimonials,
	technologies,
};
