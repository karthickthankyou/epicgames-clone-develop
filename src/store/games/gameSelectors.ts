import { AsyncGames, Game } from 'src/types'
import { defaultAsyncGames } from 'src/types/static'
import { RootState } from '..'
import { selectGamesWithWCP, selectGameWithWCP } from './gameUtils'

export const selectActionGames = selectGamesWithWCP(
  (state) => state.games.genres.Action
)

export const selectAdventureGames = selectGamesWithWCP(
  (state) => state.games.genres.Adventure
)

export const selectPuzzleGames = selectGamesWithWCP(
  (state) => state.games.genres.Puzzle
)

export const selectNarrationGames = selectGamesWithWCP(
  (state) => state.games.genres.Narration
)

export const selectUnitsSold = selectGamesWithWCP(
  (state) => state.games.specialSections.unitsSold
)

export const selectHoursToBeat = selectGamesWithWCP(
  (state) => state.games.specialSections.hoursToBeat
)

export const selectAnticipatedBy = selectGamesWithWCP(
  (state) => state.games.specialSections.anticipatedBy
)

export const selectGamePageSimilarGames = selectGamesWithWCP(
  (state) => state.games.similarGames
)

export const selectHomeScreenGames = selectGamesWithWCP(
  (state) => state.games.sections.HOMESCREEN_CAROUSEL
)

export const selectHighestDiscounts = selectGamesWithWCP(
  (state) => state.games.sections.HIGHEST_DISCOUNT
)

export const selectGamePage = selectGameWithWCP((state) => state.games.gamePage)

export const selectCartGames = (state: RootState) => {
  const inCart = state.games.userGames.IN_CART
  const data = inCart?.data.map(
    (game): Game => ({
      ...game,
      status: 'IN_CART',
    })
  )
  return { ...inCart, data }
}

export const selectWishlistGames = (state: RootState): AsyncGames => {
  const wishlist = state.games.userGames.WISHLISTED
  const data = wishlist?.data.map(
    (game): Game => ({
      ...game,
      status: 'WISHLISTED',
    })
  )
  return { ...wishlist, data }
}

export const selectPurchasedGames = (state: RootState): AsyncGames => {
  const purchased = state.games.userGames.PURCHASED
  const data = state.games.userGames.PURCHASED?.data.map(
    (game): Game => ({
      ...game,
      status: 'PURCHASED',
    })
  )
  return { ...purchased, data }
}
