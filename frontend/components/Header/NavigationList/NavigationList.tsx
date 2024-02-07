import { navItems } from '@/constants/navItems'
import ColorTheme from './ColorTheme'
import NavigationDropdown from './NavigationDropdown'
import NavigationItem from './NavigationItem'

const NavigationList = () => {
  return (
    <nav className='w-4/12 flex items-start justify-end mt-[5px]'>
      <ColorTheme />
      <NavigationDropdown />
      {navItems.map((navItem, index) => (
        <NavigationItem
          key={navItem.id}
          navItem={navItem}
          lastIndex={navItems.length}
          index={index}
        />
      ))}
    </nav>
  )
}

export default NavigationList
