import { Link, Redirect, useHistory } from 'react-router-dom'
import { useAppSelector } from '@store/hooks'
import { selectUser } from '@store/userSlice'
import { selectCartGames } from '@store/userGameSlice'
import CartCard from '@molecules/CartCard'
import { discountCalc, scrollToTop, withCurrency } from '@utils/index'
import { Game } from '@epictypes/index'
import EmptyList from '@molecules/EmptyList'
import { useDocumentTitle } from '@hooks/index'
import Heading from '@atoms/Heading'
import { updateUserGames } from '@epicfirebase/crud'
import { useEffect, useState } from 'react'

import InformationCircleIcon from '@heroicons/react/outline/InformationCircleIcon'

const Cart = () => {
  useEffect(() => {
    scrollToTop('auto')
  }, [])

  const gamesInCart = useAppSelector(selectCartGames)
  useDocumentTitle(`(${gamesInCart.length}) Cart`)
  const user = useAppSelector(selectUser)

  const createCheckoutList = (cartList: Game[]) =>
    cartList.map((cartItem) => ({
      name: cartItem.title,
      description: cartItem.description,
      price: cartItem.price * 100,
      image: cartItem.imageUrl,
    }))

  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const setPurchasedItems = () =>
    gamesInCart.map((item) =>
      updateUserGames({
        uid: user.uid || '',
        gameId: item.id,
        status: 'PURCHASED',
        history,
      })
    )

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      setPurchasedItems()
      history.push('/library')
    }, 3000)

    // const stripe = await loadStripe(
    //   'pk_test_51KqWgpSEDaTYTAG4hJgqbE66v0NliUTjrqQddcKNuRrhnn9T7xZ9w1Scr0cgpWK4arEigUjzEwdmP2CWeIYo8C0700QIhVoX41'
    // )

    // axios
    //   .post('https://backend.epic.iamkarthick.com/api/create-stripe-session', {
    //     items: createCheckoutList(gamesInCart),
    //   })
    //   .then((res) => {
    //     const sessionId = res.data.id
    //     stripe?.redirectToCheckout({ sessionId })
    //   })
  }

  const findTotalAmount = gamesInCart.reduce(
    (total, game) => total + discountCalc(game.discount, game.price),
    0
  )

  const findTax = findTotalAmount / 8

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
        <div className='relative'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col font-mono text-sm top-4 sm:sticky sm:mt-0'
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
              className='w-full px-4 py-3 mt-4 tracking-widest bg-primary btn hover:bg-primary-600'
              type='submit'
            >
              {loading ? 'Purchasing...' : 'Checkout'}
            </button>
            <div className='mt-2 text-xs text-gray-400'>
              <div>Stripe payment is temporarily disabled in this project.</div>
              <div>
                Please refer to{' '}
                <Link
                  className='text-primary'
                  to='https://ikea.iamkarthick.com'
                >
                  IKEA Clone
                </Link>{' '}
                or{' '}
                <Link
                  className='text-primary'
                  to='https://zillow.iamkarthick.com'
                >
                  Zillow Clone
                </Link>{' '}
                to see stripe payment in action.
                <div>Thankyou</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart
