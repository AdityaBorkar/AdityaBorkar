import CLIENT_LIST from '@/content/clients'
import TESTIMONIALS from '@/content/testimonials'
import Marquee from 'react-fast-marquee'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

export default function ServicesPage() {
  // TODO: GET INSPIRATION FROM https://www.jannalynnhagan.com/services
  return (
    <div className='mx-auto max-w-[64rem] pb-36'>
      <div className='min-h-screen'>
        <div className='pt-56 font-tanker tracking-wider leading-normal text-center text-6xl'>
          Transform your ideas into REALITY with an Expert Full Stack Engineer
          {/* vision / product / services / organization */}
        </div>
        <a
          href='/contact'
          className='mt-24 w-fit text-lg px-8 py-3 rounded-md bg-neutral-800 text-neutral-200 mx-auto block'
        >
          Book a call now
        </a>

        <div className='mt-36 mb-12 tracking-wide text-center font-semibold text-neutral-500'>
          WORKING WITH STARTUPS, AGENCIES, BUSINESSES AND NON-PROFITS FROM
          ACROSS THE GLOBE.
        </div>
        <Marquee
          speed={60}
          gradient={true}
          gradientWidth={100}
          gradientColor='black'
        >
          {CLIENT_LIST.map(client => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              title={client.name}
              className={twMerge('mx-8 h-8 text-neutral-500', client.className)}
            />
          ))}
        </Marquee>
      </div>

      {/* SHOW THEM WHAT PROBLEMS CAN YOU SOLVE FOR THEM! */}
      {/* First up, let’s dive into the type of agency that offers end-to-end development at scale. */}

      <H2>My Process</H2>
      <div>
        {/* TODO: CARDS ON TOP EFFECT */}
        <Card>
          <div>Define Problem</div>
          <div>Set Scope of Work</div>
          {/* // Requirement Analysis: Understanding project needs and defining clear requirements. */}
          {/* // Design: Creating architecture and design plans, including database schema and UI/UX wireframes. */}
        </Card>

        <Card>
          <div>Define Problem</div>
          <div>Set Scope of Work</div>
          {/* We follow Agile techniques with sprints and SDLC */}
          {/* // Agile Methodology: Familiarity with agile development practices.
            // Problem-Solving Skills: Ability to troubleshoot and solve complex issues efficiently.
            // Continuous Learning: Willingness to stay updated with the latest technologies and industry trends. */}
        </Card>

        <Card>
          {/* $100M offers */}
          <div>Development</div>
          <div>Iterations</div>
          <div>Testing</div>
          {/* // Development: Writing clean, modular, and efficient code for both front-end and back-end.
          // Testing: Implementing unit tests, integration tests, and conducting thorough QA. */}
          {/* Product management
Software engineering
UX/UI */}
        </Card>

        <Card>
          <div>Optimization</div>
          <div>Documentation</div>
          <div>Pre-Release</div>
          {/* QA management */}
          {/* // Documentation: Maintaining clear and comprehensive documentation throughout the process.
          // Collaboration: Effective communication with team members and stakeholders. */}
        </Card>

        <Card>
          {/* DevOps */}
          {/* // Deployment: Setting up CI/CD pipelines and managing deployment processes.
          // Maintenance: Monitoring application performance, bug fixing, and updating software. */}
          <div>Deployment</div>
          <div>Monitoring</div>
          <div>Maintainence</div>
        </Card>
      </div>

      <H2>What do I do?</H2>

      <div>
        {/* Slider with animating entries */}
        {/* // Frontend
          Micro-Frontends
// Backend
// Micro Services

// Real-time and Collaborative UI
// Collaboration mode for your users
// Scalable real-time updates
// Real-time IoT data processing

// Infrastructure
// CI/CD setup
// Auto-scaling
// Observability
// Cloud migration
// Cloud cost optimization

// Backend scalability
// Frontend perfomance
// Complex upgrades */}
      </div>
      {/* Technologies that I work with */}
      <div>{/* TODO: Project Showcase (Miniature) */}</div>

      <H2>Specialized Services</H2>
      <div className='mt-48'>
        {/* TODO: Same as home-page divs. */}
        <div>Full Stack Web Developer</div>
        <div>AI Engineer</div>
      </div>

      <H2>Why people work with me?</H2>
      <div className='grid grid-cols-2'>
        <div>
          Text Text
          {/* 
          // Technical Proficiency: Strong knowledge of both front-end (HTML, CSS, JavaScript frameworks) and back-end technologies (Node.js, Python, Ruby, Java).
          // Experience with Databases: Proficiency in SQL and NoSQL databases.
          // Version Control: Expertise in using version control systems like Git.
          // Soft Skills: Good communication, teamwork, and project management skills.
          // Cultural Fit: Alignment with the company's values and work culture.
        */}
        </div>
        <div>Me Working and Meeting</div>
        <div>My Philosophy</div>
        <div>
          Meraki: μεράκι
          <br />
          We develop elegant, custom‑built solutions from start to finish that
          address the big challenges you face building the entire product while
          also tackling your “here‑and‑now” development and optimization needs.
        </div>
      </div>

      {/* TODO: Carousal */}
      <div className='mt-16 flex flex-row justify-center gap-12 overflow-auto'>
        {TESTIMONIALS.map(testimonial => (
          <div
            key={testimonial.author}
            className='border border-neutral-900 text-neutral-300 rounded-lg p-4 w-[36rem]'
          >
            <p className='text-sm'>{testimonial.text}</p>
            <div className='mt-1 text-base'>
              <div className='font-medium'>{testimonial.author}</div>
              <div className='text-sm'>{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-48 grid grid-cols-[1fr_2fr]'>
        <div>
          <h2 className='font-semibold text-5xl'>FAQs</h2>
          <div className='mt-2 text-neutral-500'>
            Frequently Asked Questions
          </div>
        </div>
        <div>
          <Accordian label='How do you charge?'>
            I charge on hourly rates payable on milestone-basis. I ask for 40%
            upfront payment. I support the following currencies - USD, EUR, GBP,
            AUD, CAD, SGD, INR
          </Accordian>
          <Accordian label='What timezones do you work in?'>
            I am flexible to work in any timezone. Based upon my ongoing
            projects, I shall convey my availability when we discuss the project
            proposal.
          </Accordian>
          <Accordian label='Who owns the code that you write?'>
            I push the code to the GitHub Repository you own. Publishing is
            configured with a CI/CD Pipeline wherever possible. Once the project
            is completed, all the intellectual rights and ownership shall be
            transferred to you.
          </Accordian>
          <Accordian label='Do you offer maintainence and post-project support?'>
            Yes! I offer maintainence and post-project support. I also offer a
            30 day warranty period for any bugs or issues that may arise after
            the project is completed.
          </Accordian>
          <Accordian label='Do you offer Confidentiality Contracts?'>
            Yes! I offer Contracts with specific clauses as per requirements. I
            am also open to signing an NDA if required. I understand the
            importance of Project Privacy and Confidentiality. I am open to
            discuss about this and include it in a contract that we both agree
            upon.
          </Accordian>
          <Accordian label='Do you work in teams? How do you collaborate?'>
            Communication and Collaboration: They might ask about the preferred
            communication channels, frequency of updates, and availability for
            meetings or discussions.
          </Accordian>
          <Accordian label='Can you scale if the requirements grow?'>
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
    </div>
  )
}

function H2(props: { children: React.ReactNode }) {
  return (
    <h2 className='mt-48 mb-16 font-semibold text-3xl text-center'>
      {props.children}
    </h2>
  )
}

function Accordian(props: { label: string; children: React.ReactNode }) {
  // TODO: Open Up Animation
  return (
    <details className='group cursor-default border-b-2 border-neutral-900 p-4'>
      <summary className='relative text-xl font-medium text-neutral-100'>
        {props.label}
        <HiChevronDown className='absolute right-1 top-2 ml-2 group-open:hidden' />
        <HiChevronUp className='absolute right-1 top-2 ml-2 hidden group-open:block' />
      </summary>
      <div className='py-4 text-lg text-neutral-300'>{props.children}</div>
    </details>
  )
}

function Card(props: {
  children: React.ReactNode
}) {
  return (
    <div className='mt-36 h-[75vh] shadow-neutral-400/20 shadow-lg border border-neutral-800 rounded-3xl'>
      {props.children}
    </div>
  )
}
