/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Game } from '../types'

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
    (state: RootState) => state.games.games,
    (state: RootState) => state.wishlist,
  ],
  (games, wishlist) => {
    const wishlistArr = wishlist.map((game) => game.gameId)
    return games.map((game) => {
      if (wishlistArr.includes(game.id)) return { ...game, wishlisted: true }
      return game
    })
    // do something with a, b, and c, and return a result
  }
)

export default gamesSlice.reducer
