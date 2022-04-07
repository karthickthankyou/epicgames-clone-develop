import { Children } from '@epictypes/index'
import { getImageUrl } from '@utils/index'

export interface IAuthLayoutProps {
  children: Children
}

const AuthLayout = ({ children }: IAuthLayoutProps) => (
  <div className='relative flex items-center justify-center h-screen'>
    <div className='absolute w-screen h-screen overflow-hidden -z-20'>
      <div className='grid w-full h-full grid-cols-4 gap-2 transform scale-110 rotate-12'>
        {['001', '002', '003', '004', '095', '006', '007', '112'].map(
          (item) => (
            <img
              src={getImageUrl(item).imageUrl}
              key={item}
              alt=''
              className='rounded '
            />
          )
        )}
      </div>
    </div>
    <div className='absolute w-screen h-screen backdrop-brightness-75 backdrop-blur backdrop-filter -z-10' />
    <div className='w-full max-w-md'>
      <div className='mx-auto mt-16 bg-black shadow-xl backdrop-filter backdrop-grayscale rounded-xl bg-opacity-80 '>
        {children}
      </div>
      <p className='w-full h-full max-w-xs p-2 mx-auto text-xs text-center text-black'>
        &copy;2021 Karthick Ragavendran. All rights reserved! Except they are
        not.
      </p>
    </div>
  </div>
)

export default AuthLayout
