import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import { callSignIn, googleSignin } from '@epicfirebase/hooks'
import { User } from '@store/userSlice'
import { useLoadSuccessError } from '@hooks/index'

import { ReactComponent as AppleIcon } from '@assets/svgs/apple.svg'
import { ReactComponent as FacebookIcon } from '@assets/svgs/facebook.svg'
import { ReactComponent as GoogleIcon } from '@assets/svgs/google.svg'
import { ReactComponent as WarningIcon } from '@assets/svgs/warning.svg'
import { ReactComponent as LoadingIcon } from '@assets/svgs/loader.svg'

import AuthLayout from '@organisms/AuthLayout/AuthLayout'

const ErrorMessage = ({
  message,
  className,
}: {
  message: string | undefined
  className?: string
}) => (
  <p className={`flex items-center text-xs text-gray-300 ${className}`}>
    <WarningIcon className='w-3 h-3 mr-1' />
    {message}
  </p>
)

const SigninTemplate = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>()

  const [{ loading, success, error }, dispatch] = useLoadSuccessError()

  return (
    <AuthLayout>
      <>
        <form
          onSubmit={handleSubmit(({ email, password }) => {
            dispatch('load')
            callSignIn({ email, password }, dispatch)
          })}
          className='p-8'
        >
          <div className='mb-4 text-3xl font-light'>Sign in</div>
          <div>
            <label className='block mb-4 text-sm' htmlFor='username'>
              Username
              <input
                className='w-full p-3 mt-2 leading-tight bg-gray-800 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Username'
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('email', { required: 'Email is required.' })}
              />
              {errors.email && (
                <ErrorMessage className='mt-1' message={errors.email.message} />
              )}
            </label>
          </div>
          <div className='mt-2 mb-6'>
            <label className='relative block mb-4 text-sm' htmlFor='password'>
              Password
              <input
                className='w-full p-3 mt-2 leading-tight bg-gray-800 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
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
          <div className='flex items-baseline justify-between'>
            <button
              className='text-sm text-white rounded bg-primary btn btn-lg hover:bg-primary-600 focus:outline-none focus:shadow-outline'
              type='submit'
              //   onClick={() => callSignIn({ email: 'sfd', password: 'sdf' })}
            >
              Sign In
              {loading && <LoadingIcon className='inline ml-2 animate-spin' />}
            </button>
            <Link
              to={{
                pathname: '/forgotpassword',
                state: {
                  email: watch().email,
                },
              }}
              className='inline-block text-sm align-baseline'
            >
              Forgot Password?
            </Link>
          </div>
          {error && (
            <div className='my-2 text-xs'>Login failed. Try again.</div>
          )}
        </form>
        <div className='px-8 pb-8'>
          <div>or continue with</div>
          <div className='flex mt-4'>
            <button
              type='button'
              className='flex items-center justify-center w-10 h-10 mr-2 bg-black rounded hover:bg-gray-800 hover:shadow-lg'
              onClick={googleSignin}
            >
              <GoogleIcon className='w-6 h-6' />
            </button>
            <button
              type='button'
              disabled
              className='flex items-center justify-center w-10 h-10 mr-2 bg-black rounded cursor-not-allowed hover:bg-gray-800 hover:shadow-lg'
            >
              <AppleIcon className='w-6 h-6' />
            </button>
            <button
              type='button'
              disabled
              className='flex items-center justify-center w-10 h-10 mr-2 bg-black rounded cursor-not-allowed hover:bg-gray-800 hover:shadow-lg'
            >
              <FacebookIcon className='w-6 h-6' />
            </button>
          </div>
          <Link
            to={{
              pathname: '/signup',
              state: {
                email: watch().email,
              },
            }}
            className='block mt-8 text-sm text-right align-baseline'
          >
            New user? <span className='text-primary-300'>Create Account</span>
          </Link>
        </div>
      </>
    </AuthLayout>
  )
}

export default SigninTemplate
