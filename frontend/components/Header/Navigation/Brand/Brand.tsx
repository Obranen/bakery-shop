import Link from 'next/link'
import Image from 'next/image'
import styles from './Brand.module.css'

const Brand = () => {
  return (
    <div className='mt-[100px] ml-[-15px] font-abrilFatface'>
      <Link
        className='border-t-2 border-myHighlightLight text-[30px]'
        href='/'
      >
        <Image
          src='/image/main/bread.png'
          width={42}
          height={48}
          alt='bread'
          priority
          className={'absolute top-[6px] left-[46px] w-[42px] h-[48px]'}
        />
        <span className={styles.textGradient}>Bakery</span>
      </Link>
    </div>
  )
}

export default Brand
