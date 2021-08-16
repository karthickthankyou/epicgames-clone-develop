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
} from 'firebase/firestore'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { collections, db } from './index'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setGames } from '../store/gamesSlice'
import { selectUser, setUser } from '../store/userSlice'
import { selectSortKeyAndOrder } from '../store/browseGamesSlice'
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
} from '../store/userGameSlice'
import { getImageUrl } from '../utils'
import { UserGame, UserGameStatus } from '../types'

export function useBrowseGamesListener() {
  const dispatch = useAppDispatch()
  const { sortKey, sortOrder } = useAppSelector(selectSortKeyAndOrder)
  useEffect(() => {
    const q = query(
      collection(db, collections.GAMES),
      orderBy(sortKey, sortOrder),
      limit(24)
    )
    const detachListener = onSnapshot(q, (querySnapshot) => {
      const arr: any[] = []
      querySnapshot.forEach(async (doc) => {
        const { imageUrl, subImageUrl } = getImageUrl(doc.id)
        arr.push({ ...doc.data(), imageUrl, subImageUrl })
      })

      dispatch(setGames(arr))
    })
    return detachListener
  }, [sortKey, sortOrder])
}

export function useUserGamesListener() {
  const dispatch = useAppDispatch()
  const cartGameIds = useAppSelector(selectCartGameIds)
  const wishlistGameIds = useAppSelector(selectWishlistGameIds)
  const purchasedGameIds = useAppSelector(selectPurchasedGameIds)

  const setupQuery = (ids: string[]) =>
    query(collection(db, collections.GAMES), where('id', 'in', ids), limit(10))

  // const getGameIds =

  const setupOnSnaphot = (
    queryGame: Query<DocumentData>,
    action: ActionCreatorWithPayload<any, string>
  ) => {
    onSnapshot(queryGame, (querySnapshot) => {
      const arr: any[] = []
      querySnapshot.forEach(async (doc: any) => {
        const { imageUrl, subImageUrl } = getImageUrl(doc.id)
        arr.push({ ...doc.data(), imageUrl, subImageUrl })
      })
      dispatch(action(arr))
    })
  }

  const setupListener = (
    gameIds: UserGame[],
    action: ActionCreatorWithPayload<any, string>
    // eslint-disable-next-line consistent-return
  ) => {
    const arr = gameIds.map((game) => game.gameId)
    // To avoid FirebaseError (Invalid Query. A non-empty array is required for 'in' filters), we dispatch empty [] when ids array is empty.

    const q = setupQuery(arr)
    const detachListener = setupOnSnaphot(q, action)
    return detachListener
  }

  useEffect(() => {
    if (cartGameIds.length === 0) dispatch(setCartGames([]))
    else setupListener(cartGameIds, setCartGames)
  }, [cartGameIds])

  useEffect(() => {
    if (wishlistGameIds.length === 0) dispatch(setWishlistedGames([]))
    else setupListener(wishlistGameIds, setWishlistedGames)
  }, [wishlistGameIds])
  useEffect(() => {
    if (purchasedGameIds.length === 0) dispatch(setPurchasedGames([]))
    else setupListener(purchasedGameIds, setPurchasedGames)
  }, [purchasedGameIds])
}

export function useUserGameIdsListener() {
  const dispatch = useAppDispatch()
  const { uid } = useAppSelector(selectUser)

  useEffect(() => {
    const setupQuery = (status: UserGameStatus) =>
      query(
        collection(db, collections.USER_GAMES),
        where('status', '==', status),
        where('uid', '==', uid),
        orderBy('updatedAt', 'desc')
      )

    const setupOnSnapshot = (
      customQuery: Query<DocumentData>,
      customAction: ActionCreatorWithPayload<any, string>
    ) =>
      onSnapshot(customQuery, (querySnapshot) => {
        const arr: any[] = []
        querySnapshot.forEach(async (doc) => {
          arr.push({ ...doc.data() })
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
    const detachPurchasedListener = setupOnSnapshot(
      setupQuery('PURCHASED'),
      setPurchasedGameIds
    )

    return () => {
      detachWishlistedListener()
      detachInCartListener()
      detachPurchasedListener()
    }
  }, [uid])
}

export function useUserListener() {
  const auth = getAuth()
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) dispatch(setUser(user.uid))
      else dispatch(setUser(null))
    })
    return unsubscribe
  }, [])
}

export const callSignIn = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, 'user1@epic.com', 'user1User1')
    .then((userCredential) => {
      const { user } = userCredential
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}

export const callSignOut = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    })
}
