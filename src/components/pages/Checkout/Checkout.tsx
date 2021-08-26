import { Redirect } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import { selectCartGames } from '../../../store/userGameSlice'
import CartCard from '../../molecules/CartCard'
import { discountCalc } from '../../../utils'
import { Game } from '../../../types'
import EmptyList from '../../molecules/EmptyList'

const Cart = () => {
  const createStripeCheckout = httpsCallable(
    getFunctions(),
    'createStripeCheckout'
  )
  //   const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')
  const gamesInCart = useAppSelector(selectCartGames)
  const createCheckoutList = (cartList: Game[]) =>
    cartList.map((cartItem) => ({
      name: cartItem.title,
      amount: cartItem.price * 100,
      currency: 'inr',
      quantity: 1,
      images: [cartItem.imageUrl],
      //   price_data: {
      //     product_data: {
      //       metadata: {
      //         id: cartItem.id,
      //       },
      //     },
      //   },
    }))
  const cartGameIds = gamesInCart.map((game) => game.id)

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const stripe = await loadStripe(
      'pk_test_FNnXTY8GqUBuadMdPJLojWn4003Rh83Qr0'
    )
    createStripeCheckout({
      cartItems: createCheckoutList(gamesInCart),
      gameIds: cartGameIds.join(','),
    }).then((res) => {
      // @ts-ignore
      const sessionId = res.data.id
      stripe?.redirectToCheckout({ sessionId })
    })
  }

  const findTotalAmount = gamesInCart.reduce(
    (total, game) => total + discountCalc(game.discount, game.price),
    0
  )

  const user = useAppSelector(selectUser)
  if (!user) return <Redirect to='/signin' />

  if (gamesInCart.length === 0)
    return (
      <EmptyList
        title='Your cart is empty'
        description='Games added to your cart will appear here'
        buttonText='back to store'
        linkTo='/'
      />
    )

  return (
    <div className='max-w-md mx-auto my-12'>
      <div className='my-4 text-3xl font-light'>Cart</div>
      <div data-testid='cart-page-list'>
        {gamesInCart.map((game) => (
          <CartCard key={game.id} game={game} classes='mt-2' />
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-end h-screen/2 '
      >
        <div className='w-full my-1 text-right'>
          Total: {findTotalAmount} INR
        </div>
        <button
          className='flex items-center px-4 py-2 mt-4 text-white bg-primary-600 btn hover:bg-primary-700'
          type='submit'
        >
          Pay
        </button>
      </form>
    </div>
  )
}

export default Cart
