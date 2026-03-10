import comics from '../assets/dati/comics'

export default function AppComicCard() {

  return (
    <>

      {comics.map((comic) => {
        const {id, thumb, series} = comic;
        /* {console.log(id, thumb, series);} */
        return (
          <div className = "col" key = {id}>
            <div className = "card-body comic_card_body">
              <img src = {thumb} className = "card-img-top comic_card_img" />
              <div className = "col text-uppercase card-title">{series}</div>
            </div>
          </div>
        )
      }
      )}

    </>
  )
}