import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from 'src/firebase'
import { useAppDispatch } from '..'
import { setUser } from './userSlice'

export function useUserListener() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user)
        dispatch(setUser({ uid: user.uid, displayName: user.displayName }))
      else dispatch(setUser(null))
    })
    return unsubscribe
  }, [])
}
