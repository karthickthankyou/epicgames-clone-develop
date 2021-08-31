import { ReactElement } from 'react'

export interface IMessageWrapperProps {
  children: ReactElement
}

const MessageWrapper = ({ children }: IMessageWrapperProps) => (
  <div className='flex items-center justify-center min-h-screen-3/4'>
    {children}
  </div>
)

export default MessageWrapper
