import React, { useRef, useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import { motion } from 'motion/react'

const ProductCard = ({ product, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (event) => {
    const bounds = cardRef.current.getBoundingClientRect()
    setPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className='group relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-100 transition-all duration-300 dark:border-gray-700 dark:bg-gray-900 dark:shadow-white/10'
      style={{
        borderColor: visible ? product.hoverColor : undefined,
        boxShadow: visible ? `0 24px 70px ${product.hoverColor}26` : undefined,
      }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      ref={cardRef}
    >
      <div
        className='pointer-events-none absolute z-0 h-[300px] w-[300px] rounded-full blur-2xl transition-opacity duration-500 mix-blend-multiply dark:mix-blend-lighten'
        style={{
          top: position.y - 150,
          left: position.x - 150,
          backgroundColor: product.hoverColor,
          opacity: visible ? 0.45 : 0,
        }}
      />

      <div
        className='relative z-10 flex min-h-[220px] items-center gap-8 rounded-[10px] bg-white p-8 transition-all hover:m-0.5 hover:p-7.5 dark:bg-gray-900 max-sm:flex-col max-sm:text-center sm:gap-10'
        style={{ '--product-color': product.hoverColor }}
      >
        <div
          className='relative grid h-28 w-28 shrink-0 place-items-center overflow-hidden rounded-full bg-gray-100 shadow-inner shadow-gray-200/70 transition-colors duration-300 dark:bg-gray-800 dark:shadow-black/30'
          style={{
            backgroundColor: visible ? `${product.hoverColor}14` : undefined,
          }}
        >
          <img
            src={product.logo}
            alt={`${product.title} logo`}
            className={`h-full w-full object-contain p-5 transition-opacity duration-300 ${
              product.hoverLogo ? 'group-hover:opacity-0' : ''
            }`}
          />
          {product.hoverLogo && (
            <img
              src={product.hoverLogo}
              alt=''
              className='absolute inset-0 h-full w-full rounded-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100'
            />
          )}
        </div>

        <div className='flex-1'>
          <p
            className='mb-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors duration-300'
            style={{ color: visible ? product.hoverColor : undefined }}
          >
            Amazonis product
          </p>
          <h3 className='font-bold text-gray-900 dark:text-white'>{product.title}</h3>
          <p className='mt-2 text-sm font-semibold text-gray-600 dark:text-gray-300'>
            {product.tagline}
          </p>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

const OurProducts = () => {
  const productData = [
    {
      title: 'Venuefy',
      tagline: 'Venue booking made simple',
      description: 'Discover, manage and book event venues with confidence.',
      logo: assets.venuefy_logo,
      hoverLogo: assets.venuefy_logo_hover,
      hoverColor: '#162c53',
    },
    {
      title: 'Slour',
      tagline: 'Social scheduling with AI',
      description: 'Plan, schedule and automate content across social platforms.',
      logo: assets.slour_logo,
      hoverLogo: assets.slour_logo_hover,
      hoverColor: '#ef4444',
    },
    {
      title: 'Inphra',
      tagline: 'Infrastructure for digital growth',
      description: 'Reliable hosting, maintenance and systems for growing products.',
      logo: assets.inphra_logo,
      hoverLogo: assets.inphra_logo_hover,
      hoverColor: '#0959ed',
    },
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='our-products'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title title='Our products' desc='Amazonis builds and operates digital products designed for real business growth.' />

      <div className='grid w-full max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {productData.map((product, index) => (
          <ProductCard key={product.title} product={product} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default OurProducts
