import dcLogo from '/dc-logo.png'

export default function AppHeader(){

  return(
    <>
      <header>
        <div className="container">
          <img src={dcLogo} alt="" />
          <nav>
            <a className='toUpperCase'>characters</a>
            <a className='toUpperCase onFocus'>comic</a>
            <a className='toUpperCase'>movies</a>
            <a className='toUpperCase'>tv</a>
            <a className='toUpperCase'>games</a>
            <a className='toUpperCase'>collectibles</a>
            <a className='toUpperCase'>videos</a>
            <a className='toUpperCase'>fans</a>
            <a className='toUpperCase'>news</a>
            <a className='toUpperCase'>shop</a>
          </nav>
        </div>
      </header>
    </>
  )
}