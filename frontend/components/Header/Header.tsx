'use client'

import Image from 'next/image'
import styles from './Header.module.css'
import Navigation from '@/components/Header/Navigation/Navigation'

const Header = () => {
  return (
    <div className={'bg-myPrimaryLight dark:bg-myPrimaryDark h-80'}>
      <Image
        src="/image/main/spikelet.jpg"
        width={400}
        height={300}
        alt="spikelet"
        priority
        className={'absolute -top-0 left-0'}
      />
      <div className={'container mx-auto'}>
        <Navigation/>
      </div>
    </div>
  )
}

export default Header