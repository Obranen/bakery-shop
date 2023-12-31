import {NavbarItem} from '@nextui-org/navbar'
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from '@nextui-org/dropdown'
import {Button} from '@nextui-org/button'
import {MdOutlineBakeryDining, MdKeyboardArrowDown} from 'react-icons/md'
import {GiCakeSlice, GiSlicedBread} from 'react-icons/gi'

const ProductDropdown = () => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
            endContent={<MdKeyboardArrowDown size={20} />}
            radius="sm"
            variant="light"
            color={'primary'}
          >
            Продукція
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: 'gap-4'
        }}
      >
        <DropdownItem
          key="autoscaling"
          description="ACME scales apps to meet user demand, automagically, based on load."
          startContent={<MdOutlineBakeryDining size={30}/>}
        >
          Випічка
        </DropdownItem>
        <DropdownItem
          key="usage_metrics"
          description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
          startContent={<GiSlicedBread size={30} />}
        >
          Хліб
        </DropdownItem>
        <DropdownItem
          key="production_ready"
          description="ACME runs on ACME, join us and others serving requests at web scale."
          startContent={<GiCakeSlice size={30} />}
        >
          Десерт
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProductDropdown