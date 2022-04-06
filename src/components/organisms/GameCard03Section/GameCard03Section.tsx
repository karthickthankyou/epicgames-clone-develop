import { sampleGames } from '@epictypes/static'
import GameCard03 from '@molecules/GameCard03'
import { getImageUrl } from '@utils/index'
import { Link } from 'react-router-dom'

export interface IGameCard01SectionProps {
  heading: string
  buttonText?: string
}

const GameCard03Vertical = ({
  title,
  buttonText,
  games,
  className,
}: {
  title: string
  buttonText?: string
  games: { id: string; title: string; price: number }[]
  className?: string
}) => (
  <div className={`flex flex-col space-y-3 ${className}`}>
    <div className='flex justify-between mb-2'>
      <div className='text-xl font-semibold capitalize'>{title}</div>
      {buttonText && (
        <Link
          to='/browse'
          className='text-xs uppercase border rounded-sm btn-md'
        >
          {buttonText}
        </Link>
      )}
    </div>
    {games.map((game) => (
      <GameCard03
        key={game.id}
        id={game.id}
        displayImage={getImageUrl(game.id).imageUrl}
        gameTitle={game.title}
        priceInfo={{
          price: game.price,
        }}
      />
    ))}
  </div>
)

const GameCard01Section = () => (
  <div className='flex gap-3 pb-3 overflow-x-scroll overscroll-x-none thin-scrollbar'>
    <GameCard03Vertical
      className='flex-shrink-0 w-1/3 min-w-72'
      title='New Releases'
      games={sampleGames.slice(0, 6)}
    />
    <GameCard03Vertical
      className='flex-shrink-0 w-1/3 min-w-72'
      title='Top Sellers'
      buttonText='view more'
      games={sampleGames.slice(6, 12)}
    />
    <GameCard03Vertical
      className='flex-shrink-0 w-1/3 min-w-72'
      title='Coming soon'
      games={sampleGames.slice(12, 18)}
    />
  </div>
)

export default GameCard01Section
