import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

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
		filter_category: z.array(
			z.enum([
				'Artificial Intelligence',
				'Full Stack Dev.',
				'Backend Dev.',
				'Frontend Dev.',
				'Plugins & Extensions',
				'Dev Tooling',
				'Open Source',
			]),
		),
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

const tech_stack_1 = defineCollection({
	loader: file('./cms/tech-stack/1.json'),
	schema: z.object({
		id: z.string(),
		logo: z.string(),
	}),
});

const tech_stack_2 = defineCollection({
	loader: file('./cms/tech-stack/2.json'),
	schema: z.object({
		id: z.string(),
		logo: z.string(),
	}),
});

const tech_stack_3 = defineCollection({
	loader: file('./cms/tech-stack/3.json'),
	schema: z.object({
		id: z.string(),
		logo: z.string(),
	}),
});

export const collections = {
	projects,
	clients,
	mockups,
	testimonials,
	tech_stack_1,
	tech_stack_2,
	tech_stack_3,
};
