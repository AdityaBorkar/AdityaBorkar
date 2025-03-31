import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
	getGreeting: defineAction({
		accept: 'form',

		input: z.object({
			name: z.string(),
		}),
		handler: async (input) => {
			return `Hello, ${input.name}!`;
		},
	}),
};

async function ContactFormHandler(input) {
	// ...
}
