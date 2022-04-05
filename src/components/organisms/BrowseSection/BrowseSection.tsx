import { Link } from 'react-router-dom'

export interface IBrowseSectionProps {}

const BrowseSection = () => (
  <div className='p-10 bg-gradient-to-br via-primary from-green-600 to-primary-400 '>
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
)

export default BrowseSection
