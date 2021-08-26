import { Link } from 'react-router-dom'
import SortDropdown from '../../atoms/SortDropdown'
import GameCard06 from '../../molecules/GameCard06'
import { useAppSelector } from '../../../store/hooks'
import {
  selectWishlistGameIds,
  selectWishlistGames,
} from '../../../store/userGameSlice'
import Pagination from '../../molecules/Pagination'
import EmptyList from '../../molecules/EmptyList'

import { useDocumentTitle } from '../../../hooks'

export interface IWishlistProps {}

const Wishlist = () => {
  const wishlist = useAppSelector(selectWishlistGames)
  const wishlistIds = useAppSelector(selectWishlistGameIds)

  useDocumentTitle('Wishlist')
  return (
    <div className='min-h-screen/2'>
      <div className='flex items-center justify-between'>
        {/* <Link to='/'>To Home</Link> */}
        <SortDropdown />
        <div className='py-2'>Items ({wishlistIds.length})</div>
      </div>
      {wishlist.length === 0 ? (
        <EmptyList
          title='Your wishlist is empty'
          description='Games added to your wishlist will appear here'
          buttonText='back to store'
          linkTo='/'
        />
      ) : (
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
                displayImage={game.imageUrl}
                title={game.title}
                price={{
                  discount: game.discount,
                  price: game.price,
                }}
                productionCompany={game.publisherId}
              />
            ))}
          </div>
          <Pagination
            current={1}
            total={Math.ceil(wishlistIds.length / 10)}
            classes='my-10'
          />
        </>
      )}
    </div>
  )
}

export default Wishlist
