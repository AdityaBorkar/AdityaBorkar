'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

import SchemaMarkup from '@/components/SchemaMarkup'
import { PROJECTS_LIST, PROJECT_CATEGORIES } from '@/content/projects'
import { cn } from '@/lib/utils'
import type { ProjectCategory, ProjectType } from '@/types/projectInfo'

import ProjectListSchema from './schema'

export default function ProjectsPage() {
  const PointerDivRef = useRef<HTMLDivElement>(null)
  const [filterCategory, setFilterCategory] =
    useState<ProjectCategory>('All Projects')
  const projects =
    filterCategory === 'All Projects'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((project) =>
          project.categories.includes(filterCategory),
        )

  // TODO: Add a Background to hero section
  return (
    <div className="section mx-auto pb-48">
      <SchemaMarkup schema={ProjectListSchema} />

      <h2 className="mt-36 text-5xl font-bold">Selected Projects</h2>
      <div className="mt-12 max-w-[70%] text-balance text-base text-text-secondary">
        <p>
          I create handcrafted products and signature projects that make a
          difference.
        </p>
        <p>
          My work empowers businesses to serve better products, enhance
          efficiency, and boost profitability through technology. It includes
          open-source contributions that support fellow engineers and developers
          in creating better software.
        </p>
      </div>

      <div className="mt-24 flex flex-row">
        {/* <div className="mr-4 flex-nowrap text-neutral-400">
          <HiFilter className="-mt-1 mr-2 inline-block size-5 text-neutral-500" />
          Filter:
        </div> */}
        <div className="flex flex-grow flex-row flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((tag) => (
            <button
              key={tag}
              type="button"
              className={cn(
                'cursor-pointer rounded-full bg-bg-secondary px-4 py-1.5 text-sm font-medium text-text-secondary',
                filterCategory === tag && 'bg-foreground text-background',
              )}
              onClick={() => setFilterCategory(tag)}
              onMouseDown={() => setFilterCategory(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      {/* <div
        ref={PointerDivRef}
        className="pointer-events-none absolute top-0 z-20 hidden rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300 backdrop-blur transition-none"
        style={{ display: 'none' }}
      >
        Click to open project
      </div> */}
    </div>
  )

  function ProjectCard(props: ProjectType) {
    // TODO: [Animation] Comet Border effect on project card hover
    // TODO: [Animation] On hover release small bubbles/sparkles in the background

    return (
      <Link
        href={`/projects/${props.title.toLowerCase().replace(/[\s\W]+/g, '-')}`}
        className="group relative rounded-3xl border border-zinc-300 bg-zinc-100 p-4 transition-all hover:bg-zinc-100 hover:shadow-lg"
      >
        <div className="h-64 rounded-xl">
          <img
            src={props.heroImage}
            alt={`Visual Representation of ${props.title}`}
            className="group-hover:zoom-105 mx-auto h-full rounded-xl bg-zinc-300 text-center text-text-secondary"
            // onMouseMove={(e) => {
            //   if (!PointerDivRef.current) return
            //   // TODO: Translate on Page Scroll
            //   // TODO: TranslateX depends on Page Width
            //   PointerDivRef.current.style.transform = `translateY(${e.pageY - 20}px) translateX(${e.pageX - 220}px)`
            // }}
            // onMouseEnter={() => {
            //   if (!PointerDivRef.current) return
            //   PointerDivRef.current.style.display = 'block'
            // }}
            // onMouseLeave={() => {
            //   if (!PointerDivRef.current) return
            //   PointerDivRef.current.style.display = 'none'
            // }}
          />
        </div>
        <div className="cursor-pointer px-2 pb-2 pt-4">
          <div className="cursor-pointer text-base font-semibold">
            {props.title}
          </div>
          <div className="mt-2 cursor-pointer text-text-primary">
            {props.description}
          </div>
          <ul className="mt-4 flex cursor-pointer flex-row flex-wrap gap-x-1 gap-y-2">
            {props.tags.map((tag) => (
              <li
                key={tag}
                className="cursor-pointer rounded-full bg-background px-2.5 py-1 text-xs text-text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    )
  }
}
