import type {Config} from 'tailwindcss'
import {nextui} from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: 'white', // or DEFAULT
            foreground: 'black', // or 50 to 900 DEFAULT
            primary: {
              //… 50 to 900
              foreground: 'white',
              DEFAULT: 'black'
            }
            // … rest of the colors
          }
        },
        dark: {
          colors: {
            background: 'black', // or DEFAULT
            foreground: 'white', // or 50 to 900 DEFAULT
            primary: {
              //… 50 to 900
              foreground: 'black',
              DEFAULT: 'white'
            }
          }
          // … rest of the colors
        }
      }
    })
  ]
}
export default config
