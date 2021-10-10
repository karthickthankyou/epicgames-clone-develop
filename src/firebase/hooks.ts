import { useEffect } from 'react'
import {
  collection,
  query,
  limit,
  onSnapshot,
  where,
  orderBy,
  DocumentData,
  Query,
  getDocs,
  QueryDocumentSnapshot,
  doc as firebaseDoc,
  getDoc,
} from 'firebase/firestore'

import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { captureException } from '@sentry/react'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  setActionGames,
  setAdventureGames,
  setHighestEverDiscounts,
  setHomeScreenGames,
  setNarrationGames,
  setPuzzleGames,
  setGamePage,
  setGamePageSimilarGames,
  setUnitsSold,
  setHoursPlayed,
  setAnticipatedBy,
  setHoursToBeat,
} from '../store/gamesSlice'
import { selectUser } from '../store/user'
import {
  selectSortIndex,
  setBrowseGames,
  setBrowseError,
  setBrowseLoading,
} from '../store/browseGamesSlice'
import {
  setCartGameIds,
  setWishlistGameIds,
  setPurchasedGameIds,
  setCartGames,
  setPurchasedGames,
  setWishlistedGames,
  selectCartGameIds,
  selectWishlistGameIds,
  selectPurchasedGameIds,
  setRemovedFromCartGameIds,
  selectRemovedFromCartGameIds,
  setRemovedFromCartGames,
} from '../store/userGameSlice'
import { getImageUrl, processGameIdsForSimilarItems } from '../utils/index'
import {
  Game,
  GameGenre,
  SimilarGame,
  SpecialGames,
  UserGame,
  UserGameStatus,
} from '../types'
import { sortByOptions } from '../types/static'
import { collections, db } from './index'

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

export function useUserGamesListener() {
  const dispatch = useAppDispatch()
  const cartGameIds = useAppSelector(selectCartGameIds)
  const wishlistGameIds = useAppSelector(selectWishlistGameIds)
  const purchasedGameIds = useAppSelector(selectPurchasedGameIds)
  const removedFromCartGameIds = useAppSelector(selectRemovedFromCartGameIds)

  const setupListener = (
    userGames: UserGame[],
    action: ActionCreatorWithPayload<Game[], string>
  ) => {
    const ids = userGames.map((userGame) => userGame.gameId).slice(0, 10)
    if (ids.length === 0) return dispatch(action([]))
    const queryGame = query(
      collection(db, collections.GAMES),
      where('id', 'in', ids),
      limit(10)
    )
    const detachListener = onSnapshot(queryGame, (querySnapshot) => {
      const arr: Game[] = []
      querySnapshot.forEach(async (doc) => {
        const { imageUrl, subImageUrl } = getImageUrl(doc.id)
        const gameDetails = doc.data() as Game
        arr.push({ ...gameDetails, imageUrl, subImageUrl })
      })

      dispatch(action(arr))
    })
    return detachListener
  }

  useEffect(() => {
    // To avoid FirebaseError (Invalid Query. A non-empty array is required for 'in' filters), we dispatch empty [] when ids array is empty.
    if (cartGameIds.length === 0) dispatch(setCartGames([]))
    setupListener(cartGameIds, setCartGames)
  }, [cartGameIds])

  useEffect(() => {
    if (wishlistGameIds.length === 0) dispatch(setWishlistedGames([]))
    setupListener(wishlistGameIds, setWishlistedGames)
  }, [wishlistGameIds])

  useEffect(() => {
    if (purchasedGameIds.length === 0) dispatch(setPurchasedGames([]))
    setupListener(purchasedGameIds, setPurchasedGames)
  }, [purchasedGameIds])

  useEffect(() => {
    if (removedFromCartGameIds.length === 0)
      dispatch(setRemovedFromCartGames([]))
    setupListener(removedFromCartGameIds, setRemovedFromCartGames)
  }, [removedFromCartGameIds])

  //   useEffect(() => {
  //     setupListener(purchasedGameIds, setPurchasedGames)
  //   }, [purchasedGameIds])
}

export function gameIdsListener() {
  const dispatch = useAppDispatch()
  const { uid } = useAppSelector(selectUser)

  console.log('user game ids listener!')
  if (uid) {
    const setupQuery = (status: UserGameStatus) =>
      query(
        collection(db, collections.USER_GAMES),
        where('status', '==', status),
        where('uid', '==', uid),
        orderBy('updatedAt', 'desc')
      )

    const setupOnSnapshot = (
      customQuery: Query<DocumentData>,
      customAction: ActionCreatorWithPayload<UserGame[], string>
    ) =>
      onSnapshot(customQuery, (querySnapshot) => {
        const arr: UserGame[] = []
        querySnapshot.forEach(async (doc) => {
          const {
            gameId,
            uid: uidDoc,
            status,
            updatedAt,
          } = doc.data() as UserGame
          arr.push({
            gameId,
            uid: uidDoc,
            status,
            updatedAt,
          })
        })

        dispatch(customAction(arr))
      })

    const detachWishlistedListener = setupOnSnapshot(
      setupQuery('WISHLISTED'),
      setWishlistGameIds
    )
    const detachInCartListener = setupOnSnapshot(
      setupQuery('IN_CART'),
      setCartGameIds
    )
    const detachRemovedFromCartListener = setupOnSnapshot(
      setupQuery('REMOVED_FROM_CART'),
      setRemovedFromCartGameIds
    )
    const detachPurchasedListener = setupOnSnapshot(
      setupQuery('PURCHASED'),
      setPurchasedGameIds
    )

    return () => {
      console.log('detaching all listeners.')
      detachWishlistedListener()
      detachInCartListener()
      detachPurchasedListener()
      detachRemovedFromCartListener()
    }
  }
  return undefined
}

export function useGamesListener() {
  const dispatch = useAppDispatch()

  const setupQueryHighestDiscounts = () =>
    query(
      collection(db, collections.GAMES),
      where('notes', 'array-contains', 'HIGHEST_DISCOUNT'),
      limit(10)
    )

  useEffect(() => {
    const q = setupQueryHighestDiscounts()
    const detachListener = onSnapshot(q, (querySnapshot) => {
      const arr: Game[] = []
      querySnapshot.forEach(async (doc) => {
        const { imageUrl, subImageUrl } = getImageUrl(doc.id)
        const gameData = doc.data() as Game
        arr.push({ ...gameData, imageUrl, subImageUrl })
      })

      dispatch(setHighestEverDiscounts(arr))
    })
    return detachListener
  }, [])
}

export const useHomeScreenGames = () => {
  const dispatch = useAppDispatch()
  const setupQuery = (genre: GameGenre) =>
    query(
      collection(db, collections.GAMES),
      where('tags', 'array-contains', genre),
      limit(6)
    )

  const setupSnapshot = async (
    customQuery: Query<DocumentData>,
    customAction: ActionCreatorWithPayload<Game[], string>
  ) => {
    const querySnapshot = await getDocs(customQuery)
    const arr: Game[] = []
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const { imageUrl, subImageUrl } = getImageUrl(doc.id)
      const gameData = doc.data() as Game
      arr.push({ ...gameData, imageUrl, subImageUrl })
    })
    dispatch(customAction(arr))
  }

  useEffect(() => {
    const getHomeScreenGames = async () => {
      const q = query(
        collection(db, collections.GAMES),
        where('homeScreen', '>', ''),
        limit(7)
      )
      const arr: Game[] = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const { imageUrl, subImageUrl } = getImageUrl(doc.id)
        const gameData = doc.data() as Game
        arr.push({ ...gameData, imageUrl, subImageUrl })
      })
      dispatch(setHomeScreenGames(arr))
    }
    getHomeScreenGames()
  }, [])
  useEffect(() => {
    ;(async () => {
      await setupSnapshot(setupQuery('Action'), setActionGames)
    })()
    ;(async () => {
      await setupSnapshot(setupQuery('Adventure'), setAdventureGames)
    })()
    ;(async () => {
      await setupSnapshot(setupQuery('Puzzle'), setPuzzleGames)
    })()
    ;(async () => {
      await setupSnapshot(setupQuery('Narration'), setNarrationGames)
    })()
  }, [])
}

export const useSimilarGames = (gameIds: SimilarGame[] | undefined) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    ;(async () => {
      if (gameIds) {
        const q = query(
          collection(db, collections.GAMES),
          where('id', 'in', processGameIdsForSimilarItems(gameIds))
        )
        const querySnapshot = await getDocs(q)
        const arr: Game[] = []
        querySnapshot.forEach((doc) => {
          const similarGame = gameIds.find((item) => item.id === doc.id)
          const { imageUrl, subImageUrl } = getImageUrl(doc.id)
          const {
            tags,
            price,
            discount,
            developer,
            languages,
            rating,
            platform,
            publisherId,
            description,
            title,
            longDesc,
            releaseDate,
          } = doc.data()

          arr.push({
            id: doc.id,
            tags,
            price,
            discount,
            developer,
            rating,
            languages,
            platform,
            publisherId,
            description,
            title,
            longDesc,
            releaseDate,
            similarity: similarGame?.s || '0',
            imageUrl,
            subImageUrl,
          })
        })
        arr.sort((a, b) => {
          const aValue = a?.similarity || 0
          const bValue = b?.similarity || 0
          return +bValue - +aValue
        })
        dispatch(setGamePageSimilarGames(arr))
      }
    })()
    run()
  }, [gameIds])
}

export const useGetGamePage = (gameId: string) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      const docSnaps = [
        getDoc(firebaseDoc(db, collections.GAMES, gameId)),
        getDoc(firebaseDoc(db, collections.GAME_DETAILS, gameId)),
      ]
      let gameData: Game
      Promise.all(docSnaps)
        .then((documents) => {
          documents.forEach((doc) => {
            gameData = { ...gameData, ...doc.data() }
          })
          const { imageUrl, subImageUrl } = getImageUrl(gameData.id)
          return dispatch(setGamePage({ ...gameData, imageUrl, subImageUrl }))
        })
        .catch((error) => captureException(error))
    })()
    return () => {
      dispatch(setGamePage(null))
    }
  }, [gameId])
}

export function useSpecialGames() {
  const dispatch = useAppDispatch()

  const setupQuery = (property: SpecialGames) =>
    query(
      collection(db, collections.GAMES),
      orderBy(property, 'desc'),
      where(property, '!=', null),
      limit(10)
    )

  const setupSnapshot = async (
    customQuery: Query<DocumentData>,
    action: ActionCreatorWithPayload<Game[], string>
  ) => {
    const arr: Game[] = []
    const querySnapshot = await getDocs(customQuery)
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const { imageUrl, subImageUrl } = getImageUrl(doc.id)
      const gameData = doc.data() as Game
      arr.push({ ...gameData, imageUrl, subImageUrl })
    })

    dispatch(action(arr))
  }

  useEffect(() => {
    const q1 = setupQuery('unitsSold')
    const q2 = setupQuery('hoursPlayed')
    const q3 = setupQuery('hoursToBeat')
    const q4 = setupQuery('anticipatedBy')

    setupSnapshot(q1, setUnitsSold)
    setupSnapshot(q2, setHoursPlayed)
    setupSnapshot(q3, setHoursToBeat)
    setupSnapshot(q4, setAnticipatedBy)
  }, [])
}
