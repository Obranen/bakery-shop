'use client'

import {Button} from '@nextui-org/button'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'
import styles from './page.module.css'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    // <main className={'bg-bgPrimaryLight dark:bg-bgPrimaryDark'}>
    <main className={styles.my}>
      <div>The current theme is: {theme}</div>
      <Button onClick={() => setTheme('light')}>
        Light Mode
      </Button>
      <Button onClick={() => setTheme('dark')} variant={'bordered'}>
        Dark Mode
      </Button>
    </main>
  )
}
