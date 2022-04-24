import { useHomeScreenGames } from '@epicfirebase/hooks'
import { useDocumentTitle } from '@hooks/index'
import HomeTemplate from '@templates/HomeTemplate/HomeTemplate'

export interface IHomeProps {}

const Home = () => {
  useDocumentTitle('Epic clone | Karthick Ragavendran')
  useHomeScreenGames()

  return <HomeTemplate />
}

export default Home
