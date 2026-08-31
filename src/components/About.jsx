import React from 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'

const chooseUs = [
  {
    title: 'Expertise',
    description:
      'We have extensive experience designing and developing websites, apps, AI tools and growth systems for clients across industries.',
    icon: assets.person_icon,
  },
  {
    title: 'Attention to Detail',
    description:
      'Every screen, interaction and campaign detail is handled carefully so the final product feels polished and dependable.',
    icon: assets.content_icon,
  },
  {
    title: 'Communication',
    description:
      'Clear and consistent communication keeps every project moving smoothly from discovery to launch.',
    icon: assets.email_icon,
  },
  {
    title: 'Customer Service',
    description:
      'We focus on long-term relationships, practical support and solutions that continue to help after launch.',
    icon: assets.marketing_icon,
  },
]

const processSteps = [
  {
    title: 'Discovery',
    description:
      'We understand your goals, audience, competitors, requirements and project scope before work begins.',
    icon: assets.person_icon,
  },
  {
    title: 'Planning',
    description:
      'We create the project structure, milestones, content plan, technical direction and delivery timeline.',
    icon: assets.content_icon,
  },
  {
    title: 'Design',
    description:
      'We shape the visual direction with layouts, user flows and interface details that match your brand.',
    icon: assets.marketing_icon,
  },
  {
    title: 'Development',
    description:
      'We build the website, app, automation or digital system with responsive, scalable and maintainable code.',
    icon: assets.social_icon,
  },
  {
    title: 'Testing',
    description:
      'We check performance, responsiveness, forms, integrations, content and user experience before launch.',
    icon: assets.email_icon,
  },
  {
    title: 'Launch',
    description:
      'We deploy, monitor and support the launch so the final experience is ready for real users.',
    icon: assets.ads_icon,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
}

const About = () => {
  return (
    <main className='bg-white text-gray-950 dark:bg-black dark:text-white'>
      <section className='px-4 py-20 text-center sm:px-10 sm:py-28 lg:px-24 xl:px-40'>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-extrabold sm:text-5xl'
        >
          About us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mt-5 text-xs font-semibold text-gray-500 dark:text-gray-400'
        >
          Home / About us
        </motion.p>
      </section>

      <section className='px-4 pb-20 sm:px-10 lg:px-24 xl:px-40'>
        <motion.div {...fadeUp} className='mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl font-extrabold sm:text-5xl'>About us</h2>
          <p className='mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300'>
            As a web development and digital services company, we are committed to building custom
            web solutions that drive business success.
          </p>
        </motion.div>

        <div className='mx-auto mt-14 grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14'>
          <motion.div {...fadeUp}>
            <img
              src={assets.work_dashboard_management}
              alt='Amazonis team planning a digital project'
              className='aspect-[1.45/1] w-full rounded-lg object-cover'
            />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.08 }}
            className='space-y-5 text-sm leading-7 text-gray-700 dark:text-gray-300'
          >
            <p>
              At Amazonis, we specialize in creating custom websites, apps, AI solutions and digital
              growth systems that help businesses grow online. Our experienced team of developers,
              designers and strategists work collaboratively to build clear, capable and result-ready
              solutions.
            </p>
            <p>
              Our mission is to provide clients with the tools they need to succeed in a competitive
              digital world. We stay current with modern technologies and trends so every business can
              communicate better, operate smarter and serve customers with confidence.
            </p>
            <a
              href='/#contact-us'
              className='inline-flex rounded-lg border border-primary px-6 py-3 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white'
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>

      <section className='px-4 py-20 sm:px-10 lg:px-24 xl:px-40'>
        <motion.div {...fadeUp} className='mx-auto max-w-3xl text-center'>
          <h2 className='text-4xl font-extrabold sm:text-5xl'>Why choose us</h2>
          <p className='mt-6 text-sm leading-7 text-gray-600 dark:text-gray-300'>
            Thank you for considering us as your digital partner. We believe that our experience,
            skills and dedication set us apart and make us the right choice for your project.
          </p>
        </motion.div>

        <div className='mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2'>
          {chooseUs.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className='relative rounded-lg bg-slate-50 p-7 pt-9 dark:bg-gray-900'
            >
              <span className='absolute -top-4 left-7 grid h-10 w-10 place-items-center rounded-full bg-white shadow-md dark:bg-gray-950'>
                <img src={item.icon} alt='' className='h-5 w-5' />
              </span>
              <h3 className='text-lg font-extrabold'>{item.title}</h3>
              <p className='mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300'>
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className='bg-slate-50 px-4 py-20 sm:px-10 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16'>
          <motion.div {...fadeUp}>
            <h2 className='text-4xl font-extrabold sm:text-5xl'>Process</h2>
            <p className='mt-7 text-sm leading-7 text-gray-600 dark:text-gray-300'>
              We follow a clear, structured process to make every project organized and effective.
              Here is an overview of how we work from first conversation to launch.
            </p>
            <a
              href='/#our-work'
              className='mt-8 inline-flex rounded-lg border border-primary px-6 py-3 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white'
            >
              Our recent work
            </a>
            <img
              src={assets.hero_img}
              alt='Digital project process'
              className='mt-10 aspect-[0.96/1] w-full rounded-lg object-cover'
            />
          </motion.div>

          <div className='space-y-8'>
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className='grid grid-cols-[48px_minmax(0,1fr)] gap-5'
              >
                <span className='grid h-11 w-11 place-items-center rounded-full bg-white shadow-md dark:bg-gray-900'>
                  <img src={step.icon} alt='' className='h-5 w-5' />
                </span>
                <div>
                  <h3 className='text-lg font-extrabold'>{step.title}</h3>
                  <p className='mt-2 text-sm leading-7 text-gray-600 dark:text-gray-300'>
                    {step.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className='px-4 py-20 text-center sm:px-10 sm:py-24 lg:px-24 xl:px-40'>
        <motion.div {...fadeUp} className='mx-auto max-w-3xl'>
          <h2 className='text-4xl font-extrabold leading-tight sm:text-5xl'>
            That is all about us,
            <span className='block'>feel free to say Hi!</span>
          </h2>
          <p className='mx-auto mt-7 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-300'>
            We are excited to learn about your business and how we can help you achieve your goals in
            the digital world.
          </p>
          <a
            href='/#contact-us'
            className='mt-8 inline-flex rounded-lg border border-primary px-7 py-3 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white'
          >
            Get in touch
          </a>
        </motion.div>
      </section>
    </main>
  )
}

export default About
