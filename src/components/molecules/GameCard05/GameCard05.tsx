import { HiOutlineShoppingBag } from 'react-icons/hi'
import Badge from '../../atoms/Badge'
import Price from '../../atoms/Price'
import image from '../../../assets/game.jpg'
import { Game } from '../../../types'

export interface IGameCard05Props {
  game: Game
}

const KeyValue = ({ label, value }: { label: string; value: string }) => (
  <div className='flex justify-between py-2'>
    <div className='text-gray-400'>{label}</div>
    <div className='text-gray-200'>{value}</div>
  </div>
)

const GameCard05 = ({ game }: IGameCard05Props) => {
  console.log('game', game)

  const values = [
    { label: 'Developer', value: game?.developer || '' },
    { label: 'Publisher', value: game.publisherId || '' },
    { label: 'Release Date', value: game.releaseDate || '' },
    { label: 'Platform', value: 'Windows' },
  ]
  return (
    <div>
      <img src={game.imageUrl} alt='' className='object-cover w-full h-72' />
      <Badge badgeText='base game' classes='mt-4' />
      <Price price={game.price} classes='mt-2' />
      <button className='w-full mt-4 bg-blue-600 btn btn-lg' type='button'>
        Buy now
      </button>
      <button
        className='flex items-center justify-center w-full mt-2 border btn btn-lg'
        type='button'
      >
        <HiOutlineShoppingBag />
        <div className='ml-2'>Add to cart</div>
      </button>
      <div className='mt-2 text-sm divide-y divide-gray-700'>
        {values.map(({ label, value }) => (
          <KeyValue key={label} label={label} value={value} />
        ))}
      </div>
    </div>
  )
}

export default GameCard05
