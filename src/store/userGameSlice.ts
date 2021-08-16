/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { Game, UserGame } from '../types'
import { RootState } from './store'

const initialState: {
  cartGameIds: UserGame[]
  wishlistGameIds: UserGame[]
  purchasedGameIds: UserGame[]
  wishlistGames: Game[]
  cartGames: Game[]
  purchasedGames: Game[]
} = {
  wishlistGameIds: [],
  cartGameIds: [],
  purchasedGameIds: [],
  wishlistGames: [],
  cartGames: [],
  purchasedGames: [],
}

const userGamesSlice = createSlice({
  name: 'games/userGames',
  initialState,
  reducers: {
    setCartGameIds: (state, action) => {
      state.cartGameIds = action.payload
    },
    setWishlistGameIds: (state, action) => {
      state.wishlistGameIds = action.payload
    },
    setPurchasedGameIds: (state, action) => {
      state.purchasedGameIds = action.payload
    },
    setWishlistedGames: (state, action) => {
      state.wishlistGames = action.payload
    },
    setCartGames: (state, action) => {
      state.cartGames = action.payload
    },
    setPurchasedGames: (state, action) => {
      state.purchasedGames = action.payload
    },
  },
})

// Actions
export const {
  setCartGameIds,
  setWishlistGameIds,
  setPurchasedGameIds,
  setWishlistedGames,
  setCartGames,
  setPurchasedGames,
} = userGamesSlice.actions

// Selectors
export const selectCartGameIds = (state: RootState) =>
  state.userGames.cartGameIds
export const selectCartGames = (state: RootState) => state.userGames.cartGames
export const selectWishlistGameIds = (state: RootState) =>
  state.userGames.wishlistGameIds
export const selectWishlistGames = (state: RootState) =>
  state.userGames.wishlistGames
export const selectPurchasedGameIds = (state: RootState) =>
  state.userGames.purchasedGameIds
export const selectPurchasedGames = (state: RootState) =>
  state.userGames.purchasedGames

//   Reducer
export default userGamesSlice.reducer
