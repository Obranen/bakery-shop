'use client'

import {Switch} from '@nextui-org/switch'
import {IoMoonSharp, IoSunnySharp} from 'react-icons/io5'

import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'

const ColorTheme = () => {
  const [mounted, setMounted] = useState(false)
  const {setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <Switch
      defaultSelected
      size="sm"
      color="secondary"
      thumbIcon={({isSelected}) =>
        isSelected ?
          <>
            <IoSunnySharp/>
            {setTheme('light')}
          </>
          :
          <>
            <IoMoonSharp/>
            {setTheme('dark')}
          </>

      }
    ></Switch>
  )
}

export default ColorTheme