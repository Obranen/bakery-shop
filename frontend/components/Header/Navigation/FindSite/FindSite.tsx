import {HiMagnifyingGlass} from 'react-icons/hi2'
import {Input} from '@nextui-org/input'

const FindSite = () => {
  return (
    <Input
      classNames={{
        base: '',
        mainWrapper: 'w-[80%] mx-auto',
        input: '',
        inputWrapper: '',
      }}
      placeholder="Я шукаю..."
      size="sm"
      startContent={<HiMagnifyingGlass size={18}/>}
      type="search"
    />
  )
}

export default FindSite