export interface ISkeletonCard01Props {}

const SkeletonCard01 = () => {
  const widths = ['w-4/5', 'w-4/6', 'w-5/6', 'w-1/2', 'w-2/3', 'w-3/4']
  const ran = () => Math.round(Math.random() * widths.length)

  return (
    <div className='w-full'>
      {/* <div className='h-32 rounded-tl rounded-tr animate-pulse' /> */}

      <div className='relative aspect-w-3 aspect-h-4'>
        <div className='object-cover object-center bg-gray-800 rounded-lg animate-pulse' />
        <div className='absolute flex items-start justify-end w-full p-3'>
          <div className='w-5 h-5 bg-gray-800 rounded-full ' />
          <div className='w-5 h-5 ml-2 bg-gray-800 rounded-full ' />
        </div>
      </div>

      <div
        className={`h-4 mt-4 bg-gray-800 rounded-sm animate-pulse ${
          widths[ran()]
        }`}
      />
      <div
        className={`h-4 mt-2 bg-gray-800 rounded-sm animate-pulse ${
          widths[ran()]
        }`}
      />
      <div
        className={`h-4 mt-2 mb-2 bg-gray-800 rounded-sm animate-pulse ${
          widths[ran()]
        }`}
      />
    </div>
  )
}

export default SkeletonCard01
