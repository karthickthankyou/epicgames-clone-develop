import { setBrowsePageNumber } from 'src/store/browseGames'
import { useAppDispatch } from 'src/store'
import { getPaginationNumbers } from 'src/utils/index'

export interface IPaginationProps {
  current: number
  total: number
  classes?: string
}

const Pagination = ({ current, total, classes = '' }: IPaginationProps) => {
  const currentPage = current + 1
  const items = getPaginationNumbers(currentPage, total)
  const dispatch = useAppDispatch()
  return (
    <nav
      className={`relative z-0 inline-flex space-x-1 rounded-md shadow-sm ${classes}`}
    >
      {items.map(({ item, key }) => (
        <button
          type='button'
          key={key}
          className={`relative w-8 h-8 rounded  ${
            item === currentPage && 'bg-primary-700'
          }
          ${item === '...' ? 'cursor-default' : 'hover:bg-primary-700'}
        `}
          onClick={() => {
            let pageNumber = 0
            if (item === '>') {
              pageNumber = currentPage + 1
            } else if (item === '<') {
              pageNumber = currentPage - 1
            } else if (item === '...') {
              // Do nothing
            } else {
              pageNumber = item
            }
            dispatch(setBrowsePageNumber(pageNumber - 1))
          }}
        >
          <div className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '>
            {item}
          </div>
        </button>
      ))}
    </nav>
  )
}

export default Pagination
