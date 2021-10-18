import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useAppDispatch } from 'src/store'
import { ReactComponent as Check } from 'src/assets/svgs/check.svg'
import { GameGenre, Platform, GameSection } from 'src/types'
import AccordionHeader from '../AccordionHeader'

export interface ICategoryFilterProps {}

const CategoryFilter = <T extends GameGenre | Platform | GameSection>({
  name,
  options,
  action,
  displayState,
  facet,
}: {
  name: string
  options: T[]
  // T extends GameGenre | Platform |
  action: ActionCreatorWithPayload<T>
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
                <Check
                  data-testid='itemSelected'
                  className='absolute left-0 w-3 h-3 ml-2 text-gray-500'
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryFilter
