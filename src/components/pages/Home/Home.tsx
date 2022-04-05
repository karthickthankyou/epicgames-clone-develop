import {
  callSignOut,
  callSignIn,
  useHomeScreenGames,
} from '@epicfirebase/hooks'
import { useDocumentTitle } from '@hooks/index'
import {
  selectActionGames,
  selectAdventureGames,
  selectAnticipatedBy,
  selectHighestDiscounts,
  selectHoursPlayed,
  selectHoursToBeat,
  selectNarrationGames,
  selectPuzzleGames,
  selectUnitsSold,
} from '@store/gamesSlice'
import { useAppSelector } from '@store/hooks'
import {
  selectCartGameIds,
  selectCartGames,
  selectWishlistGameIds,
  selectWishlistGames,
} from '@store/userGameSlice'
import { selectUser } from '@store/userSlice'
import GameCard01Section from '@organisms/GameCard01Section'
import HomeShowcase from '@organisms/HomeShowcase'
import MaskedShowcase from '@organisms/MaskedShowcase'
import GameCard04Section from '@organisms/GameCard04Section'
import BigBanner from '@organisms/BigBanner'
import BrowseSection from '@organisms/BrowseSection'
import GameCard03Section from '@organisms/GameCard03Section/GameCard03Section'

export interface IHomeProps {}

const Home = () => {
  const { uid } = useAppSelector(selectUser)

  const wishlist = useAppSelector(selectWishlistGames)
  const highestDiscoutsEver = useAppSelector(selectHighestDiscounts)
  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const cart = useAppSelector(selectCartGames)
  const cartIds = useAppSelector(selectCartGameIds)
  const actionGames = useAppSelector(selectActionGames)
  const adventureGames = useAppSelector(selectAdventureGames)
  const puzzleGames = useAppSelector(selectPuzzleGames)
  const narrationGames = useAppSelector(selectNarrationGames)

  // const unitsSold = useAppSelector(selectUnitsSold)

  const unitsSold = [
    { id: '427', units: '510' },
    { id: '234', units: '450' },
    { id: '337', units: '331' },
    { id: '531', units: '191' },
    { id: '005', units: '126' },
    { id: '013', units: '109' },
    { id: '237', units: '72' },
  ]
  const anticipatedBy = [
    { id: '183', units: '230' },
    { id: '043', units: '190' },
    { id: '135', units: '166' },
    { id: '019', units: '94' },
    { id: '040', units: '80' },
    { id: '071', units: '71' },
    { id: '083', units: '56' },
  ]
  const hoursPlayed = useAppSelector(selectHoursPlayed)
  const hoursToBeat = useAppSelector(selectHoursToBeat)
  // const anticipatedBy = useAppSelector(selectAnticipatedBy)

  console.log('units sold: ', unitsSold)
  useHomeScreenGames()
  useDocumentTitle('Epic clone | Karthick Ragavendran')

  return (
    <div>
      <HomeShowcase />
      <GameCard01Section
        heading='Highest Discounts Ever Recorded'
        games={highestDiscoutsEver}
        buttonText='View all'
        buttonLinkTo='/browse'
      />

      {unitsSold.length > 0 && (
        <MaskedShowcase
          title='Blockbusters Of The Month'
          games={unitsSold}
          comment='thousand units sold.'
        />
      )}

      {anticipatedBy.length > 0 && (
        <MaskedShowcase
          title='Most anticipated games'
          games={anticipatedBy}
          comment='thousand players wishlisted'
        />
      )}
      {/*

      {hoursToBeat.length > 0 && (
        <MaskedShowcase
          title='Longest games'
          games={hoursToBeat}
          comment='game hours'
          keyUnit='hoursToBeat'
        />
      )} */}
      {/* {hoursPlayed.length > 0 && (
        <MaskedShowcase
          title='Most popular games'
          games={hoursPlayed}
          comment='hours played'
          keyUnit='hoursPlayed'
        />
      )} */}
      {wishlist.length > 0 && (
        <GameCard01Section
          //   heading={`From your wishlist ( ${wishlist.length} )`}
          heading='From your wishlist'
          games={wishlist}
          buttonText={`View all (${wishlistIds.length})`}
          buttonLinkTo='/wishlist'
        />
      )}
      {cart.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='From your cart'
          games={cart}
          buttonText={`Checkout now (${cartIds.length})`}
          buttonLinkTo='/cart'
        />
      )}
      <GameCard04Section />

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
          buttonLinkTo='/browse'
        />
      )}
      <GameCard03Section />

      {puzzleGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Puzzle Games'
          games={puzzleGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}
      <BigBanner
        id='273'
        title='Rocket League'
        description='Rocket League is a high-powered hybrid of arcade-style soccer and
        vehicular mayhem with easy-to-understand controls and fluid,
        physics-driven competition.'
      />
      {narrationGames.length > 0 && (
        <GameCard01Section
          //   heading={`From your cart ( ${cart.length} )`}
          heading='Narration Games'
          games={narrationGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}
      <BrowseSection />
    </div>
  )
}

export default Home
