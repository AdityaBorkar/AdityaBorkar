import type { Metadata } from 'next'

import { Inter, Lora } from 'next/font/google'
import localFont from 'next/font/local'
import { twMerge } from 'tailwind-merge'

// import 'css-paint-polyfill'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const tanker = localFont({
  src: '../fonts/Tanker-Regular.otf',
  variable: '--font-tanker',
})

// export const metadata: Metadata = {
//   title: 'Aditya Borkar',
//   description: 'Some catching ranking text',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: Aggressive Caching with minimal JS bundle. The site must load on pressing enter!
  // TODO: Styling on Preflight Basis
  // TODO: Add Web Vitals Collection + Analytics Collector
  // onWindowClose()/onFocusOut()

  // TODO: Add Squircle CSS Worklet
  // import workletURL from "url-loader!<package-name>/worklet.js";
  // const workletURL = ''
  // CSS.paintWorklet.addModule(workletURL)

  return (
    <html lang='en'>
      <body
        className={twMerge(
          inter.variable,
          lora.variable,
          tanker.variable,
          'font-inter',
        )}
      >
        {children}
      </body>
    </html>
  )
}
