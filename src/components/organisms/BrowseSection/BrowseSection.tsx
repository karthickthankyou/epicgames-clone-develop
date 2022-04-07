import { getImageUrl } from '@utils/index'
import { Link, NavLink } from 'react-router-dom'

export interface IBrowseSectionProps {}

const ImageContainer = ({
  id,
  className,
}: {
  id: string
  className?: string
}) => (
  <Link
    to={`game/${id}`}
    className={`absolute rotate w-48 h-6 transform   ${className}`}
  >
    <div
      style={{ bottom: '1000%' }}
      className='absolute text-black transform bg-white rounded-lg hover:shadow-xl transition-all hover:bg-opacity-60 p-0.5 bg-opacity-20 '
    >
      <img
        src={getImageUrl(id).imageUrl}
        className='object-cover p-2 border-yellow-300 rounded-sm shadow h-54 w-36 '
        alt=''
      />
    </div>
  </Link>
)

const BrowseSection = () => (
  <div className='relative p-10 overflow-hidden'>
    <div>
      <div className='text-4xl font-bold'>Browse</div>
      <div className='max-w-xs mt-2'>
        Explore our catalog for your next favorite game!
      </div>
      <Link
        to='/browse'
        className='inline-block mt-24 text-sm font-semibold uppercase bg-white rounded text-primary btn-lg'
      >
        browse all
      </Link>
    </div>

    <div
      style={{ left: '75%', top: '150%' }}
      className='absolute z-10 animate-spin60'
    >
      <ImageContainer id='001' />
      <ImageContainer id='002' className='rotate-45' />
      <ImageContainer id='003' className='rotate-90' />
      <ImageContainer id='004' className='rotate-135' />
      <ImageContainer id='005' className='rotate-180' />
      <ImageContainer id='006' className='rotate-225' />
      <ImageContainer id='007' className='rotate-270' />
      <ImageContainer id='008' className='rotate-315' />
    </div>
    <div className='absolute inset-0 -z-20 bg-gradient-to-br via-primary from-green-600 to-primary-400 ' />
  </div>
)

export default BrowseSection
