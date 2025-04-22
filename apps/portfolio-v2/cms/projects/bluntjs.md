---
title: Blunt.js
description: Yet another React Meta-Framework. Similar to Next.js, but fully open and built for Bun.
hero_image: projects/bluntjs.png
hero_tag: work-in-progress
filter_category:
  - Dev Tooling
  - Platform Engineering
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
timeline: Ongoing
year: 2025
work_in_progress: true
benefits:
  -
    metric: 3
    label: Open Source
  -
    metric: 100%
    label: React Meta-Framework
  # -
  #   metric: 10K+
  #   label: NPM Downloads
  # -
  #   metric: 100+
  #   label: GitHub Stars
---

## Problem Statement

Next.js is a popular React Meta-Framework that is used to build server-side rendered (SSR) React applications.
It is a powerful and flexible framework that provides a lot of features out of the box.
Here's my rant about why I don't like it:

- A lot of its features work great only with **Vercel** (platform lock-in).
- No support for **Biome** (Linter + Formatter)
- **Slow HMR and build times**. No support for Bun and Vite
- **Caching** is a pain since Next.js 13
- No proper support for **Middleware**
- Building **SPAs** require a lot of hacks
- **React Server Actions** is still confusing
- No support for **Websockets** and **Server-Sent Events**

Kindly note:

- I still love Team Vercel and the things they build.
- We are not building a replacement for Vercel / cloud provider.

## Tech Stack

- Bun as a Package Manager and Monorepo Management
- React and React Compiler
- Zod and ArkType for Schema Validation
- Biome for linting, formatting, and sorting imports
- Bun and Vite for building and development. Vite is planned for future.
- SST for deployment
<!-- - TRPC, ORPC, and Next-safe-actions for React Server Actions -->

We are writing the code currently in TypeScript and Bun. If the framework gains traction, we will re-write as a Bun Plugin or plan something else.

## Key Features Planned:

### Framework Features:

- Define behavior in a config file
  ```ts
  const config = {
    prerender: true,
    spa: true,
  }
  ```
- Application Design:
  - Multi-Page Application Design
  - Single-Page Application Design
- Rendering Models:
  - Client-side Rendering
  - Server-side Rendering
  - Incremental Static Regeneration
  - Pre-rendering (Not Planned)
- Routing
  - File-based Routing (/app)
  - Code-based Routing (/routes)
- Navigation
  - Alternative to `next/navigation`
- Media
  - Image Optimization
  - Video Optimization
  - Audio Optimization
- React Server Actions
- API Routes
  - Type-safe API Routes
- OpenGraph
  - Automatic OpenGraph generation
- Choose your own linter
  - Options: Biome or OxcLint
- Choose your schema validator
  - Options: Zod or ArkType
- Deployment Adapters
  - Initial Support for SST
- Type-safety for Environment Variables
<!-- I18N -->
<!-- PartyTown -->
<!-- Sitemap -->
<!-- Content Loader -->
<!-- Media Optimization -->
<!-- Dev Toolbar -->

<!-- Commands: blunt dev build start type-sync generate:docs telemetry -->

### Features for Developer Experience:

- Examples and Documentation
- Cursor Project Rules
- How to use ShadCN Registry
- Scaffold a project with `create.bingo`:
  - Bun for monorepo management
  - Support for TailwindCSS out-of-the-box.


After that, we identified that VoidZero is making significant investment in the space through tools like Rolldown, Vite, etc. So, we decided to further add support for it. Vite is more stable than Bun, hence, this can be seen as a plug-in replacement for Next.js for users where stability is more important.

<!-- - TRPC, ORPC, and Next-safe-actions for React Server Actions -->
<!-- - Bring in any external API with fetch schema support using Swagger. -->

## Result

The project is a work-in-progress and estimated to launch in May 2025. You can track the progress on our [Github Repository](https://github.com/AdityaBorkar/blunt)

