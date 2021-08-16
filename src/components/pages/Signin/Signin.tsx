// eslint-disable-next-line import/no-unresolved
import { Redirect } from 'react-router-dom'
import { callSignIn, callSignOut } from '../../../firebase/hooks'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'

export interface ISigninProps {}

const Signin = () => {
  const user = useAppSelector(selectUser)
  if (user.uid) return <Redirect to='/' />
  return (
    <div>
      🛬 Hello, This is Signin component! 🛫
      <button type='button' className='block ' onClick={callSignIn}>
        Sign in
      </button>
      <button type='button' className='block ' onClick={callSignOut}>
        Sign out
      </button>
    </div>
  )
}

export default Signin
