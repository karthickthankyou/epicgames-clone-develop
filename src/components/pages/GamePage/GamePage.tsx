import { useParams } from 'react-router-dom'
import { useGetGamePage, useSimilarGames } from '@epicfirebase/hooks'
import { selectGamePage, selectGamePageSimilarGames } from '@store/gamesSlice'
import { useAppSelector } from '@store/hooks'
import { useDocumentTitle } from '@hooks/index'
import GamePageTemplate from '@templates/GamePageTemplate'
import { useEffect } from 'react'
import { scrollToTop } from '@utils/index'

export interface IGamePageProps {}

const GamePage = () => {
  const { id } = useParams<{ id: string }>()
  const game = useAppSelector(selectGamePage)
  const similarGames = useAppSelector(selectGamePageSimilarGames)

  useDocumentTitle(
    game?.title ? `${game?.title} | Karthick Ragavendran` : 'Game page'
  )

  useGetGamePage(id)
  useSimilarGames(game?.items)
  // useEffect(() => {
  //   scrollToTop('auto')
  // }, [])

  return <GamePageTemplate game={game} similarGames={similarGames} />
}

export default GamePage
