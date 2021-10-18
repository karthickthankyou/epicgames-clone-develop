import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { useEffect } from 'react'
import { collections, db } from 'src/firebase'
import { UserGame, UserGameStatus } from 'src/types'
import { useAppDispatch, useAppSelector } from '..'
import { selectUser } from '../user'
import {
  setCartGameIds,
  setPurchasedGameIds,
  setRemovedFromCartGameIds,
  setWishlistGameIds,
} from './userGameSlice'

export function useGameIdsListener() {
  const dispatch = useAppDispatch()
  const {
    data: { uid },
  } = useAppSelector(selectUser)

  if (uid) {
    // Setup snapshots
    const setupOnSnapshot = (
      condition: UserGameStatus,
      customAction: ActionCreatorWithPayload<UserGame[]>
    ) => {
      const q = query(
        collection(db, collections.USER_GAMES),
        where('status', '==', condition),
        where('uid', '==', uid),
        orderBy('updatedAt', 'desc')
      )
      return onSnapshot(q, (querySnapshot) => {
        const arr: UserGame[] = []
        querySnapshot.forEach(async (doc) => {
          arr.push(doc.data() as UserGame)
        })

        dispatch(customAction(arr))
      })
    }
    useEffect(() => {
      const detachWishlistedListener = setupOnSnapshot(
        'WISHLISTED',
        setWishlistGameIds
      )
      const detachInCartListener = setupOnSnapshot('IN_CART', setCartGameIds)
      const detachRemovedFromCartListener = setupOnSnapshot(
        'REMOVED_FROM_CART',
        setRemovedFromCartGameIds
      )
      const detachPurchasedListener = setupOnSnapshot(
        'PURCHASED',
        setPurchasedGameIds
      )

      return () => {
        detachWishlistedListener()
        detachInCartListener()
        detachPurchasedListener()
        detachRemovedFromCartListener()
      }
    }, [])
  }
  return undefined
}
