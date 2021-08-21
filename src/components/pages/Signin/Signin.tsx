// eslint-disable-next-line import/no-unresolved
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  AiFillApple,
  AiFillFacebook,
  AiOutlineWarning,
  AiOutlineGoogle,
  AiOutlineLoading,
} from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { callSignIn, googleSignin } from '../../../firebase/hooks'
import { useAppSelector } from '../../../store/hooks'
import { selectUser } from '../../../store/userSlice'
import { useLoadSuccessError } from '../../../hooks'

export interface ISigninProps {}

const ErrorMessage = ({ message }: { message: string | undefined }) => (
  <p className='flex items-center text-xs text-gray-300'>
    <AiOutlineWarning className='w-3 h-3 mr-1' />
    {message}
  </p>
)

const Signin = () => {
  const user = useAppSelector(selectUser)
  const [{ loading, success, error }, dispatch] = useLoadSuccessError()

  type FormValues = { email: string; password: string }

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const [showPassword, setShowPassword] = useState(false)

  if (user.uid) return <Redirect to='/' />

  return (
    <>
      <div className='w-full max-w-md mx-auto mt-16 bg-gray-800 rounded shadow-xl'>
        <form
          onSubmit={handleSubmit(({ email, password }) => {
            dispatch('load')
            callSignIn({ email, password }, dispatch)
          })}
          className='p-8'
        >
          <div className='mb-4 text-3xl font-light'>Sign in</div>
          <div>
            <label
              className='block mb-4 text-sm text-gray-300'
              htmlFor='username'
            >
              Username
              <input
                className='w-full p-3 mt-2 leading-tight bg-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Username'
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('email', { required: 'Email is required.' })}
              />
            </label>

            {errors.email && <ErrorMessage message={errors.email.message} />}
          </div>
          <div className='mb-6'>
            <label
              className='relative block mb-4 text-sm text-gray-300'
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
          <div className='flex items-baseline justify-between'>
            <button
              className='text-sm text-white rounded bg-primary-600 btn btn-lg hover:bg-primary-700 focus:outline-none focus:shadow-outline'
              type='submit'
              //   onClick={() => callSignIn({ email: 'sfd', password: 'sdf' })}
            >
              Sign In
              {loading && (
                <AiOutlineLoading className='inline ml-2 animate-spin' />
              )}
            </button>

            <Link
              to={{
                pathname: '/forgotpassword',
                state: {
                  email: watch().email,
                },
              }}
              className='inline-block text-sm text-gray-300 align-baseline hover:text-gray-400'
            >
              Forgot Password?
            </Link>
          </div>
          {error && (
            <div className='my-2 text-xs'>Login failed. Try again.</div>
          )}
        </form>
        <div className='px-8 pb-8'>
          <div className='text-gray-400'>or signin with</div>
          <div className='flex mt-4'>
            <button
              type='button'
              className='flex items-center justify-center w-10 h-10 mr-2 bg-gray-700 border border-gray-600 rounded hover:bg-gray-600 hover:shadow-lg'
              onClick={googleSignin}
            >
              <AiOutlineGoogle className='w-6 h-6' />
            </button>
            <button
              type='button'
              className='flex items-center justify-center w-10 h-10 mr-2 bg-gray-700 border border-gray-600 rounded hover:bg-gray-600 hover:shadow-lg'
            >
              <AiFillApple className='w-6 h-6' />
            </button>
            <button
              type='button'
              className='flex items-center justify-center w-10 h-10 mr-2 bg-gray-700 border border-gray-600 rounded hover:bg-gray-600 hover:shadow-lg'
            >
              <AiFillFacebook className='w-6 h-6' />
            </button>
          </div>

          <Link
            to={{
              pathname: '/signup',
              state: {
                email: watch().email,
              },
            }}
            className='block mt-8 text-sm text-right text-gray-300 align-baseline hover:text-gray-400'
          >
            New user? Create Account
          </Link>
        </div>
      </div>
      <p className='w-full h-full p-2 text-xs text-center text-gray-500'>
        &copy;2021 Karthicks Clones. All rights reserved! Except it is not.
      </p>
    </>
  )
}

export default Signin
