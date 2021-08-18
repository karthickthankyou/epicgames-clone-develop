import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Game } from '../../../types'
import GameCard01 from '../../molecules/GameCard01'

export interface IGameCard01SectionProps {
  heading: string | ReactElement
  buttonText?: string
  buttonLinkTo?: string
  games: Game[]
  classes?: string
}

const GameCard01Section = ({
  heading,
  buttonText = '',
  buttonLinkTo = '#0',
  games,
  classes = '',
}: IGameCard01SectionProps) => {
  const gamesSix = games.slice(0, 6)
  return (
    <div className={`my-12 ${classes}`}>
      <div className='flex justify-between'>
        <div className='flex items-center text-xl font-semibold capitalize'>
          {heading}
        </div>
        {buttonText && (
          <Link
            to={buttonLinkTo}
            className='text-xs uppercase border border-white rounded-md btn-md '
          >
            {buttonText}
          </Link>
        )}
      </div>
      <div className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-6 '>
        {gamesSix.map((game) => (
          <GameCard01 key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

export default GameCard01Section
