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
}: {
  title: string
  buttonText?: string
  games: { id: string; title: string; price: number }[]
}) => (
  <div className='flex flex-col space-y-2'>
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
  <div className='grid grid-cols-3 gap-3'>
    <GameCard03Vertical title='New Releases' games={sampleGames.slice(0, 6)} />
    <GameCard03Vertical
      title='Top Sellers'
      buttonText='view more'
      games={sampleGames.slice(6, 12)}
    />
    <GameCard03Vertical title='Coming soon' games={sampleGames.slice(12, 18)} />
  </div>
)

export default GameCard01Section
