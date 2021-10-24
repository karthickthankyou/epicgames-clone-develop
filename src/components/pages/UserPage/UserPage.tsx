import { useParams } from 'react-router-dom'
import { MessageWrapper } from 'src/components/molecules'

export interface IUserPageProps {}

const UserPage = () => {
  const { uid } = useParams<{ uid: string }>()
  return (
    <MessageWrapper>
      <div className='max-w-xs'>
        <div className='text-lg'>User: {uid}</div>
        <div className='text-xs text-gray-400'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
          dolor accusantium esse dicta eius nesciunt quia neque perspiciatis
          aliquid? Dignissimos veniam sequi voluptas obcaecati, ullam, ratione
          eveniet maiores expedita recusandae quia provident eius aliquam sit
          velit libero cupiditate suscipit distinctio id, doloremque quis quo?
        </div>
      </div>
    </MessageWrapper>
  )
}

export default UserPage
