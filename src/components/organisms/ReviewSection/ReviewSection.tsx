import { getScoreColor } from '../../../utils'
import ReviewCard from '../../molecules/ReviewCard'

export interface IReviewSectionProps {}

const ReviewSection = () => (
  <div className='my-6'>
    <div
      className={`items-baseline inline-block rounded-lg p-2 ${getScoreColor(
        87
      )}`}
    >
      <span className='text-6xl font-light'>87</span>
      <span className='text-lg text-gray-300'>/ 100</span>
    </div>

    <div className='mt-2 text-sm text-gray-400'>based on 45 reviews</div>
    <div className='mt-4 mb-2 text-xl'>Featured Reviews</div>
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
