// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'server',
	adapter: cloudflare({
		// imageService: 'cloudflare',
		platformProxy: {
			enabled: true,
		},
	}),
	site: 'https://adityab.tech',
	integrations: [react(), mdx(), MillionLint.astro(), sitemap()],
	vite: {
		plugins: [tailwindcss(), basicSsl()],
		ssr: {
			external: ['node:fs', 'node:path'],
		},
		resolve: {
			// Use react-dom/server.edge instead of react-dom/server.browser for React 19.
			// Without this, MessageChannel from node:worker_threads needs to be polyfilled.
			alias: import.meta.env.PROD
				? { 'react-dom/server': 'react-dom/server.edge' }
				: undefined,
		},
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
