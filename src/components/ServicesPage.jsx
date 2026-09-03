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
  assets.bgImage1,
  assets.work_fitness_app,
]

const serviceLayouts = [
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-4 lg:row-span-3',
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-5 lg:row-span-3',
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-4 lg:row-span-2',
]

const processSteps = [
  {
    title: 'Share',
    text: 'Share your idea, existing problem or business goal. You do not need to prepare a technical document.',
  },
  {
    title: 'Discuss',
    text: 'We discuss the features, audience, technology, budget, deliverables and expected timeline.',
  },
  {
    title: 'Design',
    text: 'Our team prepares a clean and easy-to-use design aligned with your brand and users.',
  },
  {
    title: 'Develop',
    text: 'After approval, we begin development and keep you informed about the project’s progress.',
  },
  {
    title: 'Test',
    text: 'We test the design, features, speed, responsiveness, security and overall user experience.',
  },
  {
    title: 'Deploy',
    text: 'Once the project is approved, we deploy it and provide the agreed maintenance and technical support.',
  },
]

const expectations = [
  'Solutions built around your requirements',
  'Clear project scope and communication',
  'Modern and responsive design',
  'Secure and scalable development',
  'Transparent timelines and deliverables',
  'Support throughout the project',
  'Hosting and post-launch maintenance',
  'Long-term technical assistance',
]

