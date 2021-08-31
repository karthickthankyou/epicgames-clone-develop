import MessageWrapper from '../../molecules/MessageWrapper'
import CustomHelmet from '../../organisms/CustomHelmet'
import UnderDevelopment from '../../organisms/UnderDevelopment'

export interface INewsProps {}

const News = () => (
  <MessageWrapper>
    <div>
      <CustomHelmet
        title='News'
        description='This page contains exciting news about upcoming games and so on.'
      />
      <div className='mt-4 mb-2 text-3xl font-light'>News Page</div>
      <div className='text-gray-400'>This page is under development.</div>
    </div>
  </MessageWrapper>
)

export default News
