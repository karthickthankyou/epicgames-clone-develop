import { createAsyncThunk } from '@reduxjs/toolkit'
import { doc, setDoc } from 'firebase/firestore'
import { RouteComponentProps } from 'react-router-dom'
import { collections, db } from 'src/firebase'
import { UserGameStatus } from 'src/types'

export const updateUserGames = createAsyncThunk(
  'browseGames/add',
  ({
    uid,
    gameId,
    status,
    history,
  }: {
    uid: string
    gameId: string
    status: UserGameStatus
    history: RouteComponentProps['history']
    // eslint-disable-next-line consistent-return
  }) => {
    if (!uid) return history.push('/signin')
    const gameRef = doc(db, collections.USER_GAMES, `${uid}-${gameId}`)

    setDoc(gameRef, {
      uid,
      gameId,
      status,
      updatedAt: new Date(),
    })
  }
)
