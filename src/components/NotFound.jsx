import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const NotFound = ({ theme }) => {
  return (
    <main className='min-h-screen overflow-hidden bg-white px-4 py-8 text-gray-900 sm:px-10 lg:px-24 xl:px-40 dark:bg-black dark:text-white'>
      <div className='mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-6xl flex-col'>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className='flex items-center justify-between'
        >
          <a href='/' className='inline-block' aria-label='Amazonis home'>
            <img
              src={theme === 'dark' ? assets.logo_dark : assets.logo}
              alt='Amazonis'
              className='w-32 sm:w-44'
            />
          </a>
          <a
            href='/'
            className='rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary dark:border-gray-800 dark:text-gray-300'
          >
            Home
          </a>
        </motion.div>

        <section className='grid flex-1 items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:py-10'>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p className='text-sm font-extrabold uppercase tracking-[0.28em] text-primary'>
              Error 404
            </p>
            <h1 className='mt-5 max-w-3xl text-5xl font-extrabold leading-tight sm:text-7xl lg:text-8xl'>
              This page does not exist.
            </h1>
            <p className='mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300'>
              The link may be broken, the page may have moved, or the address may be typed
              incorrectly. You can return to Amazonis home or contact us for help.
            </p>

            <div className='mt-9 flex flex-wrap gap-3'>
              <a
                href='/'
                className='inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105'
              >
                Back to Home
              </a>
              <a
                href='/#contact-us'
                className='inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-primary hover:text-primary dark:border-gray-700 dark:text-gray-200'
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className='relative mx-auto grid aspect-square w-full max-w-[360px] place-items-center rounded-lg border border-gray-200 bg-slate-50 dark:border-gray-800 dark:bg-gray-950'
          >
            <span
              className='absolute text-[9rem] font-extrabold leading-none text-primary/10 sm:text-[11rem]'
              aria-hidden='true'
            >
              404
            </span>
            <img
              src={theme === 'dark' ? assets.logo_dark : assets.logo}
              alt='Amazonis'
              className='relative w-44 sm:w-56'
            />
          </motion.div>
        </section>
      </div>
    </main>
  )
}

export default NotFound
