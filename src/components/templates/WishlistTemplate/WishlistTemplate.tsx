import Heading from '@atoms/Heading/Heading'
import SortDropdown from '@atoms/SortDropdown/SortDropdown'
import { UserGame, Game } from '@epictypes/index'
import EmptyList from '@molecules/EmptyList/EmptyList'
import GameCard06 from '@molecules/GameCard06/GameCard06'
import Pagination from '@molecules/Pagination/Pagination'
import CustomHelmet from '@organisms/CustomHelmet/CustomHelmet'

export interface IWishlistTemplateProps {
  wishlist: Game[]
  wishlistIds: UserGame[]
}

const WishlistTemplate = ({
  wishlist,
  wishlistIds,
}: IWishlistTemplateProps) => {
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
            <GameCard06
              key={game.id}
              id={game.id}
              date='2021-06-10T08:30:00Z'
              imageUrl={game.imageUrl}
              title={game.title}
              price={{
                discount: game.discount,
                price: game.price,
              }}
              publisherId={game.publisherId}
            />
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

export default WishlistTemplate
