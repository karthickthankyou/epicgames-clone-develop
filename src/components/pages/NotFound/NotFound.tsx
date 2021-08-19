import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as NotFoundSVG } from '../../../assets/404.svg'

export interface INotFoundProps {}

const NotFound = () => {
  const constraintsRef = useRef(null)
  const [showBrokeMessage, setShowBrokeMessage] = useState<number>(0)
  return (
    <motion.div
      className='flex flex-col items-center justify-center w-full h-screen'
      ref={constraintsRef}
    >
      <motion.div
        className='flex items-center cursor-move'

        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 2 }}
      >
        {/* <NotFoundSVG className='object-cover h-60 ' /> */}
        <div className='text-xl text-right uppercase w-28 '>
          <div>Page not found</div>
          {showBrokeMessage > 50 && (
            <div className='mt-12 text-xs text-gray-300'>You broke it. ;(</div>
          )}

          {showBrokeMessage > 150 && (
            <div className='mt-3 text-xs text-gray-300'>
              It is already 404!!!
            </div>
          )}
          {showBrokeMessage > 300 && (
            <div className='mt-3 text-xs text-gray-300'>Stop doing it!</div>
          )}
        </div>
        <motion.div
          className='px-4 mx-4 font-thin origin-left transform skew-y-12 border border-white rounded-r-3xl text-9xl line-height-2 w-min'
          initial={{ skewY: -6 }}
          animate={{ skewY: 6 }}
          transition={{ duration: 4, yoyo: 10 }}
        >
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            onDrag={() => setShowBrokeMessage((count) => count + 1)}
          >
            404
          </motion.div>
          <motion.div
            className='w-full mt-4 text-sm text-gray-400 '
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            onDrag={() => setShowBrokeMessage((count) => count + 1)}
          >
            The page you were looking for was not found. Please verify the
            link/URL or try starting back at our home page.
          </motion.div>
          <Link to='/' className='text-base uppercase btn'>
            back to Home page
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default NotFound
