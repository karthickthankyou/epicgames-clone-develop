import { getScoreColor } from '@utils/index'
import ReviewCard from '@molecules/ReviewCard'

export interface IReviewSectionProps {
  rating: number
}

const ReviewSection = ({ rating }: IReviewSectionProps) => (
  <div className='my-6'>
    <div
      className={`items-baseline inline-block rounded-lg p-2 ${getScoreColor(
        rating
      )}`}
    >
      <span className='text-6xl font-light'>{rating}</span>
      <span className='text-lg text-gray-300'>/ 100</span>
    </div>

    <div className='mt-2 text-sm text-gray-400'>based on 45 reviews</div>
    <div className='mt-8 mb-2 text-xl'>Featured Reviews</div>
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
      <ReviewCard reviewScore={97} />
      <ReviewCard reviewScore={88} />
      <ReviewCard reviewScore={62} />
      <ReviewCard reviewScore={58} />
      <ReviewCard reviewScore={28} />
    </div>
  </div>
)

export default ReviewSection
