import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
import { LuMail } from 'react-icons/lu'

import ProfileImage from '@/assets/profile.png'
import BentoDiv from '@/components/BentoDiv'
import BookCallFooter from '@/components/BookCallFooter'
import TESTIMONIALS from '@/content/testimonials'

// TODO: Add accessiblity and JSON-LD

export default function HomePage() {
  // const date = new Date().toLocaleString('en-US', {
  //   month: 'long',
  //   day: 'numeric',
  //   year: 'numeric',
  // })

  return (
    <div>
      <div className="mx-auto mb-36 mt-48 grid max-w-[64rem] grid-cols-[1fr_2fr] gap-16">
        <div className="mx-auto size-80 overflow-hidden rounded-full bg-neutral-900">
          {/* Mountains in Background, Well-defined body, Authorative Face */}
          <Image
            src={ProfileImage}
            alt=""
            className="h-full w-full -scale-x-125 scale-y-125 rounded-full object-cover"
          />
        </div>
        <div className="-mt-4 w-[100%]">
          <div className="text-3xl font-bold leading-[1.5]">
            Full Stack Product Engineer.
            <br /> AI Developer. OSS Maintainer.
          </div>

          <div className="mt-6 flex flex-row gap-4 text-text-secondary">
            <Link href="mailto:hi@adityab.tech" className="mt-0.5">
              <LuMail className="size-5 hover:text-foreground" />
            </Link>
            <Link href="https://twitter.com/adityab_tech">
              <BiLogoTwitter className="size-6 hover:text-foreground" />
            </Link>
            <Link href="https://linkedin.com/in/aditya-borkar">
              <BiLogoLinkedin className="size-6 hover:text-foreground" />
            </Link>
            <Link href="https://github.com/AdityaBorkar">
              <BiLogoGithub className="size-6 hover:text-foreground" />
            </Link>
          </div>

          <p className="my-12 text-balance text-base text-text-primary">
            I'm Aditya Borkar, as a software engineer, I specialize in creating
            high-quality products with humanizing user experience, leveraging
            integration with APIs and libraries. My aim is to help businesses in
            optimizing their processes for improved efficiency and ease of use.
            I have strong opinions to deliver clean, maintainable, scalable,
            production-ready world-class code.
            {/* TODO: Attract attention and convey how your skills can help deveopers/businesses */}
            {/* <p className="mt-4">
              As a software engineer, I specialize in creating high-quality
              products with humanizing user experience, leveraging integration
              with APIs and libraries. My aim is to aid businesses in optimizing
              their processes for improved efficiency and ease of use.
            </p> */}
          </p>

          <div className="w-fit">
            <Link
              href="/contact"
              className="rounded-xl bg-amber-700 px-6 py-3 font-semibold text-background"
            >
              Enquire / Contact
            </Link>

            <div className="my-8 text-center text-sm text-text-secondary">
              <div className="relative mr-2 inline-block">
                <div className="size-3 rounded-full bg-green-500" />
                <div className="absolute -top-0.5 -ml-0.5 size-4 animate-ping rounded-full bg-green-500 [animation-delay:0.4s] [animation-duration:2s]" />
              </div>
              Available now
            </div>
          </div>
        </div>
      </div>

      <Marquee className="opacity-25 *:mx-8">
        {/* Increase opacity on scroll */}
        {/* Corner Blurs and Shadows. (client list like) Works Screenshot with (view
        work) cursor in scrolling manner. Scroll Linked. Continue scrolling for
        a long time. */}
        <Link href="">
          <img
            src="./res/mockup1.png"
            alt=""
            className="h-72 border border-border"
          />
        </Link>
        <Link href="">
          <img
            src="./res/mockup1.png"
            alt=""
            className="h-72 border border-border"
          />
        </Link>
        {/* <Link href="">
          <img
            src="./res/mockup1.png"
            alt=""
            className="h-72 border border-border"
          />
        </Link> */}
        <Link href="">
          <img
            src="./res/mockup1.png"
            alt=""
            className="h-72 border border-border"
          />
        </Link>
        <Link href="">
          <img
            src="./res/mockup1.png"
            alt=""
            className="h-72 border border-border"
          />
        </Link>
      </Marquee>

      <SectionHeading>About ↓</SectionHeading>

      <div className="section grid grid-cols-8 gap-8">
        <BentoDiv label="Motivation" className="col-span-4 row-span-3">
          <p className="text-base">
            I became a programmer and product engineer because I'm passionate
            about harnessing the power of technology to solve real-world
            problems and make a meaningful impact on people's lives. I enjoy the
            creative challenge of designing innovative solutions and the
            satisfaction of seeing my ideas come to life. Through programming
            and product engineering, I aim to continually learn, grow, and push
            the boundaries of what's possible.
            {/* Passion, Problem-solving, Learning mindset */}
          </p>
        </BentoDiv>

        <BentoDiv label="Peerlist" className="">
          .
        </BentoDiv>

        <BentoDiv label="IndieHackers" className="">
          .
        </BentoDiv>

        <BentoDiv label="Read.cv" className="">
          .
        </BentoDiv>

        <BentoDiv label="Medium" className="">
          .
        </BentoDiv>

        <BentoDiv label="GitHub" className="col-span-4 row-span-2">
          Heatmap
        </BentoDiv>

        <BentoDiv label="Stats" className="col-span-6 row-span-2">
          <div className="flex flex-row justify-evenly py-4 text-center text-sm">
            <div>
              <div className="mb-2 text-2xl font-semibold">3+ </div>
              Years of Expertise
            </div>
            <div>
              <div className="mb-2 text-2xl font-semibold">10+</div>
              Total Projects
            </div>
            <div>
              <div className="mb-2 text-2xl font-semibold">4+</div>
              Happy Clients
            </div>
            <div>
              <div className="mb-2 text-2xl font-semibold">10+</div>
              GitHub Stars
            </div>
            {/* <div>
              <div className="text-2xl font-semibold">600+</div>
              Commits
            </div> */}
            <div>
              <div className="mb-2 text-2xl font-semibold">3000+</div>
              Coding Hours
            </div>
          </div>
          {/* I am comfortable to work in many programming languages and
            cross-platforms. I love to solve problems using tech, for that, I am
            flexible to learn any language/library/frameworks/tools */}
        </BentoDiv>

        <BentoDiv label="Photo" className="col-span-2 row-span-5">
          Desk Setup
          {/* OR Timelapse of me working on my desk with coffee from a picturesque place */}
        </BentoDiv>

        <BentoDiv label="Tech Stack" className="col-span-4 row-span-4">
          Tech Stack
        </BentoDiv>

        <BentoDiv label="Location" className="col-span-2 row-span-4">
          Maps + Timezones comfortable
        </BentoDiv>

        {/* <BentoBox label="Spotify" className="col-span-2">
          Playlist
        </BentoBox> */}

        <BentoDiv label="Read More" className="col-span-2">
          /about
        </BentoDiv>
      </div>

      <SectionHeading>Services ↓</SectionHeading>

      <div className="section">
        <div className="grid grid-cols-5 gap-12">
          {/* INTERACTIVE GIFS + ATTENTION GRABBING */}
          <div className="col-span-2 row-span-2 rounded-2xl border border-neutral-800 p-4">
            Full Stack Product Engineer
          </div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          {/* --- */}

          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="col-span-2 row-span-2 rounded-2xl border border-neutral-800 p-4">
            AI Engineer [SPECIALIZED]
          </div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
          <div className="rounded-2xl border border-neutral-800 p-4">.</div>
        </div>
      </div>

      {/* <SectionHeading>Selected Work</SectionHeading> */}

      <SectionHeading>What people speak ?</SectionHeading>

      {/* TODO: Carousal */}
      <div className="section flex flex-row justify-center gap-12 overflow-auto">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.author}
            className="w-[36rem] rounded-lg border border-neutral-900 p-4 text-neutral-300"
          >
            <p className="text-sm">{testimonial.text}</p>
            <div className="mt-1 text-base">
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-sm">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionHeading>Writings ↓</SectionHeading>

      {/* TODO: Featured Only (2 Most Viewed and 1 Recent) */}
      <div className="section flex flex-row justify-center gap-12 overflow-auto">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.author}
            className="w-[36rem] rounded-lg border border-neutral-900 p-4 text-neutral-300"
          >
            <p className="text-sm">{testimonial.text}</p>
            <div className="mt-1 text-base">
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-sm">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>

      <BookCallFooter />

      {/* <div className='mt-64 '>
        <h3 className='font-semibold text-3xl text-center'>Reach Out</h3>
        <form className='mt-16 text-center w-[20%] mx-auto'>
          <input
            name=''
            type='text'
            className='mb-8 border border-neutral-800 w-full rounded-md py-2 px-4 bg-neutral-900'
          />
          <textarea
            name=''
            className='mb-8 border border-neutral-800 w-full rounded-md py-2 px-4 bg-neutral-900'
          />
          <button
            type='submit'
            className='mt-8 px-4 py-2 bg-white mx-auto text-black rounded-md font-medium text-sm'
          >
            Send Inquiry
          </button>
        </form>
      </div> */}
    </div>
  )
}

function SectionHeading(props: { children: React.ReactNode }) {
  return (
    <h3 className="section mb-16 mt-48 text-left text-4xl font-bold">
      {props.children}
    </h3>
  )
}
