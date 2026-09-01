import React from 'react'
import { motion as Motion } from 'motion/react'
import ServiceCard from './ServiceCard'
import servicesData from '../data/servicesData'
import assets from '../assets/assets'

const ServicesPage = () => {
  return (
    <main className='bg-white text-gray-950 dark:bg-black dark:text-white'>
      <section className='relative overflow-hidden border-b border-gray-200 bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-10 sm:py-20 lg:px-24 xl:px-40 dark:border-gray-800 dark:from-gray-950 dark:to-black'>
        <img src={assets.bgImage2} alt='' className='absolute -top-96 -left-64 -z-0 opacity-60 dark:hidden' />
        <div className='relative z-10 mx-auto max-w-5xl text-center'>
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-xs font-extrabold uppercase tracking-widest text-primary'
          >
            Our Services
          </Motion.p>
          <Motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='mt-4 text-4xl font-extrabold leading-tight sm:text-6xl'
          >
            Digital services built for business growth
          </Motion.h1>
          <Motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300'
          >
            Explore every Amazonis service, from websites and apps to AI, marketing, hosting and ongoing support.
          </Motion.p>
        </div>
      </section>

      <section className='px-4 py-14 sm:px-10 lg:px-24 xl:px-40 lg:py-20'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2'>
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className='mx-auto mt-10 flex max-w-6xl justify-center'>
          <a
            href='/contact'
            className='rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105'
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
