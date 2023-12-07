import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/navbar'
import {Input} from '@nextui-org/input'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import {Link} from '@nextui-org/link'
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from '@nextui-org/dropdown'
import {Button} from '@nextui-org/button'
import {MdOutlineBakeryDining} from 'react-icons/md'
import {GiCakeSlice, GiSlicedBread} from 'react-icons/gi'
import Brand from '@/components/Header/Navigation/Brand/Brand'
import FindSite from '@/components/Header/Navigation/FindSite/FindSite'
import ProductDropdown from '@/components/Header/Navigation/ProductDropdown/ProductDropdown'
import ColorTheme from '@/components/Header/Navigation/ColorTheme/ColorTheme'

const Navigation = () => {
  return (
    <Navbar position="static" isBlurred={false} maxWidth={'full'} className={'bg-opacity-0'}>
      <NavbarBrand>
        <Brand/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <FindSite/>
      </NavbarContent>
      <NavbarContent justify="end">
        <ColorTheme/>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Увійти</Link>
        </NavbarItem>
        <ProductDropdown/>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Контакти
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Акції
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Кошик
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Navigation