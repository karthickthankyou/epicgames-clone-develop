import { HiHeart, HiShoppingBag } from 'react-icons/hi'
import { callSignOut, callSignIn } from '../../../firebase/hooks'
import { selectGames2 } from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import {
  selectCartGames,
  selectWishlistGames,
} from '../../../store/userGameSlice'
import { selectUser } from '../../../store/userSlice'
import GameCard01Section from '../../organisms/GameCard01Section'
import HomeShowcase from '../../organisms/HomeShowcase'

export interface IHomeProps {}

const Home = () => {
  const { uid } = useAppSelector(selectUser)
  const games = useAppSelector(selectGames2)
  const wishlist = useAppSelector(selectWishlistGames)
  const cart = useAppSelector(selectCartGames)

  return (
    <div className='container'>
      <HomeShowcase />
      <GameCard01Section
        heading={
          <>
            Highest Discounts{' '}
            <span className='px-2 py-1 bg-green-600 rounded'>%</span> Ever
            Recorded
          </>
        }
        games={games}
        buttonText='View all'
        classes='my-10'
      />
      {wishlist.length > 0 && (
        <GameCard01Section
          //   heading={`From your wishlist ( ${wishlist.length} )`}
          heading={
            <>
              From your wishlist <HiHeart className='inline' />({' '}
              {wishlist.length} )
            </>
          }
          games={wishlist}
          buttonText='View all'
          classes='my-10'
        />
      )}
      {cart.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading={
            <>
              From your cart <HiShoppingBag className='inline' />( {cart.length}{' '}
              )
            </>
          }
          games={cart}
          buttonText='Checkout now'
          classes='my-10'
        />
      )}
      {uid ? (
        <button type='button' onClick={callSignOut}>
          Signout
        </button>
      ) : (
        <button type='button' onClick={callSignIn}>
          Signin
        </button>
      )}
    </div>
  )
}

export default Home
