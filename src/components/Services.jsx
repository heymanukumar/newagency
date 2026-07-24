import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

  const servicesData = [
    {
      title: 'Website Development',
      description: 'Create fast, responsive, and SEO-optimized websites tailored to your business goals. We build modern web experiences that engage visitors and drive measurable growth.',
      icon: assets.marketing_icon,
      link: '/services/website-development',
    },
    {
      title: 'E-Commerce Development',
      description: 'Launch secure, high-performing online stores with seamless shopping experiences. From product management to payment integration, we help you sell with confidence.',
      icon: assets.ecommerce_icon,
      link: '/services/ecommerce-development',
    },
    {
      title: 'Mobile App Development',
      description: 'Build powerful Android and iOS applications with intuitive design and scalable technology. Deliver seamless mobile experiences that keep your users engaged.',
      icon: assets.mobile_icon,
      link: '/services/mobile-app-development',
    },
    {
      title: 'AI Solutions',
      description: 'Automate business processes with custom AI solutions, intelligent workflows, and AI agents. Improve productivity, reduce manual work, and accelerate business growth.',
      icon: assets.content_icon,
      link: '/services/ai-solutions',
    },
    {
      title: 'Digital Marketing',
      description: 'Increase your online visibility with SEO, Google Ads, social media marketing, and performance campaigns. Generate quality leads and grow your brand faster.',
      icon: assets.digital_marketing_icon,
      link: '/services/digital-marketing',
    },
    {
      title: 'Social Media Management (Slour)',
      description: 'Plan, schedule, and automate social media with AI-powered content creation and analytics. Manage multiple platforms efficiently and grow your online presence.',
      icon: assets.social_icon,
      link: 'https://slour.in/',
    },
    {
      title: 'Influencer Marketing',
      description: 'Collaborate with trusted influencers to expand your reach and build authentic brand awareness. Create impactful campaigns that connect with your target audience.',
      icon: assets.ads_icon,
      link: '/services/influencer-marketing',
    },
    {
      title: 'Hosting & Maintenance',
      description: 'Keep your website secure, fast, and always online with reliable hosting and proactive maintenance. We handle updates, backups, and performance optimization for you.',
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
