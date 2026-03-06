import buyComics from '/buy-comics-digital-comics.png'
import buyMerchandise from '/buy-comics-merchandise.png'
import buySubscription from '/buy-comics-subscriptions.png'
import buyShopLocator from '/buy-comics-shop-locator.png'
import buyPowerVisa from '/buy-dc-power-visa.svg'

export default function AppHero() {

  return (
    <>
      <div className="container hero">

        <a href="#" className="hero-item">
          <img src={buyComics} alt="" /> {/* ⚠️ NON va... ricontrolla! */}
          <span className="text-uppercase">digital comics</span>
        </a>

        <a href="#" className="hero-item">
          <img src={buyMerchandise} alt="" /> {/* ⚠️ NON va... ricontrolla! */}
          <span className="text-uppercase">dc merchandise</span>
        </a>

        <a href="#" className="hero-item">
          <img src={buySubscription} alt="" /> {/* ⚠️ NON va... ricontrolla! */}
          <span className="text-uppercase">subscription</span>
        </a>

        <a href="#" className="hero-item">
          <img src={buyShopLocator} alt="" /> {/* ⚠️ NON va... ricontrolla! */}
          <span className="text-uppercase">comic shop locator</span>
        </a>

        <a href="#" className="hero-item">
          <img src={buyPowerVisa} alt="" /> {/* ⚠️ NON va... ricontrolla! */}
          <span className="text-uppercase">dc power visa</span>
        </a>

      </div>
    </>
  )
}