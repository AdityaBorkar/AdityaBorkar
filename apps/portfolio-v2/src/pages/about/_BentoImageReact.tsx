'use client'

import { useState, useRef } from 'react'
import { motion, useDomEvent, useScroll } from 'motion/react'

import { cn } from '@/lib/utils'
import { SpringTransition } from '@/lib/transitions'

interface Props {
  src: string
  alt?: string
  caption: string
}

export default function BentoImageReact({ alt, src, caption }: Props) {
  const [isOpen, setOpen] = useState(false)

  const { scrollY } = useScroll()
  useDomEvent(useRef(window), 'scroll', () => {
    if (!isOpen) return
    const change = scrollY.get() - (scrollY.getPrevious() || 0)
    if (change > 3 || change < -3) setOpen(false)
  })

  return (
    <figure
      className={cn(
        // TODO: SET H SUCH THAT IT IS EQUAL TO IMAGE
        'relative group w-full h-full cursor-ne-resize select-none mx-0',
        isOpen ? 'cursor-default' : '',
      )}
    >
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={SpringTransition}
        onClick={() => setOpen(false)}
        className={cn(
          'fixed inset-0 pointer-events-none opacity-0 z-40 backdrop-blur-2xl',
          isOpen && 'pointer-events-auto opacity-100',
        )}
      />
      <motion.img
        layout
        draggable='false'
        transition={{
          default: SpringTransition,
          zIndex: { delay: isOpen ? 0 : 0.7 },
          // TODO: Solve the delay issue caused by opening another image instantly
        }}
        animate={{ zIndex: isOpen ? 40 : 0 }}
        // onClick={() => setOpen(!isOpen)}
        className={cn(
          'absolute inset-0 w-full h-full object-cover rounded-xl',
          isOpen && 'fixed max-h-[60vh] h-auto w-auto m-auto rounded-3xl',
        )}
        src={src}
        alt={alt}
      />
      <motion.figcaption
        whileHover={{ opacity: 1 }}
        onClick={() => setOpen(!isOpen)}
        className='opacity-0 rounded-xl absolute left-0 top-0 flex h-full w-full items-end bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-500'
      >
        <span className='group-hover:block hidden text-sm text-pretty text-white magic-fade-up px-4 py-2 duration-500'>
          {caption}
        </span>
      </motion.figcaption>
    </figure>
  )
}
