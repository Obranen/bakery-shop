import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        src="/image/main/spikelet.jpg"
        width={608}
        height={327}
        alt="spikelet"
        priority
        className={'absolute top-0 left-0 w-[608px] h-[327px]'}
      />
    </>
  )
}
