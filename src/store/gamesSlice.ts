/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Game, GameGenre, UserGame } from '../types'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectWishlistGameIds,
} from './userGameSlice'

const initialState: {
  games: Game[]
  homeScreenGames: Game[]
  highestEverDiscounts: Game[]
  gamePage: Game | null
  gamePageSimilarGames: Game[]
  genres: { [key in Lowercase<GameGenre>]: Game[] }
} = {
  games: [],
  homeScreenGames: [],
  highestEverDiscounts: [],
  gamePage: null,
  gamePageSimilarGames: [],
  genres: {
    action: [],
    adventure: [],
    puzzle: [],
    narration: [],
  },
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload
    },
    setHomeScreenGames: (state, action) => {
      state.homeScreenGames = action.payload
    },
    setGamePage: (state, action) => {
      state.gamePage = action.payload
    },
    setGamePageSimilarGames: (state, action) => {
      state.gamePageSimilarGames = action.payload
    },
    setHighestEverDiscounts: (state, action) => {
      state.highestEverDiscounts = action.payload
    },
    setActionGames: (state, action) => {
      state.genres.action = action.payload
    },
    setAdventureGames: (state, action) => {
      state.genres.adventure = action.payload
    },
    setPuzzleGames: (state, action) => {
      state.genres.puzzle = action.payload
    },
    setNarrationGames: (state, action) => {
      state.genres.narration = action.payload
    },
  },
})

export const {
  //   setGames,
  setHomeScreenGames,
  setHighestEverDiscounts,
  setActionGames,
  setAdventureGames,
  setPuzzleGames,
  setNarrationGames,
  setGamePage,
  setGamePageSimilarGames,
} = gamesSlice.actions

export const selectGames = (state: RootState) => state.games.games

export const selectHomeScreenGames = (state: RootState) =>
  state.games.homeScreenGames

const combineWCPData = (
  input: Game[],
  wishlistIds: UserGame[],
  cartIds: UserGame[],
  purchasedIds: UserGame[]
) => {
  const includes = (gameId: string) => ({
    wishlisted: wishlistIds.some((game) => game.gameId === gameId),
    inCart: cartIds.some((game) => game.gameId === gameId),
    purchased: purchasedIds.some((game) => game.gameId === gameId),
  })

  return input.map((game) => ({ ...game, ...includes(game.id) }))
}
const combineWCPDataForObject = (
  input: Game | null,
  wishlistIds: UserGame[],
  cartIds: UserGame[],
  purchasedIds: UserGame[]
) => {
  if (!input) return null
  const includes = (gameId: string) => ({
    wishlisted: wishlistIds.some((game) => game.gameId === gameId),
    inCart: cartIds.some((game) => game.gameId === gameId),
    purchased: purchasedIds.some((game) => game.gameId === gameId),
  })

  console.log('combineWCPDataForObject: ', { ...input, ...includes(input.id) })

  return { ...input, ...includes(input.id) }
}

export const selectHighestDiscounts = createSelector(
  [
    (state: RootState) => state.games.highestEverDiscounts,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectGames2 = createSelector(
  [
    selectGames,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectGamePageSimilarGames = createSelector(
  [
    (state: RootState) => state.games.gamePageSimilarGames,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)
// export const selectGamePage =

export const selectGamePage = createSelector(
  [
    (state: RootState) => state.games.gamePage,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPDataForObject
)

export const selectActionGames = createSelector(
  [
    (state: RootState) => state.games.genres.action,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectAdventureGames = createSelector(
  [
    (state: RootState) => state.games.genres.adventure,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)
export const selectPuzzleGames = createSelector(
  [
    (state: RootState) => state.games.genres.puzzle,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)
export const selectNarrationGames = createSelector(
  [
    (state: RootState) => state.games.genres.narration,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export default gamesSlice.reducer
