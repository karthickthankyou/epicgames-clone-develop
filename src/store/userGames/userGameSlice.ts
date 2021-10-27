/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AsyncUserGames, UserGame, UserGameStatus } from '../../types'
import { defaultAsyncUserGames } from '../../types/static'

type UserGameType = {
  [key in UserGameStatus]: AsyncUserGames
}

const initialState: UserGameType = {
  IN_CART: defaultAsyncUserGames,
  WISHLISTED: defaultAsyncUserGames,
  PURCHASED: defaultAsyncUserGames,
  REMOVED_FROM_CART: defaultAsyncUserGames,
  REMOVED_FROM_WISHLIST: defaultAsyncUserGames,
}

const userGamesSlice = createSlice({
  name: 'userGames',
  initialState,
  reducers: {
    setCartGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.IN_CART = { data: action.payload }
    },
    setWishlistGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.WISHLISTED = { data: action.payload }
    },
    setPurchasedGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.PURCHASED = { data: action.payload }
    },
    setRemovedFromCartGameIds: (state, action: PayloadAction<UserGame[]>) => {
      state.REMOVED_FROM_CART = { data: action.payload }
    },
    setRemovedFromWishlistGameIds: (
      state,
      action: PayloadAction<UserGame[]>
    ) => {
      state.REMOVED_FROM_WISHLIST = { data: action.payload }
    },
  },
})

// Actions
export const {
  setCartGameIds,
  setRemovedFromCartGameIds,
  setWishlistGameIds,
  setPurchasedGameIds,
} = userGamesSlice.actions

//   Reducer
export default userGamesSlice.reducer
