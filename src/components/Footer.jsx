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
      <div className='mx-auto max-w-6xl'>
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-col gap-8 text-gray-700 dark:text-gray-400 lg:flex-row lg:items-center lg:justify-between'
        >
          <div>
            <a href='/' aria-label='Amazonis home' className='inline-block'>
              <img
                src={theme === 'dark' ? assets.logo_dark : assets.logo}
                className='w-36 sm:w-44'
                alt='Amazonis'
              />
            </a>
            <p className='mt-3 max-w-md text-sm leading-7 text-gray-600 dark:text-gray-300'>
              From strategy to execution, we craft digital solutions that move your business forward.
            </p>
          </div>

          <nav aria-label='Footer navigation'>
            <ul className='flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-gray-700 dark:text-gray-300'>
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='inline-flex border-b-2 border-transparent pb-1 transition-colors hover:border-primary hover:text-primary'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Motion.div>
      </div>

      <hr className='mx-auto my-6 max-w-6xl border-gray-300 dark:border-gray-600' />

      <nav aria-label='Legal pages' className='mx-auto max-w-6xl'>
        <ul className='flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-gray-500 sm:text-sm dark:text-gray-400'>
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
        className='mx-auto max-w-6xl py-6 text-sm text-gray-500'
      >
        <p>Copyright © 2026 Amazonis IT Services Pvt. Ltd. All Rights Reserved.</p>
      </Motion.div>
    </Motion.footer>
  )
}

export default Footer
