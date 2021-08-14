/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { OrderByDirection } from 'firebase/firestore'
import { Game, SortKey } from '../types'
import { RootState } from './store'

const initialState: {
  games: Game[]
  sortKey: SortKey
  sortOrder: OrderByDirection
} = {
  games: [],
  sortKey: 'releaseDate',
  sortOrder: 'desc',
}

const browseGamesSlice = createSlice({
  name: 'games/browse',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload
    },
    setSortKeyAndOrder: (state, action) => {
      const { sortKey, sortOrder } = action.payload
      state.sortKey = sortKey
      state.sortOrder = sortOrder
    },
  },
})

export const { setGames, setSortKeyAndOrder } = browseGamesSlice.actions

export const selectSortKeyAndOrder = (state: RootState) => {
  const { sortKey, sortOrder } = state.browseGames
  return { sortKey, sortOrder }
}
export default browseGamesSlice.reducer
