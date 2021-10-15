import { RootState } from '..'
import { selectGamesWithWCP } from '../games/gameUtils'

export const selectBrowseGamesWithWish = selectGamesWithWCP(
  (state) => state.browseGames.games
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
