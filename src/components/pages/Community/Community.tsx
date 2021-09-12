import Heading from '@atoms/Heading'
import MessageWrapper from '@molecules/MessageWrapper'
import CustomHelmet from '@organisms/CustomHelmet'

export interface ICommunityProps {}

const Community = () => (
  <MessageWrapper>
    <div>
      <CustomHelmet
        title='Epic Community'
        description='Community page is a space for gamers to talk about their favorite games.'
      />
      <Heading variant='heading-0' headerType='h1'>
        Community Page
      </Heading>
      {/* <div className='mt-4 mb-2 text-3xl font-light'>Community Page</div> */}
      <div className='text-gray-400'>This page is under development.</div>
    </div>
  </MessageWrapper>
)

export default Community
