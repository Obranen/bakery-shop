import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Provider from '@/lib/Provider'
import { ReactNode } from 'react'
import { useFontsHook } from '../hooks/useFontsHook'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  const { abrilFatface, robotoSerifRegular, caveatRegular, robotoRegular } =
    useFontsHook()

  return (
    <html lang='en'>
      <body
        className={`${robotoSerifRegular.variable} ${abrilFatface.variable} ${caveatRegular.variable} ${robotoRegular.variable}`}
      >
        <Provider>
          <div className={'body'}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}
