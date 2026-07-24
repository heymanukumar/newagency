import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

  const servicesData = [
    {
      title: 'Website Development',
      description: 'Build fast, responsive websites that enhance user experience and help your business grow.',
      icon: assets.website_icon
    },
    {
      title: 'AI Solutions',
      description: 'Automate workflows with AI-powered solutions that improve efficiency and productivity.',
      icon: assets.ai_icon
    },
    {
      title: 'Influencer Marketing',
      description: 'Partner with trusted creators to boost brand awareness and reach the right audience.',
      icon: assets.influencer_icon
    },
    {
      title: 'Social Media Management (Slour)',
      description: 'Plan, schedule, and grow your social media with AI-powered content and automation.',
      icon: assets.social_icon
    },
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

      <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

      <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

    </motion.div>
  )
}

export default Services
