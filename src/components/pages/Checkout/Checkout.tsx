import { Redirect } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'

export interface ICheckoutProps {}

const Checkout = () => {
  const user = useAppSelector(selectUser)
  if (!user) return <Redirect to='/signin' />
  return <div>Checkout page</div>
}

export default Checkout
