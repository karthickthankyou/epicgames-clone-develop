import { ReactElement } from 'react'
import { Game } from '../../../types'
import GameCard01 from '../../molecules/GameCard01'

export interface IGameCard01SectionProps {
  heading: string | ReactElement
  buttonText?: string
  games: Game[]
  classes?: string
}

const GameCard01Section = ({
  heading,
  buttonText = '',
  games,
  classes = '',
}: IGameCard01SectionProps) => {
  const gamesSix = games.slice(0, 6)
  return (
    <div className={`my-4 ${classes}`}>
      <div className='flex justify-between'>
        <div className='text-xl capitalize'>{heading}</div>
        {buttonText && (
          <button
            type='button'
            className='text-xs uppercase border border-white rounded-md btn-md '
          >
            {buttonText}
          </button>
        )}
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-6 '>
        {gamesSix.map((game) => (
          <GameCard01 game={game} />
        ))}
      </div>
    </div>
  )
}

export default GameCard01Section
