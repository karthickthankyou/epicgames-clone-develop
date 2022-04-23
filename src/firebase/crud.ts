import { doc, setDoc } from 'firebase/firestore'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { RouteComponentProps } from 'react-router-dom'

import { UserGameStatus } from '../types'
import { collections, db } from './index'

export const updateUserGames = async ({
  uid,
  gameId,
  status,
  history,
}: {
  uid: string
  gameId: string
  status: UserGameStatus
  history: RouteComponentProps['history']
}) => {
  if (!uid) return history.push('/signin')

  const gameRef = await doc(db, collections.USER_GAMES, `${uid}-${gameId}`)

  setDoc(gameRef, {
    uid,
    gameId,
    status,
    updatedAt: new Date(),
  })
  return true
}

export const resetUserTask = () => {
  const resetTestUser = httpsCallable(getFunctions(), 'resetTestUser')
  resetTestUser().then((res) => console.log('Reset done'))
}
