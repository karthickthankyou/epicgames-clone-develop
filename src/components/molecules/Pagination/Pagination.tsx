import { getPaginationNumbers } from '../../../utils'

export interface IPaginationProps {
  current: number
  total: number
}

const Pagination = ({ current, total }: IPaginationProps) => {
  const items = getPaginationNumbers(current, total)
  return (
    <nav className='relative z-0 inline-flex space-x-1 rounded-md shadow-sm'>
      {items.map(({ item, key }) => (
        <button
          type='button'
          key={key}
          className={`relative w-8 h-8 rounded  ${
            item === current && 'bg-blue-700'
          }
          ${item === '...' ? 'cursor-default' : 'hover:bg-blue-700'}
        `}
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
