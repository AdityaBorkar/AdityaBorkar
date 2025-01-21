// @ts-check
import { defineConfig } from 'astro/config'
import MillionLint from '@million/lint'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

export default defineConfig({
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
