import { Children } from '@epictypes/index'

export interface IUnderDevelopmentProps {
  text: string
  description?: Children
}

const UnderDevelopment = ({
  text,
  description = 'This page is under development.',
}: IUnderDevelopmentProps) => (
  <div className='flex items-center justify-center min-h-screen-3/4'>
    <div className='relative max-w-sm px-4 py-6 overflow-y-scroll border border-gray-700 shadow-lg thin-scrollbar max-h-96 bg-gradient-to-tr from-primary-900 via-black to-black rounded-xl'>
      <div className='sticky top-0 inline-block py-2 pr-2 text-xl font-bold leading-none bg-black shadow-lg '>
        {text}
      </div>
      <div className='mt-2 space-y-2 text-gray-400'>{description}</div>
    </div>
  </div>
)

export default UnderDevelopment
