import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import {
  selectSortIndex,
  setSelectsortIndex,
} from '../../../store/browseGamesSlice'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { sortByOptions } from '../../../types/static'

export interface ISortDropdownProps {
  sortByOptions: string[]
}

// : { displayText: string; sortKey; sortOrder }

const SortDropdown = () => {
  const dispatch = useAppDispatch()
  const selectedIndex = useAppSelector(selectSortIndex)
  const [open, setOpen] = useState(false)

  return (
    <div className='relative z-20'>
      <button
        type='button'
        className='flex items-center justify-between w-full p-2'
        onClick={() => setOpen((state) => !state)}
      >
        <span className='mr-2 text-gray-300'>Sortby: </span>
        {sortByOptions[+selectedIndex].displayText}
        {open ? (
          <FaChevronUp className='inline w-4 h-4 ml-2 text-gray-300' />
        ) : (
          <FaChevronDown className='inline w-4 h-4 ml-2 text-gray-300' />
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
                dispatch(setSelectsortIndex(index))
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
