/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from '@reduxjs/toolkit/node_modules/immer/dist/internal'
import { defaultAsyncGames } from '../../types/static'
import { AsyncGames, Game, GameGenre, GameSection, Platform } from '../../types'
import { addOrRemoveItem, getImageUrl } from '../../utils/index'
import { searchAlgolia } from './browseGamesActions'

type BrowseGamesType = {
  games: AsyncGames
  loading: boolean
  error: boolean
  filter: {
    selectedSortIndex: number
    searchTerm: string
    tags: Game['tags']
    events: Game['sections']
    platforms: Game['platform']
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
}

const initialState: BrowseGamesType = {
  games: defaultAsyncGames,
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

const setStatus =
  ({
    loading = false,
    error = false,
  }: {
    loading?: boolean
    error?: boolean
  }) =>
  (state: WritableDraft<BrowseGamesType>) => {
    state.loading = loading
    state.error = error
  }

const browseGamesSlice = createSlice({
  name: 'browseGames/browse',
  initialState,
  reducers: {
    setBrowsePageNumber: (state, action) => {
      state.filter.pageNumber = action.payload
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
    setFilterEvents: (state, action: PayloadAction<GameSection>) => {
      state.filter.events = addOrRemoveItem<GameSection>(
        state.filter.events || [],
        action.payload
      )
      state.filter.pageNumber = 0
    },
    setFilterTags: (state, action: PayloadAction<GameGenre>) => {
      state.filter.tags = addOrRemoveItem<GameGenre>(
        state.filter.tags,
        action.payload
      )
      state.filter.pageNumber = 0
    },
    setFilterPlatforms: (state, action: PayloadAction<Platform>) => {
      state.filter.platforms = addOrRemoveItem<Platform>(
        state.filter.platforms || [],
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
  extraReducers: (builder) => {
    builder
      .addCase(searchAlgolia.fulfilled, (state, action) => {
        const { hits, page, nbPages, facets } = action.payload

        const arr: Game[] = hits.map((hit) => {
          const game: Game = hit
          const { imageUrl, subImageUrl } = getImageUrl(game.id)
          return {
            ...game,
            imageUrl,
            subImageUrl,
          }
        })
        state.games = { data: arr }
        state.loading = false
        state.error = false
        state.response.currentPage = page
        state.response.totalPages = nbPages
        // facets type given by algolia is "Record<string, Record<string, number>> | undefined".
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        state.response.facets = facets as any
      })
      .addCase(searchAlgolia.pending, setStatus({ loading: true }))
      .addCase(searchAlgolia.rejected, setStatus({ error: true }))
  },
})

export const {
  setSelectsortIndex,
  setSearchTerm,
  setFilterPriceRange,
  setFilterDiscountRange,
  setFilterRatingRange,
  setFilterPlatforms,
  setFilterEvents,
  setFilterTags,
  setFiltersToInitial,
  setBrowsePageNumber,
} = browseGamesSlice.actions

export default browseGamesSlice.reducer
