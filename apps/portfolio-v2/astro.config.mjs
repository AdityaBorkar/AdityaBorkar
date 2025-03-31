// @ts-check

import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@astrojs/react';
import MillionLint from '@million/lint';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	prefetch: {
		defaultStrategy: 'hover',
	},
	integrations: [
		react(),
		// MillionLint.astro()
	],
	vite: {
		plugins: [tailwindcss(), basicSsl()],
		server: {
			https: true,
		},
	},
	experimental: {
		responsiveImages: true,
		svg: true,
	},
});
