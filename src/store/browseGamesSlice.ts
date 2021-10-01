/* eslint-disable no-param-reassign */
import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { Game, GameGenre, GameNotes, Platform } from '@epictypes/index'
import { addOrRemoveItem } from '@utils/index'
import { combineWCPData } from './gamesSlice'
import { RootState } from './store'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectWishlistGameIds,
} from './userGameSlice'

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
      tags: { [key in GameGenre]: number }
      platform: { [key in Platform]: number }
      notes: { [key in GameNotes]: number }
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
      tags: {
        Action: 216,
        Adventure: 185,
        Indie: 129,
        RPG: 116,
        Strategy: 94,
        Simulation: 64,
        Puzzle: 53,
        Shooter: 47,
        OpenWorld: 45,
        ActionAdventure: 35,
        Narration: 35,
        FirstPerson: 34,
        Casual: 32,
        Platformer: 29,
        Exploration: 28,
        Horror: 22,
        TurnBased: 22,
        Survival: 20,
        RogueLite: 19,
        CityBuilder: 16,
        Comedy: 16,
        Racing: 16,
        Stealth: 14,
        Sports: 13,
        CardGame: 12,
        Party: 12,
        Fighting: 11,
        Trivia: 7,
      },
      notes: {
        RECENTLY_UPDATED: 29,
        HIGHEST_DISCOUNT: 20,
        TOP_SELLER: 14,
      },
      platform: {
        Windows: 577,
        'Mac OS': 128,
      },
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

export const selectBrowseGamesWithWish = createSelector(
  [
    (state: RootState) => state.browseGames.games,
    selectWishlistGameIds,
    selectCartGameIds,
    selectPurchasedGameIds,
  ],
  combineWCPData
)

export const selectBrowseGames = (state: RootState) => ({
  loading: state.browseGames.loading,
  error: state.browseGames.error,
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
export const selectFilterSearchTerm = (state: RootState) =>
  state.browseGames.filter.searchTerm
export const selectFilterPageNumber = (state: RootState) =>
  state.browseGames.filter.pageNumber

export const selectBrowsePagination = (state: RootState) => ({
  currentPage: state.browseGames.response.currentPage,
  totalPages: state.browseGames.response.totalPages,
})
export const selectBrowseFacets = (state: RootState) =>
  state.browseGames.response.facets

export default browseGamesSlice.reducer
