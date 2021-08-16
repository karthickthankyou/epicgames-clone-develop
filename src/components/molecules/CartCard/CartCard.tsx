import { IoCloseOutline } from 'react-icons/io5'
import { updateUserGames } from '../../../firebase/crud'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import { Game } from '../../../types'
import Price from '../../atoms/Price'

export interface ICartCardProps {
  game: Game
}

const CartCard = ({ game }: ICartCardProps) => {
  const { uid } = useAppSelector(selectUser)
  return (
    <div className='flex items-center'>
      <img
        src={game.imageUrl}
        alt=''
        className='object-cover w-16 h-16 mr-2 rounded-md'
      />
      <div className='mr-2 text-sm text-gray-200'>
        <div>{game.title}</div>
        <Price
          price={game.price}
          discount={game.discount}
          notes={game.notes}
          classes='ml-auto mt-2'
        />
      </div>

      <button
        type='button'
        className='ml-auto'
        onClick={() =>
          updateUserGames({
            uid: uid || '',
            gameId: game.id,
            status: 'REMOVED_FROM_CART',
          })
        }
      >
        <IoCloseOutline className='w-10 h-10 p-2 text-gray-400' />
      </button>
    </div>
  )
}

export default CartCard
