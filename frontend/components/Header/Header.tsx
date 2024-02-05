import Image from 'next/image'
import Navigation from '@/components/Header/Navigation/Navigation'

const Header = () => {
  return (
    <div className={'bg-myPrimaryLight dark:bg-myPrimaryDark'}>
      <Image
        src="/image/main/spikelet.jpg"
        width={608}
        height={327}
        alt="spikelet"
        priority
        className={'absolute w-[608px] h-[327px]'}
      />
      <div className={'container'}>
        <Navigation/>
      </div>
    </div>
  )
}

export default Header
