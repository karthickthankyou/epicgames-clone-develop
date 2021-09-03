import { Redirect } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { getFunctions, httpsCallable } from 'firebase/functions'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import { selectCartGames } from '../../../store/userGameSlice'
import CartCard from '../../molecules/CartCard'
import { discountCalc, withCurrency } from '../../../utils'
import { Game } from '../../../types'
import EmptyList from '../../molecules/EmptyList'
import { useDocumentTitle } from '../../../hooks'
import Heading from '../../atoms/Heading'

const Cart = () => {
  const createStripeCheckout = httpsCallable(
    getFunctions(),
    'createStripeCheckout'
  )
  //   const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')
  const gamesInCart = useAppSelector(selectCartGames)
  useDocumentTitle(`(${gamesInCart.length}) Cart`)
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

  const findTax = findTotalAmount / 8

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
    <div className='mb-16 min-h-screen-3/4'>
      <Heading variant='heading-1' classes='mt-2' headerType='h1'>
        Cart
      </Heading>
      {/* <div className='my-4 text-3xl font-light'>Cart</div> */}
      <div className='gap-3 sm:gap-6 sm:grid sm:grid-cols-2'>
        <div data-testid='cart-page-list' className='sm:col-span-1'>
          {gamesInCart.map((game) => (
            <CartCard key={game.id} game={game} classes='mb-3' />
          ))}
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col p-4 mt-8 font-mono text-sm sm:sticky top-24 sm:mt-0'
          >
            <div className='mb-3 text-base font-semibold'>Order summary</div>
            <div className='flex justify-between py-1'>
              <div>Subtotal</div>
              <div className='tracking-wider '>
                {withCurrency(findTotalAmount)}
              </div>
            </div>
            <div className='flex justify-between py-1'>
              <div>Tax</div>
              <div className='tracking-wider '>{withCurrency(findTax)}</div>
            </div>
            <div className='my-1 border-t border-gray-700' />
            <div className='flex justify-between py-1 font-semibold'>
              <div>Total</div>
              <div className='tracking-wider '>
                {withCurrency(findTax + findTotalAmount)}
              </div>
            </div>
            <button
              className='w-full px-4 py-3 mt-4 tracking-widest bg-primary-600 btn hover:bg-primary-700'
              type='submit'
            >
              Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart
