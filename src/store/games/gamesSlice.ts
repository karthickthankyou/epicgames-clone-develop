/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react'
import { GameGenre, SpecialSectionKey } from '../../types'
import { GameSliceType, gameInitialState as initialState } from './gameState'
import { getGamesCustom } from './gameThunks'

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setHomeScreenGames: (
      state,
      action: PayloadAction<GameSliceType['homeScreenGames']>
    ) => {
      state.homeScreenGames = action.payload
    },
    setGamePage: (state, action: PayloadAction<GameSliceType['gamePage']>) => {
      state.gamePage = action.payload
    },
    setGamePageSimilarGames: (
      state,
      action: PayloadAction<GameSliceType['gamePageSimilarGames']>
    ) => {
      state.gamePageSimilarGames = action.payload
    },
    setHighestEverDiscounts: (
      state,
      action: PayloadAction<GameSliceType['highestEverDiscounts']>
    ) => {
      state.highestEverDiscounts = action.payload
    },
    setActionGames: (
      state,
      action: PayloadAction<GameSliceType['genres']['Action']>
    ) => {
      state.genres.Action = action.payload
    },
    setAdventureGames: (
      state,
      action: PayloadAction<GameSliceType['genres']['Adventure']>
    ) => {
      state.genres.Adventure = action.payload
    },
    setPuzzleGames: (
      state,
      action: PayloadAction<GameSliceType['genres']['Puzzle']>
    ) => {
      state.genres.Puzzle = action.payload
    },
    setNarrationGames: (
      state,
      action: PayloadAction<GameSliceType['genres']['Narration']>
    ) => {
      state.genres.Narration = action.payload
    },
    setUnitsSold: (
      state,
      action: PayloadAction<GameSliceType['sections']['unitsSold']>
    ) => {
      state.sections.unitsSold = action.payload
    },
    setHoursToBeat: (
      state,
      action: PayloadAction<GameSliceType['sections']['hoursToBeat']>
    ) => {
      state.sections.hoursToBeat = action.payload
    },
    setAnticipatedBy: (
      state,
      action: PayloadAction<GameSliceType['sections']['anticipatedBy']>
    ) => {
      state.sections.anticipatedBy = action.payload
    },
    resetGames: (state, action) => initialState,
  },
  // "builder callback API", recommended for TypeScript users as the object notation wont carry type information.
  extraReducers: (builder) => {
    builder
      .addCase(getGamesCustom('notes').pending, (state, action) => {
        const { condition } = action.meta.arg
        state.sections[condition as SpecialSectionKey] = {
          loading: true,
          items: [],
        }
      })
      .addCase(getGamesCustom('notes').fulfilled, (state, action) => {
        const { condition, games } = action.payload
        state.sections[condition as SpecialSectionKey] = { items: games }
      })
      .addCase(getGamesCustom('notes').rejected, (state, action) => {
        const { condition } = action.meta.arg
        state.sections[condition as SpecialSectionKey] = {
          error: true,
          items: [],
        }
      })
    builder
      .addCase(getGamesCustom('genre').pending, (state, action) => {
        const { condition } = action.meta.arg
        state.genres[condition as GameGenre] = { items: [], loading: true }
      })
      .addCase(getGamesCustom('genre').fulfilled, (state, action) => {
        const { condition, games } = action.payload
        state.genres[condition as GameGenre] = { items: games }
      })
      .addCase(getGamesCustom('genre').rejected, (state, action) => {
        const { condition } = action.meta.arg
        state.genres[condition as GameGenre] = { items: [], error: true }
      })
  },
})

export const {
  //   setGames,
  setHomeScreenGames,
  setHighestEverDiscounts,
  setActionGames,
  setAdventureGames,
  setPuzzleGames,
  setNarrationGames,
  setGamePage,
  setGamePageSimilarGames,
  setUnitsSold,
  setAnticipatedBy,
  setHoursToBeat,
} = gamesSlice.actions

export default gamesSlice.reducer
