import { IoCloseOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import { updateUserGames } from '../../../firebase/crud'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import { Game } from '../../../types'
import Price from '../../atoms/Price'

export interface ICartCardProps {
  game: Game
  classes?: string
}

const CartCard = ({ game, classes }: ICartCardProps) => {
  const { uid } = useAppSelector(selectUser)
  const history = useHistory()
  return (
    <div className={`flex relative items-start ${classes}`}>
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
        className='absolute top-0 right-0 ml-auto'
        onClick={() =>
          updateUserGames({
            uid: uid || '',
            gameId: game.id,
            status: 'REMOVED_FROM_CART',
            history,
          })
        }
      >
        <IoCloseOutline className='w-8 h-8 p-1 text-gray-400' />
      </button>
    </div>
  )
}

export default CartCard
