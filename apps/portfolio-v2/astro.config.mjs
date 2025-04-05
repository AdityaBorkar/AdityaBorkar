// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'server',
	adapter: cloudflare({
		imageService: 'cloudflare',
	}),
	integrations: [react(), mdx(), MillionLint.astro()],
	vite: {
		plugins: [tailwindcss(), basicSsl()],
	},
	prefetch: {
		defaultStrategy: 'hover',
	},
	experimental: {
		svg: true,
		clientPrerender: true,
		responsiveImages: true,
	},
});
