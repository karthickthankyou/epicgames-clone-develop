import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  Query,
  query,
  where,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { collections, db } from 'src/firebase'
import { Game, UserGame, UserGameStatus } from 'src/types'
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
} from './userGameSlice'

export function gameIdsListener() {
  const dispatch = useAppDispatch()
  const { uid } = useAppSelector(selectUser)

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
      detachWishlistedListener()
      detachInCartListener()
      detachPurchasedListener()
      detachRemovedFromCartListener()
    }
  }
  return undefined
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
}
