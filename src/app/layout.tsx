import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

import Providers from './Providers'
import './globals.css'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
const sansSerif = Lora({ subsets: ['latin'], variable: '--font-sans-serif' })

export const metadata: Metadata = {
  title: 'Aditya Borkar - Product Engineer',
  description: 'Some catching ranking text',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: Aggressive Caching with minimal JS bundle. The site must load on pressing enter!

  // TODO: Theme selection on Preflight Basis and persist local storage
  const theme = '' // 'dark'

  // TODO: Add Squircle CSS Worklet
  // import 'css-paint-polyfill'
  // import workletURL from "url-loader!<package-name>/worklet.js";
  // const workletURL = ''
  // CSS.paintWorklet.addModule(workletURL)

  // TODO: Add Web Vitals Collection + Analytics Collector
  // onWindowClose()/onFocusOut()

  return (
    <html lang="en">
      <body
        className={twMerge(
          theme,
          sans.variable,
          sansSerif.variable,
          'relative min-h-screen cursor-default bg-background text-foreground selection:bg-amber-400 selection:text-black dark:selection:bg-amber-500',
          'font-sans text-sm leading-normal antialiased',
          // 'before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full',
          // 'before:[background-image:radial-gradient(#cbd5e1,_transparent_3px)] before:[background-size:25px_25px]',
        )}
      >
        {/* <div className="fixed left-0 top-0 h-full w-[calc((100vw-72rem)/3)] bg-gradient-to-r from-white dark:from-black" /> */}
        {/* <div className="fixed right-0 top-0 h-full w-[calc((100vw-72rem)/3)] bg-gradient-to-l from-white dark:from-black" /> */}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
