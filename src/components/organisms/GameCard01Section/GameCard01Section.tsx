import { Link } from 'react-router-dom'
import { slug } from '@utils/index'
import { Game } from '@epictypes/index'
import GameCard01 from '@molecules/GameCard01'

export interface IGameCard01SectionProps {
  heading: string
  buttonText?: string
  buttonLinkTo?: string
  games: Game[]
  classes?: string
}

const GameCard01Section = ({
  heading,
  buttonText = 'view more',
  buttonLinkTo = '#0',
  games,
  classes = '',
}: IGameCard01SectionProps) => {
  const gamesSix = games.slice(0, 6)
  return (
    <div className={`my-12 ${classes}`}>
      <div className='flex items-baseline justify-between'>
        <div className='flex items-center text-xl font-semibold capitalize'>
          {heading}
        </div>
        {buttonText && (
          <Link
            to={buttonLinkTo}
            className='text-xs uppercase border border-white rounded-md btn-md '
            aria-label={`view more ${heading}`}
          >
            {buttonText}
          </Link>
        )}
      </div>
      <div
        data-testid={slug(`${heading}`)}
        className='flex gap-3 pt-3 pb-3 overflow-x-scroll overscroll-x-none thin-scrollbar'
      >
        {gamesSix.map((game) => (
          <GameCard01
            className='flex-shrink-0 w-1/5 min-w-72'
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </div>
  )
}

export default GameCard01Section
