import { doc, setDoc } from 'firebase/firestore'
import { UserGameStatus } from '../types'
import { collections, db } from './index'

export const updateUserGames = ({
  uid,
  gameId,
  status,
}: {
  uid: string
  gameId: string
  status: UserGameStatus
}) => {
  const gameRef = doc(db, collections.USER_GAMES, `${uid}-${gameId}`)

  setDoc(gameRef, {
    uid,
    gameId,
    status,
    updatedAt: new Date(),
  })
}
