import Navigation from '@/components/Header/Navigation/Navigation'

const Header = () => {
  return (
    <div className={'bg-myPrimaryLight dark:bg-myPrimaryDark'}>
      <div className={'container'}>
        <Navigation/>
      </div>
    </div>
  )
}

export default Header