const ServiceShowcaseCard = ({ service, index }) => {
  const isBlue = index === 1 || index === 5 || index === 8

  return (
    <Motion.article
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.035 }}
      tabIndex={0}
      className={`group relative isolate min-h-[330px] overflow-hidden rounded-[22px] p-5 outline-none ring-1 transition duration-500 hover:z-10 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_70px_rgba(0,64,193,0.16)] focus-visible:ring-2 focus-visible:ring-primary md:min-h-[340px] lg:min-h-0 ${
        isBlue
          ? 'bg-primary text-white ring-primary/20'
          : 'bg-white text-gray-950 ring-gray-200 dark:bg-gray-950 dark:text-white dark:ring-gray-800'
      } ${serviceLayouts[index % serviceLayouts.length]}`}
    >
      <img
        src={serviceImages[index % serviceImages.length]}
        alt=''
        className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-20 group-focus-within:scale-110 group-focus-within:opacity-20 ${
          isBlue ? 'opacity-24 mix-blend-screen' : 'opacity-18 grayscale group-hover:grayscale-0'
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isBlue
            ? 'bg-gradient-to-t from-primary via-primary/88 to-primary/48'
            : 'bg-gradient-to-t from-white via-white/92 to-white/66 dark:from-gray-950 dark:via-gray-950/88 dark:to-gray-950/52'
        }`}
      />
      <div className='absolute right-4 top-4 h-16 w-16 rounded-full bg-primary/10 blur-2xl transition duration-700 group-hover:scale-[2.2] group-hover:bg-primary/25' />

      <div className='relative z-10 flex h-full min-h-[290px] flex-col justify-between md:min-h-[300px] lg:min-h-full'>
        <div className='flex items-start justify-between gap-4'>
          <span
            className={`inline-flex rounded-full px-4 py-2 text-xs font-extrabold tracking-[0.18em] ${
              isBlue ? 'bg-white text-primary' : 'bg-primary/10 text-primary'
            }`}
          >
            0{index + 1}
          </span>
          <span
            className={`h-3 w-3 rounded-full ${
              isBlue ? 'bg-white' : 'bg-primary'
            } shadow-[0_0_24px_currentColor]`}
            aria-hidden='true'
          />
        </div>

        <div className='pt-10 transition duration-500 group-hover:-translate-y-2 group-focus-within:-translate-y-2'>
          <h3 className='max-w-xl text-3xl font-extrabold uppercase leading-none tracking-normal sm:text-4xl'>
            {service.title}
          </h3>
          <p className={`mt-5 max-w-xl text-base leading-7 ${isBlue ? 'text-white/78' : 'text-gray-600 dark:text-gray-300'}`}>
            {service.summary || service.description}
          </p>
        </div>
      </div>

      <div className='absolute inset-x-3 bottom-3 z-20 translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 max-md:relative max-md:inset-auto max-md:mt-5 max-md:translate-y-0 max-md:opacity-100'>
        <div className='max-h-76 overflow-y-auto rounded-[18px] border border-gray-200 bg-white/94 p-4 shadow-[0_18px_56px_rgba(15,23,42,0.14)] backdrop-blur-md dark:border-white/10 dark:bg-black/60'>
          <p className='text-sm leading-6 text-gray-800 dark:text-white/86'>{service.description}</p>
          <p className='mt-3 text-sm leading-6 text-gray-500 dark:text-white/62'>{service.detail}</p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {service.features.slice(0, 8).map((feature) => (
              <span
                key={feature}
                className='rounded-full bg-primary/8 px-3 py-1.5 text-[11px] font-bold leading-5 text-gray-700 ring-1 ring-primary/10 dark:bg-white/10 dark:text-white/82 dark:ring-white/10'
              >
                {feature}
              </span>
            ))}
          </div>

          <a
            href={service.link || '/contact'}
            target={service.link ? '_blank' : undefined}
            rel={service.link ? 'noopener noreferrer' : undefined}
            className='mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-extrabold text-white transition hover:scale-105'
          >
            {service.cta}
            <img src={assets.arrow_icon} alt='' className='w-3' />
          </a>
        </div>
      </div>
    </Motion.article>
  )
}

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
              At Amazonis IT Services, we help businesses use technology in a simple and practical
              way, from planning to launch and beyond.
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
                You do not need to understand every technical detail.
                <span className='text-gray-300 dark:text-gray-600'> Tell us what you want to achieve.</span>
              </p>
              <div className='mt-9 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400'>
                <p>
                  Whether you need a professional website, a SaaS platform, reliable hosting, a
                  mobile app or support with digital marketing, our team can help.
                </p>
                <p>
                  We listen to your requirement, explain the options clearly and build according to
                  what your business actually needs.
                </p>
              </div>
              <a
                href='/contact'
                className='mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-extrabold text-white transition hover:scale-105'
              >
                Discuss Your Project
                <img src={assets.arrow_icon} alt='' className='w-4' />
              </a>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className='bg-white px-4 py-14 sm:px-12 lg:px-24 lg:py-18 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto max-w-7xl'>
          <Motion.div {...fadeUp} className='max-w-4xl'>
            <p className={eyebrowClass}>Our Services</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
              Built to launch, manage and scale your digital presence.
            </h2>
          </Motion.div>

          <div className='mt-10 rounded-[28px] border border-gray-200 bg-[#f8f8f7] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.07)] sm:p-4 lg:p-5 dark:border-gray-800 dark:bg-gray-900'>
            <div className='grid gap-3 md:grid-cols-2 lg:auto-rows-[122px] lg:grid-cols-12'>
            {servicesData.map((service, index) => (
              <ServiceShowcaseCard key={service.title} service={service} index={index} />
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#f4f4f2] px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-black'>
        <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>How We Work</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              A simple path from idea to launch.
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
        <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>What You Can Expect</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Technology and marketing as one connected system.
            </h2>
            <p className='mt-7 text-base leading-8 text-gray-600 dark:text-gray-400'>
              You should not have to work with a different company for your website, hosting,
              application and digital marketing.
            </p>
          </Motion.div>

          <Motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className='grid gap-3 sm:grid-cols-2'
          >
            {expectations.map((item) => (
              <div
                key={item}
                className='rounded-[12px] border border-gray-200 bg-[#f8f8f7] px-5 py-4 text-sm font-bold text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300'
              >
                {item}
              </div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-primary p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center'>
          <Motion.div {...fadeUp}>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/70'>
              Start a Project
            </p>
            <h2 className='mt-5 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Tell us what you are trying to achieve.
            </h2>
            <p className='mt-5 max-w-2xl text-base leading-8 text-white/75'>
              We will understand your requirements and suggest a solution that fits your business
              without making the process unnecessarily complicated.
            </p>
          </Motion.div>
          <Motion.a
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            href='/contact'
            className='inline-flex w-max items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-extrabold text-primary transition hover:scale-105'
          >
            Contact Our Team
            <img src={assets.arrow_icon} alt='' className='w-4 invert' />
          </Motion.a>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
