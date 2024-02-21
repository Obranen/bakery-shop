import Image from 'next/image'

const ImageBg = () => {
  return (
    <>
      <Image
        src='/image/main/spikelet.jpg'
        width={608}
        height={327}
        alt='spikelet'
        className={'left-0 top-0 z-0 h-[327px] w-[608px] absolute'}
      />

      <Image
        src='/image/main/cake.jpg'
        width={74}
        height={83}
        alt='cake'
        className={'absolute right-[295px] top-[65px] z-10 h-[83px] w-[74px]'}
      />
      <Image
        src='/image/main/bread.webp'
        width={666}
        height={747}
        alt='bread'
        className={'absolute right-[137px] top-[125px] z-0 h-[747px] w-[666px]'}
      />
      <Image
        src='/image/main/egg.jpg'
        width={74}
        height={88}
        alt='egg'
        className={'absolute right-[706px] top-[769px] z-10 h-[88px] w-[74px]'}
      />
    </>
  )
}

export default ImageBg
