import { useEffect, useState } from 'react'
import dateFormat from 'dateformat'
import { calculateTimeLeft, ICounter } from '@utils/index'
import { Link } from 'react-router-dom'

export interface IGameCard04Props {
  id?: string
  title: string
  imageUrl: string
  date: string
  free?: boolean
  classes?: string
}

const GameCard04 = ({
  id,
  title,
  imageUrl,
  free = false,
  date,
  classes,
}: IGameCard04Props) => {
  const { text, bgColor } = free
    ? {
        text: 'Free Now',
        bgColor: 'bg-primary',
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

  const mystery = !id

  const toRoute = mystery ? '/' : `/game/${id}`

  return (
    <Link
      to={toRoute}
      className={`w-full ${mystery && 'cursor-not-allowed'} ${classes}`}
    >
      <img
        src={imageUrl}
        className='object-cover w-full rounded-t-lg h-72 filter hover:brightness-125'
        alt=''
      />
      <div
        className={`flex justify-center p-1 mt-1 text-sm tracking-wider uppercase rounded-b-lg ${bgColor}`}
      >
        {text}
      </div>

      <div className='mt-4'>
        {free ? (
          <>
            <div className='font-bold'>{title}</div>
            <div className='mt-1 text-sm text-gray-300'>
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
    </Link>
  )
}

export default GameCard04
