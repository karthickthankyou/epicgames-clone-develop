import dateFormat from 'dateformat'
import { FaXbox } from 'react-icons/fa'
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
  price: { price },
  displayImage,
  date,
  review,
}: IGameCard06Props) => (
  <div className='relative grid grid-cols-3 bg-gray-800 shadow-xl hover:bg-gray-700 group'>
    <button type='button' tabIndex={0}>
      <img
        src={displayImage}
        className='object-cover w-full h-full col-span-1 rounded-l-sm shadow-inner cursor-pointer filter hover:brightness-125'
        alt=''
      />
    </button>
    <div className='flex flex-col col-span-2'>
      <div className='p-4'>
        <button type='button' tabIndex={0}>
          <p className='w-full line truncate ... text-lg'>{gameTitle}</p>
        </button>
        <div className='mt-2 text-xs text-gray-400'>
          <span className='line-clamp-2'>{review}</span>
        </div>
        <div className='mt-3'>
          <Price price={price} />
        </div>
        <div className='mt-2 text-xs text-gray-400'>
          Sale ends - {dateFormat(date, 'mmm d "at" h:MM TT')}
        </div>
      </div>
      <div className='mt-auto'>
        <button
          type='button'
          className='w-full px-4 py-2 mt-2 text-sm uppercase transition-all border-t border-gray-700 rounded-white group-hover:bg-blue-700 hover:bg-blue-600'
        >
          Add to cart
        </button>
      </div>
    </div>
    <button type='button' className='absolute top-0 right-0 z-10'>
      <FaXbox className='w-8 h-8 p-2 text-gray-500 hover:text-gray-100 ' />
    </button>
  </div>
)

export default GameCard06
