import { Redirect } from 'react-router-dom'
import { useAppSelector } from '@store/hooks'
import { selectUser } from '@store/userSlice'

export interface ILibraryProps {}

const Library = () => {
  const { uid } = useAppSelector(selectUser)
  if (!uid) return <Redirect to='/signin' />
  return <div>Library</div>
}

export default Library
