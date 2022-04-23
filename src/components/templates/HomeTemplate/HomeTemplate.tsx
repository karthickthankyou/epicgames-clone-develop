import BigBanner from '@organisms/BigBanner'
import BrowseSection from '@organisms/BrowseSection'
import GameCard01Section from '@organisms/GameCard01Section'
import GameCard03Section from '@organisms/GameCard03Section'
import GameCard04Section from '@organisms/GameCard04Section'
import HomeShowcase from '@organisms/HomeShowcase'
import MaskedShowcase from '@organisms/MaskedShowcase'
import {
  selectHighestDiscounts,
  selectActionGames,
  selectAdventureGames,
  selectPuzzleGames,
  selectNarrationGames,
  selectHomeScreenGames,
} from '@store/gamesSlice'
import { useAppSelector } from '@store/hooks'
import {
  selectWishlistGames,
  selectWishlistGameIds,
  selectCartGames,
  selectCartGameIds,
} from '@store/userGameSlice'

import { getDates, getImageUrl } from '@utils/index'
import { unitsSold, anticipatedBy, sampleSimpleGames } from '@utils/data'
import Showcase from '@organisms/Showcase/Showcase'

export interface IHomeTemplateProps {}

const HomeTemplate = () => {
  const wishlist = useAppSelector(selectWishlistGames)
  const highestDiscoutsEver = useAppSelector(selectHighestDiscounts)
  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const cart = useAppSelector(selectCartGames)
  const cartIds = useAppSelector(selectCartGameIds)
  const actionGames = useAppSelector(selectActionGames)
  const adventureGames = useAppSelector(selectAdventureGames)
  const puzzleGames = useAppSelector(selectPuzzleGames)
  const narrationGames = useAppSelector(selectNarrationGames)
  const homeShowcaseGames = useAppSelector(selectHomeScreenGames)

  const { date, nextWeek } = getDates()

  return (
    <div>
      <div className='-mt-16'>
        <Showcase games={homeShowcaseGames} />
      </div>
      {/* <div className='-mt-16'>
        <HomeShowcase games={homeShowcaseGames} />
      </div> */}

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
      {wishlist.length > 0 && (
        <GameCard01Section
          heading='From your wishlist'
          games={wishlist}
          buttonText={`View all (${wishlistIds.length})`}
          buttonLinkTo='/wishlist'
        />
      )}
      {cart.length > 0 && (
        <GameCard01Section
          heading='From your cart'
          games={cart}
          buttonText={`Checkout now (${cartIds.length})`}
          buttonLinkTo='/cart'
        />
      )}
      <GameCard04Section
        freeGames={[
          {
            id: '306',
            date,
            imageUrl: getImageUrl('306').imageUrl,
            title: '3 out of 10, EP 3: "Pivot Like A Champion"',
          },
          {
            id: '460',
            date,
            imageUrl: getImageUrl('460').imageUrl,
            title: 'Cardpocalypse',
          },
          {
            id: '290',
            date,
            imageUrl: getImageUrl('290').imageUrl,
            title: 'Diabotical',
          },
        ]}
        mysteryGame={[
          { id: '01', date: nextWeek },
          { id: '02', date: nextWeek },
        ]}
      />
      {actionGames.length > 0 && (
        <GameCard01Section
          heading='Action Games'
          games={actionGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}
      {adventureGames.length > 0 && (
        <GameCard01Section
          heading='Adventure Games'
          games={adventureGames}
          buttonText='View more'
          buttonLinkTo='/browse'
        />
      )}
      <GameCard03Section
        newReleases={sampleSimpleGames.slice(0, 6)}
        topSellers={sampleSimpleGames.slice(6, 12)}
        comingSoon={sampleSimpleGames.slice(12, 18)}
      />
      {puzzleGames.length > 0 && (
        <GameCard01Section
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

export default HomeTemplate
