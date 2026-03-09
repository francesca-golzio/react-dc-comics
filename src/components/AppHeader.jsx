import dcLogo from '/dc-logo.png'

const navMenu = [
  {
    id: 1,
    menuLabel: 'characters',
    url: '/characters'
  },
  {
    id: 2,
    menuLabel: 'comic',
    url: '/comic'
  },
  {
    id: 3,
    menuLabel: 'movies',
    url: '/movies'
  },
  {
    id: 4,
    menuLabel: 'tv',
    url: '/tv'
  },
  {
    id: 5,
    menuLabel: 'games',
    url: '/games'
  },
  {
    id: 6,
    menuLabel: 'collectibles',
    url: '/collectibles'
  },
  {
    id: 7,
    menuLabel: 'videos',
    url: '/videos'
  },
  {
    id: 8,
    menuLabel: 'fans',
    url: '/fans'
  },
  {
    id: 9,
    menuLabel: 'news',
    url: '/news'
  },
  {
    id: 10,
    menuLabel: 'shop',
    url: '/shop'
  }
]

export default function AppHeader() {

  return (
    <>
      <header>
        <div className="container d-flex justify-content-between align-items-center">
          <img src={dcLogo} alt="logo" id="logo" />
          <nav className='d-flex gap-4'>
          {navMenu.map(voice => {return (<a href={voice.url} className='text-uppercase' key={voice.id}>{voice.menuLabel}</a>)})}
          </nav>
        </div>
      </header>
    </>
  )
}