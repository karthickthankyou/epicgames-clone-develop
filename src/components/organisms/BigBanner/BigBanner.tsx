import image from '@assets/game.jpg'
import { getImageUrl } from '@utils/index'
import { Link } from 'react-router-dom'

export interface IBigBannerProps {
  id: string
  title: string
  description: string
}

const BigBanner = ({ id, title, description }: IBigBannerProps) => (
  <div className='relative w-full overflow-hidden h-96'>
    <div className='absolute inset-0 bg-gradient-to-tr from-black to-transparent'>
      <img
        className='object-cover w-full h-full'
        src={getImageUrl(id).imageUrl}
        alt=''
      />
    </div>
    <div className='absolute inset-0 bg-gradient-to-tr from-black to-transparent' />
    <div className='absolute flex flex-col justify-end h-full p-10'>
      <div className='text-lg font-bold'>{title}</div>
      <div className='max-w-xs mt-2 text-xs text-gray-300'>{description}</div>
      <Link
        to={`/game/${id}`}
        className='inline-block mt-6 text-xs text-center uppercase border btn-lg'
      >
        PLAY FREE NOW
      </Link>
    </div>
  </div>
)

export default BigBanner
