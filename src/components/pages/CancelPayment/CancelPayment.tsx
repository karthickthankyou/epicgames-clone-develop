import { Link } from 'react-router-dom'
import MessageWrapper from '../../molecules/MessageWrapper'

export interface ICancelPaymentProps {}

const CancelPayment = () => (
  <MessageWrapper>
    <div className='p-3'>
      <div className='text-lg '>Payment cancelled.</div>
      <div className='text-sm text-gray-400'>
        But, your cart items are safe with us.
      </div>
      <Link
        className='inline-block px-4 py-2 mt-4 text-xs uppercase rounded-sm bg-primary-700 hover:bg-primary-800'
        to='/cart'
      >
        Go to cart
      </Link>
    </div>
  </MessageWrapper>
)

export default CancelPayment
