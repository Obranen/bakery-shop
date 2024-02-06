import Brand from '@/components/Header/Navigation/Brand/Brand'
import ColorTheme from '@/components/Header/Navigation/ColorTheme'
import FindSite from '@/components/Header/Navigation/FindSite'
import ProductDropdown from '@/components/Header/Navigation/ProductDropdown'
import { navItems } from '@/constants/navItems'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar'
import NavigationItem from './NavigationItem'

const Navigation = () => {
  return (
    <Navbar
      position='static'
      isBlurred={false}
      maxWidth={'full'}
      className={'bg-opacity-0 flex [&>header]:px-0'}
    >
      <NavbarBrand className='w-4/12'>
        <Brand />
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex w-4/12 items-start'>
        <FindSite />
      </NavbarContent>

      <NavbarContent justify='end' className='w-4/12 items-start'>
        <ColorTheme />
        <ProductDropdown />
        {navItems.map((navItem) => (
          <NavigationItem key={navItem.id} navItem={navItem} />
        ))}
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation
