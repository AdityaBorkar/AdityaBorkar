import type { IconType } from 'react-icons'

import ScheduleMeetBtn from '@/app/(services)/webflow/ScheduleMeetBtn'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { HiCalendar } from 'react-icons/hi2'

export default function ContactPage() {
  return (
    <div className=''>
      <main className='mx-auto my-24 w-full max-w-[36rem]'>
        <h2 className='mb-4 text-4xl font-bold text-white'>
          How can I help you?
        </h2>
        <div className='font-medium text-neutral-500'>
          You can expect a reply within three business days.
        </div>

        <form className='mt-12'>
          <div className='relative group'>
            <label htmlFor='contactForm_details' className='text-neutral-200'>
              Tell me about your project:
            </label>
            <textarea
              id='contactForm_details'
              placeholder='Feel free to write here...'
              className='peer group-hover:pb-24 mt-1 block h-64 w-full rounded-md bg-neutral-900 px-4 py-2 placeholder:text-neutral-500'
            />
            <div className='hidden absolute rounded-b-md text-xs w-full bottom-0 px-4 bg-neutral-900 border-neutral-700 text-neutral-400 py-2 border-t group-hover:block group-focus:block peer-hover:block peer-focus:block'>
              Be detailed as much as possible. Attach reference or prototype or
              existing website or inspirations. Share what's on your mind. This
              helps me to understand if I am fit and get back to you with a
              personalized response.
            </div>
          </div>
          <div className='mt-4 grid grid-cols-2 gap-4'>
            <div>
              <label htmlFor='contactForm_name' className='text-neutral-200'>
                Your Name:
              </label>
              <input
                type='name'
                id='contactForm_name'
                placeholder='Takeshi Williams'
                className='mt-1 block w-full rounded-md bg-neutral-900 px-4 py-2 placeholder:text-neutral-500'
              />
            </div>

            <div>
              <label htmlFor='contactForm_email' className='text-neutral-200'>
                Your Email:
              </label>
              <input
                type='email'
                id='contactForm_email'
                placeholder='takeshi.williams@space.io'
                className='mt-1 block w-full rounded-md bg-neutral-900 px-4 py-2 placeholder:text-neutral-500'
              />
            </div>
          </div>
        </form>

        <div className='mt-10 flex flex-row justify-between'>
          <div className='mt-2 text-neutral-300'>
            <HiCalendar className='inline-block' />
            <ScheduleMeetBtn className='underline mx-2 underline-offset-4 hover:underline-offset-8  '>
              Schedule a call
            </ScheduleMeetBtn>
            instead
          </div>
          <button
            type='submit'
            className='rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-950 hover:bg-white'
          >
            Submit Inquiry
          </button>
        </div>

        <div className='mt-24 text-neutral-300'>
          <div>
            If you prefer email, write at{' '}
            <a
              href='mailto:hi@adityaborkar.com'
              className='font-medium underline underline-offset-4 hover:underline-offset-8'
            >
              hi@adityaborkar.com
            </a>
          </div>
          <div className='mt-2'>
            or feel free to reach me on{' '}
            <InlineLink href='https://x.com/adityab_tech/dm' icon={FaTwitter}>
              Twitter
            </InlineLink>
            <InlineLink
              href='https://linkedin.com/adityab_tech/dm'
              icon={FaLinkedin}
            >
              LinkedIn
            </InlineLink>
            <InlineLink
              href='https://instagram.com/adityab_tech/dm'
              icon={FaInstagram}
            >
              Instagram
            </InlineLink>
          </div>
        </div>
      </main>
    </div>
  )
}

function InlineLink(props: {
  children: React.ReactNode
  icon: IconType
  href: string
}) {
  return (
    <a
      href={props.href}
      className='py-1 px-2 border border-neutral-800 rounded-md mx-1 text-sm bg-neutral-900'
    >
      <props.icon className='inline mr-2 size-4 -mt-1' />
      {props.children}
    </a>
  )
}
