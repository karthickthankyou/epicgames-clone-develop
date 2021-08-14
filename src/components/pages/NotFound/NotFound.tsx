import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as NotFoundSVG } from '../../../assets/404.svg'

export interface INotFoundProps {}

const NotFound = () => {
  const constraintsRef = useRef(null)
  return (
    <motion.div
      className='flex flex-col items-center justify-center w-full h-screen'
      ref={constraintsRef}
    >
      <motion.div
        className='flex items-center cursor-move'
        drag
        dragConstraints={constraintsRef}
        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 2 }}
      >
        {/* <NotFoundSVG className='object-cover h-60 ' /> */}
        <div className='text-xl text-right uppercase w-28 '>Page not found</div>
        <motion.div
          className='px-4 mx-4 font-thin origin-left transform skew-y-12 border border-white rounded-r-3xl text-9xl line-height-2 w-min'
          initial={{ skewY: -6 }}
          animate={{ skewY: 6 }}
          transition={{ duration: 4, yoyo: 10 }}
        >
          <div>404</div>
          <motion.div
            className='w-full mt-4 text-sm text-gray-400 '
            drag
            dragConstraints={constraintsRef}
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
