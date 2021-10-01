/* eslint-disable no-lone-blocks */
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
// import debounce from 'lodash.debounce'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { ReactComponent as ChevronDown } from '@assets/svgs/chevron-down.svg'
import { ReactComponent as ChevronUp } from '@assets/svgs/chevron-up.svg'
import { ReactComponent as Check } from '@assets/svgs/check.svg'
import {
  setFilterDiscountRange,
  setFilterPriceRange,
  setFilterRatingRange,
  setFilterPlatforms,
  setFilterEvents,
  setFilterTags,
  selectFilterTags,
  selectFilterEvents,
  selectFilterPlatforms,
  setFiltersToInitial,
  selectFilterPriceRange,
  selectFilterDiscountRange,
  selectFilterRatingRange,
  selectBrowseFacets,
} from '@store/browseGamesSlice'

export interface IBrowseFiltersProps {}

const AccordionHeader = ({
  name,
  open,
  setOpen,
}: {
  name: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => (
  <button
    type='button'
    className={` flex justify-between w-full p-4 tracking-widest text-left text-gray-300 uppercase ${
      open && 'bg-gray-800 '
    }`}
    onClick={() => setOpen((state) => !state)}
  >
    {name}
    {open ? (
      <ChevronUp className='w-4 h-4 ml-auto text-gray-200' />
    ) : (
      <ChevronDown className='w-4 h-4 ml-auto text-gray-500' />
    )}
  </button>
)

const RangeFilter = ({
  name,
  min,
  max,
  minDistance = 10,
  steps = 1,
  action,
  displayState,
}: {
  name: string
  min: number
  max: number
  minDistance?: number
  steps?: number
  action: ActionCreatorWithPayload<[number, number] | null, string>
  displayState?: [number, number] | null
}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  // We need this local state to show onChange as we store onAfterChange in redux store
  const [valuePair, setValuePair] = useState([min, max])

  useEffect(() => {
    const minValue = displayState ? displayState[0] : min
    const maxValue = displayState ? displayState[1] : max
    setValuePair([minValue, maxValue])
  }, [displayState])

  return (
    <div>
      <AccordionHeader name={name} open={open} setOpen={setOpen} />
      {open && (
        <div className='w-full px-4 py-4 mb-4 text-left text-gray-400'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center justify-center w-12 h-6 text-gray-300 bg-gray-800 rounded shadow-inner '>
              {valuePair[0]}
            </div>
            <div>-</div>
            <div className='flex items-center justify-center w-12 h-6 text-gray-300 bg-gray-800 rounded shadow-inner '>
              {valuePair[1]}{' '}
            </div>
          </div>
          <ReactSlider
            className='flex text-white bg-gray-700 rounded cursor-pointer'
            thumbActiveClassName='z-10'
            thumbClassName='bg-gray-400 text-xs hover:bg-white border-4 border-gray-900 transform shadow-lg -translate-y-1/2 rounded-full flex h-6 w-6 items-center justify-center '
            trackClassName='bg-gray-500 h-0.5 rounded '
            markClassName='bg-blue-600'
            withTracks
            defaultValue={[valuePair[0], valuePair[1]]}
            value={[valuePair[0], valuePair[1]]}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            min={min}
            max={max}
            step={steps}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            pearling
            minDistance={minDistance}
            onAfterChange={(value) => dispatch(action([value[0], value[1]]))}
            onChange={(value) => {
              setValuePair(value)
            }}
          />
        </div>
      )}
    </div>
  )
}

const CategoryFilter = ({
  name,
  options,
  action,
  displayState,
  facet,
}: {
  name: string
  options: string[]
  action: ActionCreatorWithPayload<string, string>
  displayState: string[]
  facet: { [key: string]: number }
}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  return (
    <div>
      <AccordionHeader name={name} open={open} setOpen={setOpen} />
      {open && (
        <div>
          {options.map((option) => (
            <button
              type='button'
              key={option}
              className={`flex relative items-center flex-grow w-full px-6 py-4 text-left ${
                displayState.includes(option)
                  ? 'text-gray-200'
                  : 'text-gray-400'
              }`}
              onClick={() => dispatch(action(option))}
            >
              {option}
              <div className='ml-auto'>
                {/* eslint-disable-next-line no-nested-ternary */}
                {facet
                  ? Object.prototype.hasOwnProperty.call(facet, option)
                    ? facet[+option]
                    : 0
                  : 0}
              </div>
              {displayState.includes(option) && (
                <Check className='absolute left-0 w-3 h-3 ml-2 text-gray-500' />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

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
const platforms = ['Windows', 'Mac OS']

const events = ['RECENTLY_UPDATED', 'HIGHEST_DISCOUNT', 'TOP_SELLER']
// 'Epic MEGA Sale',
// 'Highest Discount Ever',

const BrowseFilters = () => {
  const filterEvents = useAppSelector(selectFilterEvents)
  const filterTags = useAppSelector(selectFilterTags)
  const filterPlatforms = useAppSelector(selectFilterPlatforms)
  const filterPriceRange = useAppSelector(selectFilterPriceRange)
  const filterDiscountRange = useAppSelector(selectFilterDiscountRange)
  const filterRatingRange = useAppSelector(selectFilterRatingRange)

  const {
    tags: tagsFacet,
    notes: notesFacet,
    platform: platformFacet,
  } = useAppSelector(selectBrowseFacets)

  const dispatch = useAppDispatch()

  const filtersLength =
    filterEvents.length +
    filterTags.length +
    filterPlatforms.length +
    (filterPriceRange ? 1 : 0) +
    (filterDiscountRange ? 1 : 0) +
    (filterRatingRange ? 1 : 0)

  return (
    <div className='text-xs w-80'>
      <div className='flex justify-between p-4'>
        <div className='text-gray-400 uppercase'>
          filters {filtersLength > 0 && <> ({filtersLength})</>}
        </div>
        <button
          type='button'
          disabled={filtersLength === 0}
          className={`uppercase ${
            filtersLength > 0
              ? 'text-white cursor-pointer'
              : 'text-gray-400 cursor-auto'
          }`}
          onClick={() => dispatch(setFiltersToInitial())}
        >
          reset
        </button>
      </div>
      <div>
        <CategoryFilter
          action={setFilterEvents}
          displayState={filterEvents}
          name='events'
          options={events}
          facet={notesFacet}
        />
        <RangeFilter
          action={setFilterPriceRange}
          name='price'
          min={0}
          max={4500}
          steps={10}
          displayState={filterPriceRange}
        />
        <RangeFilter
          action={setFilterDiscountRange}
          name='discount'
          min={0}
          max={100}
          displayState={filterDiscountRange}
        />
        <RangeFilter
          action={setFilterRatingRange}
          name='rating'
          min={0}
          max={100}
          displayState={filterRatingRange}
        />
        <CategoryFilter
          displayState={filterTags}
          action={setFilterTags}
          name='genre'
          options={genres}
          facet={tagsFacet}
        />
        <CategoryFilter
          displayState={filterPlatforms}
          action={setFilterPlatforms}
          name='platform'
          options={platforms}
          facet={platformFacet}
        />
      </div>
    </div>
  )
}

export default BrowseFilters
