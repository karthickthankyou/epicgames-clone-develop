export interface ILoadingProps {}

const Loading = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <div
      style={{
        border: '2px solid #000',
        borderRadius: '50%',
        borderTop: '2px solid #fff',
      }}
      className='w-16 h-16 rounded-full animate-spin'
    />
    <div className='max-w-xs mt-6 text-xl text-center'>
      Fetching <strong className='font-black tracking-tighter'>epic</strong>{' '}
      stuff for you...
    </div>
  </div>
)

export default Loading
