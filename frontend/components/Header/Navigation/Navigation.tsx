import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import Link from 'next/link'
import Brand from '@/components/Header/Navigation/Brand/Brand'
import FindSite from '@/components/Header/Navigation/FindSite/FindSite'
import ProductDropdown from '@/components/Header/Navigation/ProductDropdown/ProductDropdown'
import ColorTheme from '@/components/Header/Navigation/ColorTheme/ColorTheme'

const Navigation = () => {
  return (
    <Navbar
      position='static'
      isBlurred={false}
      maxWidth={'full'}
      className={'bg-opacity-0 flex'}
    >
      <NavbarBrand className='w-4/12'>
        <Brand />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex w-4/12'>
        <FindSite />
      </NavbarContent>
      <NavbarContent justify='end' className='w-4/12'>
        <ColorTheme />
        <NavbarItem isActive className='hidden lg:flex'>
          <Link href='#'>Увійти</Link>
        </NavbarItem>
        <ProductDropdown />
        <NavbarItem>
          <Link href='/contact'>Контакти</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/promotion'>Акції</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#'>Кошик</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation
