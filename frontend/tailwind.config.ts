import { localFont } from 'next/font/local';
import { Abril_Fatface, Roboto_Serif } from 'next/font/google';
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '3xl': '1640px',
      },
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
      fontFamily: {
        abrilFatface: ['var(--font-abrilFatface)'],
        robotoSerifRegular: ['var(--font-robotoSerifRegular)'],
        caveatRegular: ['var(--font-caveatRegular)'],
        robotoRegular: ['var(--font-robotoRegular)'],
      },
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
            primary: {
              foreground: '#fcfcfc',
              DEFAULT: '#000000',
            },
            secondary: {
              foreground: '#fcfcfc',
              DEFAULT: '#e05810',
            },
          },
        },
        dark: {
          colors: {
            background: 'black',
            foreground: 'white',
            primary: {
              DEFAULT: 'white',
              foreground: 'black',
            },
          },
        },
      },
    }),
  ],
}
export default config
