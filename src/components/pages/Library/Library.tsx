import { Redirect } from 'react-router-dom'
import { useAppSelector } from '@store/hooks'
import { selectUser } from '@store/userSlice'

import LibraryTemplate from '@templates/LibraryTemplate/LibraryTemplate'

export interface ILibraryProps {}

const Library = () => {
  const { uid } = useAppSelector(selectUser)
  if (!uid) return <Redirect to='/signin' />
  const purchased = useAppSelector((state) => state.userGames.purchasedGames)

  return <LibraryTemplate purchased={purchased} />
}

export default Library
