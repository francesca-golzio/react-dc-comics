/* import dcLogoBig from '/dc-logo-bg.png' */
import facebookLogo from '/footer-facebook.png'
import twitterLogo from '/footer-twitter.png'
import youtubeLogo from '/footer-youtube.png'
import pinterestLogo from '/footer-pinterest.png'
import periscopeLogo from '/footer-periscope.png'

export default function AppFooter() {

  return (
    <>
      <footer>
        <div>
          <div className='bg-comics'>
            <div className="container topFooterContainer">
              <nav>

                <div>
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
                  <br />
                  <h4 className='text-uppercase'>shop</h4>
                  <ul>
                    <li>Shop DC</li>
                    <li>Shop DC Collectibles</li>
                  </ul>
                </div>

                <div>
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
                </div>

                <div>
                  <h4 className='text-uppercase'>sites</h4>
                  <ul>
                    <li>DC</li>
                    <li>MAD Magazine</li>
                    <li>DC Kids</li>
                    <li>DC Universe</li>
                    <li>DC Power Visa</li>
                  </ul>
                </div>

              </nav>
              {/* <img src={dcLogoBig} alt="" /> */}
            </div>
          </div>

          <div className="container bottomFooterContainer">
            <button className='text-uppercase'>sign-up now!</button>
            <div className="followUs">
              <span className='text-uppercase'>follow us</span>
              <div>
                <a href="" className="social"><img src={facebookLogo} alt="facebook logo" /></a>
                <a href="" className="social"><img src={twitterLogo} alt="twitter logo" /></a>
                <a href="" className="social"><img src={youtubeLogo} alt="youtube logo" /></a>
                <a href="" className="social"><img src={pinterestLogo} alt="pinterest logo" /></a>
                <a href="" className="social"><img src={periscopeLogo} alt="periscope logo" /></a>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}