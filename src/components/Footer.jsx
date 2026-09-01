import React from 'react'
import assets from '../assets/assets'
import { motion as Motion } from 'motion/react'
import navigationLinks from '../data/navigationLinks'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cancellation Policy', href: '/cancellation-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Acceptable Use Policy', href: '/acceptable-use-policy' },
  { label: 'Service Delivery & Fulfilment Policy', href: '/service-delivery-fulfilment-policy' },
]

const Footer = ({ theme, compact = false }) => {
  return (
    <Motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`bg-slate-50 px-4 pt-10 dark:bg-gray-900 sm:px-10 lg:px-24 xl:px-40 ${
        compact ? 'mt-8 sm:mt-10' : 'mt-20 sm:mt-40'
      }`}
    >
      <div className='max-w-6xl'>
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-gray-700 dark:text-gray-400'
        >
          <a href='/' aria-label='Amazonis home' className='inline-block'>
            <img
              src={theme === 'dark' ? assets.logo_dark : assets.logo}
              className='w-44 sm:w-72'
              alt='Amazonis'
            />
          </a>
          <p className='mt-6 max-w-4xl text-lg leading-8 text-gray-700 dark:text-gray-300 sm:text-2xl sm:leading-10'>
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <nav aria-label='Footer navigation' className='mt-5'>
            <ul className='grid grid-cols-2 gap-x-10 gap-y-4 text-lg text-gray-700 sm:flex sm:flex-wrap sm:items-center sm:gap-x-16 sm:text-2xl dark:text-gray-300'>
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='inline-flex py-2 transition-colors hover:text-primary'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      <nav aria-label='Legal pages'>
        <ul className='grid grid-cols-1 gap-3 text-xs text-gray-500 sm:grid-cols-2 sm:text-sm lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-3 dark:text-gray-400'>
          {legalLinks.map((link) => (
            <li key={link.href}>
              <a className='hover:text-primary transition-colors' href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='py-6 text-sm text-gray-500'
      >
        <p>Copyright © 2026 Amazonis IT Services Pvt. Ltd. All Rights Reserved.</p>
      </Motion.div>
    </Motion.footer>
  )
}

export default Footer
