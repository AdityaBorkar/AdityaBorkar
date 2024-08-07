'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { LuMenu } from 'react-icons/lu'

import { cn } from '@/lib/utils'

const NavItems = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/services', label: 'Services' },
  { link: '/projects', label: 'Projects' },
  { link: '/blog', label: 'Blog' },
  { link: '/contact', label: 'Contact' },
]

export default function Header() {
  const ShadowRef = useRef<HTMLDivElement>(null)
  const path = usePathname()

  // TODO: Open Header on scroll end

  return (
    <header
      className={cn(
        'w-[75vw] max-w-[54rem] md:w-[85vw]',
        'sticky top-8 z-50 mx-auto flex select-none flex-row justify-between rounded-full border border-border/10 px-2 shadow-md backdrop-blur-xl',
        'bg-white/50 shadow-zinc-400/10 dark:bg-black/50 dark:shadow-zinc-600/10',
      )}
    >
      <Link href="/" className="my-2 font-bold">
        <div className="inline-block rounded-full border-2 border-border px-2 py-0 text-xl tracking-wider">
          A/B
        </div>
        <div className="-mb-0.5 ml-3 inline-block align-bottom text-2xl tracking-tighter">
          Adi.
        </div>
      </Link>

      <LuMenu className="mr-2 mt-3 block size-6 md:hidden" />
      <nav className="fixed left-0 top-0 flex hidden h-screen w-screen flex-col items-center bg-black md:hidden lg:gap-2 dark:bg-white">
        {NavItems.map(({ link, label }) => (
          <Link
            key={label}
            href={link}
            className={cn(
              'relative h-fit cursor-pointer rounded-full px-4 py-1 text-sm font-medium text-text-secondary hover:text-foreground',
              path === link && 'text-foreground',
              // path === props.link &&
              //   'after:bg-bg-secondary after:absolute after:-bottom-1 after:left-[37.5%] after:h-2 after:w-1/4 after:rounded-md after:bg-amber-500 after:blur after:dark:bg-amber-800',
              path === link &&
                'before:absolute before:-bottom-2.5 before:left-[10%] before:w-4/5 before:rounded-[4px] before:border-b before:border-amber-600',
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      <nav
        className="relative z-20 hidden flex-row items-center md:flex lg:gap-2"
        onMouseLeave={() => {
          if (!ShadowRef.current) return
          ShadowRef.current.style.right = '-20rem'
          ShadowRef.current.style.opacity = '0'
        }}
      >
        <div
          ref={ShadowRef}
          className="absolute right-0 top-2 -z-10 h-8 w-20 rounded-full bg-background opacity-0 duration-300"
        />
        {NavItems.map(({ link, label }) => (
          <Link
            key={label}
            href={link}
            className={cn(
              'relative h-fit cursor-pointer rounded-full px-4 py-1 text-sm font-medium text-text-secondary hover:text-foreground',
              path === link && 'text-foreground',
              // path === props.link &&
              //   'after:bg-bg-secondary after:absolute after:-bottom-1 after:left-[37.5%] after:h-2 after:w-1/4 after:rounded-md after:bg-amber-500 after:blur after:dark:bg-amber-800',
              path === link &&
                'before:absolute before:-bottom-2.5 before:left-[10%] before:w-4/5 before:rounded-[4px] before:border-b before:border-amber-600',
            )}
            onMouseOver={(e) => {
              if (!ShadowRef.current) return
              ShadowRef.current.style.opacity = '1'
              // @ts-expect-error
              ShadowRef.current.style.left = `${e.target.offsetLeft}px`
              // @ts-expect-error
              ShadowRef.current.style.width = `${e.target.offsetWidth}px`
            }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* TODO: Use Preflight Hints */}
      {/* <div className="absolute right-12 top-7">
				<PiMoonFill className="h-8 w-8 cursor-pointer rounded-full p-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200" />
				<PiSunFill className="h-8 w-8 cursor-pointer rounded-full p-1.5 text-neutral-300 hover:bg-neutral-900" />
			</div> */}
    </header>
  )
}

// const HideOnScroll = ({ children }) => {
//   const [isVisible, setIsVisible] = useState(true)
//   const lastScrollTop = useRef(0)

//   useEffect(() => {
//     if (!scroll) return

//     const handleScroll = (instance) => {
//       const scrollTop = instance.scroll.y
//       if (scrollTop > lastScrollTop.current) {
//         // Scrolling down
//         setIsVisible(false)
//       } else {
//         // Scrolling up
//         setIsVisible(true)
//       }
//       lastScrollTop.current = scrollTop
//     }

//     scroll.on('scroll', handleScroll)

//     return () => {
//       if (scroll) {
//         scroll.off('scroll', handleScroll)
//       }
//     }
//   }, [scroll])

//   return (
//     <div
//       className={`transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
//     >
//       {children}
//     </div>
//   )
// }
