import { selectCartGames } from '../../../store/games'
import { useAppSelector } from '../../../store'
import CartCard from '../../molecules/CartCard'
import CustomHelmet from '../../organisms/CustomHelmet'
import MessageWrapper from '../../molecules/MessageWrapper'

export interface ICartProps {}

const Cart = () => {
  const { data: cartItems } = useAppSelector(selectCartGames)
  if (cartItems.length === 0)
    return (
      <MessageWrapper>
        <>Cart is empty.</>
      </MessageWrapper>
    )

  return (
    <div>
      <CustomHelmet
        title={`Cart ${cartItems.length && cartItems.length}`}
        description={`The wishlisted games appear here. There are currently ${cartItems.length} games in this page now.`}
      />

      <div data-testid='cart-page-list'>
        {cartItems.map((game) => (
          <CartCard key={game.id} game={game} classes='mt-2' />
        ))}
      </div>

      <button className='btn btn-lg' type='button'>
        Proceed to payment
      </button>
    </div>
  )
}

export default Cart
