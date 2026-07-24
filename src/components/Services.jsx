import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

  const servicesData = [
    {
      title: 'Website Development',
      description: 'Build fast, SEO-friendly websites that engage visitors and grow your business.',
      icon: assets.marketing_icon,
      link: '/services/website-development',
    },
    {
      title: 'E-Commerce Development',
      description: 'Launch secure online stores with seamless shopping and integrated payments.',
      icon: assets.ecommerce_icon,
      link: '/services/ecommerce-development',
    },
    {
      title: 'Mobile App Development',
      description: 'Create modern Android and iOS apps with scalable performance and intuitive design.',
      icon: assets.mobile.svg,
      link: '/services/mobile-app-development',
    },
    {
      title: 'AI Solutions',
      description: 'Automate workflows with AI agents and intelligent solutions that boost productivity.',
      icon: assets.ai_icon,
      link: '/services/ai-solutions',
    },
    {
      title: 'Digital Marketing',
      description: 'Grow your brand with SEO, Google Ads, social media, and performance marketing.',
      icon: assets.digital_marketing_icon,
      link: '/services/digital-marketing',
    },
    {
      title: 'Social Media Management (Slour)',
      description: 'Plan, schedule, and automate content with AI to grow across every social platform.',
      icon: assets.social_icon,
      link: 'https://slour.in/',
      button: 'Explore Slour',
    },
    {
      title: 'Influencer Marketing',
      description: 'Partner with trusted creators to boost brand awareness and customer engagement.',
      icon: assets.ads_icon,
      link: '/services/influencer-marketing',
    },
    {
      title: 'Hosting & Maintenance',
      description: 'Reliable hosting, security, backups, and maintenance to keep your website online.',
      icon: assets.hosting_icon,
      link: '/services/hosting-maintenance',
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
