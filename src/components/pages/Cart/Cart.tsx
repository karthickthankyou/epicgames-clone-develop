import { selectCartGames } from '../../../store/userGameSlice'
import { useAppSelector } from '../../../store/hooks'
import CartCard from '../../molecules/CartCard'

export interface ICartProps {}

const Cart = () => {
  const cartItems = useAppSelector(selectCartGames)

  return (
    <div>
      {cartItems.length === 0 && (
        <div className='flex items-center justify-center h-60'>Cart Empty.</div>
      )}
      {cartItems.map((game) => (
        <CartCard key={game.id} game={game} />
      ))}
      {cartItems.length > 0 && (
        <button className='btn btn-lg' type='button'>
          Proceed to payment
        </button>
      )}
    </div>
  )
}

export default Cart
