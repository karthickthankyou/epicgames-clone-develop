import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from 'src/store'
import { selectWishlistGameIds } from 'src/store/userGames'
import { selectCartGames, selectPurchasedGames } from 'src/store/games'
import { soloPaths } from 'src/utils/index'

export interface INavbarDummyProps {}

const NavbarDummy = () => {
  const { data: wishlistIds } = useAppSelector(selectWishlistGameIds)
  const { data: cart } = useAppSelector(selectCartGames)
  const { data: purchased } = useAppSelector(selectPurchasedGames)
  //   console.log(useLocation())
  const { pathname } = useLocation()
  if (soloPaths.includes(pathname)) return <></>
  return (
    <ul className='flex overflow-x-scroll'>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/'>Home</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/browse'>BrowseGames</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/wishlist'>Wishlist {wishlistIds.length}</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/cart'>Cart {cart.length}</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/library'>Library {purchased.length}</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/checkout'>Checkout</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/game/004'>Game Page</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/signup'>Sign Up</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/signin'>Sign In</Link>
      </li>
      <li className='p-1 m-1 bg-gray-800 rounded'>
        <Link to='/also/will/not/match'>404</Link>
      </li>
    </ul>
  )
}

export default NavbarDummy
