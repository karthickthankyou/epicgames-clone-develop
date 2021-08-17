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
  genres: { [key in Lowercase<GameGenre>]: Game[] }
} = {
  games: [],
  homeScreenGames: [],
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
  setGames,
  setHomeScreenGames,
  setActionGames,
  setAdventureGames,
  setPuzzleGames,
  setNarrationGames,
} = gamesSlice.actions

export const selectGames = (state: RootState) => state.games.games

export const selectHomeScreenGames = (state: RootState) =>
  state.games.homeScreenGames

const combineWCPData = (
  games: Game[],
  wishlistIds: UserGame[],
  cartIds: UserGame[],
  purchasedIds: UserGame[]
) => {
  const wishlistArr = wishlistIds.map((game) => game.gameId)
  const cartArr = cartIds.map((game) => game.gameId)
  const purchasedArr = purchasedIds.map((game) => game.gameId)
  return games.map((game) => {
    const wishlisted = wishlistArr.includes(game.id)
    const inCart = cartArr.includes(game.id)
    const purchased = purchasedArr.includes(game.id)

    return { ...game, wishlisted, inCart, purchased }
  })
  // do something with a, b, and c, and return a result
}

const WCPData = [
  selectWishlistGameIds,
  selectCartGameIds,
  selectPurchasedGameIds,
]

export const selectGames2 = createSelector(
  // @ts-ignore
  [selectGames, ...WCPData],
  combineWCPData
)
export const selectActionGames = createSelector(
  // @ts-ignore
  [(state: RootState) => state.games.genres.action, ...WCPData],
  combineWCPData
)
export const selectAdventureGames = createSelector(
  // @ts-ignore
  [(state: RootState) => state.games.genres.adventure, ...WCPData],
  combineWCPData
)
export const selectPuzzleGames = createSelector(
  // @ts-ignore
  [(state: RootState) => state.games.genres.puzzle, ...WCPData],
  combineWCPData
)
export const selectNarrationGames = createSelector(
  // @ts-ignore
  [(state: RootState) => state.games.genres.narration, ...WCPData],
  combineWCPData
)

export default gamesSlice.reducer
