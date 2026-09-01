import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import { motion } from 'motion/react'

const OurProducts = () => {
  const productData = [
    {
      title: 'Venuefy',
      tagline: 'Venue booking made simple',
      description: 'A modern platform for discovering, managing and booking event venues with confidence.',
      accent: 'from-blue-500 to-cyan-300',
      glow: 'bg-blue-500/30',
      mark: 'V',
      logo: assets.venuefy_logo,
    },
    {
      title: 'Slour',
      tagline: 'Social scheduling with AI',
      description: 'Plan, schedule and automate content across social platforms from one clean workspace.',
      accent: 'from-violet-500 to-fuchsia-300',
      glow: 'bg-violet-500/30',
      mark: 'S',
      logo: assets.slour_logo,
    },
    {
      title: 'Inphra',
      tagline: 'Infrastructure for digital growth',
      description: 'Reliable hosting, maintenance and technical systems built to keep products moving.',
      accent: 'from-emerald-400 to-lime-200',
      glow: 'bg-emerald-400/25',
      mark: 'I',
      logo: assets.inphra_logo,
    },
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='our-products'
      className='flex flex-col items-center gap-9 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title title='Our products' desc='Amazonis builds and operates digital products designed for real business growth.' />

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
        {productData.map((product, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={product.title}
            className='group relative min-h-[480px] overflow-hidden rounded-[32px] bg-black p-8 text-white shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20'
          >
            <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl ${product.glow}`} />
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%)]' />
            <div className='absolute inset-x-8 top-8 flex items-center justify-between'>
              <span className='text-xs font-semibold uppercase tracking-[0.22em] text-white/55'>
                Amazonis product
              </span>
              <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${product.accent}`} />
            </div>

            <div className='relative flex h-full min-h-[416px] flex-col justify-between'>
              <div className='pt-16'>
                <div className={`mx-auto grid h-28 w-28 place-items-center overflow-hidden rounded-[28px] bg-gradient-to-br ${product.accent} p-3 shadow-2xl shadow-white/10 transition-transform duration-500 group-hover:scale-110`}>
                  <img
                    src={product.logo}
                    alt={`${product.title} logo`}
                    className='max-h-full max-w-full object-contain'
                  />
                </div>
                <h3 className='mt-10 text-center text-4xl font-extrabold'>{product.title}</h3>
                <p className='mt-3 text-center text-base font-semibold text-white/80'>
                  {product.tagline}
                </p>
              </div>

              <div>
                <p className='mx-auto max-w-xs text-center text-sm leading-7 text-white/60'>
                  {product.description}
                </p>
                <div className='mt-8 flex items-center justify-center gap-2 text-2xl font-extrabold'>
                  <span className={`grid h-9 w-9 place-items-center overflow-hidden rounded-lg bg-gradient-to-br ${product.accent} p-1.5`}>
                    <img
                      src={product.logo}
                      alt=''
                      className='max-h-full max-w-full object-contain'
                    />
                  </span>
                  <span>{product.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurProducts
