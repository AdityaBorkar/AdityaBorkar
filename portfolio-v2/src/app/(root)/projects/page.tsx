'use client'

import type { ProjectCategory, ProjectType } from '@/types/projectInfo'

import Link from 'next/link'
import { HiFilter } from 'react-icons/hi'
import { useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import SchemaMarkup from '@/components/SchemaMarkup'
import ProjectListSchema from './schema'
import { PROJECTS_LIST } from '@/content/projects'

const ProjectCategories = [
  'All',
  'Frontend',
  'Backend',
  'Software Development',
  'Plugins & Extensions',
  'Artificial Intelligence',
  // 'Performance Audit & Optimization',
] satisfies ProjectCategory[]

export default function ProjectsPage() {
  const PointerDivRef = useRef<HTMLDivElement>(null)
  const [filterCategory, setFilterCategory] = useState<ProjectCategory>('All')
  const projects =
    filterCategory === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter(project =>
          project.categories.includes(filterCategory),
        )

  // TODO: Add a Background to hero section
  return (
    <div className='max-w-[1000px] pb-48 mx-auto'>
      <h2 className='font-bold text-white text-5xl mt-24'>Selected Projects</h2>
      <div className='mt-8 text-neutral-400 max-w-[70%] text-balance'>
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

      <div className='mt-24 flex flex-row'>
        <div className='mr-4 flex-nowrap text-neutral-300'>
          <HiFilter className='size-5 -mt-1 inline-block mr-2' />
          Filter by Category:
        </div>
        <div className='flex-grow flex flex-row gap-2 flex-wrap'>
          {ProjectCategories.map(tag => (
            <button
              key={tag}
              type='button'
              className={twMerge(
                'py-1 px-3 cursor-pointer text-neutral-400 bg-neutral-900 rounded-full text-sm',
                filterCategory === tag &&
                  'bg-neutral-300 text-neutral-800 font-semibold',
              )}
              onClick={() => setFilterCategory(tag)}
              onMouseDown={() => setFilterCategory(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-12 grid grid-cols-2 gap-12'>
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div
        ref={PointerDivRef}
        className='absolute transition-none backdrop-blur pointer-events-none hidden top-0 z-20 py-2 px-4 text-sm rounded-full border border-neutral-700 text-neutral-300'
      >
        Click to open project
      </div>

      <SchemaMarkup schema={ProjectListSchema} />
    </div>
  )

  function ProjectCard(props: ProjectType) {
    // TODO: [Animation] Comet Border effect on project card hover
    // TODO: [Animation] On hover release small bubbles/sparkles in the background

    return (
      <Link
        href={`/projects/${props.title.toLowerCase().replace(/[\s\W]+/g, '-')}`}
        className='group cursor-none relative border p-4 rounded-3xl border-neutral-800 hover:border-neutral-600 hover:bg-neutral-950 transition-all'
      >
        <div className='h-72 rounded-xl bg-neutral-900'>
          <img
            src={props.heroImage}
            alt={`Visual Representation of ${props.title}`}
            className='rounded-xl h-full mx-auto text-center cursor-none text-neutral-400 group-hover:zoom-105'
            onMouseMove={e => {
              if (!PointerDivRef.current) return
              // TODO: Translate on Page Scroll
              // TODO: TranslateX depends on Page Width
              PointerDivRef.current.style.transform = `translateY(${e.pageY - 20}px) translateX(${e.pageX - 220}px)`
            }}
            onMouseEnter={() => {
              if (!PointerDivRef.current) return
              PointerDivRef.current.style.display = 'block'
            }}
            onMouseLeave={() => {
              if (!PointerDivRef.current) return
              PointerDivRef.current.style.display = 'none'
            }}
          />
        </div>
        <div className='px-2 pt-4 pb-2 cursor-pointer'>
          <div className='cursor-pointer font-semibold text-base'>
            {props.title}
          </div>
          <div className='cursor-pointer mt-2 text-sm text-neutral-300'>
            {props.description}
          </div>
          <ol className='cursor-pointer mt-4 flex flex-row flex-wrap gap-x-1 gap-y-2'>
            {props.tags.map(tag => (
              <li
                key={tag}
                className='py-1 px-2.5 text-xs cursor-pointer text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-full'
              >
                {tag}
              </li>
            ))}
          </ol>
        </div>
      </Link>
    )
  }
}
