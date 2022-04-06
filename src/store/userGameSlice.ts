/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { Game, UserGame } from '@epictypes/index'
import { RootState } from './store'

export const initialState: {
  cartGameIds: UserGame[]
  wishlistGameIds: UserGame[]
  purchasedGameIds: UserGame[]
  removedFromCartGameIds: UserGame[]
  wishlistGames: Game[]
  cartGames: Game[]
  removedFromCartGames: Game[]
  purchasedGames: Game[]
} = {
  wishlistGameIds: [],
  cartGameIds: [],
  removedFromCartGameIds: [],
  removedFromCartGames: [],
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
    setRemovedFromCartGameIds: (state, action) => {
      state.removedFromCartGameIds = action.payload
    },
    setRemovedFromCartGames: (state, action) => {
      state.removedFromCartGames = action.payload
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
  setRemovedFromCartGameIds,
  setRemovedFromCartGames,
  setWishlistGameIds,
  setPurchasedGameIds,
  setWishlistedGames,
  setCartGames,
  setPurchasedGames,
} = userGamesSlice.actions

// Selectors
export const selectCartGameIds = (state: RootState) =>
  state.userGames.cartGameIds
export const selectCartGames = (state: RootState) =>
  state.userGames.cartGames.map((game) => ({
    ...game,
    inCart: true,
  }))
export const selectWishlistGameIds = (state: RootState) =>
  state.userGames.wishlistGameIds
export const selectRemovedFromCartGameIds = (state: RootState) =>
  state.userGames.removedFromCartGameIds
export const selectWishlistGames = (state: RootState) =>
  state.userGames.wishlistGames.map((game) => ({
    ...game,
    wishlisted: true,
  }))

export const selectPurchasedGameIds = (state: RootState) =>
  state.userGames.purchasedGameIds
export const selectPurchasedGames = (state: RootState) =>
  state.userGames.purchasedGames

//   Reducer
export default userGamesSlice.reducer
