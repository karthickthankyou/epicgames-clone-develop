import { GameCard02 } from 'src/components/molecules'
import { Game } from 'src/types'

export interface IGameCard02SectionProps {
  games: Game[]
}

const GameCard02Section = ({ games }: IGameCard02SectionProps) => (
  <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
    {games.map((game) => (
      <GameCard02 key={game.id} game={game} />
    ))}
  </div>
)

export default GameCard02Section
