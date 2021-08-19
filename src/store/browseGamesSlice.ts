/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { Game } from '../types'
import { RootState } from './store'

const initialState: {
  games: Game[]
  selectedSortIndex: number
} = {
  games: [],
  selectedSortIndex: 0,
}

const browseGamesSlice = createSlice({
  name: 'games/browse',
  initialState,
  reducers: {
    setGames: (state, action) => {
      state.games = action.payload
    },
    setSelectsortIndex: (state, action) => {
      state.selectedSortIndex = action.payload
    },
  },
})

export const { setGames, setSelectsortIndex } = browseGamesSlice.actions

export const selectBrowseGames = (state: RootState) => state.browseGames.games

export const selectSortIndex = (state: RootState) =>
  state.browseGames.selectedSortIndex
export default browseGamesSlice.reducer
