import Link from 'next/link'
import type { ReactNode } from 'react'
import { HiArrowLeft, HiArrowUpRight, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { VscGithub } from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'

import SchemaMarkup from '@/components/SchemaMarkup'
import { ProjectType } from '@/types/projectInfo'

import generateProjectSchema from './schema'

export default function ProjectPage(props: { params: { id: string } }) {
  const projectId = props.params.id

  // TODO: Fetch Details (SSG)
  const project = {
    // TODO: Frontmatter
    title: 'GeM Finder',
    description:
      'Google Chrome Extension to navigate the GeM website and get personalized bids.',
    categories: ['Software Development', 'Plugins & Extensions'],
    tags: [
      'Google Chrome Extension',
      'Web Scraping',
      'Govt. of India API',
      'Data Analysis',
      'Personalization',
    ],
    website: 'gem.vasundhara.cc',
    github: '',
    tech: [
      { name: 'TypeScript', img: '' },
      { name: 'PWA (Web App)', img: '' },
      { name: 'Chrome Extension', img: '' },
      { name: 'Plasmo', img: '' },
      { name: 'TailwindCSS', img: '' },
      { name: 'Cloudflare Workers', img: '' },
      { name: 'Cloudflare D1', img: '' },
      { name: 'WhatsApp Business API', img: '' },
    ],
    heroImage: '',
    highlights: ['34% Revenue Growth y-o-y', 'Saved 120+ man-hours per month'],
    // TODO: MDX
  } as ProjectType

  return (
    <div className="mx-auto max-w-[64rem] text-neutral-300">
      <div className="relative grid grid-cols-[42rem_18rem] gap-16">
        <main>
          <Link
            href="/projects"
            className="mt-16 block font-medium text-neutral-400 hover:text-neutral-200"
          >
            <HiArrowLeft className="-mt-1 mr-4 inline-block size-5" />
            Back to "Projects"
          </Link>

          <h2 className="mt-12 text-4xl font-bold text-white">
            {project.title}
          </h2>
          <div className="mt-4 text-neutral-400">{project.description}</div>

          {/* TODO: Make this a GIF. With Screen Recordings and kickass animations. */}
          <div className="mx-auto my-16 h-96 w-[90%] rounded-2xl bg-neutral-800" />

          <H4>Problem Statement</H4>
          <p className="mt-4">
            Government of India and it's various agencies (350k+ registered
            buyers) advertise the 11k+ products and 300+ services required for
            them on an open e-marketplace called as "Government e-Marketplace"
            (GeM). On a daily basis, more than 100+ bids are posted, with 1000+
            sellers competing to win. To track these bids, a full-time employee
            is required per 50 bids.
          </p>
          <p className="mt-4">
            The solution was to automate the process of finding the bid
            according to the business' capabilities, capacity and eligibility
            criterion.
          </p>

          <H4>Crafted Solution</H4>
          <div>Add Images/Screens and explain</div>
        </main>

        <aside className="relative">
          <div className="py-36" />
          <div className="sticky top-32 flex w-full flex-col gap-4 text-sm">
            <ExternalLink href={'https://github.com/'}>
              <HiOutlineGlobeAlt className="mr-2 inline-block size-5" />
              gem.adityaborkar.com
              <HiArrowUpRight className="absolute right-4 top-4 size-4" />
            </ExternalLink>

            <ExternalLink href={'https://github.com/'}>
              <VscGithub className="mr-2 inline-block size-5" />
              adityaborkar/gem-finder
              <HiArrowUpRight className="absolute right-4 top-4 size-4" />
            </ExternalLink>

            <div className="rounded-lg border border-neutral-700 p-4">
              <div className="mb-2 text-base font-semibold text-neutral-100">
                Business Outcome
              </div>
              <ul className="ml-1 list-inside list-disc">
                {/* {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))} */}
              </ul>
            </div>

            <div className="rounded-lg border border-neutral-700 p-4">
              <div className="mb-2 text-base font-semibold text-neutral-100">
                Tech Stack
              </div>
              <ul className="ml-1 flex list-inside list-disc flex-col gap-1">
                {/* {project.tech.map((tech) => (
                  <li key={tech.name}>
                    {tech.img}
                    {tech.name}
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <div className="my-48 text-center">
        CALL TO ACTION:
        {/* VIEW MORE PROJECTS/BLOGS */}
        {/* CONTACT / SCHEDULE MEET */}
      </div>

      <SchemaMarkup schema={generateProjectSchema(project)} />
    </div>
  )
}

function H4(props: { children: string; className?: string }) {
  return (
    <h4 className="mb-4 mt-16 text-2xl font-semibold text-white">
      {props.children}
    </h4>
  )
}

function ExternalLink(props: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={'https://github.com/'}
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        'relative block w-full rounded-md bg-neutral-200 px-4 py-3 font-medium text-neutral-800',
        props.className,
      )}
    >
      {props.children}
    </a>
  )
}
