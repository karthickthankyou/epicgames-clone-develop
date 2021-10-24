import { selectUser, signout } from 'src/store/user'
import { useAppSelector, useAppDispatch } from 'src/store'
import { useDocumentTitle } from 'src/hooks'
import {
  selectActionGames,
  selectAdventureGames,
  selectHighestDiscounts,
  selectNarrationGames,
  selectPuzzleGames,
  // selectAnticipatedBy,
  // selectHoursToBeat,
  // selectUnitsSold,
  // selectHoursPlayed,
  selectWishlistGames,
  selectCartGames,
} from 'src/store/games'

import { selectCartGameIds, selectWishlistGameIds } from 'src/store/userGames'
import {
  GameCard01Section,
  HomeShowcase,
  MaskedShowcase,
} from 'src/components/organisms'

export interface IHomeProps {}

const Home = () => {
  const dispatch = useAppDispatch()

  const {
    data: { uid },
  } = useAppSelector(selectUser)

  const cart = useAppSelector(selectCartGames)
  const wishlist = useAppSelector(selectWishlistGames)
  const highestDiscoutsEver = useAppSelector(selectHighestDiscounts)
  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const cartIds = useAppSelector(selectCartGameIds)
  const actionGames = useAppSelector(selectActionGames)
  const adventureGames = useAppSelector(selectAdventureGames)
  const puzzleGames = useAppSelector(selectPuzzleGames)
  const narrationGames = useAppSelector(selectNarrationGames)
  // const narrationGames = useAppSelector(
  //   selectGamesWithWCP((state) => state.games.genres.Narration)
  // )

  // const unitsSold = useAppSelector(selectUnitsSold)
  // const hoursPlayed = useAppSelector(selectHoursPlayed)
  // const hoursToBeat = useAppSelector(selectHoursToBeat)
  // const anticipatedBy = useAppSelector(selectAnticipatedBy)

  // useHomeScreenGames()
  useDocumentTitle('Epic clone')

  return (
    <div className='container' id='container'>
      <HomeShowcase />
      <GameCard01Section
        heading='Highest Discounts Ever Recorded'
        games={highestDiscoutsEver}
        buttonText='View all'
        buttonLinkTo='/browse'
      />
      {/* {unitsSold.length > 0 && (
        <MaskedShowcase
          title='Blockbusters Of The Month'
          games={unitsSold}
          comment='thousand units sold.'
          keyUnit='unitsSold'
        />
      )}
      {anticipatedBy.length > 0 && (
        <MaskedShowcase
          title='Most anticipated games'
          games={anticipatedBy}
          comment='wishlisted'
          keyUnit='anticipatedBy'
        />
      )}
      {hoursPlayed.length > 0 && (
        <MaskedShowcase
          title='Most popular games'
          games={hoursPlayed}
          comment='hours played'
          keyUnit='hoursPlayed'
        />
      )}
      {hoursToBeat.length > 0 && (
        <MaskedShowcase
          title='Longest games'
          games={hoursToBeat}
          comment='game hours'
          keyUnit='hoursToBeat'
        />
      )} */}

      {wishlist.data.length > 0 && (
        <GameCard01Section
          //   heading={`From your wishlist ( ${wishlist.length} )`}
          heading='From your wishlist'
          games={wishlist}
          buttonText={`View all (${wishlistIds.data.length})`}
          buttonLinkTo='/wishlist'
        />
      )}
      {cart.data.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='From your cart'
          games={cart}
          buttonText={`Checkout now (${cartIds.data.length})`}
          buttonLinkTo='/cart'
        />
      )}
      {actionGames.data.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Action Games'
          games={actionGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}
      {adventureGames.data.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Adventure Games'
          games={adventureGames}
          buttonText='View more'
        />
      )}
      {puzzleGames.data.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Puzzle Games'
          games={puzzleGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}
      {narrationGames.data.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Narration Games'
          games={narrationGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}

      <div className='mt-10'>
        {uid && (
          <button type='button' onClick={() => dispatch(signout)}>
            Signout
          </button>
        )}
      </div>
    </div>
  )
}

export default Home
