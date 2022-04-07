import { useEffect, useMemo, useState } from 'react'
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
import FilterIcon from '@heroicons/react/solid/FilterIcon'

import Heading from '@atoms/Heading'
import { SkeletonCard01 } from '@molecules/GameCard01/GameCard01'
import Sidebar from '@molecules/Sidebar/Sidebar'
import MessageWrapper from '@molecules/MessageWrapper'

export interface IBrowseGamesProps {}

const BrowseGames = () => {
  useDocumentTitle('Browse Games | Karthick Ragavendran')
  const { currentPage, totalPages } = useAppSelector(selectBrowsePagination)
  const { loading, error } = useAppSelector(selectBrowseGames)
  const games = useAppSelector(selectBrowseGamesWithWish)

  console.log(currentPage, totalPages, loading, error, games)

  const dispatch = useAppDispatch()

  const searchGames = (e: any) => {
    // Debounce https://dmitripavlutin.com/react-throttle-debounce/
    // Debounce example http://demo.nimius.net/debounce_throttle/
    const searchTerm = e.target.value
    dispatch(setSearchTerm(searchTerm))
  }

  const [open, setOpen] = useState(false)
  const debouncedEventHandler = useMemo(() => debounce(searchGames, 1000), [])

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //   })
  // })

  if (error) {
    return (
      <MessageWrapper>
        <div className='max-w-xs text-left'>
          <div className='text-xl font-bold'>
            Sorry. Something went wrong <br /> on our side.
          </div>
          <div className='mt-2 text-sm'>
            Please be patient and retry again.{' '}
          </div>
        </div>
      </MessageWrapper>
    )
  }
  return (
    <div>
      <Sidebar overlayBlur open={open} setOpen={setOpen}>
        <Sidebar.Body>
          <BrowseFilters className='w-full mt-4' />
        </Sidebar.Body>
      </Sidebar>
      <Heading variant='heading-1' headerType='h1' classes='mt-2'>
        Browse Games
      </Heading>

      <div className='flex-row-reverse gap-6 mt-6 md:flex'>
        <BrowseFilters className='hidden w-80 md:block' />
        <div className='flex-grow'>
          <div className='flex items-center justify-start mb-2'>
            <div className='flex items-center'>
              <input
                type='search'
                placeholder='Search'
                className='py-2 pl-2 pr-6 bg-gray-800 rounded'
                onChange={debouncedEventHandler}
              />
              <SearchIcon className='z-10 w-4 h-4 -ml-7' />
            </div>
            <button
              type='button'
              onClick={() => setOpen((state) => !state)}
              className='block ml-4 md:hidden'
            >
              <FilterIcon className='w-6 h-6 p-1' />
            </button>
            <div className='ml-auto'>
              <SortDropdown />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
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
