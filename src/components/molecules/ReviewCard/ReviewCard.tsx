import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { getScoreColor } from '../../../utils'

export interface IReviewCardProps {
  reviewScore: number
}

const ReviewCard = ({ reviewScore = 45 }: IReviewCardProps) => (
  <div className='p-3 border border-gray-700 rounded-sm group'>
    <div className='flex'>
      <div
        className={`${getScoreColor(
          reviewScore
        )} shadow-lg rounded-full flex h-12 w-12 items-center justify-center`}
      >
        {reviewScore}
      </div>
      <div className='flex flex-col ml-3'>
        <div className='text-lg'>John Doe </div>
        <div className='text-sm text-gray-300'>17, May, 2021</div>
      </div>
    </div>
    <div className='max-w-md mt-2 text-gray-200'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus unde
      voluptas maxime tempore, aliquid laborum delectus, autem sit reiciendis
      dolore nemo illo eum accusantium.
    </div>
    <div className='flex items-baseline justify-between my-2 text-xs text-gray-400'>
      <div>32% helpful</div>
      <div className='opacity-0 group-hover:opacity-100'>
        <button
          type='button'
          className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20'
        >
          <FaThumbsUp />
        </button>
        <button
          type='button'
          className='inline-flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20'
        >
          <FaThumbsDown />
        </button>
      </div>
    </div>
  </div>
)

export default ReviewCard
