import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiSearch } from 'react-icons/fi'
import { useAppSelector } from '../../../store/hooks'
import {
  selectCartGameIds,
  selectCartGames,
  selectPurchasedGames,
  selectWishlistGameIds,
} from '../../../store/userGameSlice'
import Image from '../../../assets/game.jpg'

import { soloPaths } from '../../../utils'
import NavIcon from '../../atoms/NavIcon'
import { selectUser } from '../../../store/userSlice'

export interface INavbarProps {}

const Navbar = () => {
  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const cartIds = useAppSelector(selectCartGameIds)
  const user = useAppSelector(selectUser)
  const cart = useAppSelector(selectCartGames)
  const purchased = useAppSelector(selectPurchasedGames)

  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { pathname } = useLocation()
  if (soloPaths.includes(pathname)) return <></>
  return (
    <nav className='sticky top-0 z-30 bg-gray-800'>
      <div className='container flex items-center justify-between py-4 mx-auto '>
        <div className='flex items-center'>
          <button
            type='button'
            className='block mr-2 md:hidden'
            onClick={() => setShowMenu((state) => !state)}
          >
            {showMenu ? (
              <FiX className='w-6 h-6' />
            ) : (
              <FiMenu className='w-6 h-6' />
            )}
          </button>
          <Link to='/' className='mr-2 font-bold uppercase'>
            Epic Clone
          </Link>
          <Link to='/browse' className='hidden mx-2 text-sm uppercase md:block'>
            Browse
          </Link>
          <Link to='/' className='hidden mx-2 text-sm uppercase md:block'>
            News
          </Link>
          <Link to='/' className='hidden mx-2 text-sm uppercase md:block'>
            Community
          </Link>
        </div>
        <div className='flex items-center'>
          <div className='items-center hidden mr-4 md:flex'>
            <FiSearch className='z-10 -mr-6' />
            <input
              type='search'
              placeholder='Search'
              className='p-2 pl-8 bg-gray-700 rounded'
            />
          </div>
          <button
            type='button'
            onClick={() => setShowSearch((state) => !state)}
          >
            <FiSearch className='block mx-2 md:hidden' />
          </button>
          <NavIcon
            IconComponent={FiShoppingCart}
            count={cartIds.length}
            linkTo='/cart'
            classes='h-full'
          />
          <NavIcon
            IconComponent={FiHeart}
            count={wishlistIds.length}
            linkTo='/wishlist'
            classes='h-full'
          />
          <Link to='/user' className='ml-2 text-xs uppercase'>
            {/* <div className='hidden md:block'>{user.displayName}</div> */}
            <div className='block '>
              <img src={Image} alt='' className='w-8 h-8 rounded-full' />
            </div>
          </Link>
        </div>
      </div>
      {showSearch && (
        <div className='flex items-center w-full px-2 py-2 mx-2 md:hidden'>
          <FiSearch className='z-10 -mr-6' />
          <input
            type='search'
            placeholder='Search'
            className='w-full p-2 pl-8 bg-gray-700 rounded'
          />
        </div>
      )}
      {showMenu && (
        <div className='w-full p-2 md:hidden'>
          <Link
            to='/'
            className='block py-2 text-sm uppercase hover:bg-gray-700 hover:pl-2'
          >
            Browse
          </Link>
          <Link
            to='/'
            className='block py-2 text-sm uppercase hover:bg-gray-700 hover:pl-2'
          >
            News
          </Link>
          <Link
            to='/'
            className='block py-2 text-sm uppercase hover:bg-gray-700 hover:pl-2'
          >
            Community
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
