import { Link } from 'react-router-dom'
import { Game } from 'src/types'

export interface IMaskedShowcaseCardProps {
  game: Game
  comment: string
  keyUnit: keyof Game
}

const MaskedShowcaseCard = ({
  game,
  comment,
  keyUnit,
}: IMaskedShowcaseCardProps) => {
  const { imageUrl, title, id, [keyUnit]: key } = game
  return (
    <Link className='flex-shrink-0 w-56 overflow-hidden' to={`/game/${id}`}>
      <div className='w-full overflow-hidden rounded-lg shadow-lg aspect-w-9 aspect-h-12'>
        <img
          src={imageUrl}
          className='object-cover w-full h-full -z-10'
          alt=''
        />
      </div>
      <div className='z-10 w-full -mt-10 font-black text-right filter drop-shadow-2xl'>
        <div className='text-transparent text-7xl bg-clip-text drop-shadow-lg bg-gradient-to-tr from-blue-600 via-blue-700 to-green-700'>
          {key}
        </div>
        <div className='-my-2 text-transparent bg-clip-text bg-gradient-to-tr from-primary-500 to-blue-500'>
          {comment}
        </div>
        <div className='my-3 text-xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-primary-500 to-blue-500'>
          {title}
        </div>
      </div>
    </Link>
  )
}

export default MaskedShowcaseCard
