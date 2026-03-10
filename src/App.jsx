import AppHeader from './components/AppHeader'
import AppTopJumbotron from './components/AppTopJumbotron'
import AppComicCard from './components/AppComicCard'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import AppHero from './components/AppHero'


function App() {
  
  return (
    <>
      <AppHeader />
      <AppTopJumbotron />
      <AppMain>
        <AppComicCard
        key='id'
        image='thumb' 
        content='series' />
      </AppMain>
      <AppHero />
      <AppFooter />
    </>
  )
}

export default App
