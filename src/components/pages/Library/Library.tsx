import { Redirect } from 'react-router-dom'
import { selectUser } from 'src/store/user'
import { useAppSelector } from 'src/store'

export interface ILibraryProps {}

const Library = () => {
  const {
    data: { uid },
  } = useAppSelector(selectUser)
  if (!uid) return <Redirect to='/signin' />
  return <div>Library</div>
}

export default Library
