import { useGetWishlist, useSetGameListener } from '../../../firebase/hooks'
import HomeShowcase from '../../organisms/HomeShowcase'

export interface IHomeProps {}

const Home = () => {
  useSetGameListener()
  useGetWishlist()

  return (
    <div className='container'>
      <HomeShowcase />
    </div>
  )
}

export default Home
