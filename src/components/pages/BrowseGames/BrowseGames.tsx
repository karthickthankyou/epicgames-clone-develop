import { useEffect, useMemo } from 'react'
import {
  selectBrowseGames,
  selectBrowseGamesWithWish,
  selectBrowsePagination,
  setSearchTerm,
} from '@store/browseGamesSlice'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import SortDropdown from '@atoms/SortDropdown'
import GameCard01 from '@molecules/GameCard01'
import debounce from 'lodash.debounce'
import Pagination from '@molecules/Pagination'
import BrowseFilters from '@molecules/BrowseFilters'
import { useDocumentTitle } from '@hooks/index'
import SearchIcon from '@heroicons/react/outline/SearchIcon'

import SkeletonCard01 from '@molecules/SkeletonCard01'
import Heading from '@atoms/Heading'

export interface IBrowseGamesProps {}

const BrowseGames = () => {
  useDocumentTitle('Browse Games')
  const { currentPage, totalPages } = useAppSelector(selectBrowsePagination)
  const { loading, error } = useAppSelector(selectBrowseGames)
  const games = useAppSelector(selectBrowseGamesWithWish)
  const dispatch = useAppDispatch()

  const searchGames = (e: any) => {
    // Debounce https://dmitripavlutin.com/react-throttle-debounce/
    // Debounce example http://demo.nimius.net/debounce_throttle/
    const searchTerm = e.target.value
    dispatch(setSearchTerm(searchTerm))
  }
  const debouncedEventHandler = useMemo(() => debounce(searchGames, 1000), [])

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   })
  // })

  if (error) {
    return <div>Something went wrong.</div>
  }
  return (
    <div>
      <Heading variant='heading-1' headerType='h1' classes='mt-2'>
        Browse Games
      </Heading>

      <div className='flex-row-reverse mt-6 md:flex'>
        <BrowseFilters />
        <div className='flex-grow'>
          <div className='flex items-start justify-between mb-2'>
            <div className='flex items-center'>
              <SearchIcon className='z-10 w-4 h-4 -mr-6' />
              <input
                type='search'
                placeholder='Search'
                className='p-2 pl-8 bg-gray-700 rounded'
                onChange={debouncedEventHandler}
              />
            </div>
            <SortDropdown />
          </div>
          <div className='grid grid-cols-2 gap-4 mr-6 sm:grid-cols-3 lg:grid-cols-4'>
            {loading &&
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((id) => (
                <SkeletonCard01 key={id} />
              ))}
            {games?.length > 0 &&
              games.map((game) => (
                <GameCard01
                  key={game.id}
                  game={game}
                  // review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
                />
              ))}
          </div>
          <div className='flex justify-center my-16'>
            <Pagination current={currentPage} total={totalPages} />
          </div>
        </div>
      </div>
      {/* {instantsearch.widgets.poweredBy({ container: '#powered-by' })} */}
    </div>
  )
}

export default BrowseGames
