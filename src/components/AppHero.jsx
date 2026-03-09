import buyComics from '/buy-comics-digital-comics.png'
import buyMerchandise from '/buy-comics-merchandise.png'
import buySubscription from '/buy-comics-subscriptions.png'
import buyShopLocator from '/buy-comics-shop-locator.png'
import buyPowerVisa from '/buy-dc-power-visa.svg'

export default function AppHero() {

  return (
    <>
      <div className="container-fluid hero">
        <div className="container d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 w-100 p-5">

            <a href="#" className="hero-item col d-flex justify-content-center">
              <img src={buyComics} alt="" />
              <div className="text-uppercase">digital comics</div>
            </a>

            <a href="#" className="hero-item col d-flex justify-content-center">
              <img src={buyMerchandise} alt="" />
              <div className="text-uppercase">dc merchandise</div>
            </a>

            <a href="#" className="hero-item col d-flex justify-content-center">
              <img src={buySubscription} alt="" />
              <div className="text-uppercase">subscription</div>
            </a>

            <a href="#" className="hero-item col d-flex justify-content-center">
              <img src={buyShopLocator} alt="" />
              <div className="text-uppercase">comic shop locator</div>
            </a>

            <a href="#" className="hero-item col d-flex justify-content-center">
              <img src={buyPowerVisa} alt="" />
              <div className="text-uppercase">dc power visa</div>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}