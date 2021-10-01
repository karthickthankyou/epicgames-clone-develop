import image from '../../../assets/game.jpg'

export interface IBigBannerProps {}

const BigBanner = () => (
  <div className='relative w-full overflow-hidden h-72'>
    <img className='absolute inset-0 object-cover' src={image} alt='' />
    <div className='absolute inset-0 bg-gradient-to-tr from-black to-transparent' />
    <div className='absolute flex flex-col justify-end h-full p-10'>
      <div className='text-lg'>Rocket League</div>
      <div className='max-w-xs mt-2 text-xs text-gray-300'>
        Get the Jurassic World Bundle featuring the Jurassic Jeep Wrangler,
        T-Rex Goal Explosion, and more in the Item Shop!
      </div>
      <button
        type='button'
        className='max-w-xs mt-6 text-xs uppercase border btn-lg'
      >
        PLAY FREE NOW
      </button>
    </div>
  </div>
)

export default BigBanner
