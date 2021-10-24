import { Heading } from 'src/components/atoms'
import { MessageWrapper } from 'src/components/molecules'
import { CustomHelmet } from 'src/components/organisms'

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
