import { useLocation } from 'react-router-dom'

import {
  CopyrightIcon,
  ChevronUpIcon,
  RegStarIcon,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'src/assets'
import { scrollToTop, soloPaths } from '../../../utils'

export interface IFooterProps {}

const Footer = () => {
  const { pathname } = useLocation()
  if (soloPaths.includes(pathname)) return <></>
  return (
    <footer className='text-sm'>
      <div className='flex my-4'>
        <button type='button' aria-label='facebook icon'>
          <FacebookIcon className='w-6 h-6 mr-3 hover:text-primary-500' />
        </button>
        <button type='button' aria-label='twitter icon'>
          <TwitterIcon className='w-6 h-6 mr-3 hover:text-primary-300' />
        </button>
        <button type='button' aria-label='youtube icon'>
          <YoutubeIcon className='w-6 h-6 mr-3 hover:text-red-500' />
        </button>

        <button
          type='button'
          className='ml-auto'
          aria-label='go to top'
          onClick={scrollToTop}
        >
          <ChevronUpIcon className='w-8 h-8 p-1 border rounded-sm' />
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
          ©2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
          Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
          the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
          logo are trademarks or registered trademarks of Epic Games, Inc. in
          the United States of America and elsewhere. Other brands or product
          names are the trademarks of their respective owners. Non-US
          transactions through Epic Games International, S.à r.l.
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
              <RegStarIcon className='w-6 h-6 p-1 mr-2' />
            </button>
            <button type='button' aria-label='icon'>
              <CopyrightIcon className='w-6 h-6 p-1 mr-2' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer