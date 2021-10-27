import gameReducer from './browseGamesSlice'

/** Selectors */
export {
  selectBrowseGamesWithWish,
  selectBrowseGames,
  selectSortIndex,
  selectFilterTags,
  selectFilterEvents,
  selectFilterPlatforms,
  selectFilterPriceRange,
  selectFilterDiscountRange,
  selectFilterRatingRange,
  selectFilterSearchTerm,
  selectFilterPageNumber,
  selectBrowsePagination,
  selectBrowseFacets,
} from './browseGamesSelectors'

/** Actions */
export {
  searchAlgolia, // setSearchTerm, // setSelectsortIndex,
} from './browseGamesActions'

export {
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
} from './browseGamesSlice'

/** Hooks */
export { useAlgoliaSearchGames } from './browseGamesHooks'

/** The Reducer */
export default gameReducer
