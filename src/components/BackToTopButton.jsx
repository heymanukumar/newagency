import React, { useEffect, useState } from 'react'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type='button'
      onClick={scrollToTop}
      aria-label='Back to top'
      className={`fixed bottom-5 right-5 z-30 grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-2xl shadow-primary/30 ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#00349d] focus:outline-none focus:ring-4 focus:ring-primary/25 sm:bottom-8 sm:right-8 ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg
        viewBox='0 0 24 24'
        aria-hidden='true'
        className='h-5 w-5'
        fill='none'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 19V5' />
        <path d='M5 12L12 5L19 12' />
      </svg>
    </button>
  )
}

export default BackToTopButton
