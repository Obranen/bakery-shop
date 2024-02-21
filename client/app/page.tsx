import type { Metadata } from 'next'
import Home from '@/components/Home/Home'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Main page',
}

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  )
}
