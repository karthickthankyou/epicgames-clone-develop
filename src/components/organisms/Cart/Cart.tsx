import { selectCartGames } from 'src/store/games'
import { useAppSelector } from 'src/store'
import { CartCard } from 'src/components/molecules'

export interface ICartProps {}

const Cart = () => {
  const { data: cartItems } = useAppSelector(selectCartGames)
  return (
    <div className='space-y-2'>
      <div className='py-4 text-lg text-gray-400 uppercase'>Shopping cart</div>
      {cartItems.map((game) => (
        <CartCard key={game.id} game={game} />
      ))}
      <div className='flex items-center'>
        <div className='ml-auto'>Subtotal (4 items): </div>
        <div className='ml-2'>$40</div>
        <div className='w-10 h-10 p-2' />
      </div>
      <div className='flex justify-end mt-6'>
        <button className='border btn-xl btn btn-outline' type='button'>
          continue shopping
        </button>
        <button className='ml-4 bg-primary-500 btn-xl btn' type='button'>
          purchase
        </button>
      </div>
    </div>
  )
}

export default Cart
