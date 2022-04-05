import { Game } from '@epictypes/index'
import { Link } from 'react-router-dom'

export interface IGameCard07Props {
  game: Game
}

const GameCard07 = ({ game }: IGameCard07Props) => (
  <Link to={`/game/${game.id}`}>
    <div className='aspect-w-3 aspect-h-4'>
      <img
        src={game.imageUrl}
        alt=''
        // transition-all transform filter hover:brightness-120
        className='object-cover object-center rounded-lg'
      />
    </div>
    <div className='mt-3 font-semibold truncate overflow-ellipsis'>
      {game.title}
    </div>
  </Link>
)

export default GameCard07
