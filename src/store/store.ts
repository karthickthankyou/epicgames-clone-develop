import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import gamesReducer from './gamesSlice'
import wishlistReducer from './wishlistSlice'
import userReducer from './userSlice'
import browseGamesReducer from './browseGamesSlice'

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    browseGames: browseGamesReducer,
    wishlist: wishlistReducer,
    user: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
