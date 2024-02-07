import Brand from './Brand/Brand'
import FindSite from './FindSite'
import NavigationList from './NavigationList/NavigationList'

const Header = () => {
  return (
    <header className='bg-myPrimaryLight'>
      <div className={'container flex relative z-[1]'}>
        <Brand />
        <FindSite />
        <NavigationList />
      </div>
    </header>
  )
}

export default Header
