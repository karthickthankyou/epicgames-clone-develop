import { useEffect } from 'react'
import {
  selectBrowseGames,
  selectBrowseGamesWithWish,
  selectBrowsePagination,
} from '../../../store/browserGames/browseGamesSelectors'
import { useAppDispatch, useAppSelector } from '../../../store'
import SortDropdown from '../../atoms/SortDropdown'
import GameCard01 from '../../molecules/GameCard01'
import Pagination from '../../molecules/Pagination'
import BrowseFilters from '../../molecules/BrowseFilters'
import { useDocumentTitle } from '../../../hooks/index'

import SkeletonCard01 from '../../molecules/SkeletonCard01'
import Heading from '../../atoms/Heading'

export interface IBrowseGamesProps {}

const BrowseGames = () => {
  useDocumentTitle('Browse Games')
  const { currentPage, totalPages } = useAppSelector(selectBrowsePagination)
  const { loading, error } = useAppSelector(selectBrowseGames)
  const { data: games } = useAppSelector(selectBrowseGamesWithWish)

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  })

  if (error) {
    return <div>Something went wrong.</div>
  }
  return (
    <div>
      <Heading variant='heading-1' headerType='h1' classes='mt-2'>
        Browse Games
      </Heading>
      <div className='flex items-start my-4'>
        <SortDropdown />
      </div>
      <div className='flex mt-6'>
        <div className='flex-grow'>
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
        <BrowseFilters />
      </div>
      {/* {instantsearch.widgets.poweredBy({ container: '#powered-by' })} */}
    </div>
  )
}

export default BrowseGames
