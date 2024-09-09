import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import MillionLint from '@million/lint'
import aws from 'astro-sst'
import { defineConfig } from 'astro/config'

export default defineConfig({
  // output: 'dist',
  adapter: aws(),
  integrations: [
    tailwind({
      nesting: true,
      applyBaseStyles: false,
    }),
    react(), // TODO: React 19 and React Compiler
    MillionLint.astro(),
  ],
})
