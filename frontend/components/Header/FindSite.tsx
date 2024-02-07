'use client'

import { Input } from '@nextui-org/input'
import { ChangeEvent, useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const FindSite = () => {
  const [textFind, setTextFind] = useState('')

  const findChange = (e: ChangeEvent<HTMLInputElement>) => {
    const $target = e.currentTarget.value
    setTextFind($target)
  }

  return (
    <div className='hidden sm:flex w-4/12 items-start'>
      <Input
        classNames={{
          base: '',
          mainWrapper: 'w-[77%] mx-auto',
          input:
            'font-robotoRegular text-[12px] placeholder:text-neutral-400 text-black hover:none',
          inputWrapper: 'h-0 min-h-[20px] mt-[7px] p-0',
          innerWrapper: 'pl-[6px] pt-[4px]',
          clearButton: 'text-neutral-400',
        }}
        value={textFind}
        onChange={findChange}
        isClearable={true}
        onClear={() => setTextFind('')}
        placeholder='Я шукаю...'
        size='sm'
        startContent={
          <span className='text-neutral-400 font-'>
            <HiMagnifyingGlass size={14} />
          </span>
        }
        type='text'
      />
    </div>
  )
}

export default FindSite
