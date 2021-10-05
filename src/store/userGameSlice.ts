/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game, UserGame } from '../types/index'
import { RootState } from './store'

const initialState: {
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
    setCartGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.cartGameIds = action.payload
    },
    setRemovedFromCartGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.removedFromCartGameIds = action.payload
    },
    setRemovedFromCartGames: (state, action) => {
      state.removedFromCartGames = action.payload
    },
    setWishlistGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.wishlistGameIds = action.payload
    },
    setPurchasedGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.purchasedGameIds = action.payload
    },
    setWishlistedGames: (state, action: PayloadAction<Game[]>) => {
      state.wishlistGames = action.payload
    },
    setCartGames: (state, action) => {
      state.cartGames = action.payload
    },
    setPurchasedGames: (state, action) => {
      state.purchasedGames = action.payload
    },
    resetUserGames: (state, action) => initialState,
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
  state.userGames.cartGames.map(
    (game): Game => ({
      ...game,
      status: 'IN_CART',
    })
  )
export const selectWishlistGameIds = (state: RootState) =>
  state.userGames.wishlistGameIds
export const selectRemovedFromCartGameIds = (state: RootState) =>
  state.userGames.removedFromCartGameIds
export const selectWishlistGames = (state: RootState) =>
  state.userGames.wishlistGames.map(
    (game): Game => ({
      ...game,
      status: 'WISHLISTED',
    })
  )

export const selectPurchasedGameIds = (state: RootState) =>
  state.userGames.purchasedGameIds
export const selectPurchasedGames = (state: RootState) =>
  state.userGames.purchasedGames.map(
    (game): Game => ({
      ...game,
      status: 'PURCHASED',
    })
  )

//   Reducer
export default userGamesSlice.reducer
