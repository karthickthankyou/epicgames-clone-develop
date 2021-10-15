/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game, GameGenre, GameSection, Platform } from '../../types'
import { addOrRemoveItem } from '../../utils/index'

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
    pageNumber: number
  }
  response: {
    currentPage: number
    totalPages: number
    facets: {
      tags: { [key in GameGenre]?: number }
      platform: { [key in Platform]?: number }
      notes: { [key in GameSection]?: number }
    }
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
    pageNumber: 0,
  },
  response: {
    currentPage: 1,
    totalPages: 1,
    facets: {
      tags: {},
      notes: {},
      platform: {},
    },
  },
}

const browseGamesSlice = createSlice({
  name: 'games/browse',
  initialState,
  reducers: {
    setBrowseLoading: (state, action) => {
      state.loading = action.payload
    },
    setBrowsePageNumber: (state, action) => {
      state.filter.pageNumber = action.payload
    },
    setBrowseError: (state, action) => {
      state.error = action.payload
    },
    setBrowseGames: (state, action: { payload: Game[] }) => {
      state.games = action.payload
      state.loading = false
      state.error = false
    },
    setSearchTerm: (state, action) => {
      state.filter.searchTerm = action.payload
      state.filter.pageNumber = 0
    },
    setFilterPriceRange: (
      state,
      action: PayloadAction<[number, number] | null>
    ) => {
      state.filter.priceRange = action.payload
      state.filter.pageNumber = 0
    },
    setFilterDiscountRange: (
      state,
      action: PayloadAction<[number, number] | null>
    ) => {
      state.filter.discountRange = action.payload
      state.filter.pageNumber = 0
    },
    setFilterRatingRange: (state, action) => {
      state.filter.ratingRange = action.payload
      state.filter.pageNumber = 0
    },
    setSearchResponse: (state, action) => {
      state.response.currentPage = action.payload.currentPage
      state.response.totalPages = action.payload.totalPages
      state.response.facets = action.payload.facets
    },
    setFilterEvents: (state, action: PayloadAction<string>) => {
      state.filter.events = addOrRemoveItem(state.filter.events, action.payload)
      state.filter.pageNumber = 0
    },
    setFilterTags: (state, action: PayloadAction<string>) => {
      state.filter.tags = addOrRemoveItem(state.filter.tags, action.payload)
      state.filter.pageNumber = 0
    },
    setFilterPlatforms: (state, action: PayloadAction<string>) => {
      state.filter.platforms = addOrRemoveItem(
        state.filter.platforms,
        action.payload
      )
      state.filter.pageNumber = 0
    },
    setFiltersToInitial: (state) => {
      state.filter.platforms = []
      state.filter.events = []
      state.filter.tags = []
      state.filter.priceRange = null
      state.filter.discountRange = null
      state.filter.ratingRange = null
      state.filter.pageNumber = 0
    },
    setSelectsortIndex: (state, action) => {
      state.filter.selectedSortIndex = action.payload
    },
    resetBrowseGames: () => initialState,
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
  setSearchResponse,
  setBrowsePageNumber,
} = browseGamesSlice.actions

export default browseGamesSlice.reducer
