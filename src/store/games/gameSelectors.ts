import { AsyncGames, Game } from '../../types'
import { RootState } from '..'
import { createSelectorWCPGames, createSelectorWCPGame } from '../userGames'

export const selectActionGames = createSelectorWCPGames(
  (state) => state.games.genres.Action
)

export const selectAdventureGames = createSelectorWCPGames(
  (state) => state.games.genres.Adventure
)

export const selectPuzzleGames = createSelectorWCPGames(
  (state) => state.games.genres.Puzzle
)

export const selectNarrationGames = createSelectorWCPGames(
  (state) => state.games.genres.Narration
)

export const selectUnitsSold = createSelectorWCPGames(
  (state) => state.games.specialSections.unitsSold
)

export const selectHoursToBeat = createSelectorWCPGames(
  (state) => state.games.specialSections.hoursToBeat
)

export const selectAnticipatedBy = createSelectorWCPGames(
  (state) => state.games.specialSections.anticipatedBy
)

export const selectGamePageSimilarGames = createSelectorWCPGames(
  (state) => state.games.similarGames
)

export const selectHomeScreenGames = createSelectorWCPGames(
  (state) => state.games.sections.HOMESCREEN_CAROUSEL
)

export const selectHighestDiscounts = createSelectorWCPGames(
  (state) => state.games.sections.HIGHEST_DISCOUNT
)

export const selectGamePage = createSelectorWCPGame(
  (state) => state.games.gamePage
)

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
