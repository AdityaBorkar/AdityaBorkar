import Link from 'next/link'
import { LuArrowUpRight, LuX } from 'react-icons/lu'
import { SiReaddotcv } from 'react-icons/si'

import { cn } from '@/lib/utils'

export default function AboutPage() {
  // TODO: Make sure every photo is in PORTRAIT MODE
  // TODO: Give meaningful names to images for SEO purposes
  // images: Instead, showcase your team members, behind-the-scenes glimpses,
  // and real customer stories. This humanizes your brand, making it
  // relatable and trustworthy. When people see the human side of your
  // business, they are more likely to engage and connect with you!
  return (
    <main className="mx-auto w-[80vw] max-w-[48rem] py-20">
      <div className="my-8 flex flex-col justify-between sm:flex-row">
        <h2 className="text-2xl font-semibold">
          <img
            src="/assets/waving-hand-emoji.png"
            alt=""
            className="-mt-1 mr-4 inline-block h-10"
          />
          Hi, I'm Aditya Borkar
        </h2>
        <Link
          href="https://read.cv/adityab.tech"
          target="_blank"
          className="mt-1.5 block h-fit rounded-full px-5 py-1 text-sm font-semibold text-text-secondary hover:text-foreground max-sm:mt-6"
        >
          <SiReaddotcv className="-mt-1 mr-2 inline-block size-5" />
          Read.CV
          <LuArrowUpRight className="-mt-1 ml-1 inline-block size-4" />
        </Link>
      </div>

      <P>
        I engineer interfaces, products, and systems, from early concepts to
        full-fledged products, by partnering closely with designers, research,
        and engineering peers. I have done a bit of everything from branding,
        web design, copywriting, UX, design systems, and design engineering. My
        goal is to use technology to help people thrive in their work. Spending
        a lot of time digging into engineers&#x2019; heads and passionate about
        how software and methods can impact the outcomes of our work, I
        progressively shifted my focus from design systems to developer
        experience, which later led me to joining Linear in late 2023.
      </P>

      <figure
        className={cn(
          'mx-auto mt-8 grid h-[120vw] w-full gap-4 md:h-[60vw] lg:max-h-[40rem]',
          'grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3',
        )}
      >
        <BentoImage src="/resources/pic (4).jpeg" />
        <BentoImage src="/resources/img (4).jpeg" className="md:row-span-2" />
        <BentoImage src="/resources/pic (7).jpeg" />
        <BentoImage src="/resources/pic (9).jpeg" className="row-span-2" />
        <BentoImage src="/resources/img (1).jpeg" className="row-span-2" />
        <BentoImage src="/resources/pic (2).jpeg" />
      </figure>

      <H3>How did I discover Tech?</H3>
      <P>
        I discovered about CODE University, Berlin and got admitted but could
        not join it due to Covid-19 pandemic. Instead of defering education, I
        planned to continue to learn online and build my own career in tech.
        While exploring different languages - Java, Python, PHP, C++ and others;
        I struck upon JavaScript, it powered me to create beautiful user
        interfaces and ship to multiple devices cross-platforms easily within
        days. With the rising popularity of PWAs and new features coming in the
        web, I decided to pursue Web Software Engineering as a career.
      </P>

      <H3>How did I discover Web & Product Development?</H3>
      <P>
        I discovered about CODE University, Berlin and got admitted but could
        not join it due to Covid-19 pandemic. Instead of defering education, I
        planned to continue to learn online and build my own career in tech.
        While exploring different languages - Java, Python, PHP, C++ and others;
        I struck upon JavaScript, it powered me to create beautiful user
        interfaces and ship to multiple devices cross-platforms easily within
        days. With the rising popularity of PWAs and new features coming in the
        web, I decided to pursue Web Software Engineering as a career.
      </P>

      <P>
        I have worked with Raspberry Pi Foundation to work initially on NTTT and
        Translation Programme to make computing accessible to young and
        underpriviledged children.
      </P>

      <figure
        className={cn(
          'mx-auto mt-8 grid h-[50vw] w-full gap-4 md:max-h-[12rem]',
          'grid-cols-3 grid-rows-1 max-md:grid-cols-2 max-md:grid-rows-2',
        )}
      >
        <BentoImage
          src="/resources/pic (1).jpeg"
          className="max-md:row-span-2"
        />
        <BentoImage src="/resources/pic (1).jpeg" />
        <BentoImage src="/resources/pic (1).jpeg" />
      </figure>

      <H3>Things I do in my free time!</H3>
      <P>
        I like to play chess in my free time. I love to cycle to get my daily
        dose of happiness. I believe in green techniques and strive to make my
        life more sustainable and impackful for the humankind.
        <br />
        My hobbies and my achievements in my hobbies. // Major projects I did?
        // Professional Background: Briefly describe your experience and
        expertise in web engineering. // Skills and Specializations: Highlight
        key skills and areas of specialization. // Notable Projects: Mention a
        few significant projects or clients. // Education and Certifications:
        List relevant qualifications and certifications. // Personal Touch:
        Share a bit about your interests or hobbies to make it more personable.
      </P>

      <figure
        className={cn(
          'mx-auto mt-8 grid h-[120vw] w-full gap-4 md:h-[60vw] lg:max-h-[40rem]',
          'grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3',
        )}
      >
        <BentoImage src="/resources/pic (1).jpeg" />
        <BentoImage src="/resources/pic (3).jpeg" className="md:row-span-2" />
        <BentoImage src="/resources/img (1).jpeg" />
        <BentoImage src="/resources/pic (6).jpeg" className="row-span-2" />
        <BentoImage src="/resources/pic (5).jpeg" className="row-span-2" />
        <BentoImage src="/resources/img (3).jpeg" />
      </figure>
    </main>
  )
}

function H3(props: { children: React.ReactNode }) {
  return <h3 className="mt-16 text-lg font-semibold">{props.children}</h3>
}

function P(props: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-pretty text-base text-text-secondary max-md:text-sm">
      {props.children}
    </p>
  )
}

function BentoImage(props: { src: string; alt?: string; className?: string }) {
  // TODO: Open a popup with image caption
  return (
    <div className={cn(props.className)}>
      <img
        src={props.src}
        alt={props.alt || ''}
        className="h-full w-full cursor-pointer rounded-xl object-cover hover:scale-105 hover:shadow-xl hover:shadow-zinc-800/20 dark:hover:shadow-zinc-200/20"
      />

      {/* <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/75">
        <figure className="relative">
          <button
            type="button"
            className="absolute -right-12 top-2 rounded-full border border-white/40 bg-zinc-950 p-2 hover:bg-zinc-900"
          >
            <LuX className="size-6 text-white" />
          </button>
          <img
            src={props.src}
            alt={props.alt || ''}
            className="h-auto max-h-[60vh] w-[80vw] max-w-[40rem] rounded-3xl object-cover"
          />
          <figcaption className="mt-4 text-center text-zinc-100">
            Here comes some description about the image.
          </figcaption>
        </figure>
      </div> */}
    </div>
  )
}
