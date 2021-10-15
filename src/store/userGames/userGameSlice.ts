/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RouteComponentProps } from 'react-router-dom'
import { updateUserGames } from 'src/store/browserGames/browseGamesThunks'
import { gameIdsListener } from 'src/store/userGames/userGameHooks'
import { Game, UserGame, UserGameStatus } from '../../types'
import { RootState } from '..'

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

export const wishlistUserGames = createAsyncThunk(
  'userGames/wishlist',
  async ({
    uid,
    gameId,
    status,
    history,
  }: {
    uid: string
    gameId: Game['id']
    status: UserGameStatus
    history: RouteComponentProps['history']
  }) => {
    await updateUserGames({
      uid: uid || '',
      gameId,
      status,
      history,
    })
  }
)

export const firstListener = createAsyncThunk(
  'userGames/firstLis',
  gameIdsListener
)

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
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [wishlistUserGames.fulfilled.toString()]: (state, action) => {},
    [firstListener.fulfilled.toString()]: (state, action) => {
      console.log(state, action)
    },
    [firstListener.rejected.toString()]: (state, action) => {
      console.log(state, action)
    },
    [wishlistUserGames.pending.toString()]: (state, action) => {},
    [wishlistUserGames.rejected.toString()]: (state, action) => {},
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
