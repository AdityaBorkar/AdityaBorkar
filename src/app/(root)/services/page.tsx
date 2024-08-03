import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { twMerge } from 'tailwind-merge'

import BookCallFooter from '@/components/BookCallFooter'
import LinkButton from '@/components/LinkButton'
import CLIENT_LIST from '@/content/clients'
import TESTIMONIALS from '@/content/testimonials'

import FeaturedWorkSection from './FeaturedWorkSection'
import ProcessSection from './ProcessSection'
import SplashIcons from './SplashIcons'
import WhatIWorkSection from './WhatIWorkSection'
import { Accordian, H2 } from './ui'

export default function ServicesPage() {
  // TODO: GET INSPIRATION FROM https://www.jannalynnhagan.com/services
  // TODO: SHOW MOBILE MOCKUPS WITH HANDS ON THE WORK SECTION
  // Relax, Talk with the client, Keep it minimal, focus on Product Development and Business Outcomes.

  // coffee-paper-cup: https://icons8.com/illustrations/illustration/business-3d-side-view-of-coffee-paper-cup-with-sleeve
  // yellow-pencil: https://icons8.com/illustrations/illustration/business-3d-side-view-of-yellow-pencil-with-eraser-on-top
  // search-window: https://icons8.com/illustrations/illustration/business-3d-search-window
  // browser-window: https://icons8.com/illustrations/illustration/business-3d-browser-window-with-open-web-page
  // page-with-pie-chart: https://icons8.com/illustrations/illustration/business-3d-paper-page-with-pie-chart-and-text
  // drone-with-package: https://icons8.com/illustrations/illustration/business-3d-drone-flying-with-package
  // credit-cards: https://icons8.com/illustrations/illustration/3d-business-credit-cards-1
  // white-screen-laptop: https://icons8.com/illustrations/illustration/3d-business-side-view-of-white-screen-laptop
  // white-headphones: https://icons8.com/illustrations/illustration/3d-business-white-headphones-side-view
  // robot-assistant: https://icons8.com/illustrations/illustration/business-3d-robot-assistant-standing-and-looking
  // vr-headset-pro: https://icons8.com/illustrations/illustration/3d-business-vr-headset-pro-dise-view
  // avocado: https://icons8.com/illustrations/illustration/business-3d-avocado
  // two-blue-lego-bricks: https://icons8.com/illustrations/illustration/3d-business-two-blue-lego-bricks
  // grey-metal-gears: https://icons8.com/illustrations/illustration/business-3d-three-grey-metal-gears
  // https://icons8.com/illustrations/illustration/3d-casual-life-notebook-with-sticky-notes-notepad-and-phone
  // https://icons8.com/illustrations/illustration/3d-casual-life-analytics-on-computer-screen

  return (
    <div className="section">
      {/* TODO: Shift radial to bottom 50% and scale 200% */}
      {/* <div className="bg-gradient-radial absolute left-0 top-0 -z-20 h-screen w-screen from-transparent via-zinc-200 to-white" /> */}
      <div className="section flex h-screen flex-col items-center justify-center">
        <SplashIcons />

        <div className="relative">
          <img
            src="/resources/vr-headset-pro.png"
            alt=""
            className="absolute -left-16 -top-14 z-0 w-36 -rotate-12 -scale-x-100"
          />
          <h1 className="relative z-10 text-center text-7xl font-bold leading-snug tracking-tight">
            Transform your ideas with an <br />
            Expert Product Engineer
          </h1>
          {/* vision / product / services / organization */}
          <img
            src="/resources/yellow-pencil.png"
            alt=""
            className="absolute -bottom-24 -right-12 hidden h-12 rotate-[75deg] hover:scale-125"
          />
        </div>

        <LinkButton href="/contact" type="primary" className="mt-16">
          Schedule a call
        </LinkButton>

        {/* PITCH.COM / FIGMA SLIDES */}
        {/* VIDEO INTRODUCTION */}

        <div className="mb-8 mt-36 text-center font-semibold tracking-wide text-neutral-500">
          WORKING WITH STARTUPS, AGENCIES, BUSINESSES AND NON-PROFITS - ACROSS
          THE GLOBE.
        </div>
        <div className="section relative">
          <div className="absolute bottom-0 right-0 top-0 z-10 h-full w-56 bg-gradient-to-l from-background" />
          <div className="absolute bottom-0 left-0 top-0 z-10 h-full w-56 bg-gradient-to-r from-background" />
          <Marquee speed={40}>
            {CLIENT_LIST.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                title={client.name}
                className={twMerge(
                  'mx-8 h-9 text-neutral-500 hover:grayscale-0',
                  client.className,
                )}
              />
            ))}
          </Marquee>
        </div>
      </div>

      {/* TODO: Define Customer's Problems */}

      <ProcessSection />

      <WhatIWorkSection />

      <FeaturedWorkSection />

      <H2>Why people work with me?</H2>
      <div className="grid grid-cols-2 gap-x-16">
        <div>
          <div>Strong Technical Foundations</div>
          <div>Experience with Databases</div>
          <div>Version Control</div>
          <div>Soft Skills</div>
          <div>Cultural Fit</div>
          {/* 
          // Technical Proficiency: Strong knowledge of both front-end (HTML, CSS, JavaScript frameworks) and back-end technologies (Node.js, Python, Ruby, Java).
          // Experience with Databases: Proficiency in SQL and NoSQL databases.
          // Version Control: Expertise in using version control systems like Git.
          // Soft Skills: Good communication, teamwork, and project management skills.
          // Cultural Fit: Alignment with the company's values and work culture.
        */}
          {/* right arrow
Outdated CMS (Wordpress, Contentful, etc)
right arrow
Lack of Communication
right arrow
Performance and Quality Issues
right arrow
Lack in Availability
right arrow
Lack in Consultancy
right arrow
Messy CMS Setup
right arrow
Lack of Resources
right arrow
Lack of Design Capabilities
right arrow
Constant Project Delays */}
          We develop elegant, custom‑built solutions from start to finish that
          address the big challenges you face building the entire product while
          also tackling your “here‑and‑now” development and optimization needs.
        </div>
        <div>
          <img
            src="/resources/pic (4).jpeg"
            alt="Lights"
            className="mb-6 w-full rounded-3xl object-cover"
          />
        </div>
        {/* Our Mission
We create Webflow sites that are on their league of their own for ambitious startups and enterprises.
Our Values
1. Clients always come first.
2. Get it done. No excuses.
3. Stay humble, Be confident.
Our Vision
To be the leading Webflow agency with great people, clients & products. */}
        <div>
          Self-motivation and ability to work independently Collaboration skills
          for working with other team members or clients Basic understanding of
          business goals and how technology supports them Ability to suggest
          solutions that align with project objectives
        </div>

        <div className="rounded-2xl border border-border/20 bg-white p-4">
          <div className="mb-4 text-xs font-semibold uppercase text-text-secondary">
            My Philosophy
          </div>
          <div className="text-xl font-semibold">μεράκι - Meraki</div>
          <div className="mt-0.5 text-sm">pronounced: meh-rah-kee</div>
          <div className="mt-2 text-base">
            The soul, creativity, or love put into something; putting your
            essence in your work.
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-row flex-wrap items-start justify-evenly gap-8">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.author}
            className="h-fit flex-[1_0_30%] rounded-2xl border border-border/20 bg-white px-6 py-4 dark:bg-black"
          >
            <div className="flex flex-row justify-between">
              <div className="w-fit bg-gradient-to-tr from-yellow-500 to-orange-500 bg-clip-text text-xl text-transparent">
                ★★★★★
              </div>
              {/* 
              <div>
                {testimonial.proof && (
                  <Link
                    target="_blank"
                    href={testimonial.proof.url}
                    className="text-xs text-text-secondary"
                  >
                    {testimonial.proof.name === 'LinkedIn' && (
                      <ImLinkedin className="size-5 text-blue-600" />
                    )}
                  </Link>
                )}
              </div>
               */}
            </div>

            <p className="my-4 text-pretty text-sm">{testimonial.text}</p>

            <div className="text-base">
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-sm text-text-secondary">
                {testimonial.role}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-64 grid grid-cols-[1fr_2fr]">
        <div>
          <h2 className="text-5xl font-semibold">FAQs</h2>
          <div className="mt-2 text-neutral-500">
            Frequently Asked Questions
          </div>
        </div>
        <div>
          <Accordian title="How do you charge?">
            I charge on hourly rates payable on milestone-basis. I ask for 40%
            upfront payment. I support the following currencies - USD, EUR, GBP,
            AUD, CAD, SGD, INR
          </Accordian>
          <Accordian title="What timezones do you work in?">
            I am flexible to work in any timezone. Based upon my ongoing
            projects, I shall convey my availability when we discuss the project
            proposal.
          </Accordian>
          <Accordian title="Who owns the code that you write?">
            I push the code to the GitHub Repository you own. Publishing is
            configured with a CI/CD Pipeline wherever possible. Once the project
            is completed, all the intellectual rights and ownership shall be
            transferred to you.
          </Accordian>
          <Accordian title="Do you offer maintainence and post-project support?">
            Yes! I offer maintainence and post-project support. I also offer a
            30 day warranty period for any bugs or issues that may arise after
            the project is completed.
          </Accordian>
          <Accordian title="Do you offer Confidentiality Contracts?">
            Yes! I offer Contracts with specific clauses as per requirements. I
            am also open to signing an NDA if required. I understand the
            importance of Project Privacy and Confidentiality. I am open to
            discuss about this and include it in a contract that we both agree
            upon.
          </Accordian>
          <Accordian title="Do you work in teams? How do you collaborate?">
            Communication and Collaboration: They might ask about the preferred
            communication channels, frequency of updates, and availability for
            meetings or discussions.
          </Accordian>
          <Accordian title="Can you scale if the requirements grow?">
            Scalability and Flexibility: Questions about the developer's ability
            to scale the team if needed or adapt to changing project
            requirements.
          </Accordian>
          {/* WHY SHOULD I WORK WITH YOU?
Just think of me as your creative bestie. 👯 As a business owner myself, I understand that you can’t do it all. I want to take all things “design” off your plate so you can focus on what you do best. I only work with a handful of clients at a time so that I’m able to dedicate the time and care needed to do my best work.
// You feel comfortable jumping into complex topics immediately
  // Good understanding of APIs and how to properly build them for long-term success
  // A self-starter who works well independently as well as interdependently in a remote environment
  // A motivated person who enjoys working on complex technical problems who does not need to be micro-managed
  // Someone who is looking to grow with us and our product
  
HOW LONG WILL IT TAKE?
It really depends on how many emails you need designed. The process, on average, can take 2-6 weeks, from project start to implementation.

HOW MUCH DOES IT COST?
Well, every project can be unique so I like the quote that way too. Please get in touch and you’ll receive a short PDF with my packages and pricing.

WHAT PLATFORMS DO YOU WORK WITH?
I mainly work in Klaviyo (I’m Klaviyo product certified!), but I’m also comfortable with Mailchimp, Omnisend, Attentive, Salesforce, and more. 

CAN I EDIT THE EMAIL TEMPLATES YOU CREATE?
All my email templates are a combination of imagery and live text. I provide all design files in a program called Figma (it’s free for you) so you will be able to make any edits to images yourself after the project is done. I try to address any edits/changes during the one round of revisions during the project, so hopefully you won’t have to make any future edits!

WHAT DO YOU NEED TO GET STARTED?
Please check out my services page where I outline the creative process in more detail. To get started, I will need any brand assets (logos, fonts, imagery, etc) and an outline of the copy that needs to be included for each email.

CAN YOU WRITE COPY FOR ME?
No. This needs to be provided by you before I can start design. 

DO YOU IMPLEMENT OUR EMAIL MARKETING STRATEGY, TOO?
No. I can help with implementing and suggesting basic email flows + implementations. Any advanced email marketing strategies or flows will be implemented by you.
 */}
        </div>
      </div>

      <BookCallFooter />
    </div>
  )
}
