import dateFormat from 'dateformat'
import { MdClose } from 'react-icons/md'
import Price, { IPriceProps } from '../../atoms/Price'

export interface IGameCard06Props {
  gameTitle: string
  price: IPriceProps
  displayImage: string
  review: string
  productionCompany: string
  date: string
}

const GameCard06 = ({
  gameTitle,
  price: { price, discount },
  displayImage,
  date,
  review,
}: IGameCard06Props) => (
  <div className='relative flex items-stretch p-2 bg-gray-800 rounded group'>
    <button type='button' className='w-36' tabIndex={0}>
      <img
        src={displayImage}
        className='object-cover w-full h-full col-span-1 rounded-sm shadow-inner cursor-pointer filter group-hover:brightness-125'
        alt=''
      />
    </button>
    <div className='flex flex-col flex-grow pt-2 pl-3 '>
      <p className='w-full line-clamp-1'>{gameTitle}</p>

      <div className='mt-2 text-xs text-gray-400 line-clamp-2'>
        <span className='max-w-sm line-clamp-2'>{review}</span>
      </div>
      <div className='mt-3'>
        <Price price={price} discount={discount} />
      </div>
      <div className='mt-2 text-xs text-gray-400'>
        Sale ends - {dateFormat(date, 'mmm d "at" h:MM TT')}
      </div>

      <div className='mt-auto'>
        <button
          type='button'
          className='w-full px-4 py-2 mt-2 text-xs border-t border-gray-700 btn rounded-white hover:bg-blue-700 group-hover:bg-blue-600'
        >
          Add to cart
        </button>
      </div>
    </div>
    <button type='button' className='absolute top-0 right-0 z-10'>
      <MdClose className='w-8 h-8 p-2 text-gray-500 hover:text-gray-100 ' />
    </button>
  </div>
)

export default GameCard06
