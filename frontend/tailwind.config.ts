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
    colors: {
      myDefaultLight: '#fcfcfc',
      myPrimaryLight: '#f5efe6',
      mySecondaryLight: '#000000',
      myHighlightLight: '#e05810',

      myDefaultDark: '#fcfcfc',
      myPrimaryDark: '#f5efe6',
      mySecondaryDark: '#000000',
      myHighlightDark: '#e05810',
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#fcfcfc',
            foreground: '#000000',
            default: {
              foreground: '#fcfcfc',
              DEFAULT: '#e05810',
            },
            primary: {
              foreground: '#fcfcfc',
              DEFAULT: '#000000',
            }
          }
        },
        dark: {
          colors: {
            background: 'black',
            foreground: 'white',
            primary: {
              DEFAULT: 'white',
              foreground: 'black'
            }
          }
        }
      }
    })
  ]
}
export default config
