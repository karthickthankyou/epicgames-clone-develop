import SortDropdown from '../../atoms/SortDropdown'
import GameCard06 from '../../molecules/GameCard06'
import { selectGames2 } from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import { selectWishlist } from '../../../store/wishlistSlice'

export interface IWishlistProps {}

const Wishlist = () => {
  const games = useAppSelector(selectGames2)
  const wishlist = useAppSelector(selectWishlist)
  return (
    <div>
      <div className='flex items-center justify-between'>
        {/* <Link to='/'>To Home</Link> */}
        <SortDropdown />
        <div className='p-2'>Items ({games.length})</div>
      </div>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
        {games.map((game) => (
          <GameCard06
            key={game.id}
            date='2021-06-10T08:30:00Z'
            displayImage={game.imageUrl}
            gameTitle={game.title}
            price={{
              discount: game.discount,
              price: game.price,
            }}
            productionCompany={game.publisherId}
            review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
          />
        ))}
      </div>
      {wishlist.map((game) => (
        <div key={game.gameId}>
          {game.gameId}
          {console.log(game)}
        </div>
      ))}
    </div>
  )
}

export default Wishlist
