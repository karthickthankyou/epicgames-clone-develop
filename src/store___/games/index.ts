import gameReducer from './gamesSlice'

/** Selectors */
export {
  selectActionGames,
  selectAdventureGames,
  selectPuzzleGames,
  selectNarrationGames,
  selectUnitsSold,
  selectHoursToBeat,
  selectAnticipatedBy,
  selectGamePageSimilarGames,
  selectHomeScreenGames,
  selectHighestDiscounts,
  selectGamePage,
  selectCartGames,
  selectWishlistGames,
  selectPurchasedGames,
} from './gameSelectors'

/** Actions */
export {
  getGamesGenre,
  getHomeScreenGames,
  getSpecialGames,
  getGameSections,
  getGamePage,
  getSimilarGames,
} from './gameActions'
export {
  setWishlistedGames,
  setCartGames,
  setPurchasedGames,
  setRemovedFromCartGames,
} from './gamesSlice'

/** Hooks */
export {
  useGetHomeGames,
  useGetGamePage,
  useUserGamesListener,
} from './gameHooks'

/** The Reducer */
export default gameReducer
