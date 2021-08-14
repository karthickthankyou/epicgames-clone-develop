import { useEffect } from 'react'
import {
  collection,
  query,
  limit,
  onSnapshot,
  where,
  orderBy,
} from 'firebase/firestore'
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { db } from './index'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setGames } from '../store/gamesSlice'
import { setWishlist } from '../store/wishlistSlice'
import { setUser } from '../store/userSlice'
import { selectSortKeyAndOrder } from '../store/browseGamesSlice'

export function useSetGameListener() {
  const dispatch = useAppDispatch()
  const { sortKey, sortOrder } = useAppSelector(selectSortKeyAndOrder)
  useEffect(() => {
    const q = query(
      collection(db, 'games'),
      orderBy(sortKey, sortOrder),
      limit(10)
    )
    const detachListener = onSnapshot(q, (querySnapshot) => {
      const arr: any[] = []
      querySnapshot.forEach(async (doc) => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/images%2F${doc.id}.jpg?alt=media`
        const subImageUrl = `https://firebasestorage.googleapis.com/v0/b/epic-clone.appspot.com/o/subimages%2F${doc.id}.jpg?alt=media`
        arr.push({ ...doc.data(), imageUrl, subImageUrl })
      })
      dispatch(setGames(arr))
    })
    return () => {
      detachListener()
    }
  }, [sortKey, sortOrder])
}

export function useGetWishlist() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const q = query(
      collection(db, 'userActivities'),
      where('userId', '==', '1'),
      limit(10)
    )
    const detachListener = onSnapshot(q, (querySnapshot) => {
      const arr: any[] = []
      querySnapshot.forEach(async (doc) => {
        arr.push({ ...doc.data() })
      })
      console.log('Connecting useGetWishlist', arr)
      dispatch(setWishlist(arr))
    })
    return () => {
      console.log('Detaching useGetWishlist')
      detachListener()
    }
  }, [])
}

export function useGetUser() {
  const auth = getAuth()
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user
        dispatch(setUser({ uid }))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(setUser(null))
      }
    })
    return unsubscribe
  }, [])
}

export const callSignIn = () => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, 'user1@epic.com', 'user1User1')
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential

      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
}

export const callSignOut = () => {
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Signed out')
    })
    .catch((error) => {
      // An error happened.
      console.log(error)
    })
}
