import React, { useEffect, useState } from 'react'

const PolicyTableOfContents = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id || '')

  useEffect(() => {
    if (!sections.length) {
      return undefined
    }

    const updateActiveSection = () => {
      const selectedSection = sections.reduce((activeSection, section) => {
        const element = document.getElementById(section.id)

        if (!element) {
          return activeSection
        }

        const rect = element.getBoundingClientRect()
        return rect.top <= 150 ? section : activeSection
      }, sections[0])

      setActiveId(selectedSection.id)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sections])

  return (
    <aside className='h-fit rounded-lg border border-gray-200 bg-slate-50 p-6 lg:sticky lg:top-28 dark:border-gray-800 dark:bg-gray-900'>
      <p className='mb-4 text-xs font-extrabold uppercase tracking-widest text-gray-950 dark:text-white'>
        On this page
      </p>
      <ol className='space-y-2 text-sm leading-6 text-gray-600 dark:text-gray-300'>
        {sections.map((section) => {
          const isActive = activeId === section.id

          return (
            <li key={section.id}>
              <a
                className={`block rounded-md px-3 py-1.5 transition-colors ${
                  isActive
                    ? 'bg-primary/10 font-extrabold text-primary'
                    : 'hover:bg-white hover:text-primary dark:hover:bg-gray-800'
                }`}
                href={`#${section.id}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {section.title.replace(/^\d+\.\s/, '')}
              </a>
            </li>
          )
        })}
      </ol>
    </aside>
  )
}

export default PolicyTableOfContents
