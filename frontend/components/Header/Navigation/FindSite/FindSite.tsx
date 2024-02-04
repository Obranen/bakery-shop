import {HiMagnifyingGlass} from 'react-icons/hi2'
import {Input} from '@nextui-org/input'

const FindSite = () => {
  return (
    <Input
      classNames={{
        base: 'max-w-full sm:max-w-[10rem] h-10',
        mainWrapper: 'w-96',
        input: 'text-small',
        inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
      }}
      placeholder="Я шукаю..."
      size="sm"
      startContent={<HiMagnifyingGlass size={18}/>}
      type="search"
    />
  )
}

export default FindSite