import { selectGames2 } from '../../../store/gamesSlice'
import { useAppSelector } from '../../../store/hooks'
import SortDropdown from '../../atoms/SortDropdown'
import GameCard01 from '../../molecules/GameCard01'
import Pagination from '../../molecules/Pagination'
import BrowseFilters from '../../molecules/BrowseFilters'

export interface IBrowseGamesProps {}

const BrowseGames = () => {
  const games = useAppSelector(selectGames2)
  return (
    <div>
      <div className='flex items-start my-4'>
        <SortDropdown />
      </div>
      <div className='flex mt-6'>
        <div className='flex-grow'>
          <div className='grid grid-cols-2 gap-4 mr-6 sm:grid-cols-3 lg:grid-cols-4'>
            {games.map((game) => (
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
