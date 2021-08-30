/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { Game } from '../types'
import { addOrRemoveItem } from '../utils'
import { RootState } from './store'

const initialState: {
  games: Game[]
  loading: boolean
  error: boolean
  filter: {
    selectedSortIndex: number
    searchTerm: string
    tags: string[]
    events: string[]
    platforms: string[]
    priceRange: [number, number] | null
    discountRange: [number, number] | null
    ratingRange: [number, number] | null
  }
} = {
  games: [],
  loading: false,
  error: false,
  filter: {
    selectedSortIndex: 0,
    searchTerm: '',
    tags: [],
    events: [],
    platforms: [],
    priceRange: null,
    discountRange: null,
    ratingRange: null,
  },
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
    setSearchTerm: (state, action) => {
      state.filter.searchTerm = action.payload
    },
    setFilterPriceRange: (state, action) => {
      state.filter.priceRange = action.payload
    },
    setFilterDiscountRange: (state, action) => {
      state.filter.discountRange = action.payload
    },
    setFilterRatingRange: (state, action) => {
      state.filter.ratingRange = action.payload
    },
    setFilterEvents: (state, action) => {
      state.filter.events = addOrRemoveItem(state.filter.events, action.payload)
    },
    setFilterTags: (state, action) => {
      state.filter.tags = addOrRemoveItem(state.filter.tags, action.payload)
    },
    setFilterPlatforms: (state, action) => {
      state.filter.platforms = addOrRemoveItem(
        state.filter.platforms,
        action.payload
      )
    },
    setFiltersToInitial: (state) => {
      state.filter.platforms = []
      state.filter.events = []
      state.filter.tags = []
      state.filter.priceRange = null
      state.filter.discountRange = null
      state.filter.ratingRange = null
    },
    setSelectsortIndex: (state, action) => {
      state.filter.selectedSortIndex = action.payload
    },
  },
})

export const {
  setBrowseGames,
  setBrowseError,
  setBrowseLoading,
  setSelectsortIndex,
  setSearchTerm,
  setFilterPriceRange,
  setFilterDiscountRange,
  setFilterRatingRange,

  setFilterPlatforms,
  setFilterEvents,
  setFilterTags,

  setFiltersToInitial,
} = browseGamesSlice.actions

export const selectBrowseGames = (state: RootState) => ({
  loading: state.browseGames.loading,
  error: state.browseGames.error,
  games: state.browseGames.games,
})

export const selectSortIndex = (state: RootState) =>
  state.browseGames.filter.selectedSortIndex

export const selectFilterTags = (state: RootState) =>
  state.browseGames.filter.tags
export const selectFilterEvents = (state: RootState) =>
  state.browseGames.filter.events
export const selectFilterPlatforms = (state: RootState) =>
  state.browseGames.filter.platforms

export const selectFilterPriceRange = (state: RootState) =>
  state.browseGames.filter.priceRange
export const selectFilterRatingRange = (state: RootState) =>
  state.browseGames.filter.ratingRange
export const selectFilterDiscountRange = (state: RootState) =>
  state.browseGames.filter.discountRange

export default browseGamesSlice.reducer
