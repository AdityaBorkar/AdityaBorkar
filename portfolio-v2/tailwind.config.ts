import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {},
    extend: {
      fontFamily: {
        tanker: ['var(--font-tanker)'],
        inter: ['var(--font-inter)'],
        lora: ['var(--font-lora)'],
      },
      colors: {
        webflow: {
          primary: '#146EF5',
          light: '#3B89FF',
          dark: '#0055D4',
        },
      },
    },
  },
}
export default config
