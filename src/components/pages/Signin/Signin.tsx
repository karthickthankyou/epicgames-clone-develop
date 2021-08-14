// eslint-disable-next-line import/no-unresolved
import { callSignIn, callSignOut } from '../../../firebase/hooks'

export interface ISigninProps {}

const Signin = () => (
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

export default Signin
