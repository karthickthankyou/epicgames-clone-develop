import { Link, useHistory, useLocation } from 'react-router-dom'
import { useMemo, useState } from 'react'

import { ReactComponent as CloseIcon } from '@assets/svgs/x.svg'
import { ReactComponent as SearchIcon } from '@assets/svgs/search.svg'

import { ReactComponent as MenuIcon } from '@assets/svgs/menu.svg'

import ShoppingCartIconSolid from '@heroicons/react/solid/ShoppingCartIcon'
import HeartIconSolid from '@heroicons/react/solid/HeartIcon'

import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
  selectCartGameIds,
  selectCartGames,
  selectPurchasedGames,
  selectWishlistGameIds,
} from '@store/userGameSlice'
import Image from '@assets/cyberpunk.png'

import { soloPaths } from '@utils/index'
import NavIcon from '@atoms/NavIcon'
import { selectUser } from '@store/userSlice'
import { callSignOut } from '@epicfirebase/hooks'

export interface INavbarProps {}

const Navbar = () => {
  const wishlistIds = useAppSelector(selectWishlistGameIds)

  const cartIds = useAppSelector(selectCartGameIds)
  const { uid } = useAppSelector(selectUser)
  const cart = useAppSelector(selectCartGames)
  const purchased = useAppSelector(selectPurchasedGames)

  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { pathname } = useLocation()

  const history = useHistory()

  if (soloPaths.includes(pathname)) return <></>

  return (
    <nav className='sticky top-0 z-30 text-gray-300 bg-gray-800'>
      <div className='container flex items-center justify-between py-4 mx-auto '>
        <div className='flex items-center'>
          <button
            type='button'
            className='block mr-2 md:hidden'
            onClick={() => setShowMenu((state) => !state)}
            aria-label='drawer'
          >
            {showMenu ? (
              <CloseIcon className='w-6 h-6' />
            ) : (
              <MenuIcon className='w-6 h-6' />
            )}
          </button>
          <Link to='/' className='mr-2 font-bold uppercase'>
            <div className='px-2 py-1 text-xl font-black tracking-tighter text-white bg-black'>
              EPIC
            </div>
          </Link>
          <Link
            type='button'
            to='/browse'
            className='hidden px-2 text-sm uppercase hover:text-white md:block'
          >
            Browse
          </Link>
          <Link
            type='button'
            to='/news'
            className='hidden px-2 text-sm uppercase hover:text-white md:block'
          >
            News
          </Link>
          <Link
            type='button'
            to='/community'
            className='hidden px-2 text-sm uppercase hover:text-white md:block'
          >
            Community
          </Link>
        </div>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={() => setShowSearch((state) => !state)}
            aria-label='search'
          >
            <SearchIcon className='block md:hidden' />
          </button>
          {uid ? (
            <>
              <NavIcon
                IconComponent={ShoppingCartIconSolid}
                count={cartIds.length}
                linkTo='/cart'
                classes='h-full'
                ariaLabel='nav-cart-page-link'
              />
              <NavIcon
                IconComponent={HeartIconSolid}
                count={wishlistIds.length}
                linkTo='/wishlist'
                classes='h-full'
                ariaLabel='nav-wishlist-page-link'
              />
              <div className='relative ml-2 text-xs uppercase group'>
                <button
                  type='button'
                  aria-label='profile picture'
                  className='block '
                >
                  <img src={Image} alt='' className='w-8 h-8 rounded-full' />
                </button>

                <div className='invisible group-hover:visible group-focus:visible'>
                  <div className='absolute right-0 flex flex-col capitalize bg-black border border-gray-700 rounded bg-opacity-80 top-full'>
                    <Link
                      className='p-2 text-left rounded-t hover:bg-gray-800 whitespace-nowrap'
                      to={`/user/${uid}`}
                    >
                      Account Settings
                    </Link>
                    <Link
                      className='p-2 text-left hover:bg-gray-800 whitespace-nowrap'
                      to='/library'
                    >
                      Library
                    </Link>
                    <button
                      type='button'
                      className='p-2 text-left rounded-b hover:bg-gray-800'
                      onClick={callSignOut}
                    >
                      Signout
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link role='button' to='/signin'>
              Login
            </Link>
          )}
        </div>
      </div>
      {showSearch && (
        <div className='flex items-center w-full px-2 py-2 md:hidden'>
          <SearchIcon className='z-10 -mr-6' />
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
            to='/browse'
            className='block py-2 text-sm uppercase hover:bg-gray-700 hover:pl-2'
          >
            Browse
          </Link>
          <Link
            to='/news'
            className='block py-2 text-sm uppercase hover:bg-gray-700 hover:pl-2'
          >
            News
          </Link>
          <Link
            to='/community'
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
