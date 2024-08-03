'use client'

import ReactLenis from 'lenis/react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>
}
