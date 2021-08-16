import { callSignOut, callSignIn } from '../../../firebase/hooks'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import HomeShowcase from '../../organisms/HomeShowcase'

export interface IHomeProps {}

const Home = () => {
  const { uid } = useAppSelector(selectUser)

  return (
    <div className='container'>
      <HomeShowcase />
      {uid ? (
        <button type='button' onClick={callSignOut}>
          Signout
        </button>
      ) : (
        <button type='button' onClick={callSignIn}>
          Signin
        </button>
      )}
    </div>
  )
}

export default Home
