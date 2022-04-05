import { useState } from 'react'
import { ReactComponent as ChevronDown } from '@assets/svgs/chevron-down.svg'
import { ReactComponent as ChevronUp } from '@assets/svgs/chevron-up.svg'
import { selectSortIndex, setSelectsortIndex } from '@store/browseGamesSlice'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { sortByOptions } from '@epictypes/static'

export interface ISortDropdownProps {
  sortByOptions: string[]
}

// : { displayText: string; sortKey; sortOrder }

const SortDropdown = () => {
  const dispatch = useAppDispatch()
  const selectedIndex = useAppSelector(selectSortIndex)
  const [open, setOpen] = useState(false)

  return (
    <div className='relative z-20 p-3'>
      <button
        type='button'
        className='flex items-center justify-between w-full'
        onClick={() => setOpen((state) => !state)}
      >
        <span className='mr-2 text-gray-300'>Sortby: </span>
        {sortByOptions[+selectedIndex].displayText}
        {open ? (
          <ChevronUp className='inline w-4 h-4 ml-2 text-gray-300' />
        ) : (
          <ChevronDown className='inline w-4 h-4 ml-2 text-gray-300' />
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
