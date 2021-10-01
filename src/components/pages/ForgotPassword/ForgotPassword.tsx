import { useForm } from 'react-hook-form'

import { Link, useLocation } from 'react-router-dom'
import { sendResetPasswordLink } from '@epicfirebase/hooks'
import { useLoadSuccessError } from '@hooks/index'

import { ReactComponent as LoadingIcon } from '@assets/svgs/loader.svg'
import { ReactComponent as WarningIcon } from '@assets/svgs/warning.svg'

export interface IForgotPasswordProps {}

type LocationState = {
  email: string
}

const ErrorMessage = ({ message }: { message: string | undefined }) => (
  <p className='flex items-center text-xs text-gray-300'>
    <WarningIcon className='w-3 h-3 mr-1' />
    {message}
  </p>
)

const ForgotPassword = () => {
  const location = useLocation<LocationState>()
  const { email } = location.state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ emailId: string }>({ defaultValues: { emailId: email } })

  const [{ loading, success, error }, dispatch] = useLoadSuccessError()

  return (
    <div className='max-w-md mx-auto mt-16 bg-gray-800 rounded shadow-lg'>
      <form
        onSubmit={handleSubmit(({ emailId }) => {
          dispatch('load')
          sendResetPasswordLink(emailId, dispatch)
        })}
        className='p-8'
      >
        <div className='mb-4 text-3xl font-light'>Reset Password</div>
        <div>
          <label className='block mb-2 text-sm text-gray-300' htmlFor='email'>
            Enter your email id.
            <input
              className='w-full p-3 mt-2 leading-tight bg-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='john@doe.com'
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('emailId', { required: 'Email is required.' })}
            />
          </label>

          {errors.emailId && <ErrorMessage message={errors.emailId.message} />}
        </div>
        <button
          className='w-full mt-4 text-sm text-white rounded bg-primary-600 btn btn-lg hover:bg-primary-700 focus:outline-none focus:shadow-outline'
          type='submit'
          //   onClick={() => callSignIn({ email: 'sfd', password: 'sdf' })}
        >
          Send reset password link
          {loading && <LoadingIcon className='inline ml-2 animate-spin' />}
        </button>
        {error && <div className='my-2 text-xs'>Invalid email. Try again.</div>}
        {success && (
          <div className='my-2 text-xs'>
            Password reset email sent successfully.
          </div>
        )}
        <Link
          to='/signin'
          className='block mt-8 text-sm text-right text-gray-300 align-baseline hover:text-gray-400'
        >
          Back to Log in
        </Link>
      </form>
    </div>
  )
}

export default ForgotPassword
