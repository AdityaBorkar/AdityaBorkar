// @ts-check
import { defineConfig } from 'astro/config'
import MillionLint from '@million/lint'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

export default defineConfig({
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [
    react(),
    // MillionLint.astro()
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    responsiveImages: true,
    svg: true,
  },
})

// https://docs.astro.build/en/guides/integrations-guide/vercel/
// https://docs.astro.build/en/guides/integrations-guide/partytown/ (Analytics with Heatmaps)
// https://docs.astro.build/en/guides/integrations-guide/sitemap/ (important for site search / seo)
