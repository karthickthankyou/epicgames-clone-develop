export interface IBrowseSectionProps {}

const BrowseSection = () => (
  <div className='p-10 bg-gradient-to-br via-primary-600 from-green-400 to-primary-900 '>
    <div className='text-4xl'>Browse</div>
    <div className='max-w-xs mt-2'>
      Explore our catalog for your next favorite game!
    </div>
    <button
      type='button'
      className='mt-24 text-sm uppercase bg-white rounded bg-opacity-20 btn-lg'
    >
      browse all
    </button>
  </div>
)

export default BrowseSection
