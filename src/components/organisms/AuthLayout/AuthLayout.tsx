import { Children } from '@epictypes/index'
import { getImageUrl } from '@utils/index'
import { Link } from 'react-router-dom'

export interface IAuthLayoutProps {
  children: Children
}

const imgsArr = [
  '001',
  '002',
  '003',
  '004',
  '095',
  '006',
  '007',
  '112',
  '130',
  '144',
  '157',
  '190',
  '200',
  '230',
  '240',
]
const imgsArr2 = [
  '301',
  '302',
  '303',
  '304',
  '396',
  '306',
  '307',
  '312',
  '450',
  '356',
  '392',
  '399',
  '430',
  '433',
  '460',
  '461',
  '462',
]

const Reel = ({
  className = 'animate-move-left',
  imgs = imgsArr,
}: {
  className?: string
  imgs?: string[]
}) => (
  <div className={`flex gap-3 flex-nowrap h-full  ${className} `}>
    {imgs.map((item) => (
      <img
        key={item}
        src={getImageUrl(item).imageUrl}
        alt=''
        className='object-cover w-40 h-full transform -skew-x-6 rounded-xl'
      />
    ))}
  </div>
)

const AuthLayout = ({ children }: IAuthLayoutProps) => (
  <div className='relative flex items-center justify-center h-screen overflow-y-hidden'>
    <div
      // style={{
      //   boxShadow: 'inset 0 0 50px #000',
      // }}
      className='fixed flex flex-col w-screen h-screen gap-3 bg-black -z-20'
    >
      <div className='flex-grow '>
        <Reel className='pt-3 animate-move-right' />
      </div>

      <div className='flex-grow '>
        <Reel className='pb-3 animate-move-left' imgs={imgsArr2} />
      </div>
    </div>

    <div className='fixed w-screen h-screen backdrop-brightness-50 backdrop-filter -z-10' />
    <div className='w-full max-w-md bg-black border border-black shadow-2xl backdrop-filter backdrop-saturate-0 rounded-xl bg-opacity-80'>
      <div className='bg-black bg-opacity-50'>
        <div className='mx-auto shadow-xl '>{children}</div>

        <div className='px-8 mb-6 text-xs text-right'>
          <Link to='/'>Back to home</Link>
        </div>
        <p className='w-full h-full max-w-xs p-2 mx-auto text-xs text-center text-gray-500'>
          &copy;2021 Karthick Ragavendran. All rights reserved! Except they are
          not.
        </p>
      </div>
    </div>
  </div>
)

export default AuthLayout
