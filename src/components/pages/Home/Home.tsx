import { useHomeScreenGames } from '@epicfirebase/hooks'
import { useDocumentTitle } from '@hooks/index'
import HomeTemplate from '@templates/HomeTemplate/HomeTemplate'
import axios from 'axios'

export interface IHomeProps {}

const Home = () => {
  useDocumentTitle('Epic clone | Karthick Ragavendran')
  useHomeScreenGames()

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    axios.post('https://backend.epic.iamkarthick.com/api/hello').then((res) => {
      console.log(res)
    })
  }
  const handleSubmit2 = async (event: any) => {
    event.preventDefault()

    axios
      .post('https://backend.epic.iamkarthick.com/api/hello2')
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div>
      <HomeTemplate />
      <button type='button' onClick={handleSubmit}>
        Click me for hello
      </button>
      <button type='button' onClick={handleSubmit2}>
        Click me for hello 2
      </button>
    </div>
  )
}

export default Home
