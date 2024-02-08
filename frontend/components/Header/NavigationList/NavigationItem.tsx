import { INavItems } from '@/constants/navItems'
import Link from 'next/link'
import { FC } from 'react'

interface INavigationItem {
  navItem: INavItems
  lastIndex: number
  index: number
}

const NavigationItem: FC<INavigationItem> = ({ navItem, lastIndex, index }) => {
  // <NavbarItem isActive className='hidden lg:flex'></NavbarItem>
  return (
    <Link
      href={navItem.href}
      className='font-robotoRegular font-black text-[14px] pr-[4px]'
    >
      {navItem.title}
      {lastIndex - 1 !== index ? (
        <span className='after:content-["_|_"] ml-[2px]'></span>
      ) : (
        <></>
      )}
    </Link>
  )
}

export default NavigationItem
