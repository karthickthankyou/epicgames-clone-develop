import { HiOutlineShoppingBag } from 'react-icons/hi'
import Badge from '../../atoms/Badge'
import Price from '../../atoms/Price'
import image from '../../../assets/game.jpg'

export interface IGameCard05Props {}

const KeyValue = ({ label, value }: { label: string; value: string }) => (
  <div className='flex justify-between py-2'>
    <div className='text-gray-400'>{label}</div>
    <div className='text-gray-200'>{value}</div>
  </div>
)

const values = [
  { label: 'Developer', value: 'Studio Inkyfox' },
  { label: 'Publisher', value: 'Future Friends Games' },
  { label: 'Release Date', value: 'Jul 29, 2021' },
  { label: 'Platform', value: 'Windows' },
]

const GameCard05 = () => (
  <div>
    <img src={image} alt='' className='object-cover w-full h-72' />
    <Badge badgeText='base game' classes='mt-4' />
    <Price price={20} classes='mt-2' />
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

export default GameCard05
