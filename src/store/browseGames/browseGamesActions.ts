import { createAsyncThunk } from '@reduxjs/toolkit'
import { SearchIndex } from 'algoliasearch/lite'
import { Game } from '../../types'

export const searchAlgolia = createAsyncThunk(
  'browseGames/search',
  async ({
    searchIndex,
    searchTerm,
    categoricalFilter,
    numericalFilters,
    filterPageNumber,
  }: {
    searchIndex: SearchIndex
    searchTerm: string
    categoricalFilter: string
    numericalFilters: string[]
    filterPageNumber: number
  }) =>
    searchIndex.search<Game>(searchTerm, {
      hitsPerPage: 24,
      facets: ['notes', 'platform', 'tags'],
      filters: categoricalFilter,
      numericFilters: numericalFilters,
      sumOrFiltersScores: true,
      page: filterPageNumber,
      analytics: true,
    })
)
