import Image from 'next/image'

const Header = () => {
  return (
    // <div className={'max-w-8xl mx-auto px-4 sm:px-6 md:px-8 border'}>
    //   <h1>header</h1>
    //   <div className="grid grid-cols-12 gap-8">
    //     <div>01</div>
    //     <div>02</div>
    //     <div>03</div>
    //     <div>04</div>
    //     <div>01</div>
    //     <div>01</div>
    //     <div>01</div>
    //     <div>01</div>
    //     <div>09</div>
    //     <div>09</div>
    //     <div>09</div>
    //     <div>09</div>
    //   </div>
    // </div>
    <div className={'bg-myPrimaryLight dark:bg-myPrimaryDark'}>
      <Image
        src="/image/main/spikelet.jpg"
        width={600}
        height={400}
        alt="spikelet"
        className={'absolute -top-0 left-0'}
      />
      <div className={'container mx-auto py-40 relative'}>
        {/*header*/}
      </div>
    </div>
  )
}

export default Header