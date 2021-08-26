/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { Game } from '../types'
import { RootState } from './store'

const initialState: {
  games: Game[]
  loading: boolean
  error: boolean
  selectedSortIndex: number
} = {
  games: [],
  loading: false,
  error: false,
  selectedSortIndex: 0,
}

const browseGamesSlice = createSlice({
  name: 'games/browse',
  initialState,
  reducers: {
    setBrowseLoading: (state, action) => {
      state.loading = action.payload
    },
    setBrowseError: (state, action) => {
      state.error = action.payload
    },
    setBrowseGames: (state, action) => {
      state.games = action.payload
      state.loading = false
      state.error = false
    },
    setSelectsortIndex: (state, action) => {
      state.selectedSortIndex = action.payload
    },
  },
})

export const {
  setBrowseGames,
  setBrowseError,
  setBrowseLoading,
  setSelectsortIndex,
} = browseGamesSlice.actions

export const selectBrowseGames = (state: RootState) => ({
  loading: state.browseGames.loading,
  error: state.browseGames.error,
  games: state.browseGames.games,
})

export const selectSortIndex = (state: RootState) =>
  state.browseGames.selectedSortIndex
export default browseGamesSlice.reducer
