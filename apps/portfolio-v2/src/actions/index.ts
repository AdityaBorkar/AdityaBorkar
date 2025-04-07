import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { ContactFormHandler } from './contact';

export const server = {
	getGreeting: ContactFormHandler,
};
