'use client'

import { useRef } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

import { useLenis } from '@/lib/lenis'

import { H2 } from './ui'

export default function ProcessSection() {
  const SectionRef = useRef<HTMLDivElement>(null)
  const AccordianListRef = useRef<HTMLDivElement>(null)

  const TotalAccordianItems = 8

  useLenis((lenis) => {
    if (!SectionRef.current || !AccordianListRef.current) return

    const offsetTop = SectionRef.current?.previousSibling?.clientHeight
    const scrollHeight = SectionRef.current.scrollHeight

    // if (lenis.direction) {
    const scrolled = lenis.actualScroll - offsetTop
    if (scrolled > 0 && scrolled < scrollHeight) {
      const activeIndex = Math.floor(
        scrolled / (scrollHeight / TotalAccordianItems),
      )
      AccordianListRef.current.childNodes[activeIndex].open = true
    }
    // }

    // else {
    //   if (lenis.actualScroll > SectionRef.current.offsetTop) {
    //     lenis.start()
    //   }
    // }
  })

  // https://agilemanifesto.org/principles.html

  // Agile Methodology: Familiarity with agile development practices.
  // Problem-Solving Skills: Ability to troubleshoot and solve complex issues efficiently.
  // Continuous Learning: Willingness to stay updated with the latest technologies and industry trends.
  // Documentation: Maintaining clear and comprehensive documentation throughout the process.
  // Collaboration: Effective communication with team members and stakeholders.
  // QA management

  // $100M offers

  /* <div>Optimization</div>
        <div>Documentation</div>
        <div>Pre-Release</div> */

  return (
    <section
      ref={SectionRef}
      className="sticky top-0 mb-[100%] h-screen border border-black"
    >
      <div className="sticky top-0 bg-red-500/50">
        <H2>The Process</H2>

        <div className="grid grid-cols-2 gap-16">
          <aside>
            <img
              src="/resources/animated.gif"
              alt="Example"
              className="mt-8 w-full rounded-2xl"
            />
            <div className="mt-8 leading-relaxed text-text-secondary">
              You get complete Software Development Lifecycle (SDLC) <br />
              with Agile Methodology powered with AI.
            </div>
          </aside>

          <main ref={AccordianListRef}>
            <SmartAccordian
              title="Requirements & Business Analysis"
              name="process"
            >
              Define Problem. Understanding project needs and defining clear
              requirements. Setting scope of work. Business analyst and Project
              Manager set up a meeting with the customer to gather all the
              information like what the customer wants to build, who will be the
              end-user, what is the purpose of the product. Before building a
              product a core understanding or knowledge of the product is very
              important.
            </SmartAccordian>

            <SmartAccordian title="Design" name="process">
              In this phase, the requirement gathered in the SRS document is
              used as an input and software architecture that is used for
              implementing system development is derived. Creating architecture
              and design plans, including database schema and UI/UX wireframes.
            </SmartAccordian>

            <SmartAccordian
              title="Implementation & Optimization"
              name="process"
            >
              Implementation/Coding starts once the developer gets the Design
              document. The Software design is translated into source code. All
              the components of the software are implemented in this phase.
              Writing clean, modular, and efficient code for both front-end and
              back-end. Implementing unit tests, integration tests, and
              conducting thorough QA.
            </SmartAccordian>

            <SmartAccordian title="Testing & Quality-Assurance" name="process">
              Testing starts once the coding is complete and the modules are
              released for testing. In this phase, the developed software is
              tested thoroughly and any defects found are assigned to developers
              to get them fixed. Retesting, regression testing is done until the
              point at which the software is as per the customer’s expectation.
              Testers refer SRS document to make sure that the software is as
              per the customer’s standard.
            </SmartAccordian>

            <SmartAccordian title="Documentation & Pre-Release" name="process">
              Implementation/Coding starts once the developer gets the Design
              document. The Software design is translated into source code. All
              the components of the software are implemented in this phase.
              Writing clean, modular, and efficient code for both front-end and
              back-end. Implementing unit tests, integration tests, and
              conducting thorough QA.
            </SmartAccordian>

            <SmartAccordian title="Deployment & Scaling" name="process">
              Once the product is tested, it is deployed in the production
              environment or first UAT (User Acceptance testing) is done
              depending on the customer expectation. In the case of UAT, a
              replica of the production environment is created and the customer
              along with the developers does the testing. If the customer finds
              the application as expected, then sign off is provided by the
              customer to go live. Setting up CI/CD pipelines and managing
              deployment processes.
            </SmartAccordian>

            <SmartAccordian title="Monitoring & Support" name="process">
              After the deployment of a product on the production environment,
              maintenance of the product i.e. if any issue comes up and needs to
              be fixed or any enhancement is to be done is taken care by the
              developers. Monitoring application performance, bug fixing, and
              updating software.
            </SmartAccordian>

            <SmartAccordian title="Iteration Velocity" name="process">
              After the deployment of a product on the production environment,
              maintenance of the product i.e. if any issue comes up and needs to
              be fixed or any enhancement is to be done is taken care by the
              developers. Monitoring application performance, bug fixing, and
              updating software.
            </SmartAccordian>
          </main>
        </div>
      </div>
    </section>
  )
}

function SmartAccordian(props: {
  name: string
  title: string
  children: React.ReactNode
}) {
  const { name, title, children } = props
  return (
    <details
      name={name}
      className="group border-b border-border/30 pb-6 pt-4"
      data-scroll
      data-scroll-repeat
      data-scroll-call={`open-accordion-${name}-${title}`}
    >
      <summary className="relative text-xl font-semibold text-text-primary">
        {title}
        <HiChevronDown className="absolute right-1 top-2 ml-2 group-open:hidden" />
        <HiChevronUp className="absolute right-1 top-2 ml-2 hidden group-open:block" />
      </summary>
      <p className="mt-2 text-text-secondary">{children}</p>
    </details>
  )
}
