import { HiHeart, HiShoppingBag } from 'react-icons/hi'
import {
  callSignOut,
  callSignIn,
  useHomeScreenGames,
} from '../../../firebase/hooks'
import {
  selectActionGames,
  selectAdventureGames,
  selectGames2,
  selectHomeScreenGames,
  selectNarrationGames,
  selectPuzzleGames,
} from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import {
  selectCartGameIds,
  selectCartGames,
  selectWishlistGameIds,
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
  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const cart = useAppSelector(selectCartGames)
  const cartIds = useAppSelector(selectCartGameIds)
  const actionGames = useAppSelector(selectActionGames)
  const adventureGames = useAppSelector(selectAdventureGames)
  const puzzleGames = useAppSelector(selectPuzzleGames)
  const narrationGames = useAppSelector(selectNarrationGames)

  useHomeScreenGames()

  return (
    <div className='container'>
      <HomeShowcase />
      <GameCard01Section
        heading={
          <>
            Highest Discounts{' '}
            <span className='px-1 py-0.5 text-xs bg-green-600 rounded mx-2'>
              %
            </span>{' '}
            Ever Recorded
          </>
        }
        games={games}
        buttonText='View all'
        classes='my-10'
        buttonLinkTo='/browse'
      />
      {wishlist.length > 0 && (
        <GameCard01Section
          //   heading={`From your wishlist ( ${wishlist.length} )`}
          heading={
            <>
              From your wishlist <HiHeart className='inline' />({' '}
              {wishlistIds.length} )
            </>
          }
          games={wishlist}
          buttonText='View all'
          classes='my-10'
          buttonLinkTo='/wishlist'
        />
      )}
      {cart.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading={
            <>
              From your cart <HiShoppingBag className='inline' />({' '}
              {cartIds.length} )
            </>
          }
          games={cart}
          buttonText='Checkout now'
          classes='my-10'
          buttonLinkTo='/cart'
        />
      )}
      {actionGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Action Games'
          games={actionGames}
          buttonText='View more'
          classes='my-10'
          buttonLinkTo='/browse'
        />
      )}
      {adventureGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Adventure Games'
          games={adventureGames}
          buttonText='View more'
          classes='my-10'
        />
      )}
      {puzzleGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Puzzle Games'
          games={puzzleGames}
          buttonText='View more'
          classes='my-10'
          buttonLinkTo='/browse'
        />
      )}
      {narrationGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Narration Games'
          games={narrationGames}
          buttonText='View more'
          buttonLinkTo='/browse'
          classes='my-10'
        />
      )}

      <div className='mt-10'>
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
    </div>
  )
}

export default Home
