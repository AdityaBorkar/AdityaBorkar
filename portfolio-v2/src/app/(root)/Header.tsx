'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

export default function Header() {
  const path = usePathname()
  const ShadowRef = useRef<HTMLDivElement>(null)

  return (
    <header className='sticky select-none backdrop-blur-xl top-0 z-50 max-w-[70%] mr-[15%] mx-auto w-full border-b border-neutral-800 py-2'>
      <div className='mx-auto flex w-full max-w-[64rem] flex-row justify-between'>
        <Link href='/' className='my-2 font-bold text-neutral-100'>
          <div className='inline-block border-2 border-white px-1 py-0 text-xl tracking-wider'>
            AB
          </div>
          <div className='ml-3 inline-block align-bottom text-2xl tracking-tighter'>
            Adi.
          </div>
        </Link>

        <nav
          className='mt-2 z-20 flex h-fit flex-row gap-4 relative'
          onMouseLeave={() => {
            if (!ShadowRef.current) return
            ShadowRef.current.style.right = '-20rem'
            ShadowRef.current.style.display = 'none'
          }}
        >
          <div
            ref={ShadowRef}
            className='w-20 z-10 hidden bg-neutral-800 absolute duration-300 top-0 -right-20 rounded-full h-8'
          />
          <NavCard label='Home' link='/' currentPath={path} />
          <NavCard label='About' link='/about' currentPath={path} />
          <NavCard label='Services' link='/services' currentPath={path} />
          <NavCard label='Projects' link='/projects' currentPath={path} />
          <NavCard label='Blog' link='/blog' currentPath={path} />
          <NavCard label='Contact' link='/contact' currentPath={path} />
        </nav>
      </div>

      {/* TODO: Use Preflight Hints */}
      {/* <div className="absolute right-12 top-7">
				<PiMoonFill className="h-8 w-8 cursor-pointer rounded-full p-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200" />
				<PiSunFill className="h-8 w-8 cursor-pointer rounded-full p-1.5 text-neutral-300 hover:bg-neutral-900" />
			</div> */}
    </header>
  )

  function NavCard(props: {
    link?: string
    label: string
    currentPath: string
  }) {
    const TAG_NAME = props.link ? Link : 'div'
    return (
      // @ts-expect-error
      <TAG_NAME
        {...(TAG_NAME !== 'div' ? { href: props.link } : {})}
        className={`h-fit z-20 relative cursor-pointer rounded-full px-4 py-0.5 text-sm font-medium leading-loose ${
          props.currentPath === props.link
            ? 'bg-neutral-200 text-neutral-950'
            : 'text-neutral-400 hover:text-neutral-200'
        }`}
        onMouseOver={e => {
          if (!ShadowRef.current) return
          ShadowRef.current.style.display = 'block'
          // @ts-expect-error
          ShadowRef.current.style.left = `${e.target.offsetLeft}px`
          // @ts-expect-error
          ShadowRef.current.style.width = `${e.target.offsetWidth}px`
        }}
      >
        {props.label}
      </TAG_NAME>
    )
  }
}
