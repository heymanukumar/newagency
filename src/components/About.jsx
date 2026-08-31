import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <main className='min-h-[70vh] px-4 sm:px-12 lg:px-24 xl:px-40 py-20 sm:py-28 flex items-center'>
      <div className='w-full max-w-6xl mx-auto text-center'>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide'
        >
          ABOUT AMAZONIS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='mt-7 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white'
        >
          We turn ambitious ideas into
          <span className='block text-primary'>digital experiences that grow.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='max-w-3xl mx-auto mt-7 text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-400'
        >
          Amazonis IT Services Pvt. Ltd. is a technology company building thoughtful
          digital solutions for businesses while creating owned products including
          Venuefy™, Slour and Inphra.
        </motion.p>
      </div>
    </main>
  )
}

export default About
