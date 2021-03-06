import dateFormat from 'dateformat'
import { useHistory } from 'react-router-dom'
import { updateUserGames } from '@epicfirebase/crud'
import { useAppSelector } from '@store/hooks'
import { selectUser } from '@store/userSlice'
import Price, { IPriceProps } from '@atoms/Price'

import { ReactComponent as Close } from '@assets/svgs/x.svg'

export interface IGameCard06Props {
  id: string
  title: string
  price: IPriceProps
  imageUrl: string
  publisherId: string
  date: string
}

const GameCard06 = ({
  id,
  title,
  price: { price, discount = 0 },
  imageUrl,
  date,
}: IGameCard06Props) => {
  const { uid } = useAppSelector(selectUser)
  const history = useHistory()
  return (
    <div className='relative grid grid-cols-3 p-2 bg-gray-800 rounded group'>
      <img
        src={imageUrl}
        className='object-cover w-full h-full col-span-1 rounded-sm cursor-pointer filter group-hover:brightness-125'
        alt=''
      />

      <div className='flex flex-col flex-grow col-span-2 pt-2 pl-3'>
        <p className='w-full text-lg line-clamp-1'>{title}</p>

        {/* <div className='mt-2 text-xs text-gray-400 line-clamp-2'>
              <span className='max-w-sm line-clamp-2'>{review}</span>
            </div> */}
        <div className='mt-3'>
          <Price price={price} discount={discount} />
        </div>
        {discount > 0 && (
          <div className='mt-2 text-xs text-gray-400'>
            Sale ends - {dateFormat(date, 'mmm d "at" h:MM TT')}
          </div>
        )}

        <div className='mt-auto'>
          <button
            type='button'
            className='w-full px-4 py-2 mt-2 text-xs border-t border-gray-700 btn rounded-white hover:bg-primary-600 group-hover:bg-primary'
            onClick={() =>
              updateUserGames({
                uid: uid || '',
                gameId: id,
                status: 'IN_CART',
                history,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
      <button
        type='button'
        className='absolute top-0 right-0 z-10'
        onClick={() =>
          updateUserGames({
            uid: uid || '',
            gameId: id,
            status: 'REMOVED_FROM_WISHLIST',
            history,
          })
        }
      >
        <Close className='w-8 h-8 p-2 text-gray-500 hover:text-gray-100 ' />
      </button>
    </div>
  )
}

export default GameCard06
