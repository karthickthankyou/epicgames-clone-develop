import { Link } from 'react-router-dom'
import { slug } from 'src/utils/index'
import { AsyncGames } from 'src/types'
import { GameCard01 } from 'src/components/molecules'

export interface IGameCard01SectionProps {
  heading: string
  buttonText?: string
  buttonLinkTo?: string
  games: AsyncGames
  classes?: string
}

const GameCard01Section = ({
  heading,
  buttonText = 'view more',
  buttonLinkTo = '#0',
  games,
  classes = '',
}: IGameCard01SectionProps) => {
  const gamesSix = games.data.slice(0, 6)
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
        className='grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 lg:grid-cols-6 '
      >
        {gamesSix.map((game) => (
          <GameCard01 key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

export default GameCard01Section
