import { useHistory } from 'react-router-dom'
import { updateUserGames } from '../../../firebase/crud'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/user'
import { Game } from '../../../types'
import Price from '../../atoms/Price'
import { ReactComponent as Close } from '../../../assets/svgs/x.svg'

export interface ICartCardProps {
  game: Game
  classes?: string
}

const CartCard = ({ game, classes }: ICartCardProps) => {
  const { uid } = useAppSelector(selectUser)
  const history = useHistory()
  return (
    <div
      className={`flex relative items-start bg-gray-800 shadow-lg rounded  ${classes}`}
    >
      <img
        src={game.imageUrl}
        alt=''
        className='object-cover w-16 h-full mr-2 rounded-l'
      />
      <div className='p-2 mr-2 text-sm text-gray-200'>
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
        aria-label='close'
        onClick={() =>
          updateUserGames({
            uid: uid || '',
            gameId: game.id,
            status: 'REMOVED_FROM_CART',
            history,
          })
        }
      >
        <Close className='w-8 h-8 p-1 text-gray-400' />
      </button>
    </div>
  )
}

export default CartCard
