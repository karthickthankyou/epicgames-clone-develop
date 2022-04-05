import GameCard03 from '@molecules/GameCard03'
import { getImageUrl } from '@utils/index'
import { Link } from 'react-router-dom'

const sampleGames = [
  {
    title: 'Back 4 Blood',
    id: '183',
    price: 2999,
  },
  {
    title: 'The Architect: Paris',
    id: '043',
    price: 429,
  },

  {
    title: 'Riders Republic',
    id: '135',
    price: 2999,
  },
  {
    title: "Luna's Fishing Garden",
    id: '002',
    price: 279,
  },

  {
    title: 'Beasts of Maravilla Island',
    id: '003',
    price: 239,
  },
  {
    title: 'Open Country',
    id: '007',
    price: 829,
  },
  {
    title: 'WE ARE FOOTBALL',
    id: '005',
    price: 1580,
  },
  {
    title: 'Chicory: A Colorful Tale',
    id: '004',
    price: 469,
  },
  {
    title: 'Genshin Impact',
    id: '010',
    price: 0,
  },
  {
    title: 'Backbone',
    id: '012',
    price: 589,
  },
  {
    title: 'Chivalry 2',
    id: '013',
    price: 939,
  },
  {
    title: 'Edge Of Eternity',
    id: '011',
    price: 0,
  },
  {
    title: 'Slipways',
    id: '015',
    price: 399,
  },
  {
    title: 'Necromunda: Hired Gun',
    id: '018',
    price: 1599,
  },
  {
    title: 'Going Medieval',
    id: '016',
    price: 589,
  },
  {
    title: 'Stonefly',
    id: '017',
    price: 529,
  },
  {
    title: 'Timelie - Game of the Year Edition',
    id: '020',
    price: 429,
  },
  {
    title: 'The Longest Road on Earth',
    id: '021',
    price: 239,
  },
  {
    title: 'GRAVEN',
    id: '023',
    price: 699,
  },
  {
    title: 'Truck Driver',
    id: '022',
    price: 709,
  },
  {
    title: 'Tennis Manager 2021',
    id: '025',
    price: 1059,
  },
  {
    title: 'BIOMUTANT',
    id: '024',
    price: 1889,
  },
  {
    title: 'Knockout City™',
    id: '019',
    price: 1499,
  },
  {
    title: 'Wanna Survive',
    id: '027',
    price: 349,
  },
]

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
      {title}
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
