import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import ReactSlider from 'react-slider'
import { useAppDispatch } from 'src/store'
import AccordionHeader from '../AccordionHeader'

export interface IRangeFilterProps {}

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
  action: ActionCreatorWithPayload<[number, number] | null>
  minDistance?: number
  steps?: number
  displayState?: [number, number] | null
}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  // We need this local state to show onChange as we store onAfterChange in redux store
  const [valuePair, setValuePair] = useState([min, max])

  useEffect(() => {
    const minValue = (displayState && displayState[0]) || min
    const maxValue = (displayState && displayState[1]) || max

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

export default RangeFilter
