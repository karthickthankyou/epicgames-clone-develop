import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { callSignup, googleSignin } from '../../../firebase/hooks'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'

import { ReactComponent as AppleIcon } from '../../../assets/svgs/apple.svg'
import { ReactComponent as FacebookIcon } from '../../../assets/svgs/facebook.svg'
import { ReactComponent as GoogleIcon } from '../../../assets/svgs/google.svg'
import { ReactComponent as WarningIcon } from '../../../assets/svgs/warning.svg'
import { ReactComponent as LoadingIcon } from '../../../assets/svgs/loader.svg'
import { useLoadSuccessError } from '../../../hooks'

export interface ISignupProps {}

const ErrorMessage = ({ message }: { message: string | undefined }) => (
  <p className='flex items-center mt-1 text-xs text-gray-300'>
    <WarningIcon className='w-3 h-3 mr-1' />
    {message}
  </p>
)

const Signup = () => {
  const user = useAppSelector(selectUser)
  const [{ loading, /* success, */ error }, dispatch] = useLoadSuccessError()

  type FormValues = { email: string; password: string; displayName: string }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const [showPassword, setShowPassword] = useState(false)
  if (user.uid) return <Redirect to='/' />

  return (
    <>
      <div className='w-full max-w-md p-8 mx-auto mt-16 bg-gray-800 rounded shadow-xl'>
        <form
          onSubmit={handleSubmit(({ email, password, displayName }) => {
            dispatch('load')
            callSignup({ email, password, displayName }, dispatch)
          })}
        >
          <div className='mb-4 text-3xl font-light'>Create Account</div>

          <div className='mt-4'>
            <label className='block text-sm text-gray-300' htmlFor='email'>
              Email
              <input
                className='w-full p-3 mt-2 leading-tight bg-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='email'
                type='text'
                placeholder='email'
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('email', { required: 'Email is required.' })}
              />
            </label>

            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className='mt-4'>
            <label
              className='relative block text-sm text-gray-300'
              htmlFor='password'
            >
              Password
              <input
                className='w-full p-3 mt-2 leading-tight bg-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='******************'
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('password', {
                  required: 'Password is required.',
                })}
              />
              <button
                type='button'
                onClick={() => setShowPassword((state) => !state)}
                className='absolute bottom-0 right-0 p-3'
              >
                {showPassword ? 'hide' : 'show'}
              </button>
            </label>
            {errors.password && (
              <ErrorMessage message={errors.password.message} />
            )}
          </div>
          <div>
            <label
              className='block mt-4 text-sm text-gray-300'
              htmlFor='displayName'
            >
              Display name{' '}
              <span className='ml-1 text-gray-500'>(optional)</span>
              <input
                className='w-full p-3 mt-2 leading-tight bg-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='displayName'
                type='text'
                placeholder='john@john.com'
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('displayName')}
              />
            </label>
          </div>
          <div className='flex items-baseline justify-between mt-6'>
            <button
              className='flex items-center text-sm text-white rounded bg-primary-600 btn btn-lg hover:bg-primary-700 focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Create {loading && <LoadingIcon className='ml-2 animate-spin' />}
            </button>
          </div>
        </form>
        {error && <div className='my-2 text-xs'>Login failed. Try again.</div>}
        <div className='mt-8'>
          <div className='text-gray-400'>or continue with</div>
          <div className='flex mt-4'>
            <button
              type='button'
              className='flex items-center justify-center w-10 h-10 mr-2 bg-gray-700 border border-gray-600 rounded hover:bg-gray-600 hover:shadow-lg'
              onClick={googleSignin}
            >
              <GoogleIcon className='w-6 h-6' />
            </button>
            <button
              type='button'
              className='flex items-center justify-center w-10 h-10 mr-2 bg-gray-700 border border-gray-600 rounded hover:bg-gray-600 hover:shadow-lg'
            >
              <AppleIcon className='w-6 h-6' />
            </button>
            <button
              type='button'
              className='flex items-center justify-center w-10 h-10 mr-2 bg-gray-700 border border-gray-600 rounded hover:bg-gray-600 hover:shadow-lg'
            >
              <FacebookIcon className='w-6 h-6' />
            </button>
          </div>
          <Link
            to='/signin'
            className='block mt-8 text-sm text-right text-gray-300 align-baseline hover:text-gray-400'
          >
            Already have an account? Log in
          </Link>
        </div>
      </div>
      <p className='w-full h-full p-2 text-xs text-center text-gray-500'>
        &copy;2021 Karthicks Clones. All rights reserved! Except it is not.
      </p>
    </>
  )
}

export default Signup
