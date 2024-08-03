import type { ReactNode } from 'react'

import Link from 'next/link'
import { HiArrowLeft, HiArrowUpRight, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { VscGithub } from 'react-icons/vsc'
import { twMerge } from 'tailwind-merge'
import SchemaMarkup from '@/components/SchemaMarkup'
import generateProjectSchema from './schema'

export default function ProjectPage(props: { params: { id: string } }) {
  const projectId = props.params.id

  // TODO: Fetch Details (SSG)
  const project = {
    // TODO: Frontmatter
    title: 'GeM Finder',
    description:
      'Google Chrome Extension to navigate the GeM website and get personalized bids.',
    category: 'Web Development',
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
    <div className='max-w-[64rem] mx-auto text-neutral-300'>
      <div className='relative grid grid-cols-[42rem_18rem] gap-16'>
        <main>
          <Link
            href='/projects'
            className='block mt-16 text-neutral-400 font-medium hover:text-neutral-200'
          >
            <HiArrowLeft className='inline-block size-5 mr-4 -mt-1' />
            Back to "Projects"
          </Link>

          <h2 className='font-bold text-white text-4xl mt-12'>
            {project.title}
          </h2>
          <div className='mt-4 text-neutral-400'>{project.description}</div>

          {/* TODO: Make this a GIF. With Screen Recordings and kickass animations. */}
          <div className='w-[90%] h-96 my-16 mx-auto bg-neutral-800 rounded-2xl' />

          <H4>Problem Statement</H4>
          <p className='mt-4'>
            Government of India and it's various agencies (350k+ registered
            buyers) advertise the 11k+ products and 300+ services required for
            them on an open e-marketplace called as "Government e-Marketplace"
            (GeM). On a daily basis, more than 100+ bids are posted, with 1000+
            sellers competing to win. To track these bids, a full-time employee
            is required per 50 bids.
          </p>
          <p className='mt-4'>
            The solution was to automate the process of finding the bid
            according to the business' capabilities, capacity and eligibility
            criterion.
          </p>

          <H4>Crafted Solution</H4>
          <div>Add Images/Screens and explain</div>
        </main>

        <aside className='relative'>
          <div className='py-36' />
          <div className='sticky top-32 w-full text-sm flex flex-col gap-4'>
            <ExternalLink href={'https://github.com/'}>
              <HiOutlineGlobeAlt className='inline-block size-5 mr-2' />
              gem.adityaborkar.com
              <HiArrowUpRight className='absolute top-4 right-4 size-4' />
            </ExternalLink>

            <ExternalLink href={'https://github.com/'}>
              <VscGithub className='inline-block size-5 mr-2' />
              adityaborkar/gem-finder
              <HiArrowUpRight className='absolute top-4 right-4 size-4' />
            </ExternalLink>

            <div className='border border-neutral-700 p-4 rounded-lg'>
              <div className=' text-base font-semibold text-neutral-100 mb-2'>
                Business Outcome
              </div>
              <ul className='list-disc list-inside ml-1'>
                {project.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className='border border-neutral-700 p-4 rounded-lg'>
              <div className='text-base  font-semibold text-neutral-100 mb-2'>
                Tech Stack
              </div>
              <ul className='list-disc flex flex-col gap-1 list-inside ml-1'>
                {project.tech.map(tech => (
                  <li key={tech.name}>
                    {/* {tech.img} */}
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <div className='text-center my-48'>
        CALL TO ACTION:
        {/* VIEW MORE PROJECTS/BLOGS */}
        {/* CONTACT / SCHEDULE MEET */}
      </div>

      <SchemaMarkup schema={generateProjectSchema(project)} />
    </div>
  )
}

function H4(props: {
  children: string
  className?: string
}) {
  return (
    <h4 className='font-semibold text-white text-2xl mt-16 mb-4'>
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
      target='_blank'
      rel='noreferrer'
      className={twMerge(
        'block relative w-full py-3 px-4 bg-neutral-200 text-neutral-800 font-medium rounded-md',
        props.className,
      )}
    >
      {props.children}
    </a>
  )
}
