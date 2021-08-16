import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import gamesReducer from './gamesSlice'
import userReducer from './userSlice'
import userGamesReducer from './userGameSlice'
import browseGamesReducer from './browseGamesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    games: gamesReducer,
    browseGames: browseGamesReducer,
    userGames: userGamesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
