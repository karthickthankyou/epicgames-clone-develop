import { getScoreColor } from '@utils/index'
import { ReactComponent as Thumbsup } from '@assets/svgs/thumbsup.svg'
import { ReactComponent as Thumbsdown } from '@assets/svgs/thumbsdown.svg'

export interface IReviewCardProps {
  reviewScore: number
  userName: string
  date: string
  review: string
  approvalRate: number
}

const ReviewCard = ({
  reviewScore,
  userName,
  date,
  review,
  approvalRate,
}: IReviewCardProps) => (
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
        <div className='text-lg'>{userName}</div>
        <div className='text-sm text-gray-200'>{date}</div>
      </div>
    </div>
    <div className='max-w-md mt-2'>{review}</div>
    <div className='flex items-baseline justify-between my-2 text-xs text-gray-300'>
      <div>{approvalRate}% helpful</div>
      <div className='opacity-0 group-hover:opacity-100'>
        <button
          type='button'
          className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20'
        >
          <Thumbsup />
        </button>
        <button
          type='button'
          className='inline-flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-5 hover:bg-opacity-20'
        >
          <Thumbsdown />
        </button>
      </div>
    </div>
  </div>
)

export default ReviewCard
