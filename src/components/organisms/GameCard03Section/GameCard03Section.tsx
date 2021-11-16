import { GameCard03 } from 'src/components/molecules'
import { Game } from 'src/types'

export interface IGameCard01SectionProps {
  games: Game[]
  heading: string
  buttonText?: string
}

const GameCard01Section = ({
  games,
  heading,
  buttonText,
}: IGameCard01SectionProps) => (
  <div className='flex flex-col space-y-1'>
    <div className='flex justify-between mb-2'>
      {heading}
      {buttonText && (
        <button
          type='button'
          className='text-xs uppercase border rounded-sm btn-md'
        >
          {buttonText}
        </button>
      )}
    </div>
    {games.map((game) => (
      <GameCard03 key={game.id} game={game} />
    ))}
  </div>
)

// const GameCard01Section = () => (
//   <div className='grid grid-cols-3 gap-3'>
//     <GameCard03Vertical heading='New Releases' />
//     <GameCard03Vertical heading='Top Sellers' buttonText='view more' />
//     <GameCard03Vertical heading='Coming soon' />
//   </div>
// )

export default GameCard01Section
