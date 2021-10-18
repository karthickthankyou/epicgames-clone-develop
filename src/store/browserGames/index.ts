import gameReducer from './browseGamesSlice'

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
  searchAlgolia, // setSearchTerm,
} from // setSelectsortIndex,
// setFilterPriceRange,
// setFilterDiscountRange,
// setFilterRatingRange,
// setFilterPlatforms,
// setFilterEvents,
// setFilterTags,
// setFiltersToInitial,
// setBrowsePageNumber,
'./browseGamesActions'

/** Hooks */
export { useAlgoliaSearchGames } from './browseGamesHooks'

/** The Reducer */
export default gameReducer
