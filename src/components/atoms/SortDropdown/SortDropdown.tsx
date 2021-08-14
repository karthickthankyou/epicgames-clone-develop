import { OrderByDirection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'
import { setSortKeyAndOrder } from '../../../store/browseGamesSlice'
import { useAppDispatch } from '../../../store/hooks'
import { SortKey } from '../../../types'

export interface ISortDropdownProps {
  sortByOptions: string[]
}

// : { displayText: string; sortKey; sortOrder }
const sortByOptions: {
  displayText: string
  sortKey: SortKey
  sortOrder: OrderByDirection
}[] = [
  { displayText: 'On Sale', sortKey: 'discount', sortOrder: 'desc' },
  { displayText: 'Recently Added', sortKey: 'releaseDate', sortOrder: 'desc' },
  { displayText: 'Alphabetical', sortKey: 'title', sortOrder: 'asc' },
  { displayText: 'Price: Low to High', sortKey: 'price', sortOrder: 'asc' },
  { displayText: 'Price: High to Low', sortKey: 'price', sortOrder: 'desc' },
]

const SortDropdown = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {
    const { sortKey, sortOrder } = sortByOptions[selectedIndex]
    dispatch(setSortKeyAndOrder({ sortKey, sortOrder }))
  }, [selectedIndex])

  return (
    <div className='relative z-20'>
      <button
        type='button'
        className='flex items-center justify-between w-full p-2'
        onClick={() => setOpen((state) => !state)}
      >
        <span className='mr-2 text-gray-300'>Sortby: </span>
        {sortByOptions[selectedIndex].displayText}
        {open ? (
          <FaChevronCircleUp className='inline w-5 h-5 ml-2' />
        ) : (
          <FaChevronCircleDown className='inline w-5 h-5 ml-2' />
        )}
      </button>
      {open && (
        <div className='absolute inset-x-0 bg-gray-800 top-full'>
          {sortByOptions.map((option, index) => (
            <button
              type='button'
              key={option.displayText}
              className={`block w-full p-2 text-left  hover:bg-gray-700  ${
                index === selectedIndex
                  ? ' underline text-gray-100'
                  : 'text-gray-400'
              }`}
              onClick={() => {
                setSelectedIndex(index)
                setOpen(false)
              }}
            >
              {option.displayText}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortDropdown
