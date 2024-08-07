import type { IconType } from 'react-icons'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { HiCalendar } from 'react-icons/hi2'

import ScheduleMeetBtn from '@/components/ScheduleMeetBtn'

export default function ContactPage() {
  //   I'm available for projects, podcasts, talks, consultations, & collabs. Looking to start a new project or just want to say hi? Email me, and I’ll do my best to reply within 24 hrs.
  // If contact forms aren’t your thing... email me at hello@arnau.design

  return (
    <div className="">
      <main className="mx-auto my-24 w-full max-w-[36rem]">
        <h2 className="mb-4 text-4xl font-bold">How can I help you?</h2>
        <div className="font-medium text-text-secondary">
          I usually reply within 24 hours.
        </div>

        <form className="mt-12">
          <div className="group relative">
            <label htmlFor="contactForm_details" className="text-text-primary">
              Tell me about your project:
            </label>
            <textarea
              id="contactForm_details"
              placeholder="Feel free to write here..."
              className="peer mt-1 block h-64 w-full rounded-md bg-neutral-900 px-4 py-2 placeholder:text-neutral-500 group-hover:pb-24"
            />
            <div className="absolute bottom-0 hidden w-full rounded-b-md border-t border-neutral-700 bg-neutral-900 px-4 py-2 text-xs text-neutral-400 group-hover:block group-focus:block peer-hover:block peer-focus:block">
              Be detailed as much as possible. Attach reference or prototype or
              existing website or inspirations. Share what's on your mind. This
              helps me to understand if I am fit and get back to you with a
              personalized response.
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="contactForm_name" className="text-text-primary">
                Your Name:
              </label>
              <input
                type="name"
                id="contactForm_name"
                placeholder="Takeshi Williams"
                className="mt-1 block w-full rounded-md bg-neutral-900 px-4 py-2 placeholder:text-neutral-500"
              />
            </div>

            <div>
              <label htmlFor="contactForm_email" className="text-text-primary">
                Your Email:
              </label>
              <input
                type="email"
                id="contactForm_email"
                placeholder="takeshi.williams@space.io"
                className="mt-1 block w-full rounded-md bg-neutral-900 px-4 py-2 placeholder:text-neutral-500"
              />
            </div>
          </div>
        </form>

        <div className="mt-10 flex flex-row justify-between">
          <div className="mt-2 text-text-primary">
            <HiCalendar className="inline-block" />
            <ScheduleMeetBtn className="mx-2 underline underline-offset-4 hover:underline-offset-8">
              Schedule a call
            </ScheduleMeetBtn>
            instead
          </div>
          <button
            type="submit"
            className="rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-950 hover:bg-white"
          >
            Submit Inquiry
          </button>
        </div>

        <div className="mt-24 text-text-secondary">
          <div>
            If you prefer email, write to{' '}
            <a
              href="mailto:hi@adityaborkar.com"
              className="font-medium underline underline-offset-4 hover:underline-offset-8"
            >
              hi@adityaborkar.com
            </a>
          </div>
          <div className="mt-2">
            or feel free to reach me on{' '}
            <InlineLink href="https://x.com/adityab_tech/dm" icon={FaTwitter}>
              Twitter
            </InlineLink>
            <InlineLink
              href="https://linkedin.com/adityab_tech/dm"
              icon={FaLinkedin}
            >
              LinkedIn
            </InlineLink>
            <InlineLink
              href="https://instagram.com/adityab_tech/dm"
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
      className="mx-1 rounded-md border border-border bg-bg-primary px-2 py-1 text-sm"
    >
      <props.icon className="-mt-1 mr-2 inline size-4" />
      {props.children}
    </a>
  )
}
