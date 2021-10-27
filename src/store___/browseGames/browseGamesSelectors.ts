import { RootState } from '..'
import { createSelectorWCPGames } from '../userGames'

export const selectBrowseGamesWithWish = createSelectorWCPGames(
  (state) => state.browseGames.games
)

export const selectBrowseGames = (state: RootState) => ({
  loading: state.browseGames.loading,
  error: state.browseGames.error,
})

export const selectSortIndex = (state: RootState) =>
  state.browseGames.filter.selectedSortIndex

export const selectFilterTags = (state: RootState) => {
  const range = state.browseGames.filter.tags
  return {
    range,
    str: range ? range.map((tag: string) => `tags:'${tag}'`).join(' AND ') : '',
  }
}

export const selectFilterEvents = (state: RootState) => {
  const range = state.browseGames.filter.events || []
  return {
    range,
    str: range ? range.map((event) => `notes:'${event}'`).join(' AND ') : '',
  }
}

export const selectFilterPlatforms = (state: RootState) => {
  const range = state.browseGames.filter.platforms || []
  return {
    range,
    str: range
      ? range.map((platform) => `platforms:'${platform}'`).join(' AND ')
      : '',
  }
}

export const selectFilterPriceRange = (state: RootState) => {
  const range = state.browseGames.filter.priceRange || null
  return {
    range,
    str: range ? `price:${range[0]} TO ${range[1]}` : '',
  }
}

export const selectFilterDiscountRange = (state: RootState) => {
  const range = state.browseGames.filter.discountRange || null
  return {
    range,
    str: range ? `discount:${range[0]} TO ${range[1]}` : '',
  }
}
export const selectFilterRatingRange = (state: RootState) => {
  const range = state.browseGames.filter.ratingRange || null
  return {
    range,
    str: range ? `rating:${range[0]} TO ${range[1]}` : '',
  }
}

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
