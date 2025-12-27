import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal': '#069494',
        'teal-dark': '#057575',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-33.333%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'scroll-reverse': 'scroll-reverse 30s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config

