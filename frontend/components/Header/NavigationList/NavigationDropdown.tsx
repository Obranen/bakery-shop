'use client'

import { Button } from '@nextui-org/button'
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown'
import { GiCakeSlice, GiSlicedBread } from 'react-icons/gi'
import { MdKeyboardArrowDown, MdOutlineBakeryDining } from 'react-icons/md'

const ProductDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          disableRipple
          className='p-0 bg-transparent data-[hover=true]:bg-transparent font-robotoRegular font-black text-[14px]'
          endContent={<MdKeyboardArrowDown size={20} />}
          radius='sm'
          variant='light'
          color={'primary'}
        >
          Продукція
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='ACME features'
        className='w-[340px]'
        itemClasses={{
          base: 'gap-4',
        }}
      >
        <DropdownItem
          key='autoscaling'
          description='ACME scales apps to meet user demand, automagically, based on load.'
          startContent={<MdOutlineBakeryDining size={30} />}
        >
          Випічка
        </DropdownItem>
        <DropdownItem
          key='usage_metrics'
          description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
          startContent={<GiSlicedBread size={30} />}
        >
          Хліб
        </DropdownItem>
        <DropdownItem
          key='production_ready'
          description='ACME runs on ACME, join us and others serving requests at web scale.'
          startContent={<GiCakeSlice size={30} />}
        >
          Десерт
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ProductDropdown
