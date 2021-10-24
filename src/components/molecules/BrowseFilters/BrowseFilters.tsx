/* eslint-disable no-lone-blocks */
import { GameGenre, GameSection, Platform } from 'src/types'

import { useAppDispatch, useAppSelector } from 'src/store'

import { genres, platforms, events } from 'src/types/static'
import { RangeFilter, CategoryFilter } from 'src/components/atoms'

import {
  setFilterDiscountRange,
  setFilterPriceRange,
  setFilterRatingRange,
  setFilterPlatforms,
  setFilterEvents,
  setFilterTags,
  setFiltersToInitial,
  selectFilterTags,
  selectFilterEvents,
  selectFilterPlatforms,
  selectFilterPriceRange,
  selectFilterDiscountRange,
  selectFilterRatingRange,
  selectBrowseFacets,
} from 'src/store/browserGames'

export interface IBrowseFiltersProps {}

const BrowseFilters = () => {
  const { range: filterEvents } = useAppSelector(selectFilterEvents)
  const { range: filterTags } = useAppSelector(selectFilterTags)
  const { range: filterPlatforms } = useAppSelector(selectFilterPlatforms)
  const { range: filterPriceRange } = useAppSelector(selectFilterPriceRange)
  const { range: filterDiscountRange } = useAppSelector(
    selectFilterDiscountRange
  )
  const { range: filterRatingRange } = useAppSelector(selectFilterRatingRange)

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
        <CategoryFilter<GameSection>
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
        <CategoryFilter<GameGenre>
          displayState={filterTags}
          action={setFilterTags}
          name='genre'
          options={genres}
          facet={tagsFacet}
        />
        <CategoryFilter<Platform>
          displayState={filterPlatforms}
          action={setFilterPlatforms}
          name='platform'
          options={platforms as Platform[]}
          facet={platformFacet}
        />
      </div>
    </div>
  )
}

export default BrowseFilters
