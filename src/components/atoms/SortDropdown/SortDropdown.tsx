import { useEffect, useState } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'

export interface ISortDropdownProps {
  sortByOptions: string[]
}

// type ISortbyOptions =
//   | 'Relevance'
//   | 'New Release'
//   | 'Release Date'
//   | 'Alphabetical'
//   | 'Price: Low to High'
//   | 'Price: High to Low'

const SortDropdown = ({ sortByOptions = [] }: ISortDropdownProps) => {
  const [open, setOpen] = useState(false)
  const [sortby, setSortby] = useState<string>('')

  useEffect(() => {
    setSortby(sortByOptions[0])
  }, [sortByOptions])

  return (
    <div className='relative z-20'>
      <button
        type='button'
        className='flex items-center justify-between w-full p-2'
        onClick={() => setOpen((state) => !state)}
      >
        <span className='mr-2 text-gray-300'>Sortby: </span> {sortby}
        {open ? (
          <FaChevronCircleUp className='inline w-5 h-5 ml-2' />
        ) : (
          <FaChevronCircleDown className='inline w-5 h-5 ml-2' />
        )}
      </button>
      {open && (
        <div className='absolute inset-x-0 bg-gray-800 top-full'>
          {sortByOptions.map((option) => (
            <button
              type='button'
              key={option}
              className={`block w-full p-2 text-left  hover:bg-gray-700  ${
                option === sortby ? ' underline text-gray-100' : 'text-gray-400'
              }`}
              onClick={() => {
                setSortby(option)
                setOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortDropdown
