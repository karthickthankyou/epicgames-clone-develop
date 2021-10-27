import { useEffect } from 'react'
import {
  sortByDiscountIndex,
  sortByPriceAscIndex,
  sortByPriceDescIndex,
  sortByRatingsIndex,
  sortByReleaseDateIndex,
} from 'src/config/algolia'

import { useAppDispatch, useAppSelector } from '..'
import {
  selectFilterDiscountRange,
  selectFilterEvents,
  selectFilterPageNumber,
  selectFilterPlatforms,
  selectFilterPriceRange,
  selectFilterRatingRange,
  selectFilterSearchTerm,
  selectFilterTags,
  selectSortIndex,
} from './browseGamesSelectors'

import { searchAlgolia } from './browseGamesActions'

export const useAlgoliaSearchGames = () => {
  const dispatch = useAppDispatch()

  const searchTerm = useAppSelector(selectFilterSearchTerm)

  const { str: filterDiscountRange } = useAppSelector(selectFilterDiscountRange)
  const { str: filterPriceRange } = useAppSelector(selectFilterPriceRange)
  const { str: filterRatingRange } = useAppSelector(selectFilterRatingRange)
  const { str: filterEvents } = useAppSelector(selectFilterEvents)
  const { str: filterPlatforms } = useAppSelector(selectFilterPlatforms)
  const { str: filterTags } = useAppSelector(selectFilterTags)
  const filterPageNumber = useAppSelector(selectFilterPageNumber)
  const filterSortIndex: number = useAppSelector(selectSortIndex)

  useEffect(() => {
    const categoricalFilter = [filterTags, filterEvents, filterPlatforms]
      .filter((item) => item !== '')
      .join(' AND ')

    const numericalFilters: string[] = [
      filterDiscountRange,
      filterPriceRange,
      filterRatingRange,
    ].filter((item) => item !== '')

    const searchIndex = [
      sortByReleaseDateIndex,
      sortByDiscountIndex,
      sortByPriceAscIndex,
      sortByPriceDescIndex,
      sortByRatingsIndex,
    ][+filterSortIndex]

    dispatch(
      searchAlgolia({
        searchIndex,
        searchTerm,
        categoricalFilter,
        numericalFilters,
        filterPageNumber,
      })
    )
  }, [
    searchTerm,
    filterDiscountRange,
    filterPriceRange,
    filterRatingRange,
    filterEvents,
    filterPlatforms,
    filterTags,
    filterPageNumber,
    filterSortIndex,
  ])
}
