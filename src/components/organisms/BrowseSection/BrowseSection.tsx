import { Link } from 'react-router-dom'

export interface IBrowseSectionProps {}

const BrowseSection = () => (
  <div className='p-10 bg-gradient-to-br via-primary from-green-400 to-primary-900 '>
    <div className='text-4xl'>Browse</div>
    <div className='max-w-xs mt-2'>
      Explore our catalog for your next favorite game!
    </div>
    <Link
      to='/browse'
      className='inline-block mt-24 text-sm uppercase bg-white rounded bg-opacity-20 btn-lg'
    >
      browse all
    </Link>
  </div>
)

export default BrowseSection
