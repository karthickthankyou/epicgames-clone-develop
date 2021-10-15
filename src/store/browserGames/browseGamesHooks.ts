import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react'
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  Query,
  where,
} from 'firebase/firestore'
import { useEffect } from 'react'
import {
  sortByDiscountIndex,
  sortByPriceAscIndex,
  sortByPriceDescIndex,
  sortByRatingsIndex,
  sortByReleaseDateIndex,
} from 'src/algolia'
import { collections, db } from 'src/firebase'
import { Game, UserGame, UserGameStatus } from 'src/types'
import { sortByOptions } from 'src/types/static'
import { getImageUrl } from 'src/utils'
import { useAppDispatch, useAppSelector } from '..'
import { selectUser } from '../user'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectRemovedFromCartGameIds,
  selectWishlistGameIds,
  setCartGameIds,
  setCartGames,
  setPurchasedGameIds,
  setPurchasedGames,
  setRemovedFromCartGameIds,
  setRemovedFromCartGames,
  setWishlistedGames,
  setWishlistGameIds,
} from '../userGames/userGameSlice'
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

import {
  setBrowseError,
  setBrowseGames,
  setBrowseLoading,
  setSearchResponse,
} from './browseGamesSlice'

export const useAlgoliaSearchGames = () => {
  const dispatch = useAppDispatch()

  const searchTerm = useAppSelector(selectFilterSearchTerm)

  const filterDiscountRange = useAppSelector(selectFilterDiscountRange)
  const filterPriceRange = useAppSelector(selectFilterPriceRange)
  const filterRatingRange = useAppSelector(selectFilterRatingRange)
  const filterEvents: string[] = useAppSelector(selectFilterEvents)
  const filterPlatforms: string[] = useAppSelector(selectFilterPlatforms)
  const filterTags: string[] = useAppSelector(selectFilterTags)
  const filterPageNumber = useAppSelector(selectFilterPageNumber)
  const filterSortIndex: number = useAppSelector(selectSortIndex)

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
      ? filterTags.map((tag: string) => `tags:'${tag}'`).join(' AND ')
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

    searchIndex
      .search<Game>(searchTerm, {
        hitsPerPage: 24,
        facets: ['notes', 'platform', 'tags'],
        filters: categoricalFilter,
        numericFilters: numericalFilters,
        sumOrFiltersScores: true,
        page: filterPageNumber,
        analytics: true,
      })
      .then((res): void => {
        const { hits, page, nbPages, facets } = res

        const arr: Game[] = hits.map((hit) => {
          const {
            id,
            title,
            discount,
            price,
            tags,
            platform,
            releaseDate,
            publisherId,
          }: Game = hit
          const { imageUrl, subImageUrl } = getImageUrl(id)
          return {
            id,
            title,
            discount,
            price,
            tags,
            platform,
            releaseDate,
            publisherId,
            imageUrl,
            subImageUrl,
          }
        })
        dispatch(setBrowseGames(arr))
        dispatch(
          setSearchResponse({
            currentPage: page,
            totalPages: nbPages,
            facets,
          })
        )
      })
      .catch((error) => {
        captureException(error)
      })
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
}

/**
 * @deprecated Use `useAlgoliaSearchGames()` instead for the browse games page.
 */
export function useBrowseGames() {
  const dispatch = useAppDispatch()
  const { sortKey, sortOrder } = sortByOptions[useAppSelector(selectSortIndex)]
  useEffect(() => {
    dispatch(setBrowseLoading(true))
    ;(async () => {
      const q = query(
        collection(db, collections.GAMES),
        orderBy(sortKey, sortOrder),
        limit(32)
      )

      try {
        const querySnapshot = await getDocs(q)
        const arr: Game[] = []
        querySnapshot.forEach((doc) => {
          const { imageUrl, subImageUrl } = getImageUrl(doc.id)
          const gameDetails = doc.data() as Game
          arr.push({ ...gameDetails, imageUrl, subImageUrl })
        })
        dispatch(setBrowseGames(arr))
      } catch (err) {
        dispatch(setBrowseError(true))
      }
    })()
  }, [sortKey, sortOrder])
}
