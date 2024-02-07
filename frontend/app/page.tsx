import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Main page',
}

export default function Home() {
  return (
    <>
      <Image
        src="/image/main/spikelet.jpg"
        width={608}
        height={327}
        alt="spikelet"
        priority
        className={'absolute top-0 left-0 w-[608px] h-[327px] z-0'}
      />
    </>
  )
}
