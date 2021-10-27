import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { collection, limit, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect } from 'react'
import { collections, db } from 'src/config/firebase'
import { AsyncGames, AsyncUserGames, Game } from '../../types'
import { getImageUrl } from '../../utils'
import { getGamesGenre } from '.'
import { useAppDispatch, useAppSelector } from '..'
import {
  selectCartGameIds,
  selectPurchasedGameIds,
  selectRemovedFromCartGameIds,
  selectWishlistGameIds,
} from '../userGames'
import { getGamePage, getHomeScreenGames, getSpecialGames } from './gameActions'
import {
  setCartGames,
  setPurchasedGames,
  setRemovedFromCartGames,
  setWishlistedGames,
} from './gamesSlice'

export const useGetHomeGames = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getHomeScreenGames())
    dispatch(getSpecialGames({ property: 'anticipatedBy' }))
    dispatch(getSpecialGames({ property: 'hoursToBeat' }))
    dispatch(getSpecialGames({ property: 'unitsSold' }))
    dispatch(getGamesGenre({ property: 'Action' }))
    dispatch(getGamesGenre({ property: 'Adventure' }))
    dispatch(getGamesGenre({ property: 'Puzzle' }))
    dispatch(getSpecialGames({ property: 'unitsSold' }))
    dispatch(getSpecialGames({ property: 'anticipatedBy' }))
  }, [])
}

export const useGetGamePage = (gameId: Game['id']) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGamePage({ gameId }))
    return () => {
      dispatch(getGamePage({ gameId: null }))
    }
  }, [gameId])
}

export function useUserGamesListener() {
  const dispatch = useAppDispatch()
  const cartGameIds = useAppSelector(selectCartGameIds)
  const wishlistGameIds = useAppSelector(selectWishlistGameIds)
  const purchasedGameIds = useAppSelector(selectPurchasedGameIds)
  const removedFromCartGameIds = useAppSelector(selectRemovedFromCartGameIds)

  const setupListener = (
    userGames: AsyncUserGames,
    action: ActionCreatorWithPayload<AsyncGames>
  ) => {
    const ids = userGames.data.map((userGame) => userGame.gameId).slice(0, 10)
    if (ids.length === 0) return dispatch(action({ data: [] }))
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

      dispatch(action({ data: arr }))
    })
    return detachListener
  }

  useEffect(() => {
    // To avoid FirebaseError (Invalid Query. A non-empty array is required for 'in' filters), we dispatch empty [] when ids array is empty.

    setupListener(cartGameIds, setCartGames)
  }, [cartGameIds])

  useEffect(() => {
    setupListener(wishlistGameIds, setWishlistedGames)
  }, [wishlistGameIds])

  useEffect(() => {
    setupListener(purchasedGameIds, setPurchasedGames)
  }, [purchasedGameIds])

  useEffect(() => {
    setupListener(removedFromCartGameIds, setRemovedFromCartGames)
  }, [removedFromCartGameIds])
}
