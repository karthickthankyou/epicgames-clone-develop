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
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { collections, db, auth } from './index'
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
import { selectUser, setUser } from '../store/userSlice'
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
} from '../store/userGameSlice'
import { getImageUrl, processGameIdsForSimilarItems } from '../utils'
import {
  Game,
  GameGenre,
  LoadSuccessErrorDispatch,
  LoadSuccessErrorType,
  SpecialGames,
  UserGame,
  UserGameStatus,
} from '../types'
import { sortByOptions } from '../types/static'

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

      const arr: any[] = []
      try {
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(
          (document: QueryDocumentSnapshot<DocumentData>) => {
            const { imageUrl, subImageUrl } = getImageUrl(document.id)
            arr.push({ ...document.data(), imageUrl, subImageUrl })
          }
        )
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

  const setupQuery = (ids: string[]) =>
    query(collection(db, collections.GAMES), where('id', 'in', ids), limit(10))

  const setupOnSnaphot = (
    queryGame: Query<DocumentData>,
    action: ActionCreatorWithPayload<any, string>
  ) => {
    onSnapshot(queryGame, (querySnapshot) => {
      const arr: Game[] = []
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
    const arr = gameIds.map((game) => game.gameId).slice(0, 10)

    const q = setupQuery(arr)
    const detachListener = setupOnSnaphot(q, action)
    return detachListener
  }

  useEffect(() => {
    // To avoid FirebaseError (Invalid Query. A non-empty array is required for 'in' filters), we dispatch empty [] when ids array is empty.
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

  //   useEffect(() => {
  //     setupListener(purchasedGameIds, setPurchasedGames)
  //   }, [purchasedGameIds])
}

export function useUserGameIdsListener() {
  const dispatch = useAppDispatch()
  const { uid } = useAppSelector(selectUser)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
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
    }
  }, [uid])
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
      const arr: any[] = []
      querySnapshot.forEach(async (doc) => {
        const { imageUrl, subImageUrl } = getImageUrl(doc.id)
        arr.push({ ...doc.data(), imageUrl, subImageUrl })
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
    customAction: ActionCreatorWithPayload<any, string>
  ) => {
    const querySnapshot = await getDocs(customQuery)
    const arr: any[] = []
    querySnapshot.forEach((document: QueryDocumentSnapshot<DocumentData>) => {
      const { imageUrl, subImageUrl } = getImageUrl(document.id)
      arr.push({ ...document.data(), imageUrl, subImageUrl })
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
      const arr: any[] = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((document: QueryDocumentSnapshot<DocumentData>) => {
        const { imageUrl, subImageUrl } = getImageUrl(document.id)
        arr.push({ ...document.data(), imageUrl, subImageUrl })
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

export const useSimilarGames = (
  gameIds: { id: number; s: number }[] | undefined
) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    async function run() {
      if (gameIds) {
        const q = query(
          collection(db, collections.GAMES),
          where('id', 'in', processGameIdsForSimilarItems(gameIds))
          //   where('id', 'in', gameIds.slice(0, 10))
        )
        const querySnapshot = await getDocs(q)
        const arr: Game[] = []
        querySnapshot.forEach((doc) => {
          const similarity = gameIds.find((item) => item.id === +doc.id)
          const { imageUrl, subImageUrl } = getImageUrl(doc.id)
          // @ts-ignore
          arr.push({
            id: doc.id,
            ...doc.data(),
            s: similarity?.s || 0,
            imageUrl,
            subImageUrl,
          })
        })
        arr.sort((a, b) => b.s - a.s)
        dispatch(setGamePageSimilarGames(arr))
      }
    }
    run()

    // return () => {
    //     cleanup
    // }
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
        .catch((error) => console.log(error))
    })()
    return () => {
      dispatch(setGamePage(null))
    }
  }, [gameId])
}

export function useUserListener() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user', user)
      if (user)
        dispatch(setUser({ uid: user.uid, displayName: user.displayName }))
      else dispatch(setUser(null))
    })
    return unsubscribe
  }, [])
}

export const callSignIn = (
  { email, password }: { email: string; password: string },
  dispatch: LoadSuccessErrorDispatch
) => {
  //   signInWithEmailAndPassword(auth, 'user1@epic.com', 'user1User1')
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //   const { user } = userCredential
      console.log(userCredential)
      dispatch('success')
    })
    .catch((error) => {
      console.log('Error: ', error)
      dispatch('failed')
      //   const errorCode = error.code
      //   const errorMessage = error.message
    })
}
export const callSignup = (
  {
    email,
    password,
    displayName,
  }: {
    email: string
    password: string
    displayName?: string
  },
  dispatch: LoadSuccessErrorDispatch
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential

      updateProfile(user, {
        displayName,
      }).then(
        () => {
          // Update successful.
          console.log('Update successful.')
          dispatch('success')
        },
        (error) => {
          console.log('An error happened.', error)
          dispatch('failed')
        }
      )
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      dispatch('failed')
      // ..
    })
}

export const callSignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
      //   console.log(error)
    })
}

export const googleSignin = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      // The signed-in user info.
      const { user } = result
      console.log(user)

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const { email } = error
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      // ...
    })
}

export const passwordReset = ({ email }: { email: string }) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
      console.log('Password reset email sent to ', email)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorMessage)

      // ..
    })
}

export const sendResetPasswordLink = (
  email: string,
  dispatch: LoadSuccessErrorDispatch
) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      dispatch('success')
    })
    .catch((error) => {
      dispatch('failed')
    })
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
    action: ActionCreatorWithPayload<any, string>
  ) => {
    const arr: any[] = []
    const querySnapshot = await getDocs(customQuery)
    querySnapshot.forEach((document: QueryDocumentSnapshot<DocumentData>) => {
      const { imageUrl, subImageUrl } = getImageUrl(document.id)
      arr.push({ ...document.data(), imageUrl, subImageUrl })
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
