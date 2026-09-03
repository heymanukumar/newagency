import React from 'react'
import { motion as Motion } from 'motion/react'
import assets from '../assets/assets'
import servicesData from '../data/servicesData'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const eyebrowClass =
  'inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-900 dark:text-white before:h-2 before:w-2 before:rounded-full before:bg-primary'

const serviceImages = [
  assets.work_dashboard_management,
  assets.hero_img,
  assets.work_mobile_app,
  assets.bgImage2,
]

const processSteps = [
  {
    title: 'Understand',
    text: 'We begin with your business requirement, users, goals, scope and expected outcome.',
  },
  {
    title: 'Plan',
    text: 'We define deliverables, timeline, pricing, project responsibilities and execution flow.',
  },
  {
    title: 'Build',
    text: 'Our team designs, develops, reviews and improves the solution with structured feedback.',
  },
  {
    title: 'Support',
    text: 'After delivery, we help with hosting, maintenance, updates and ongoing technical support.',
  },
]

const ServicesPage = () => {
  return (
    <main className='overflow-hidden bg-[#f4f4f2] text-gray-900 dark:bg-black dark:text-white'>
      <section className='px-4 py-8 sm:px-8 lg:px-14'>
        <div className='mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white px-5 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-28 lg:px-16 lg:pt-36 dark:bg-gray-950'>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mx-auto max-w-5xl text-center'
          >
            <h1 className='text-6xl font-extrabold uppercase leading-none tracking-normal text-gray-950 sm:text-7xl lg:text-8xl dark:text-white'>
              Services
            </h1>
            <p className='mx-auto mt-8 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400'>
              Strategy, design, development, automation, hosting and digital growth support for
              businesses that need reliable technology execution.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className='mt-20 grid gap-4 md:grid-cols-[0.8fr_1.2fr_0.8fr] lg:mt-28'
          >
            <div className='hidden overflow-hidden rounded-[16px] bg-gray-100 md:block dark:bg-gray-900'>
              <img src={assets.bgImage1} alt='Planning workspace' className='h-72 w-full object-cover' />
            </div>
            <div className='overflow-hidden rounded-[16px] bg-gray-100 dark:bg-gray-900'>
              <img src={assets.work_dashboard_management} alt='Digital services dashboard' className='h-72 w-full object-cover' />
            </div>
            <div className='hidden overflow-hidden rounded-[16px] bg-gray-100 md:block dark:bg-gray-900'>
              <img src={assets.work_mobile_app} alt='Mobile app service preview' className='h-72 w-full object-cover' />
            </div>
          </Motion.div>

          <div className='mt-24 grid gap-12 border-b border-gray-200 pb-20 lg:mt-32 lg:grid-cols-[1fr_1.15fr] lg:gap-24 dark:border-gray-800'>
            <Motion.div {...fadeUp}>
              <p className={eyebrowClass}>What We Build</p>
              <h2 className='mt-7 max-w-xl text-4xl font-extrabold uppercase leading-tight tracking-normal text-gray-950 sm:text-5xl lg:text-6xl dark:text-white'>
                Complete digital services for modern businesses.
              </h2>
            </Motion.div>

            <Motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <p className='max-w-2xl text-2xl leading-snug text-gray-700 sm:text-3xl dark:text-gray-300'>
                Every project starts with clarity,
                <span className='text-gray-300 dark:text-gray-600'> then moves into focused execution.</span>
              </p>
              <div className='mt-9 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400'>
                <p>
                  We design and develop websites, e-commerce platforms, custom software, SaaS
                  products and AI-powered business solutions.
                </p>
                <p>
                  We also provide hosting, maintenance, technical support and digital management
                  services based on each customer’s requirement.
                </p>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto max-w-6xl'>
          <Motion.div {...fadeUp} className='max-w-4xl'>
            <p className={eyebrowClass}>Our Services</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
              Built to launch, manage and scale your digital presence.
            </h2>
          </Motion.div>

          <div className='mt-12 grid gap-5 md:grid-cols-2'>
            {servicesData.map((service, index) => (
              <Motion.article
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className='group grid min-h-60 gap-6 rounded-[16px] border border-gray-200 bg-[#f8f8f7] p-6 transition hover:-translate-y-1 hover:border-primary sm:grid-cols-[7rem_1fr] dark:border-gray-800 dark:bg-gray-900'
              >
                <div className='overflow-hidden rounded-[12px] bg-white dark:bg-black'>
                  <img
                    src={serviceImages[index % serviceImages.length]}
                    alt=''
                    className='h-28 w-full object-cover sm:h-full'
                  />
                </div>
                <div>
                  <span className='text-xs font-extrabold uppercase tracking-[0.18em] text-primary'>
                    0{index + 1}
                  </span>
                  <h3 className='mt-4 text-2xl font-extrabold leading-tight text-gray-950 dark:text-white'>
                    {service.title}
                  </h3>
                  <p className='mt-4 text-base leading-7 text-gray-600 dark:text-gray-400'>
                    {service.description}
                  </p>
                  {service.link && (
                    <a
                      href={service.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-6 inline-flex text-sm font-extrabold text-primary'
                    >
                      Explore platform →
                    </a>
                  )}
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f4f4f2] px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-black'>
        <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>How We Work</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              A clear process from idea to delivery.
            </h2>
          </Motion.div>

          <div className='grid gap-4'>
            {processSteps.map((step, index) => (
              <Motion.article
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className='grid gap-4 rounded-[16px] bg-white p-6 sm:grid-cols-[6rem_1fr] dark:bg-gray-950'
              >
                <p className='text-4xl font-extrabold text-gray-300 dark:text-gray-700'>
                  0{index + 1}
                </p>
                <div>
                  <h3 className='text-2xl font-extrabold'>{step.title}</h3>
                  <p className='mt-3 text-base leading-7 text-gray-600 dark:text-gray-400'>
                    {step.text}
                  </p>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-primary p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center'>
          <Motion.div {...fadeUp}>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/70'>
              Start a Project
            </p>
            <h2 className='mt-5 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Need a dependable technology partner?
            </h2>
            <p className='mt-5 max-w-2xl text-base leading-8 text-white/75'>
              Share your requirement and we will help you define the right scope, timeline and next
              steps.
            </p>
          </Motion.div>
          <Motion.a
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            href='/contact'
            className='inline-flex w-max items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-extrabold text-primary transition hover:scale-105'
          >
            Contact Us
            <img src={assets.arrow_icon} alt='' className='w-4 invert' />
          </Motion.a>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
