import React from 'react'
import { motion } from 'motion/react'
import toast from 'react-hot-toast'
import assets from '../assets/assets'

const contactDetails = [
  {
    label: 'Email',
    value: 'info@amazonis.in',
    href: 'mailto:info@amazonis.in',
  },
  {
    label: 'Mobile',
    value: '+91 9971228021',
    href: 'tel:+919971228021',
  },
  {
    label: 'Address',
    value: 'Fl 19, C-001/A2, Sector 16B, Noida, Uttar Pradesh 201301',
  },
  {
    label: 'Registered Office',
    value: '11/48 DSIDC, Pocket-II, Mayur Vihar Phase-l, East Delhi, Delhi-110091',
  },
]

const officeAddress = 'Fl 19, C-001/A2, Sector 16B, Noida, Uttar Pradesh 201301'
const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`

const ContactPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.append('access_key', '--- Enter Web3Forms key ---')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        toast.success('Thank you for your submission!')
        event.target.reset()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main className='bg-white text-gray-950 dark:bg-black dark:text-white'>
      <section className='relative overflow-hidden px-4 pt-14 pb-6 sm:px-12 sm:pt-20 sm:pb-10 lg:px-24 xl:px-40'>
        <div
          className='absolute inset-0 opacity-70 dark:opacity-20'
          style={{
            backgroundImage:
              'linear-gradient(rgba(15, 76, 129, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 76, 129, 0.08) 1px, transparent 1px)',
            backgroundSize: '88px 88px',
          }}
          aria-hidden='true'
        />
        <div className='absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50/80 to-transparent dark:from-primary/10' aria-hidden='true' />

        <div className='relative mx-auto max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className='mx-auto max-w-3xl text-center'
          >
            <p className='text-xs font-extrabold uppercase tracking-[0.2em] text-primary'>
              Contact
            </p>
            <h1 className='mt-4 text-4xl font-extrabold tracking-tight text-[#0b2148] sm:text-6xl dark:text-white'>
              Get in Touch
            </h1>
            <p className='mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300'>
              Contact us using the information below. We will respond promptly to your inquiries
              and feedback.
            </p>
          </motion.div>

          <div className='mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16'>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className='flex flex-col justify-center'
            >
              <h2 className='text-3xl font-extrabold text-[#0b2148] sm:text-4xl dark:text-white'>
                Amazonis Contact Form
              </h2>
              <div className='mt-7 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-300'>
                <p>
                  If you have not found what you are looking for, please reach out and tell us what
                  you want to build.
                </p>
                <p>
                  Got any questions or feedback? Feel free to contact us and we will guide you with
                  the next steps.
                </p>
                <p>
                  Before sending a message, add your project details, timeline and contact
                  information so our team can respond clearly.
                </p>
              </div>

              <div className='mt-8 grid gap-3'>
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className='rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-900/75'
                  >
                    <p className='text-xs font-extrabold uppercase tracking-[0.18em] text-primary'>
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className='mt-2 block text-base font-semibold leading-7 text-[#0b2148] transition-colors hover:text-primary dark:text-white'
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className='mt-2 text-base font-semibold leading-7 text-[#0b2148] dark:text-white'>
                        {detail.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              onSubmit={onSubmit}
              className='rounded-xl border border-gray-200 bg-white/90 p-6 shadow-2xl shadow-gray-100 backdrop-blur sm:p-8 dark:border-gray-700 dark:bg-gray-900/90 dark:shadow-black/30'
            >
              <h2 className='text-2xl font-extrabold text-[#0b2148] dark:text-white'>
                Send us your message now!
              </h2>

              <div className='mt-7 grid gap-5 sm:grid-cols-2'>
                <label className='block text-sm font-semibold text-gray-900 dark:text-white'>
                  First Name
                  <input
                    name='first_name'
                    type='text'
                    placeholder='First name'
                    className='mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-4 text-sm text-gray-600 outline-none focus:border-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200'
                    required
                  />
                </label>
                <label className='block text-sm font-semibold text-gray-900 dark:text-white'>
                  Last Name
                  <input
                    name='last_name'
                    type='text'
                    placeholder='Last name'
                    className='mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-4 text-sm text-gray-600 outline-none focus:border-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200'
                    required
                  />
                </label>
              </div>

              <label className='mt-6 block text-sm font-semibold text-gray-900 dark:text-white'>
                Email
                <input
                  name='email'
                  type='email'
                  placeholder='you@company.com'
                  className='mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-4 text-sm text-gray-600 outline-none focus:border-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200'
                  required
                />
              </label>

              <label className='mt-6 block text-sm font-semibold text-gray-900 dark:text-white'>
                Phone
                <input
                  name='phone'
                  type='tel'
                  placeholder='+91 98765 43210'
                  className='mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-4 text-sm text-gray-600 outline-none focus:border-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200'
                />
              </label>

              <label className='mt-6 block text-sm font-semibold text-gray-900 dark:text-white'>
                Message
                <textarea
                  name='message'
                  rows={7}
                  placeholder='Message title here'
                  className='mt-2 w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-4 text-sm text-gray-600 outline-none focus:border-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200'
                  required
                />
              </label>

              <label className='mt-6 block text-sm font-semibold text-gray-900 dark:text-white'>
                Select which service
                <select
                  name='service'
                  className='mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-4 text-sm text-gray-600 outline-none focus:border-primary dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200'
                >
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>AI Solutions</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </label>

              <label className='mt-5 flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300'>
                <input
                  type='checkbox'
                  className='mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
                  required
                />
                <span>
                  I accept the website{' '}
                  <a href='/privacy-policy' className='font-semibold text-primary underline underline-offset-4'>
                    privacy policy
                  </a>
                  .
                </span>
              </label>

              <button
                type='submit'
                className='mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-white transition-all hover:scale-103'
              >
                Submit
                <img src={assets.arrow_icon} alt='' className='w-4' />
              </button>
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            viewport={{ once: true }}
            className='relative mt-12 overflow-hidden rounded-xl border border-primary/20 bg-blue-50 shadow-2xl shadow-primary/10 dark:border-primary/30 dark:bg-gray-900 dark:shadow-black/30'
          >
            <iframe
              title='Amazonis office location map'
              src={mapUrl}
              className='h-[320px] w-full border-0 opacity-90 [filter:grayscale(1)_contrast(1.08)_sepia(0.16)_hue-rotate(178deg)_saturate(1.45)] sm:h-[420px]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              allowFullScreen
            />
            <div
              className='pointer-events-none absolute inset-0 bg-primary/10 mix-blend-multiply dark:bg-primary/20'
              aria-hidden='true'
            />
            <div
              className='pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-full flex-col items-center'
              aria-hidden='true'
            >
              <span className='grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-[0_18px_40px_rgba(9,79,212,0.32)]'>
                <span className='h-3 w-3 rounded-full bg-white' />
              </span>
              <span className='h-5 w-5 -translate-y-3 rotate-45 rounded-br-sm bg-primary' />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
