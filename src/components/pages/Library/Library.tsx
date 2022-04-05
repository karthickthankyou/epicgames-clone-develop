import { Redirect } from 'react-router-dom'
import { useAppSelector } from '@store/hooks'
import { selectUser } from '@store/userSlice'
import EmptyList from '@molecules/EmptyList/EmptyList'
import CustomHelmet from '@organisms/CustomHelmet/CustomHelmet'
import Heading from '@atoms/Heading/Heading'
import Pagination from '@molecules/Pagination/Pagination'

import GameCard07 from '@molecules/GameCard07/GameCard07'

export interface ILibraryProps {}

const Library = () => {
  const { uid } = useAppSelector(selectUser)
  const purchased = useAppSelector((state) => state.userGames.purchasedGames)

  if (purchased.length === 0)
    return (
      <EmptyList
        title='Your library is empty.'
        description='Games that you have purchased will appear here'
        buttonText='back to store'
        linkTo='/'
      />
    )
  if (!uid) return <Redirect to='/signin' />
  return (
    <div className='min-h-screen-3/4'>
      <CustomHelmet
        title={`Wishlist (${purchased.length})`}
        description={`The wishlisted games appear here. There are currently ${purchased.length} games in this page now.`}
      />
      <Heading variant='heading-1' headerType='h1' classes='mt-2'>
        Library
      </Heading>
      <div className='flex items-center justify-between'>
        {/* <Link to='/'>To Home</Link> */}
        {/* <SortDropdown /> */}
        <div className='py-2'>Items ({purchased.length})</div>
      </div>

      <>
        <div
          aria-label='wishlist-page-list'
          className='grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        >
          {purchased.map((game) => (
            <GameCard07 key={game.id} game={game} />
          ))}
        </div>
        <Pagination
          current={1}
          total={Math.ceil(purchased.length / 10)}
          classes='my-10'
        />
      </>
    </div>
  )
}

export default Library
