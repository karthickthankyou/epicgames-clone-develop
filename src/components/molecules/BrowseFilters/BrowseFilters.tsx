// import { useState } from 'react'
import { useImmer } from 'use-immer'
import { FaChevronUp, FaChevronDown, FaCheck } from 'react-icons/fa'

export interface IBrowseFiltersProps {}

const genres = [
  'Action',
  'Adventure',
  'Indie',
  'RPG',
  'Strategy',
  'Open World',
  'Shooter',
  'Puzzle',
  'First Person',
  'Narration',
  'Simulation',
  'Casual',
  'Turn-Based',
  'Exploration',
  'Horror',
  'Platformer',
  'Party',
  'Survival',
  'Trivia',
  'City Builder',
  'Stealth',
  'Fighting',
  'Comedy',
  'Action-Adventure',
  'Racing',
  'Rogue-Lite',
  'Card Game',
  'Sports',
]

const prices = [
  'Free',
  'Under ₹750.00',
  'Under ₹1,500.00',
  'Under ₹2,250.00',
  '₹1,099.00 and above',
  'Discounted',
]

const allFilters = [
  {
    name: 'events',
    options: ['Epic MEGA Sale'],
  },
  {
    name: 'price',
    options: prices,
  },
  {
    name: 'genre',
    options: genres,
  },
  {
    name: 'features',
    options: [
      'Single Player',
      'Controller Support',
      'Multiplayer',
      'Co-op',
      'Competitive',
      'VR',
    ],
  },
  {
    name: 'categories',
    options: [
      'Game',
      'Game Bundle',
      'Editor',
      'Game Add-On',
      'Game Demo',
      'Software',
    ],
  },
  {
    name: 'platforms',
    options: ['Windows', 'Mac OS'],
  },
]

const initialFilters: string[] = []

const BrowseFilters = () => {
  const [categories, updateCategories] = useImmer<string[]>([])
  const [filters, updateFilters] = useImmer(initialFilters)

  return (
    <div className='w-80'>
      <div className='flex justify-between p-3'>
        <div className='capitalize'>
          filters {filters.length > 0 && <> ({filters.length})</>}
        </div>
        {filters.length > 0 && (
          <button
            type='button'
            onClick={() => {
              updateCategories([])
              updateFilters([])
            }}
            className='uppercase'
          >
            reset
          </button>
        )}
      </div>
      <div>
        {allFilters.map((filter) => (
          <div key={filter.name} className='border-t border-b border-gray-700 '>
            <button
              type='button'
              className='flex justify-between w-full px-3 py-2 text-sm font-thin tracking-widest text-left text-gray-300 uppercase border-b border-gray-800'
              key={filter.name}
              onClick={() =>
                updateCategories((state) =>
                  state.includes(filter.name)
                    ? state.filter((s) => s !== filter.name)
                    : [...state, filter.name]
                )
              }
            >
              {filter.name}
              {categories.includes(filter.name) ? (
                <FaChevronDown className='w-5 h-5 ml-auto mr-2 text-gray-500' />
              ) : (
                <FaChevronUp className='w-5 h-5 ml-auto mr-2 text-gray-500' />
              )}
            </button>
            <div>
              {categories.includes(filter.name) &&
                filter.options.map((option) => (
                  <div className='flex items-center'>
                    <button
                      type='button'
                      key={option}
                      className={`py-1.5 px-6 items-center flex w-full text-gray-400 text-left flex-grow ${
                        filters.includes(option) && 'bg-gray-800'
                      }`}
                      onClick={() =>
                        updateFilters((draft) => {
                          if (prices.includes(option))
                            return draft.filter(
                              (s) =>
                                !prices
                                  .filter((price) => price !== option)
                                  .includes(s)
                            )

                          return draft.includes(option)
                            ? draft.filter((s) => s !== option)
                            : [...draft, option]
                        })
                      }
                    >
                      {option}
                      {filters.includes(option) && (
                        <FaCheck className='w-4 h-4 ml-auto mr-2 text-gray-200' />
                      )}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrowseFilters
