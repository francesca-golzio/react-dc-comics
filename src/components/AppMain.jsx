import comics from '../assets/dati/comics'

export default function AppMain() {

  return (
    <>
      <main>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 rounded-0 comic_card_deck">
            {comics.map((item) => {
              return (
                <div className="col">
                  <div className="card-body comic_card_body">
                    <img src='https://picsum.photos/id/237/200/300' className="card-img-top comic_card_img" />
                    <div className="col text-uppercase card-title">Title</div>
                  </div>
                </div>
              )
            }
            )}
          </div>
          <div className='more_comics'>
            <button className='more_comics_btn'>load more</button>
          </div>
        </div>
      </main>
    </>
  )
}