import React from 'react'
import { motion } from 'motion/react'

const ServiceCard = ({ service, index }) => {
  const isExternalLink = service.link?.startsWith('http')

  return (
    <motion.a
      href={service.link || '#contact-us'}
      target={isExternalLink ? '_blank' : '_self'}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className='group relative min-h-[360px] overflow-hidden rounded-[32px] bg-black p-7 text-white shadow-2xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20 sm:min-h-[390px] sm:p-8'
    >
      <div className={`absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl ${service.glow}`} />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_42%)]' />

      <div className='absolute inset-x-7 top-7 flex items-center justify-between sm:inset-x-8 sm:top-8'>
        <span className='text-xs font-semibold uppercase tracking-[0.22em] text-white/55'>
          Amazonis service
        </span>
        <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${service.accent}`} />
      </div>

      <div className='relative flex h-full min-h-[306px] flex-col justify-between sm:min-h-[326px]'>
        <div className='pt-14'>
          <div className={`mx-auto grid h-24 w-24 place-items-center rounded-[26px] bg-gradient-to-br ${service.accent} text-4xl font-black text-black shadow-2xl shadow-white/10 transition-transform duration-500 group-hover:scale-110 sm:h-28 sm:w-28 sm:rounded-[28px] sm:text-5xl`}>
            {service.mark}
          </div>
          <h3 className='mx-auto mt-8 max-w-sm text-center text-3xl font-extrabold leading-tight sm:text-4xl'>
            {service.title}
          </h3>
          <p className='mt-3 text-center text-base font-semibold text-white/80'>
            {service.tagline}
          </p>
        </div>

        <div>
          <p className='mx-auto max-w-sm text-center text-sm leading-7 text-white/60'>
            {service.description}
          </p>
          <div className='mt-7 flex items-center justify-center gap-2 text-xl font-extrabold sm:text-2xl'>
            <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${service.accent} text-lg text-black`}>
              {service.mark}
            </span>
            <span>{service.button || 'Learn More'}</span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default ServiceCard
