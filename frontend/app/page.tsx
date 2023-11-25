'use client'

import {Button} from '@nextui-org/button'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <>
      <div>The current theme is: {theme}</div>
      <Button onClick={() => setTheme('light')} color="primary">
        Light Mode
      </Button>
      <Button onClick={() => setTheme('dark')} color="primary">
        Dark Mode
      </Button>
    </>
  )
}
