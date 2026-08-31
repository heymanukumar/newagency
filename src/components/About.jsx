import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <main>
      <section className='min-h-[70vh] px-4 sm:px-12 lg:px-24 xl:px-40 py-20 sm:py-28 flex items-center'>
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
      </section>

      <section className='px-4 sm:px-12 lg:px-24 xl:px-40 py-20 sm:py-28 bg-slate-50 dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto'>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-primary text-xs sm:text-sm font-semibold tracking-[0.18em]'
          >
            OUR STORY
          </motion.p>

          <div className='mt-6 grid lg:grid-cols-2 gap-10 lg:gap-20'>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-3xl sm:text-5xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white'
            >
              We do not just deliver projects. We build what comes next.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400'
            >
              <p>
                Amazonis brings business thinking, design and technology together to
                create digital solutions that are clear, capable and ready for real-world growth.
              </p>
              <p>
                Alongside our client work, we build and operate our own products—Venuefy™,
                Slour and Inphra. That ownership mindset shapes every project: we think
                beyond launch, solve practical problems and build for the long term.
              </p>
            </motion.div>
          </div>

          <div className='mt-14 pt-10 border-t border-gray-200 dark:border-gray-700 grid sm:grid-cols-3 gap-8'>
            <div>
              <strong className='block text-3xl font-semibold text-primary'>3</strong>
              <span className='block mt-2 text-sm text-gray-600 dark:text-gray-400'>Owned digital products</span>
            </div>
            <div>
              <strong className='block text-3xl font-semibold text-primary'>End-to-end</strong>
              <span className='block mt-2 text-sm text-gray-600 dark:text-gray-400'>Strategy to ongoing support</span>
            </div>
            <div>
              <strong className='block text-3xl font-semibold text-primary'>India</strong>
              <span className='block mt-2 text-sm text-gray-600 dark:text-gray-400'>Built locally, designed to scale</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
