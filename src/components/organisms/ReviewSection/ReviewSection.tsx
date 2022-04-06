import { getScoreColor, getDates } from '@utils/index'
import ReviewCard, { IReviewCardProps } from '@molecules/ReviewCard/ReviewCard'

export interface IReviewSectionProps {
  averageRating: number
  count: number
  reviews: IReviewCardProps[]
}

const ReviewSection = ({
  averageRating,
  count,
  reviews,
}: IReviewSectionProps) => (
  <div className='my-6'>
    <div
      className={`items-baseline inline-block rounded-lg p-2 ${getScoreColor(
        averageRating
      )}`}
    >
      <span className='text-6xl font-light'>
        {averageRating <= 100 ? averageRating : 100}
      </span>
      <span className='text-lg text-gray-300'>/ 100</span>
    </div>

    <div className='mt-2 text-sm text-gray-400'>
      based on {count.toLocaleString()} reviews
    </div>
    <div className='mt-8 mb-2 text-xl'>Featured Reviews</div>
    <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
      {reviews.map((item) => (
        <ReviewCard
          reviewScore={item.reviewScore}
          date={item.date}
          userName={item.userName}
          review={item.review}
          approvalRate={item.approvalRate}
        />
      ))}
    </div>
  </div>
)

export default ReviewSection
