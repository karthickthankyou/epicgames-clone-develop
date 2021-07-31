import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { CAROUSEL_DURATION } from '../../../utils'

export interface IHomeShowcaseProps {
  data: {
    title: string
    desc: string
    img: string
    logo: string
  }[]
}

const HomeShowcase = ({ data }: IHomeShowcaseProps) => {
  const [imageId, setImageId] = useState<number>(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageId((state) => {
        if (state >= data.length - 1) {
          return 0
        }
        return state + 1
      })
    }, CAROUSEL_DURATION * 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [data, imageId])
  return (
    <div className='md:flex'>
      <div className='relative flex flex-col flex-grow '>
        {data.map((game, index) => (
          <>
            {imageId === index && (
              <>
                <div className='flex flex-col h-full p-12 bg-gradient-to-tr from-black via-transparent'>
                  <div className='mt-auto'>
                    <img
                      src={data[imageId].logo}
                      className='object-cover w-48 h-16 mt-36'
                      alt=''
                    />
                    <div className='mt-6 drop-shadow-md'>
                      {data[imageId].title}
                    </div>

                    <div className='mt-4 w-96 line-clamp-4'>
                      {data[imageId].desc}
                    </div>
                  </div>

                  <div className='flex mt-16 text-sm'>
                    <button
                      type='button'
                      className='px-4 py-2 mr-0.5 uppercase bg-blue-600 rounded-l hover:bg-blue-700'
                    >
                      Buy now
                    </button>
                    <button
                      type='button'
                      className='px-4 py-2 bg-blue-600 rounded-r hover:bg-blue-700'
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className='absolute inset-0 overflow-hidden -z-10'>
                  <motion.img
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.06 }}
                    transition={{
                      duration: CAROUSEL_DURATION,
                      ease: 'easeOut',
                    }}
                    src={data[imageId].img}
                    alt=''
                    className='object-cover w-full h-full'
                  />
                </div>
              </>
            )}
          </>
        ))}
      </div>
      <div className='relative flex h-full pl-1 bg-gray-900 md:flex-col'>
        {data.map((game, index) => (
          <div
            className={`relative overflow-hidden flex-1 p-1 ${
              index === imageId && 'bg-blue-900'
            }`}
          >
            <button
              type='button'
              onClick={() => setImageId(index)}
              tabIndex={0}
              className='w-full'
            >
              <img
                className='object-cover w-full h-24 rounded cursor-pointer'
                src={game.img}
                alt=''
              />
            </button>
            {index === imageId && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: CAROUSEL_DURATION,
                  ease: 'linear',
                }}
                className='absolute bottom-0 h-1 -mx-1 bg-blue-600'
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeShowcase
