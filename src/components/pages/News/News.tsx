import Heading from '@atoms/Heading'
import MessageWrapper from '@molecules/MessageWrapper'
import CustomHelmet from '@organisms/CustomHelmet'
import UnderDevelopment from '@organisms/UnderDevelopment'

export interface INewsProps {}

const News = () => (
  <MessageWrapper>
    <div>
      <CustomHelmet
        title='News'
        description='This page contains exciting news about upcoming games and so on.'
      />
      <Heading variant='heading-0' headerType='h1'>
        News Page
      </Heading>
      <div className='text-gray-400'>This page is under development.</div>
    </div>
  </MessageWrapper>
)

export default News
