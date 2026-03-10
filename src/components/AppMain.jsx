import comics from '../assets/dati/comics'
import AppComicCard from './AppComicCard'

export default function AppMain() {

  return (
    <>
      <main>
        <div className="container main_container">
          <div className="current_series text-uppercase">current series</div>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 rounded-0 comic_card_deck">
            <AppComicCard />
{/*             {comics.map((comic) => {
              return (
                <div className="col" key={comic.id}>
                  <div className="card-body comic_card_body">
                    <img src={comic.thumb} className="card-img-top comic_card_img" />
                    <div className="col text-uppercase card-title">{comic.series}</div>
                  </div>
                </div>
              )
            }
            )} */}
          </div>
          <div className='more_comics'>
            <button className='more_comics_btn'>load more</button>
          </div>
        </div>
      </main>
    </>
  )
}