export interface ILoadingProps {}

const Loading = () => (
  <div className='flex items-center justify-center h-screen'>
    <div className='flex flex-col items-center justify-center p-8 text-black bg-white shadow-xl rounded-3xl'>
      <div
        style={{
          border: '2px solid #000',
          borderRadius: '50%',
          borderTop: '2px solid #fff',
        }}
        className='w-16 h-16 rounded-full animate-spin'
      />
      <div className='max-w-xs mt-6 text-xl font-light'>
        Fetching <strong className='font-bold text-primary-500'>epic</strong>{' '}
        stuff for you...
      </div>
    </div>
  </div>
)

export default Loading
