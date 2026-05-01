import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#030C1A',
        surface: '#071829',
        elevated: '#0B2040',
        rim: {
          DEFAULT: '#0E3060',
          bright: '#1A4A8A',
        },
        accent: '#2563EB',
        highlight: '#60A5FA',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [typography],
}

export default config
