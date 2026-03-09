import dcLogo from '/dc-logo.png'

const navMenu = [
  {
    id: 1,
    menuLabel: 'characters',
    url: '/characters',
    active: false
  },
  {
    id: 2,
    menuLabel: 'comics',
    url: '/comics',
    active: true
  },
  {
    id: 3,
    menuLabel: 'movies',
    url: '/movies',
    active: false
  },
  {
    id: 4,
    menuLabel: 'tv',
    url: '/tv',
    active: false
  },
  {
    id: 5,
    menuLabel: 'games',
    url: '/games',
    active: false
  },
  {
    id: 6,
    menuLabel: 'collectibles',
    url: '/collectibles',
    active: false
  },
  {
    id: 7,
    menuLabel: 'videos',
    url: '/videos',
    active: false
  },
  {
    id: 8,
    menuLabel: 'fans',
    url: '/fans',
    active: false
  },
  {
    id: 9,
    menuLabel: 'news',
    url: '/news',
    active: false
  },
  {
    id: 10,
    menuLabel: 'shop',
    url: '/shop',
    active: false
  }
]

export default function AppHeader() {

  return (
    <>
      <header>
        <div className="container d-flex justify-content-between align-items-center header_container">
          <img src={dcLogo} alt="logo" id="logo" />
          <nav className='d-flex gap-4'>
            {navMenu.map(voice => {              
              return (
              <div id={(voice.active) ? 'is_active' : ''} key={voice.id}>
                <a href={voice.url} className='text-uppercase' key={voice.id}>{voice.menuLabel}</a>
                  <div ></div>
              </div>
            )
            }
            )}
          </nav>
        </div>
      </header>
    </>
  )
}