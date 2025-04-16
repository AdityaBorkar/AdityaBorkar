---
title: BluntJS
description: Library for creating realtime offline-first applications with PWA, Service Workers, IndexedDB.
hero_image: projects/bluntjs.png  
hero_tag: work-in-progress
filter_category:
  - Library
tags:
  - Open Source
  - React
  - Meta Framework
  - Developer Tool
  - TypeScript
  - SST
links:
  preview: https://bluntjs.adityab.tech/
  github: https://github.com/AdityaBorkar/bluntjs
timeline: < 3 months
year: 2025
benefits:
  - 
    metric: 3
    label: Open Source
  - 
    metric: 100%
    label: React Meta-Framework
  - 
    metric: 100%
    label: Next.js Alternative
---

## Problem Statement

While the API design and the framework itself is still popular, but the technical debt around it like no support alternate linting libraries and build tools, slower HMR than Vite, file-based routing. The lock-in with Vercel as a platform for optimizations and hosting inhibits it as a choice.

Along with that it lacks support for proper Middleware Support, Websockets, Server-Sent Events.

PS: I still love Next.js as a product and the things Team Vercel build are a source of inspiration for us.

## Key Features Implemented:

MPA Design
SPA Design from a HTTP Route

export const config = {
  prerender: true
  spa: true
}

export const config = {
  spa: true
}

## Solution

While there are a pleothora of options that can be taken forward, the stack that I love is:

- Bun as a node.js Replacement
- Bun as a Package Manager and Monorepo Management
- Bun as a HTTP Server
- Bun plugins to build file-based routing and code-based routing
- Built-in template for SST.
- Biome for linting, formatting, and sorting imports
- Arktype for Schema Validation
- Next-safe-actions for React Server Actions
- Route Completions and API Schema Support for Fetch.
- Bring in any external API with fetch schema support using Swagger.

After that, we identified that VoidZero is making significant investment in the space through tools like Rolldown, Vite, etc. So, we decided to further add support for it. Vite is more stable than Bun, hence, this can be seen as a plug-in replacement for Next.js for users where stability is more important.

## Result

The project is a work-in-progress and estimated to launch in May 2025. You can track the progress on our [Github Repository](https://github.com/AdityaBorkar/bluntjs)

