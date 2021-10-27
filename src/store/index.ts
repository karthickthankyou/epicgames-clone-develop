import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import gamesReducer from './games/gamesSlice'
import userReducer from './user'
import userGamesReducer from './userGames/userGameSlice'
import browseGamesReducer from './browseGames/browseGamesSlice'

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

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
