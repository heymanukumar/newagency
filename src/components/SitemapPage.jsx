import React from 'react'

const pages = [
  { label: 'Home', href: '/', description: 'Amazonis services, work, clients and contact.' },
  { label: 'Services', href: '/services', description: 'All Amazonis service cards and offerings.' },
  { label: 'About', href: '/about', description: 'Company story, products and approach.' },
  { label: 'Contact', href: '/contact', description: 'Contact Amazonis for projects and support.' },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
    description: 'How Amazonis handles personal information.',
  },
  {
    label: 'Terms & Conditions',
    href: '/terms-and-conditions',
    description: 'Rules for using the website and working with Amazonis.',
  },
  {
    label: 'Cookie Policy',
    href: '/cookie-policy',
    description: 'How cookies and similar technologies may be used.',
  },
  {
    label: 'Refund Policy',
    href: '/refund-policy',
    description: 'How service refund requests are handled.',
  },
  {
    label: 'Cancellation Policy',
    href: '/cancellation-policy',
    description: 'How project or service cancellation requests are handled.',
  },
  {
    label: 'Disclaimer',
    href: '/disclaimer',
    description: 'Important limitations about website information and service outcomes.',
  },
  {
    label: 'Acceptable Use Policy',
    href: '/acceptable-use-policy',
    description: 'Rules for using Amazonis websites, products and platforms.',
  },
  {
    label: 'Service Delivery and Fulfilment Policy',
    href: '/service-delivery-fulfilment-policy',
    description: 'How Amazonis handles service delivery and fulfilment.',
  },
]

const SitemapPage = () => {
  return (
    <main className='bg-white text-gray-950 dark:bg-black dark:text-white'>
      <section className='border-b border-gray-200 bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-10 sm:py-20 lg:px-24 xl:px-40 dark:border-gray-800 dark:from-gray-950 dark:to-black'>
        <p className='text-xs font-extrabold uppercase tracking-widest text-primary'>Sitemap</p>
        <h1 className='mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl'>
          All pages
        </h1>
        <p className='mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300'>
          Browse the main Amazonis pages, legal policies and public resources from one place.
        </p>
      </section>

      <section className='mx-auto grid w-full max-w-6xl gap-4 px-4 py-14 sm:px-10 sm:grid-cols-2 lg:py-20'>
        {pages.map((page) => (
          <a
            key={page.href}
            href={page.href}
            className='rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-primary hover:bg-primary/5 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-primary dark:hover:bg-primary/10'
          >
            <h2 className='text-xl font-extrabold'>{page.label}</h2>
            <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300'>
              {page.description}
            </p>
          </a>
        ))}

        <a
          href='/sitemap.xml'
          className='rounded-lg border border-gray-200 bg-slate-50 p-6 transition-colors hover:border-primary hover:bg-primary/5 sm:col-span-2 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary dark:hover:bg-primary/10'
        >
          <h2 className='text-xl font-extrabold'>XML Sitemap</h2>
          <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300'>
            Search-engine readable sitemap file.
          </p>
        </a>
      </section>
    </main>
  )
}

export default SitemapPage
