export interface IShadowsProps {}

const Shadows = () => (
  <div className='container mx-auto space-y-10 bg-gray-700'>
    <div className='text-4xl'>Shadows</div>
    <p>
      Shadows are hard to see in this dark-default website. But still we believe
      it works subconsciously.
    </p>

    <div className='px-2 py-4 bg-gray-600 rounded shadow-none'>shadow-none</div>
    <div className='px-2 py-4 bg-gray-600 rounded shadow-inner'>
      shadow-inner
    </div>
    <div className='px-2 py-4 bg-gray-600 rounded shadow-sm'>shadow-sm</div>
    <div className='px-2 py-4 bg-gray-600 rounded shadow'>shadow</div>
    <div className='px-2 py-4 bg-gray-600 rounded shadow-md'>shadow-md</div>
    <div className='px-2 py-4 bg-gray-600 rounded shadow-lg'>shadow-lg</div>
    <div className='px-2 py-4 bg-gray-600 rounded shadow-xl'>shadow-xl</div>
    <div className='px-2 py-4 bg-gray-600 rounded shadow-2xl'>shadow-2xl</div>
  </div>
)

export default Shadows
