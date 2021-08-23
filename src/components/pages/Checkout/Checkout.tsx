import { Redirect } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { CardElement, Elements } from '@stripe/react-stripe-js'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import { selectCartGames } from '../../../store/userGameSlice'
import CartCard from '../../molecules/CartCard'
import { discountCalc } from '../../../utils'
import { Game } from '../../../types'

const CheckoutForm = () => {
  //   const stripe = useStripe()
  const cartItems = useAppSelector(selectCartGames)

  const createStripeCheckout = httpsCallable(
    getFunctions(),
    'createStripeCheckout'
  )

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

  console.log('createCheckoutList: ', createCheckoutList(gamesInCart))

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    // if (elements === null) return

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

  return (
    <div>
      {gamesInCart.map((game) => (
        <CartCard key={game.id} game={game} classes='mt-2' />
      ))}
      <form
        onSubmit={handleSubmit}
        className='p-4 mt-10 rounded bg-primary-200'
      >
        <CardElement />
        <button
          className='flex items-center px-4 py-2 mt-4 text-white bg-primary-600 btn hover:bg-primary-700'
          type='submit'
        >
          Pay {findTotalAmount} INR
        </button>
      </form>
    </div>
  )
}

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

export interface ICheckoutProps {}

const Checkout = () => {
  const user = useAppSelector(selectUser)
  if (!user) return <Redirect to='/signin' />
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}

export default Checkout
