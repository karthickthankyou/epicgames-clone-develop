/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Game } from '../types'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectWishlistGameIds,
} from './userGameSlice'

const initialState: { games: Game[] } = {
  games: [],
}

const gamesSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload
    },
  },
})

export const { setGames } = gamesSlice.actions
export const selectGames = (state: RootState) => state.games.games
export const selectGames2 = createSelector(
  [
    selectGames,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  (games, wishlistIds, cartIds, purchasedIds) => {
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
)

export default gamesSlice.reducer
