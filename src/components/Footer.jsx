import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

// Change the name, link or order here to update the footer menu.
const footerMenuLinks = [
  { name: 'Home', href: '/#hero' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#our-work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/#contact-us' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]

const Footer = ({ theme }) => {
  const handleNewsletterSubmit = (event) => event.preventDefault()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
    >
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-sm text-gray-700 dark:text-gray-400'
        >
          <a href='/' aria-label='Amazonis home' className='inline-block'>
            <img
              src={theme === 'dark' ? assets.logo_dark : assets.logo}
              className='w-32 sm:w-44'
              alt='Amazonis'
            />
          </a>
          <p className='max-w-md mt-3'>
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <nav aria-label='Footer navigation' className='mt-5'>
            <ul className='grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3'>
              {footerMenuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='inline-flex px-3 py-2 rounded-full hover:text-primary hover:bg-primary/10 transition-colors'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400'
        >
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className='flex max-sm:flex-col gap-2 text-sm' onSubmit={handleNewsletterSubmit}>
            <label className='sr-only' htmlFor='footer-email'>Email address</label>
            <input
              id='footer-email'
              type='email'
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500 focus:border-primary'
            />
            <button type='submit' className='bg-primary text-white rounded px-6 py-3'>
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      <nav aria-label='Legal pages'>
        <ul className='flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400'>
          {legalLinks.map((link) => (
            <li key={link.href}>
              <a className='hover:text-primary transition-colors' href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='py-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'
      >
        <p>Copyright © 2026 Amazonis IT Services Pvt. Ltd. All Rights Reserved.</p>
        <div className='flex items-center justify-between gap-4'>
          <a
            href='https://www.linkedin.com/company/amazonis-official'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Amazonis on LinkedIn'
          >
            <img
              src={assets.linkedin_icon}
              alt=''
              className='cursor-pointer hover:scale-110 transition-transform duration-300'
            />
          </a>

          <a
            href='https://x.com/Amazonisindia'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Amazonis on X'
          >
            <img
              src={assets.twitter_icon}
              alt=''
              className='cursor-pointer hover:scale-110 transition-transform duration-300'
            />
          </a>

          <a
            href='https://www.instagram.com/amazonis.in'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Amazonis on Instagram'
          >
            <img
              src={assets.instagram_icon}
              alt=''
              className='cursor-pointer hover:scale-110 transition-transform duration-300'
            />
          </a>

          <a
            href='https://www.facebook.com/amazonisofficial'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Amazonis on Facebook'
          >
            <img
              src={assets.facebook_icon}
              alt=''
              className='cursor-pointer hover:scale-110 transition-transform duration-300'
            />
          </a>
        </div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer
