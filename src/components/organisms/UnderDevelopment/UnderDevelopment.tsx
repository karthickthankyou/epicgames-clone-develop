export interface IUnderDevelopmentProps {
  text: string
}

const UnderDevelopment = ({ text }: IUnderDevelopmentProps) => (
  <div className='flex items-center justify-center h-screen/2'>
    <div>
      <div className='mt-4 mb-2 text-3xl font-light'>{text}</div>
      <div className='text-gray-400'>This page is under development.</div>
    </div>
  </div>
)

export default UnderDevelopment
