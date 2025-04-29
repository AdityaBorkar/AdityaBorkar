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
		hero_image: z.string(),
		hero_tag: z
			.enum(['featured', 'open-source', 'work-in-progress'])
			.nullable(),
		filter_category: z.array(z.string()),
		tags: z.array(z.string()),
		links: z.object({
			preview: z.string().optional(),
			github: z.string().optional(),
			video: z.string().optional(),
		}),
		benefits: z.array(
			z.object({
				metric: z.string({ coerce: true }),
				label: z.string(),
			}),
		),
		year: z.number(),
		timeline: z.string(),
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

const tech_stack = defineCollection({
	loader: file('./cms/tech_stack.json'),
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
	tech_stack,
};
