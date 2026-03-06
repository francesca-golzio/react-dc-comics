import dcLogo from '/dc-logo.png'

export default function AppHeader(){

  return(
    <>
      <header>
        <div className="container d-flex justify-content-between align-items-center">
          <img src={dcLogo} alt="" />
          <nav className='d-flex gap-4'>
            <a className='text-uppercase'>characters</a>
            <a className='text-uppercase onFocus'>comic</a>
            <a className='text-uppercase'>movies</a>
            <a className='text-uppercase'>tv</a>
            <a className='text-uppercase'>games</a>
            <a className='text-uppercase'>collectibles</a>
            <a className='text-uppercase'>videos</a>
            <a className='text-uppercase'>fans</a>
            <a className='text-uppercase'>news</a>
            <a className='text-uppercase'>shop</a>
          </nav>
        </div>
      </header>
    </>
  )
}