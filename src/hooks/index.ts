/* eslint-disable import/prefer-default-export */
import { SearchResponse } from '@algolia/client-search'
import { ReactElement, useEffect, useReducer, useState } from 'react'

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
  setBrowseGames,
  setBrowseLoading,
  setSearchResponse,
} from '@store/browseGamesSlice'
import { useAppDispatch, useAppSelector } from '@store/hooks'

import { LoadSuccessErrorType } from '@epictypes/index'
import { getImageUrl } from '@utils/index'
import {
  sortByReleaseDateIndex,
  sortByDiscountIndex,
  sortByPriceAscIndex,
  sortByPriceDescIndex,
  sortByRatingsIndex,
} from '../algolia'

export function useCarouselTimer({
  duration,
  itemsLength,
}: {
  duration: number
  itemsLength: number
}): [number, Function] {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrentIndex((s) => (s >= itemsLength - 1 ? 0 : s + 1)),
      duration
    )
    return () => clearTimeout(timer)
  }, [currentIndex])
  return [currentIndex, setCurrentIndex]
}

export const useLoadSuccessError = () => {
  const initialState = {
    loading: false,
    success: false,
    error: false,
  }

  function reducer(state: typeof initialState, action: LoadSuccessErrorType) {
    switch (action) {
      case 'load':
        return { loading: true, error: false, success: false }
      case 'success':
        return { loading: false, error: false, success: true }
      case 'failed':
        return { loading: false, error: true, success: false }
      default:
        throw new Error('Invalid action.')
    }
  }

  return useReducer(reducer, initialState)
}

export const useDocumentTitle = (title: string | ReactElement) => {
  useEffect(() => {
    document.title = title.toString()
    return () => {
      document.title = 'Epic clone | Karthick Ragavendran'
    }
  }, [title])
}

export const useAlgoliaSearchGames = () => {
  const dispatch = useAppDispatch()

  const searchTerm = useAppSelector(selectFilterSearchTerm)

  const filterDiscountRange = useAppSelector(selectFilterDiscountRange)
  const filterPriceRange = useAppSelector(selectFilterPriceRange)
  const filterRatingRange = useAppSelector(selectFilterRatingRange)
  const filterEvents = useAppSelector(selectFilterEvents)
  const filterPlatforms = useAppSelector(selectFilterPlatforms)
  const filterTags = useAppSelector(selectFilterTags)
  const filterPageNumber = useAppSelector(selectFilterPageNumber)
  const filterSortIndex = useAppSelector(selectSortIndex)

  useEffect(() => {
    dispatch(setBrowseLoading(true))
    const filterDiscountString = filterDiscountRange
      ? `discount:${filterDiscountRange[0]} TO ${filterDiscountRange[1]}`
      : ''
    const filterPriceString = filterPriceRange
      ? `price:${filterPriceRange[0]} TO ${filterPriceRange[1]}`
      : ''
    const filterRatingString = filterRatingRange
      ? `rating:${filterRatingRange[0]} TO ${filterRatingRange[1]}`
      : ''

    const filterTagsString = filterTags
      ? filterTags.map((tag) => `tags:'${tag}'`).join(' AND ')
      : ''
    const filterEventsString = filterEvents
      ? filterEvents.map((event) => `notes:'${event}'`).join(' AND ')
      : ''
    const filterPlatformsString = filterPlatforms
      ? filterPlatforms
          .map((platform) => `platforms:'${platform}'`)
          .join(' AND ')
      : ''

    const categoricalFilter = [
      filterTagsString,
      filterEventsString,
      filterPlatformsString,
    ]
      .filter((item) => item !== '')
      .join(' AND ')

    const numericalFilters: string[] = [
      filterDiscountString,
      filterPriceString,
      filterRatingString,
    ].filter((item) => item !== '')

    const searchIndex = [
      sortByReleaseDateIndex,
      sortByDiscountIndex,
      sortByPriceAscIndex,
      sortByPriceDescIndex,
      sortByRatingsIndex,
    ][+filterSortIndex]

    const t0 = performance.now()
    searchIndex
      .search(searchTerm, {
        hitsPerPage: 24,
        facets: ['notes', 'platform', 'tags'],
        filters: categoricalFilter,
        numericFilters: numericalFilters,
        sumOrFiltersScores: true,
        page: filterPageNumber,
        analytics: true,
      })
      // @ts-ignore
      .then((res: SearchResponse<{ id: string }>): void => {
        const { hits, page, nbPages, facets } = res
        const arr = hits.map((hit) => {
          const { imageUrl, subImageUrl } = getImageUrl(hit.id)
          return { ...hit, imageUrl, subImageUrl }
        })
        dispatch(setBrowseGames(arr))
        dispatch(
          setSearchResponse({
            currentPage: page,
            totalPages: nbPages,
            facets,
          })
        )
        const t1 = performance.now()
      })
      .catch((err) => console.log('Algolia error: ', err))
  }, [
    filterDiscountRange,
    filterPriceRange,
    filterRatingRange,
    filterEvents,
    filterPlatforms,
    filterTags,
    filterPageNumber,
    searchTerm,
    filterSortIndex,
  ])

  // dispatch(setSearchTerm(searchTerm))
  // // index.searchForFacetValues('discount', 'price', 'rating').then((res) => {
  // //   console.log('facetHits res', res)
  // // })
}
