import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingCart, FiMenu, FiX, FiHeart, FiSearch } from 'react-icons/fi'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
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
import { callSignOut } from '../../../firebase/hooks'
import { setSearchTerm } from '../../../store/browseGamesSlice'

export interface INavbarProps {}

const Navbar = () => {
  const wishlistIds = useAppSelector(selectWishlistGameIds)
  const dispatch = useAppDispatch()
  const cartIds = useAppSelector(selectCartGameIds)
  const { uid } = useAppSelector(selectUser)
  const cart = useAppSelector(selectCartGames)
  const purchased = useAppSelector(selectPurchasedGames)

  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { pathname } = useLocation()
  if (soloPaths.includes(pathname)) return <></>

  const searchGames = (e: any) => {
    const searchTerm = e.target.value
    dispatch(setSearchTerm(searchTerm))
    // // index.searchForFacetValues('discount', 'price', 'rating').then((res) => {
    // //   console.log('facetHits res', res)
    // // })
    // const t0 = performance.now()
    // index
    //   .search(searchTerm, {
    //     hitsPerPage: 24,
    //     facets: ['notes', 'platform', 'tags'],
    //     // filters: `tags:Action AND tags:Adventure AND platform:'Mac OS'`,
    //     numericFilters: [
    //       //   'price:239 TO 499',
    //       //   'discount:0 TO 80',
    //       //   'rating:69 TO 99',
    //     ],
    //     sumOrFiltersScores: true,
    //     page: 0,
    //     analytics: true,
    //   })
    //   .then((res) => {
    //     console.log(res)
    //     const t1 = performance.now()
    //     console.log(`Call to algolia took ${t1 - t0} milliseconds.`)
    //   })
  }

  return (
    <nav className='sticky top-0 z-30 text-gray-300 bg-gray-800'>
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
          <Link
            type='button'
            to='/browse'
            className='hidden mx-2 text-sm uppercase md:block'
          >
            Browse
          </Link>
          <Link
            type='button'
            to='/'
            className='hidden mx-2 text-sm uppercase md:block'
          >
            News
          </Link>
          <Link
            type='button'
            to='/'
            className='hidden mx-2 text-sm uppercase md:block'
          >
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
              onChange={searchGames}
            />
          </div>
          <button
            type='button'
            onClick={() => setShowSearch((state) => !state)}
          >
            <FiSearch className='block mx-2 md:hidden' />
          </button>
          {uid ? (
            <>
              <NavIcon
                IconComponent={FiShoppingCart}
                count={cartIds.length}
                linkTo='/cart'
                classes='h-full'
                ariaLabel='nav-cart-page-link'
              />
              <NavIcon
                IconComponent={FiHeart}
                count={wishlistIds.length}
                linkTo='/wishlist'
                classes='h-full'
                ariaLabel='nav-wishlist-page-link'
              />
              <div className='relative ml-2 text-xs uppercase group'>
                <button type='button' className='block '>
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
