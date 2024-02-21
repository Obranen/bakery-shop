import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ProviderLayout from '@/library/ProviderLayout'
import { ReactNode } from 'react'
import { useFontsHook } from '../hook/useFonts.hook'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  const { abrilFatface, robotoSerifRegular, caveatRegular, robotoRegular } =
    useFontsHook()

  return (
    <html lang='en'>
      <body
        className={`${robotoSerifRegular.variable} ${abrilFatface.variable} ${caveatRegular.variable} ${robotoRegular.variable}`}
      >
        <ProviderLayout>
          <div className={'body'}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ProviderLayout>
      </body>
    </html>
  )
}
