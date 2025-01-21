'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    document.onmousemove = (e) => {
      ref.current?.style.setProperty('top', e.clientY - 300 + 'px')
      ref.current?.style.setProperty('left', e.clientX - 300 + 'px')
    }
  })

  return (
    <img
      ref={ref}
      src="cursor.svg"
      className="fixed -left-[600px] -top-[600px] -z-10 h-[600px] w-[600px] select-none"
    />
  )
}
