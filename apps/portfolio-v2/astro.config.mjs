// @ts-check

import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { defineConfig } from 'astro/config';

export default defineConfig({
	output: 'server',
	adapter: vercel(),
	// adapter: cloudflare(),
	integrations: [
		react(),
		// MillionLint.astro()
	],
	vite: { plugins: [tailwindcss(), basicSsl()] },
	prefetch: {
		defaultStrategy: 'hover',
	},
	experimental: {
		clientPrerender: true,
		responsiveImages: true,
		svg: true,
	},
});
