import React, { useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false)

  const servicesData = [
    {
      title: 'Website Development',
      tagline: 'Fast websites that convert',
      description: 'Build fast, SEO-friendly websites that engage visitors and grow your business.',
      icon: assets.social_icon,
      accent: 'from-blue-500 to-cyan-300',
      glow: 'bg-blue-500/30',
      mark: 'W',
      // link: '/services/website-development',
    },
    {
      title: 'E-Commerce Development',
      tagline: 'Secure online stores',
      description: 'Launch secure online stores with seamless shopping and integrated payments.',
      icon: assets.social_icon,
      accent: 'from-violet-500 to-fuchsia-300',
      glow: 'bg-violet-500/30',
      mark: 'E',
      // link: '/services/ecommerce-development',
    },
    {
      title: 'Mobile App Development',
      tagline: 'Modern Android and iOS apps',
      description: 'Create modern Android and iOS apps with scalable performance and intuitive design.',
      icon: assets.social_icon,
      accent: 'from-emerald-400 to-lime-200',
      glow: 'bg-emerald-400/25',
      mark: 'M',
      // link: '/services/mobile-app-development',
    },
    {
      title: 'AI Solutions',
      tagline: 'Automate smarter workflows',
      description: 'Automate workflows with AI agents and intelligent solutions that boost productivity.',
      icon: assets.social_icon,
      accent: 'from-orange-400 to-amber-200',
      glow: 'bg-orange-400/25',
      mark: 'A',
      // link: '/services/ai-solutions',
    },
    {
      title: 'Digital Marketing',
      tagline: 'Growth across every channel',
      description: 'Grow your brand with SEO, Google Ads, social media, and performance marketing.',
      icon: assets.social_icon,
      accent: 'from-rose-500 to-pink-300',
      glow: 'bg-rose-500/25',
      mark: 'D',
      // link: '/services/digital-marketing',
    },
    {
      title: 'Social Media Management (Slour)',
      tagline: 'Social scheduling with AI',
      description: 'Plan, schedule, and automate content with AI to grow across every social platform.',
      icon: assets.social_icon,
      accent: 'from-purple-500 to-indigo-300',
      glow: 'bg-purple-500/30',
      mark: 'S',
      link: 'https://slour.in/',
      button: 'Explore Slour',
    },
    {
      title: 'Influencer Marketing',
      tagline: 'Creator partnerships that work',
      description: 'Partner with trusted creators to boost brand awareness and customer engagement.',
      icon: assets.social_icon,
      accent: 'from-teal-400 to-sky-300',
      glow: 'bg-teal-400/25',
      mark: 'I',
      // link: '/services/influencer-marketing',
    },
    {
      title: 'Hosting & Maintenance',
      tagline: 'Reliable care after launch',
      description: 'Reliable hosting, security, backups, and maintenance to keep your website online.',
      icon: assets.social_icon,
      accent: 'from-slate-300 to-blue-300',
      glow: 'bg-slate-400/25',
      mark: 'H',
      // link: '/services/hosting-maintenance',
    },
  ]
  const visibleServices = showAllServices ? servicesData : servicesData.slice(0, 4)

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
        {visibleServices.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {!showAllServices && (
        <button
          type='button'
          onClick={() => setShowAllServices(true)}
          className='mt-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105'
        >
          View All Services
        </button>
      )}

    </motion.div>
  )
}

export default Services
