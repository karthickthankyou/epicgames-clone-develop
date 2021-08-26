import { selectBrowseGames } from '../../../store/browseGamesSlice'
import { useAppSelector } from '../../../store/hooks'
import SortDropdown from '../../atoms/SortDropdown'
import GameCard01 from '../../molecules/GameCard01'
import Pagination from '../../molecules/Pagination'
import BrowseFilters from '../../molecules/BrowseFilters'
import { useDocumentTitle } from '../../../hooks'
import SkeletonCard01 from '../../molecules/SkeletonCard01'

export interface IBrowseGamesProps {}

const BrowseGames = () => {
  useDocumentTitle('Browse Games')
  const { games, loading, error } = useAppSelector(selectBrowseGames)

  if (error) {
    return <div>Something went wrong.</div>
  }
  return (
    <div>
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
            {games.length > 0 &&
              games.map((game) => (
                <GameCard01
                  key={game.id}
                  game={game}
                  // review='An open world you can get lost in and continue finding new things to do. An open world you can get lost in and continue finding new things to do'
                />
              ))}
          </div>
          <div className='flex justify-center my-16'>
            <Pagination current={1} total={10} />
          </div>
        </div>
        <BrowseFilters />
      </div>
    </div>
  )
}

export default BrowseGames
