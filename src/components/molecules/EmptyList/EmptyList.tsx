import { Link } from 'react-router-dom'

export interface IEmptyListProps {
  title: string
  description: string
  buttonText: string
  linkTo: string
}

const EmptyList = ({
  title,
  description,
  buttonText,
  linkTo,
}: IEmptyListProps) => (
  <div className='flex flex-col items-center justify-center my-36'>
    <div className='text-xl'>{title}</div>
    <div className='w-64 mt-2 text-sm text-center text-gray-400'>
      {description}
    </div>
    <Link
      to={linkTo}
      type='button'
      className='mt-16 btn btn-lg bg-primary hover:bg-primary-600'
    >
      {buttonText}
    </Link>
  </div>
)

export default EmptyList
