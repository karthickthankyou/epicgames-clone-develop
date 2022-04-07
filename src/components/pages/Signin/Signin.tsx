// eslint-disable-next-line import/no-unresolved
import { Redirect } from 'react-router-dom'

import { useAppSelector } from '@store/hooks'
import { selectUser } from '@store/userSlice'

import SigninTemplate from '@templates/SigninTemplate/SigninTemplate'

export interface ISigninProps {}

const Signin = () => {
  const user = useAppSelector(selectUser)
  if (user.uid) return <Redirect to='/' />

  return <SigninTemplate />
}

export default Signin
