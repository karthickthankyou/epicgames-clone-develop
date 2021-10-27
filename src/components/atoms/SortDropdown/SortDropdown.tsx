import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from 'src/assets'
import { selectSortIndex, setSelectsortIndex } from 'src/store/browseGames'
import { useAppDispatch, useAppSelector } from 'src/store'
import { sortByOptions } from 'src/types/static'

export interface ISortDropdownProps {}

// : { displayText: string; sortKey; sortOrder }

const SortDropdown = () => {
  const dispatch = useAppDispatch()
  const selectedIndex = useAppSelector(selectSortIndex)
  const [open, setOpen] = useState(false)

  return (
    <div className='relative z-20'>
      <button
        type='button'
        aria-label='sortByOptions'
        className='flex items-center justify-between w-full py-2'
        onClick={() => setOpen((state) => !state)}
      >
        <span className='mr-2 text-gray-300'>Sortby: </span>
        {sortByOptions[+selectedIndex].displayText}
        {open ? (
          <ChevronUpIcon
            className='inline w-4 h-4 ml-2 text-gray-300'
            aria-label='sortIconChevUp'
          />
        ) : (
          <ChevronDownIcon
            className='inline w-4 h-4 ml-2 text-gray-300'
            aria-label='sortIconChevDown'
          />
        )}
      </button>
      {open && (
        <div
          className='absolute inset-x-0 bg-gray-800 top-full'
          data-testid='sortOptionsList'
        >
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
