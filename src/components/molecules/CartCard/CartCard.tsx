import { IoCloseOutline } from 'react-icons/io5'
import Price from '../../atoms/Price'

export interface ICartCardProps {
  displayImage: string
}

const CartCard = ({ displayImage }: ICartCardProps) => (
  <div className='flex items-center'>
    <img
      src={displayImage}
      alt=''
      className='object-cover w-16 h-16 mr-2 rounded-md'
    />
    <div className='mr-2 text-sm text-gray-200'>
      <div>Deus Ex: Game of the Year Edition</div>
      <Price price={44} discount={30} classes='ml-auto mt-2' />
    </div>

    <button type='button' className='ml-auto'>
      <IoCloseOutline className='w-10 h-10 p-2 text-gray-400' />
    </button>
  </div>
)

export default CartCard
