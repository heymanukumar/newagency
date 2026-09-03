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
  'lg:col-span-5 lg:row-span-2',
  'lg:col-span-3 lg:row-span-3',
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-3 lg:row-span-3',
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-5 lg:row-span-2',
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

const ServiceShowcaseCard = ({ service, index }) => (
  <Motion.article
    {...fadeUp}
    transition={{ ...fadeUp.transition, delay: index * 0.04 }}
    tabIndex={0}
    className={`group relative isolate min-h-[500px] overflow-hidden rounded-[22px] bg-gray-950 p-5 text-white outline-none ring-1 ring-white/10 transition duration-500 hover:z-10 hover:scale-[1.015] hover:ring-primary/70 hover:shadow-[0_30px_90px_rgba(0,64,193,0.34)] focus-visible:ring-2 focus-visible:ring-primary md:min-h-[430px] lg:min-h-0 ${serviceLayouts[index % serviceLayouts.length]}`}
  >
    <img
      src={serviceImages[index % serviceImages.length]}
      alt=''
      className='absolute inset-0 h-full w-full object-cover opacity-68 grayscale transition duration-700 group-hover:scale-110 group-hover:opacity-28 group-hover:grayscale-0 group-focus-within:scale-110 group-focus-within:opacity-28 group-focus-within:grayscale-0'
    />
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10' />
    <div className='absolute inset-0 bg-primary/0 mix-blend-screen transition duration-700 group-hover:bg-primary/25 group-focus-within:bg-primary/25' />

    <div className='relative z-10 flex h-full min-h-[460px] flex-col justify-end md:min-h-[390px] lg:min-h-full'>
      <div className='transition duration-500 group-hover:-translate-y-2 group-focus-within:-translate-y-2'>
        <span className='inline-flex rounded-full bg-white/12 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/80 backdrop-blur'>
          0{index + 1}
        </span>
        <h3 className='mt-4 text-3xl font-extrabold uppercase leading-none tracking-normal sm:text-4xl'>
          {service.title}
        </h3>
        <p className='mt-4 max-w-xl text-sm leading-6 text-white/76'>
          {service.summary || service.description}
        </p>
      </div>

      <div className='mt-5 max-h-[32rem] overflow-hidden opacity-100 transition-all duration-700 md:max-h-0 md:opacity-0 md:group-hover:max-h-[36rem] md:group-hover:opacity-100 md:group-focus-within:max-h-[36rem] md:group-focus-within:opacity-100'>
        <div className='max-h-72 overflow-y-auto rounded-[16px] border border-white/12 bg-black/48 p-4 backdrop-blur-md md:max-h-80'>
          <p className='text-sm leading-6 text-white/86'>{service.description}</p>
          <p className='mt-3 text-sm leading-6 text-white/62'>{service.detail}</p>

          <div className='mt-4 flex flex-wrap gap-2'>
            {service.features.map((feature) => (
              <span
                key={feature}
                className='rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-bold leading-5 text-white/82 ring-1 ring-white/10'
              >
                {feature}
              </span>
            ))}
          </div>

          <a
            href={service.link || '/contact'}
            target={service.link ? '_blank' : undefined}
            rel={service.link ? 'noopener noreferrer' : undefined}
            className='mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-extrabold text-primary transition hover:scale-105'
          >
            {service.cta}
            <img src={assets.arrow_icon} alt='' className='w-3 invert' />
          </a>
        </div>
      </div>
    </div>
  </Motion.article>
)

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

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto max-w-7xl'>
          <Motion.div {...fadeUp} className='max-w-4xl'>
            <p className={eyebrowClass}>Our Services</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
              Built to launch, manage and scale your digital presence.
            </h2>
          </Motion.div>

          <div className='mt-12 rounded-[28px] bg-black p-3 shadow-[0_40px_120px_rgba(0,0,0,0.18)] sm:p-5 lg:p-7'>
            <div className='grid gap-4 md:grid-cols-2 lg:auto-rows-[170px] lg:grid-cols-12'>
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
