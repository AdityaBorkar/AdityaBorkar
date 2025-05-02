import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { getResponseEta } from './getResponseEta';

// const FormSchema = type({
// 	full_name: 'string',
// 	email: 'string.email',
// 	company_name: 'string',
// 	company_age:
// 		'"Pre-launch" | "1-3 years" | "3-5 years" | "5-10 years" | "10+ years"',
// 	details: 'string',
// });

export const ContactFormHandler = defineAction({
	accept: 'form',
	input: z.object({
		full_name: z.string(),
		email: z.string().email(),
		company_name: z.string(),
		company_age: z.enum([
			'Pre-launch',
			'1-3 years',
			'3-5 years',
			'5-10 years',
			'10+ years',
		]),
		details: z.string(),
	}),
	handler: async (input) => {
		const eta = await getResponseEta();
		// ...
		return { eta };
	},
});
