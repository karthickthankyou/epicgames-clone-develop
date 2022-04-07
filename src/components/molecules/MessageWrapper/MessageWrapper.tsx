import { Children } from '@epictypes/index'

export interface IMessageWrapperProps {
  children: Children
  className?: string
}

const MessageWrapper = ({ children, className }: IMessageWrapperProps) => (
  <div
    className={`flex flex-col items-center justify-center min-h-screen-3/4 ${className}`}
  >
    {children}
  </div>
)

export default MessageWrapper
