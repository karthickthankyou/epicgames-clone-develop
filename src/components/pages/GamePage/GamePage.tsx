import { useParams } from 'react-router-dom'
import { selectGames } from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import GameCard05 from '../../molecules/GameCard05'

export interface IGamePageProps {}

const GamePage = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  const { id } = useParams<{ id: string }>()
  const game = useAppSelector(selectGames).filter((item) => item.id === id)[0]

  return (
    <div>
      <GameCard05 game={game} />
    </div>
  )
}

export default GamePage
