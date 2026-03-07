import dcLogoBig from '/dc-logo-bg.png'

export default function AppFooter() {

  return (
    <>
      <footer>

        <div>
          <div className='bg-comics'>
            <div className="container">
              <nav>

                <h4 className='text-uppercase'>dc comics</h4>
                <ul>
                  <li>Characters</li>
                  <li>Comic</li>
                  <li>Movies</li>
                  <li>TV</li>
                  <li>Games</li>
                  <li>Videos</li>
                  <li>News</li>
                </ul>

                <h4 className='text-uppercase'>shop</h4>
                <ul>
                  <li>Shop DC</li>
                  <li>Shop DC Collectibles</li>
                </ul>

                <h4 className='text-uppercase'>dc</h4>
                <ul>
                  <li>Terms Of Use</li>
                  <li>Privacy policy (New)</li>
                  <li>Ad Choices</li>
                  <li>Advertising</li>
                  <li>Jobs</li>
                  <li>Subscriptions</li>
                  <li>Talent Workshops</li>
                  <li>CPSC Certificates</li>
                  <li>Ratings</li>
                  <li>Shop Help</li>
                  <li>Contact Us</li>
                </ul>

                <h4 className='text-uppercase'>sites</h4>
                <ul>
                  <li>DC</li>
                  <li>MAD Magazine</li>
                  <li>DC Kids</li>
                  <li>DC Universe</li>
                  <li>DC Power Visa</li>
                </ul>

              </nav>
              <img src={dcLogoBig} alt="" />
            </div>
          </div>

          <div className="container footerContainer">
            <button className='text-uppercase'>sign-up now!</button>
            <div className="followUs">
              <span className='text-uppercase'>follow us</span>
              <div>
                <a href="" className="social">fb</a>
                <a href="" className="social">tw</a>
                <a href="" className="social">yt</a>
                <a href="" className="social">pin</a>
                <a href="" className="social">map</a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}