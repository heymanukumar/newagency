import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import ContactUs from './components/ContactUs'
import About from './components/About'
import NotFound from './components/NotFound'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import SEO from './components/SEO'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  const normalizedPath = currentPath.replace(/\/$/, '') || '/'
  const isHomePage = normalizedPath === '/'
  const isAboutPage = normalizedPath === '/about'
  const isPrivacyPolicyPage = normalizedPath === '/privacy-policy'
  const isNotFoundPage = !isHomePage && !isAboutPage && !isPrivacyPolicyPage

  useEffect(() => {
    const routes = new Set(['/', '/about', '/privacy-policy'])

    const updatePath = () => {
      setCurrentPath(window.location.pathname)
    }

    const handleLinkClick = (event) => {
      const link = event.target.closest('a')

      if (!link || link.target || link.hasAttribute('download')) {
        return
      }

      const url = new URL(link.href, window.location.origin)
      const isSameOrigin = url.origin === window.location.origin
      const isKnownRoute = routes.has(url.pathname)

      if (!isSameOrigin || !isKnownRoute) {
        return
      }

      event.preventDefault()
      window.history.pushState({}, '', `${url.pathname}${url.hash}`)
      setCurrentPath(url.pathname)

      if (url.hash) {
        requestAnimationFrame(() => {
          document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('popstate', updatePath)
    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', updatePath)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    let animationFrame
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className='dark:bg-black relative min-h-screen'>
      <SEO path={normalizedPath} />
      <Toaster />

      {!isNotFoundPage && <Navbar theme={theme} setTheme={setTheme} />}

      {isHomePage && (
        <>
          <Hero />
          <TrustedBy />
          <Services />
          <OurWork />
          <ContactUs />
        </>
      )}

      {isAboutPage && <About />}
      {isPrivacyPolicyPage && <PrivacyPolicy />}
      {isNotFoundPage && <NotFound theme={theme} />}

      {!isNotFoundPage && <Footer theme={theme} />}

      <div
        ref={outlineRef}
        className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] max-sm:hidden'
        style={{ transition: 'transform 0.1s ease-out' }}
      />
      <div
        ref={dotRef}
        className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] max-sm:hidden'
      />
    </div>
  )
}

export default App
