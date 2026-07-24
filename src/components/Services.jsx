import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

  const servicesData = [
  {
    title: 'AI Solutions',
    description: 'Transform your business with AI-powered automation, AI agents, intelligent workflows, chatbots, and custom AI solutions.',
    icon: assets.content_icon,
    link: '/services/ai-solutions',
  },
  {
    title: 'Website Development',
    description: 'Build fast, responsive, SEO-friendly, and scalable websites using React, Next.js, WordPress, and modern technologies.',
    icon: assets.marketing_icon,
    link: '/services/website-development',
  },
  {
    title: 'E-Commerce Development',
    description: 'Launch secure and scalable online stores with payment gateways, inventory management, and seamless shopping experiences.',
    icon: assets.ecommerce_icon,
    link: '/services/ecommerce-development',
  },
  {
    title: 'Mobile App Development',
    description: 'Develop high-performance Android, iOS, and cross-platform mobile applications with modern UI and scalable architecture.',
    icon: assets.mobile_icon,
    link: '/services/mobile-app-development',
  },
  {
    title: 'Digital Marketing',
    description: 'Grow your business with SEO, Google Ads, Meta Ads, content marketing, and data-driven digital marketing strategies.',
    icon: assets.digital_marketing_icon,
    link: '/services/digital-marketing',
  },
  {
    title: 'Influencer Marketing',
    description: 'Partner with trusted creators and influencers to increase brand awareness, engagement, and conversions.',
    icon: assets.ads_icon,
    link: '/services/influencer-marketing',
  },
  {
    title: 'Social Media Management (Slour)',
    description: 'Manage, schedule, and automate your social media with AI-powered content creation, analytics, and publishing.',
    icon: assets.social_icon,
    link: 'https://slour.in/',
  },
  {
    title: 'Hosting & Maintenance',
    description: 'Keep your website secure, fast, and always online with managed hosting, backups, SSL, updates, and ongoing maintenance.',
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
