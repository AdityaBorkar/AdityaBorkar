/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {},
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        sansSerif: ["var(--font-sans-serif)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        webflow: {
          primary: "#146EF5",
          light: "#3B89FF",
          dark: "#0055D4",
        },
        foreground: "hsl(var(--text))",
        background: "hsl(var(--bg))",
        border: "hsl(var(--border))",
        bg: {
          primary: "hsl(var(--bg-primary))",
          secondary: "hsl(var(--bg-secondary))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
        },
      },
    },
  },
};

//TODO: Colors on this website makes use of the wide P3 color space to produce rich, deep amazing color when viewed in a web browser that supports the color(display-p3 R G B) CSS function, like for example Safari, in combination with a wide-gamut display.
