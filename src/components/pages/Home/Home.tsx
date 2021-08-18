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
  selectHighestDiscounts,
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
  const highestDiscoutsEver = useAppSelector(selectHighestDiscounts)
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
        games={highestDiscoutsEver}
        buttonText='View all'
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
          buttonLinkTo='/cart'
        />
      )}
      {actionGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Action Games'
          games={actionGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}
      {adventureGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Adventure Games'
          games={adventureGames}
          buttonText='View more'
        />
      )}
      {puzzleGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Puzzle Games'
          games={puzzleGames}
          buttonText='View more'
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
