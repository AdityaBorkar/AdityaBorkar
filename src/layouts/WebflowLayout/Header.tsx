'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IconType } from 'react-icons'
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6'
import {
  HiArrowUpRight,
  HiOutlineBars3BottomRight,
  HiOutlineXMark,
} from 'react-icons/hi2'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex w-full flex-row justify-between border-b border-neutral-800 px-[7vw] py-4 ${
        open ? 'bg-neutral-950' : 'backdrop-blur-md'
      }`}
    >
      <div className="cursor-default pt-1 font-bold text-neutral-100">
        <div className="inline-block border-2 border-white px-1 py-0 text-2xl tracking-wider">
          AB
        </div>
        <div className="ml-3 inline-block align-bottom text-3xl tracking-tighter">
          Adi.
        </div>
      </div>

      <PageNavigation />

      <div
        onClick={() => setOpen((open) => !open)}
        className="peer ml-12 cursor-pointer rounded-full border-2 border-neutral-200 bg-neutral-200 p-1.5 text-neutral-950 transition-all hover:bg-neutral-950 hover:text-neutral-200"
      >
        {open ? (
          <HiOutlineXMark className="h-6 w-6" />
        ) : (
          <HiOutlineBars3BottomRight className="h-6 w-6" />
        )}
      </div>

      <nav
        className={`absolute left-0 top-[100%] z-40 w-screen max-w-full transition-all ${
          open ? 'block h-screen' : 'hidden max-h-0'
        }`}
      >
        <div className="grid h-fit grid-cols-2 gap-6 border-b border-neutral-900 bg-neutral-950 px-[15vw] py-20 text-neutral-100">
          <div className="mx-auto flex flex-col gap-10">
            <ServiceCard label="Full Stack Development Service" />
            <ServiceCard label="Webflow App Development Service" />
          </div>
          <div>
            <NavCard label="Home" />
            <NavCard label="Projects" />
            <NavCard label="Blog" />
            <NavCard label="Contact" />

            <div className="mt-20 flex flex-row gap-12">
              <SocialCard icon={FaTwitter} href="">
                Twitter
              </SocialCard>
              <SocialCard icon={FaLinkedin} href="">
                LinkedIn
              </SocialCard>
              <SocialCard icon={FaGithub} href="">
                GitHub
              </SocialCard>
              <SocialCard icon={FaEnvelope} href="">
                Email
              </SocialCard>
            </div>
          </div>
        </div>
        <div className="min-h-full backdrop-blur-md"></div>
      </nav>
    </header>
  )
}

function NavCard(props: { label: string }) {
  return (
    <Link
      href={'/' + props.label.toLowerCase()}
      className="group relative block cursor-pointer border-b-2 border-neutral-500 px-3 py-8 text-4xl font-medium transition-all hover:bg-neutral-200 hover:pl-10 hover:text-black"
    >
      {props.label}

      <FaArrowRight className="absolute right-8 top-8 ml-3 hidden p-1 text-black group-hover:block" />
    </Link>
  )
}

function SocialCard(props: {
  icon: IconType
  href: string
  children: React.ReactNode
}) {
  return (
    <div className="cursor-pointer text-lg font-medium text-neutral-500 transition-all hover:text-neutral-300">
      <props.icon className="mr-2 inline align-[-2px]" />
      {props.children}
    </div>
  )
}

function ServiceCard(props: { label: string }) {
  // Add Rotating Border Gradient
  return (
    <div className="hoer:text-white cursor-pointer rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-4 text-2xl leading-relaxed transition-all hover:scale-110 hover:border-neutral-700">
      <img src="GIF" alt="" className="mb-3 h-[160px] bg-transparent" />
      {props.label}
      <HiArrowUpRight className="ml-3 inline-block p-1" />
    </div>
  )
}

function PageNavigation() {
  function NavCard(props: { active?: boolean; label: string }) {
    return (
      <div
        className={`cursor-pointer rounded-full px-5 py-1 font-semibold leading-loose ${
          props.active
            ? 'bg-neutral-200 text-neutral-950'
            : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
        }`}
      >
        {props.label}
      </div>
    )
  }

  return (
    <nav className="flex flex-row gap-4">
      <NavCard label="Home" active />
      <NavCard label="Recent Work" />
      <NavCard label="Benefits" />
      <NavCard label="FAQs" />
    </nav>
  )
}
