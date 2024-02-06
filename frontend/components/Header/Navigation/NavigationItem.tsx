import { INavItems } from '@/constants/navItems'
import { NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { FC } from 'react'

interface INavigationItem {
  navItem: INavItems
}

const NavigationItem: FC<INavigationItem> = ({ navItem }) => {
  // <NavbarItem isActive className='hidden lg:flex'></NavbarItem>
  return (
    <NavbarItem>
      <Link href={navItem.href} className='font-robotoRegular font-black text-[14px]'>{navItem.title}</Link>
    </NavbarItem>
  )
}

export default NavigationItem
