// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://adityab.tech',
	output: 'server',
	adapter: cloudflare({
		imageService: 'cloudflare',
		platformProxy: { enabled: true },
	}),
	integrations: [react(), mdx(), sitemap()],
	vite: {
		plugins: [tailwindcss(), basicSsl()],
		ssr: {
			external: [
				'node:fs',
				'node:path',
				'fs',
				'node:crypto',
				'child_process',
				'node:os',
				'node:events',
				'node:stream',
				'node:util',
			],
		},
		resolve: {
			// Use react-dom/server.edge instead of react-dom/server.browser for React 19.
			// Without this, MessageChannel from node:worker_threads needs to be polyfilled.
			alias: import.meta.env.PROD
				? { 'react-dom/server': 'react-dom/server.edge' }
				: undefined,
		},
	},
	prefetch: { defaultStrategy: 'hover' },
	experimental: {
		clientPrerender: true,
		contentIntellisense: true,
		fonts: [
			{
				name: 'Inter',
				cssVariable: '--font-inter',
				provider: fontProviders.google(),
			},
			{
				name: 'Lora',
				cssVariable: '--font-lora',
				provider: fontProviders.google(),
			},
			{
				name: 'Pixelify Sans',
				cssVariable: '--font-pixelify',
				provider: fontProviders.google(),
			},
		],
	},
});
