import { useEffect, useState } from 'react'
import dateFormat from 'dateformat'
import { calculateTimeLeft, ICounter } from '../../../utils'

export interface IGameCard04Props {
  gameTitle: string
  displayImage: string
  date: string
  free?: boolean
  classes?: string
}

const GameCard04 = ({
  gameTitle,
  displayImage,
  free = false,
  date,
  classes,
}: IGameCard04Props) => {
  const { text, bgColor } = free
    ? {
        text: 'Free Now',
        bgColor: 'bg-blue-600',
      }
    : {
        text: 'Mystery Game',
        bgColor: 'bg-gray-700',
      }

  const [counter, setCounter] = useState<ICounter>(calculateTimeLeft(date))

  useEffect(() => {
    const timer = setTimeout(() => setCounter(calculateTimeLeft(date)), 1000)
    return () => clearTimeout(timer)
  }, [counter, date])

  return (
    <div className={`w-full ${classes}`}>
      <img
        src={displayImage}
        className='object-cover w-full rounded-t-lg cursor-pointer h-72 filter hover:brightness-125'
        alt=''
      />
      <div
        className={`flex justify-center p-1 text-sm tracking-wider uppercase rounded-b-lg ${bgColor}`}
      >
        {text}
      </div>

      <div className='mt-4'>
        {free ? (
          <>
            <div>{gameTitle}</div>
            <div className='text-sm text-gray-300'>
              Free Now - {dateFormat(date, 'mmm d "at" h:MM TT')}
            </div>
          </>
        ) : (
          <div className='flex items-center justify-center h-12 font-mono'>
            Unlocking in{' '}
            {`${counter.days}:${counter.hours}:${counter.minutes}:${counter.seconds}`}
          </div>
        )}
      </div>
    </div>
  )
}

export default GameCard04
