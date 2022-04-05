import { Link, useLocation } from 'react-router-dom'
import { scrollToTop, soloPaths } from '@utils/index'

import { ReactComponent as Copyright } from '@assets/svgs/copyright.svg'
import { ReactComponent as ChevronUp } from '@assets/svgs/chevron-up.svg'
import { ReactComponent as RegStar } from '@assets/svgs/regStar.svg'
import { ReactComponent as Facebook } from '@assets/svgs/facebook.svg'
import { ReactComponent as Twitter } from '@assets/svgs/twitter.svg'
import { ReactComponent as Youtube } from '@assets/svgs/youtube.svg'

export interface IFooterProps {}

const Footer = () => {
  const { pathname } = useLocation()
  if (soloPaths.includes(pathname)) return <></>
  return (
    <footer className='mt-24 text-sm'>
      <div className='flex my-4'>
        <button type='button' aria-label='facebook icon'>
          <Facebook className='w-6 h-6 mr-3 hover:text-primary-500' />
        </button>
        <button type='button' aria-label='twitter icon'>
          <Twitter className='w-6 h-6 mr-3 hover:text-primary-300' />
        </button>
        <button type='button' aria-label='youtube icon'>
          <Youtube className='w-6 h-6 mr-3 hover:text-red-500' />
        </button>

        <button
          type='button'
          className='ml-auto'
          aria-label='go to top'
          onClick={scrollToTop}
        >
          <ChevronUp className='w-8 h-8 p-1 border rounded-sm' />
        </button>
      </div>
      <div className='mt-4'>
        <div className='mt-8 text-gray-400'>Resources</div>
        <div className='grid grid-cols-1 mt-2 sm:grid-cols-2 lg:1/2 md:w-2/3 sm:w-3/4 md:grid-cols-3'>
          <button type='button' className='text-left'>
            Support-A-Creator
          </button>
          <button type='button' className='text-left'>
            Publish on Epic Games
          </button>
          <button type='button' className='text-left'>
            Careers
          </button>
          <button type='button' className='text-left'>
            Company
          </button>
          <button type='button' className='text-left'>
            Fan Art Policy
          </button>
          <button type='button' className='text-left'>
            UX Research
          </button>
          <button type='button' className='text-left'>
            Store EULA
          </button>
          <button type='button' className='text-left'>
            Online Services
          </button>
          <button type='button' className='text-left'>
            Community Rules
          </button>
        </div>
        <div className='mt-8 text-gray-400'>Made By Epic Games</div>
        <div className='grid grid-cols-2 mt-2 lg:1/2 md:w-2/3 sm:w-3/4 md:grid-cols-3'>
          <button type='button' className='text-left'>
            Battle Breakers
          </button>
          <button type='button' className='text-left'>
            Fortnite
          </button>
          <button type='button' className='text-left'>
            Infinity Blade
          </button>
          <button type='button' className='text-left'>
            Robo Recall
          </button>
          <button type='button' className='text-left'>
            Shadow Complex
          </button>
          <button type='button' className='text-left'>
            Spyjinx
          </button>
          <button type='button' className='text-left'>
            Unreal Tournament
          </button>
        </div>
        <hr className='my-8 text-gray-700' />
        <div className='text-gray-400 max-w-prose'>
          ©2021, Epic clone |{' '}
          <a
            target='_blank'
            rel='noreferrer'
            // Brand color!
            style={{ color: '#e63746' }}
            href='https://www.iamkarthick.com'
          >
            Karthick Ragavendran
          </a>
          .
        </div>
        <div className='my-8 sm:flex'>
          <button type='button' className='mr-4 text-left'>
            Terms of Service
          </button>
          <button type='button' className='mr-4 text-left'>
            Privacy Policy
          </button>
          <button type='button' className='mr-4 text-left'>
            Store Refund Policy
          </button>
          <div className='flex mt-2 sm:ml-auto'>
            <button type='button' aria-label='icon'>
              <RegStar className='w-6 h-6 p-1 mr-2' />
            </button>
            <button type='button' aria-label='icon'>
              <Copyright className='w-6 h-6 p-1 mr-2' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
