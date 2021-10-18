import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  collection,
  getDocs,
  limit,
  where,
  query,
  orderBy,
  getDoc,
  doc,
} from 'firebase/firestore'
import { collections, db } from 'src/firebase'
import {
  Game,
  GameGenre,
  GameSection,
  SimilarGame,
  SpecialSectionKey,
} from 'src/types'
import { getImageUrl, processGameIdsForSimilarItems } from 'src/utils'

export const getGamesGenre = createAsyncThunk(
  'games/genre',
  async ({
    property,
    docLimit = 6,
  }: {
    property: GameGenre
    docLimit?: number
  }) => {
    const q = query(
      collection(db, collections.GAMES),
      where('tags', 'array-contains', property),
      limit(docLimit)
    )

    const querySnapshot = await getDocs(q)
    const games: Game[] = []
    querySnapshot.forEach((document) => {
      const gameData = document.data() as Game
      games.push(gameData)
    })
    return { games }
  }
)

export const getHomeScreenGames = createAsyncThunk(
  'games/homeScreen',
  async () => {
    const q = query(
      collection(db, collections.GAMES),
      where('homeScreen', '>', ''),
      limit(7)
    )
    const arr: Game[] = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((document) => {
      const { imageUrl, subImageUrl } = getImageUrl(document.id)
      const gameData = document.data() as Game
      arr.push({ ...gameData, imageUrl, subImageUrl })
    })
    return arr
  }
)

export const getSpecialGames = createAsyncThunk(
  'games/special',
  async ({ property }: { property: SpecialSectionKey }) => {
    const q = query(
      collection(db, collections.GAMES),
      orderBy(property, 'desc'),
      where(property, '!=', null),
      limit(10)
    )
    const games: Game[] = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((document) => {
      const { imageUrl, subImageUrl } = getImageUrl(document.id)
      const gameData = document.data() as Game
      games.push({ ...gameData, imageUrl, subImageUrl })
    })
    return { property, games }
  }
)

export const getGameSections = createAsyncThunk(
  'games/sections',
  async ({ property }: { property: GameSection }) => {
    const q = query(
      collection(db, collections.GAMES),
      where('sections', 'array-contains', property),
      limit(10)
    )
    const games: Game[] = []
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((document) => {
      games.push(document.data() as Game)
    })
    return { property, games }
  }
)

export const getGamePage = createAsyncThunk(
  'games/gamePage',
  async ({ gameId }: { gameId: Game['id'] | null }) => {
    if (!gameId) {
      return null
    }
    const document = await getDoc(doc(db, collections.GAMES, gameId))
    return document.data() as Game
  }
)

export const getSimilarGames = createAsyncThunk(
  'games/similar',
  async (gameIds: SimilarGame[]) => {
    if (gameIds) {
      const q = query(
        collection(db, collections.GAMES),
        where('id', 'in', processGameIdsForSimilarItems(gameIds))
      )
      const querySnapshot = await getDocs(q)
      const arr: Game[] = []
      querySnapshot.forEach((document) => {
        const similarGame = gameIds.find((item) => item.id === document.id)
        const { imageUrl, subImageUrl } = getImageUrl(document.id)
        const {
          tags,
          price,
          discount,
          developer,
          languages,
          rating,
          platform,
          publisherId,
          description,
          title,
          longDesc,
          releaseDate,
        } = document.data()

        arr.push({
          id: document.id,
          tags,
          price,
          discount,
          developer,
          rating,
          languages,
          platform,
          publisherId,
          description,
          title,
          longDesc,
          releaseDate,
          similarity: similarGame?.s || '0',
          imageUrl,
          subImageUrl,
        })
      })
      arr.sort((a, b) => {
        const aValue = a?.similarity || 0
        const bValue = b?.similarity || 0
        return +bValue - +aValue
      })
      return arr
    }
    return []
  }
)
