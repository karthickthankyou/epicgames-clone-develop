import { Redirect } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import { selectCartGames } from '../../../store/userGameSlice'
import CartCard from '../../molecules/CartCard'
import { discountCalc } from '../../../utils'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (elements === null) return

    // @ts-ignore
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: 'card',
      // @ts-ignore
      card: elements.getElement(CardElement),
    })
    console.log(error, paymentMethod)
  }
  const games = useAppSelector(selectCartGames)

  const findTotalAmount = games.reduce(
    (total, game) => total + discountCalc(game.discount, game.price),
    0
  )

  return (
    <div>
      {games.map((game) => (
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
          disabled={!stripe || !elements}
        >
          Pay {findTotalAmount}
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
