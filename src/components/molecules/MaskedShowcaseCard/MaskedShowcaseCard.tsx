import { Link } from 'react-router-dom'

import { getImageUrl } from '@utils/index'

export interface IMaskedShowcaseCardProps {
  id: string
  comment: string
  keyUnit: string
}

const MaskedShowcaseCard = ({
  id,
  comment,
  keyUnit,
}: IMaskedShowcaseCardProps) => (
  <Link
    className='flex-shrink-0 w-1/5 overflow-hidden min-w-72'
    to={`/game/${id}`}
  >
    <div className='relative w-full overflow-hidden rounded-lg shadow-xl aspect-w-9 aspect-h-12'>
      <img
        src={getImageUrl(id).imageUrl}
        className='absolute object-cover w-full h-full'
        alt=''
      />
      <div className='absolute bg-gradient-to-t from-black via-transparent to-transparent ' />
    </div>
    <div className='z-10 flex flex-col items-end w-full -mt-10 text-right filter drop-shadow-2xl'>
      <div className='text-6xl font-black text-transparent bg-clip-text drop-shadow-lg bg-gradient-to-tr from-blue-600 via-blue-700 to-green-700'>
        {keyUnit}
      </div>
      <div className='text-xl leading-tight text-transparent max-w-xxs bg-clip-text bg-gradient-to-tr from-primary-500 to-blue-500'>
        {comment}
      </div>
      <div className='my-3' />
      {/* <div className='my-3 text-xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-primary-500 to-blue-500'>
        {title}
      </div> */}
    </div>
  </Link>
)

export default MaskedShowcaseCard
