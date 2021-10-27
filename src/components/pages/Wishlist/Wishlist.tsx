import { useAppSelector } from 'src/store'
import { selectWishlistGameIds } from 'src/store/userGames'
import { selectWishlistGames } from 'src/store/games'
import { SortDropdown, Heading } from 'src/components/atoms'
import { GameCard06, Pagination, EmptyList } from 'src/components/molecules'

import { CustomHelmet } from 'src/components/organisms'

export interface IWishlistProps {}

const Wishlist = () => {
  const { data: wishlist } = useAppSelector(selectWishlistGames)
  const { data: wishlistIds } = useAppSelector(selectWishlistGameIds)

  if (wishlist.length === 0)
    return (
      <EmptyList
        title='Your wishlist is empty'
        description='Games added to your wishlist will appear here'
        buttonText='back to store'
        linkTo='/'
      />
    )

  return (
    <div className='min-h-screen-3/4'>
      <CustomHelmet
        title={`Wishlist (${wishlistIds.length})`}
        description={`The wishlisted games appear here. There are currently ${wishlistIds.length} games in this page now.`}
      />
      <Heading variant='heading-1' headerType='h1' classes='mt-2'>
        Wishlist
      </Heading>
      <div className='flex items-center justify-between'>
        {/* <Link to='/'>To Home</Link> */}
        <SortDropdown />
        <div className='py-2'>Items ({wishlistIds.length})</div>
      </div>

      <>
        <div
          aria-label='wishlist-page-list'
          className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'
        >
          {wishlist.map((game) => (
            <GameCard06 key={game.id} game={game} />
          ))}
        </div>
        <Pagination
          current={1}
          total={Math.ceil(wishlistIds.length / 10)}
          classes='my-10'
        />
      </>
    </div>
  )
}

export default Wishlist
