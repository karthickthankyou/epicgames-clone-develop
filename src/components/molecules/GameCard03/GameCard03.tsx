import Price, { IPriceProps } from '@atoms/Price'
import { Link } from 'react-router-dom'

export interface IGameCard03Props {
  id: string
  title: string
  priceInfo: IPriceProps
  imageUrl: string
}

const GameCard03 = ({ id, title, priceInfo, imageUrl }: IGameCard03Props) => (
  <Link
    to={`/game/${id}`}
    className='relative flex items-start overflow-hidden transition-all bg-gray-800 rounded-sm hover:bg-primary-800'
  >
    <img
      src={imageUrl}
      className='flex-shrink-0 object-cover w-20 h-24 rounded-sm'
      alt=''
    />

    <div className='p-3'>
      <p className='w-full max-w-xs font-semibold line-clamp-2'>{title}</p>
      <Price price={priceInfo.price} discount={priceInfo.discount} />
    </div>
  </Link>
)

export default GameCard03
