'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

export default function SplashIcons() {
  const SpashIconDivRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   let lastScrollTop = 0
  //   window.addEventListener(
  //     'scroll',
  //     (event) => {
  //       const scrollTop = document.documentElement.scrollTop
  //       lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
  //       console.log('scroll', scrollTop)

  //       if (!SpashIconDivRef.current) return
  //       if (scrollTop >= 200) SpashIconDivRef.current.style.opacity = '0'
  //       else SpashIconDivRef.current.style.opacity = '1'
  //     },
  //     false,
  //   )
  // }, [])

  return (
    <div
      ref={SpashIconDivRef}
      className="fixed left-0 top-0 hidden h-full w-full duration-300"
    >
      {/* <img
        src="/resources/paper-with-notes.png"
        alt=""
        className="absolute -top-6 left-40 z-20 w-36 rotate-12"
      /> */}
      <img
        src="/resources/contract.png"
        alt=""
        className="absolute -left-4 -top-4 z-10 w-48 rotate-[120deg]"
      />
      <img
        src="/resources/apollo.png"
        alt=""
        className="absolute -left-10 top-64 z-10 h-72 rotate-6"
      />
      <img
        src="/resources/data-security.png"
        alt=""
        className="absolute -left-20 bottom-56 z-20 w-56 -rotate-6"
      />
      <img
        src="/resources/notepad-and-phone.png"
        alt=""
        className="absolute -bottom-8 -left-8 z-10 w-72 rotate-12"
      />
      {/* <img
        src="/resources/credit-cards.png"
        alt=""
        className="absolute -bottom-4 left-56 w-32 rotate-[24deg]"
      /> */}

      {/* ---- */}

      <img
        src="/resources/drone-with-package.png"
        alt=""
        className="absolute right-36 top-28 w-40 rotate-12 hover:scale-125"
      />
      <img
        src="/resources/analytics-on-computer.png"
        alt=""
        className="absolute -right-32 top-[45%] h-80 hover:-right-24"
      />
      <img
        src="/resources/trophy.png"
        alt=""
        className="absolute -bottom-6 -right-6 w-48 -rotate-[30deg]"
      />
    </div>
  )
}
