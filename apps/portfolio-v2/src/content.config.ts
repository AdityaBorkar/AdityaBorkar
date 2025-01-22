import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

export const blogs = defineCollection({
  loader: glob({
    pattern: '**/!(wip-)*.md',
    base: './cms/blog',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    index: z.number().optional(),
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
})

export const projects = defineCollection({
  loader: glob({
    pattern: '**/!(wip-)*.md',
    base: './cms/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // index: z.number().optional(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    preview_link: z.string().optional(),
    github_link: z.string().optional(),
    hero_image: z.string().optional(),
  }),
})

export { clients } from '../cms/Clients'

export { mockups } from '../cms/Mockups'

export { technologies } from '../cms/Technologies'

export { testimonials } from '../cms/Testimonials'
