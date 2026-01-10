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
        'teal': '#1f2937',
        'teal-dark': '#111827',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        vector: ['var(--font-vector)', 'sans-serif'],
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
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'scroll-reverse': 'scroll-reverse 30s linear infinite',
        bounce: 'bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config

