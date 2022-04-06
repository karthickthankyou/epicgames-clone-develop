import { getScoreColor } from '@utils/index'
import ReviewCard from '@molecules/ReviewCard'
import { getDates } from '@organisms/GameCard04Section/GameCard04Section'

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
      <ReviewCard
        reviewScore={2}
        date={getDates().randomDate}
        userName='Jon Dough'
        review='Most challenging game I have ever player. Spent 3 hours to get it to run.'
        approvalRate={66}
      />
      <ReviewCard
        reviewScore={96}
        date={getDates().randomDate}
        userName='Jane Thor'
        review='Really enjoyed it to the core. I am typing this review from an internet cafe inside the game. I am a digital being now. Gotta go.'
        approvalRate={89}
      />
      <ReviewCard
        reviewScore={50}
        date={getDates().randomDate}
        userName='Mediocre Madeline'
        review='Meh.'
        approvalRate={100}
      />
      <ReviewCard
        reviewScore={30}
        date={getDates().randomDate}
        userName='Critical Christopher'
        review='Well I liked it.'
        approvalRate={0}
      />
    </div>
  </div>
)

export default ReviewSection
