import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const NotFound = ({ theme }) => {
  return (
    <main className='min-h-[78vh] px-4 sm:px-12 flex items-center justify-center overflow-hidden'>
      <div className='relative w-full max-w-3xl text-center py-20'>
        <div className='absolute inset-0 flex items-center justify-center pointer-events-none' aria-hidden='true'>
          <span className='text-[180px] sm:text-[280px] font-bold leading-none text-primary/[0.05] dark:text-primary/10'>
            404
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          className='relative'
        >
          <a href='/' className='inline-block' aria-label='Amazonis home'>
            <img
              src={theme === 'dark' ? assets.logo_dark : assets.logo}
              alt='Amazonis'
              className='w-40 sm:w-52 mx-auto'
            />
          </a>

          <p className='mt-10 text-primary text-sm font-semibold tracking-[0.18em]'>ERROR 404</p>
          <h1 className='mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            This page got lost.
          </h1>
          <p className='max-w-xl mx-auto mt-5 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400'>
            The page you are looking for does not exist, may have moved, or the URL may be incorrect.
          </p>

          <a
            href='/'
            className='inline-flex items-center justify-center mt-9 px-7 py-3.5 rounded-full bg-primary text-white font-medium hover:scale-105 transition-transform'
          >
            Back to Home
            <span className='ml-2' aria-hidden='true'>→</span>
          </a>
        </motion.div>
      </div>
    </main>
  )
}

export default NotFound
