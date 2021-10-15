import { useEffect } from 'react'
import { Game } from 'src/types'
import { useAppDispatch } from '..'
import {
  getGamePage,
  getGamesCustom,
  getHomeScreenGames,
  getSpecialGames,
} from './gameThunks'

export const useGetHomeGames = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getHomeScreenGames())
    dispatch(getSpecialGames({ property: 'anticipatedBy' }))
    dispatch(getSpecialGames({ property: 'hoursToBeat' }))
    dispatch(getSpecialGames({ property: 'unitsSold' }))
    dispatch(getGamesCustom('genre')({ condition: 'Action' }))
    dispatch(getGamesCustom('genre')({ condition: 'Adventure' }))
    dispatch(getGamesCustom('genre')({ condition: 'Puzzle' }))
    dispatch(getGamesCustom('notes')({ condition: 'unitsSold' }))
    dispatch(getGamesCustom('notes')({ condition: 'anticipatedBy' }))
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
