import { useParams } from 'react-router-dom'

export interface IUserPageProps {}

const UserPage = () => {
  const { uid } = useParams<{ uid: string }>()
  return <div className='h-screen'>User page under construction. {uid}</div>
}

export default UserPage
