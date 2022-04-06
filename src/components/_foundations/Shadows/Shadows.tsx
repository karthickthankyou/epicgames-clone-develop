export interface IShadowsProps {}

const Shadows = () => (
  <div className='flex items-center justify-center bg-gray-800'>
    <div className='max-w-lg py-6 space-y-8'>
      <div className='text-4xl'>Shadows</div>
      <p>
        Shadows are hard to see in this dark-default website. But still we
        believe it works subconsciously.
      </p>
      <div className='p-4 text-white bg-gray-700 rounded shadow-none'>
        shadow-none
      </div>
      <div className='p-4 text-white bg-gray-700 rounded shadow-inner'>
        shadow-inner
      </div>
      <div className='p-4 text-white bg-gray-700 rounded shadow-sm'>
        shadow-sm
      </div>
      <div className='p-4 text-white bg-gray-700 rounded shadow'>shadow</div>
      <div className='p-4 text-white bg-gray-700 rounded shadow-md'>
        shadow-md
      </div>
      <div className='p-4 text-white bg-gray-700 rounded shadow-lg'>
        shadow-lg
      </div>
      <div className='p-4 text-white bg-gray-700 rounded shadow-xl'>
        shadow-xl
      </div>
      <div className='p-4 text-white bg-gray-700 rounded shadow-2xl'>
        shadow-2xl
      </div>
    </div>
  </div>
)

export default Shadows
