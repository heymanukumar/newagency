import React from 'react'
import termsAndConditions from '../content/terms-and-conditions.md?raw'
import refundPolicy from '../content/refund-policy.md?raw'
import cookiePolicy from '../content/cookie-policy.md?raw'
import cancellationPolicy from '../content/cancellation-policy.md?raw'
import disclaimerPolicy from '../content/disclaimer.md?raw'
import acceptableUsePolicy from '../content/acceptable-use-policy.md?raw'
import serviceDeliveryFulfilmentPolicy from '../content/service-delivery-fulfilment-policy.md?raw'
import PolicyTableOfContents from './PolicyTableOfContents'

const getSectionId = (title) =>
  title
    .replace(/^\d+\.\s*/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const getMarkdownSections = (markdown) =>
  markdown
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const title = line.replace(/^##\s+/, '')
      return {
        id: getSectionId(title),
        title,
      }
    })

const renderInline = (text) => {
  const parts = []
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
  let lastIndex = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    const value = match[0]

    if (value.startsWith('**')) {
      parts.push(<strong key={`${value}-${match.index}`}>{value.slice(2, -2)}</strong>)
    } else {
      const linkMatch = value.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      parts.push(
        <a key={`${value}-${match.index}`} href={linkMatch[2]}>
          {linkMatch[1]}
        </a>
      )
    }

    lastIndex = match.index + value.length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts
}

const renderMarkdownLines = (lines, keyPrefix = 'md') => {
  const blocks = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index].trim()

    if (!line) {
      index += 1
      continue
    }

    if (line.startsWith('## ')) {
      const title = line.replace(/^##\s+/, '')
      const isContactSection = /contact information/i.test(title)

      if (isContactSection) {
        const contactLines = []
        index += 1

        while (index < lines.length && !lines[index].trim().startsWith('## ')) {
          contactLines.push(lines[index])
          index += 1
        }

        blocks.push(
          <React.Fragment key={`${keyPrefix}-contact-${index}`}>
            <h2 id={getSectionId(title)} className='scroll-mt-28'>
              {title}
            </h2>
            <div className='policy-contact-card mt-6 rounded-lg p-6 text-white'>
              {renderMarkdownLines(contactLines, `${keyPrefix}-contact-card-${index}`)}
            </div>
          </React.Fragment>
        )
        continue
      }

      blocks.push(
        <h2 key={`${keyPrefix}-h2-${index}`} id={getSectionId(title)} className='scroll-mt-28'>
          {title}
        </h2>
      )
      index += 1
      continue
    }

    if (line.startsWith('### ')) {
      blocks.push(<h3 key={`${keyPrefix}-h3-${index}`}>{line.replace(/^###\s+/, '')}</h3>)
      index += 1
      continue
    }

    if (line.startsWith('* ')) {
      const items = []
      while (index < lines.length && lines[index].trim().startsWith('* ')) {
        const item = lines[index].trim().replace(/^\*\s+/, '')
        items.push(<li key={`${keyPrefix}-li-${index}`}>{renderInline(item)}</li>)
        index += 1
      }
      blocks.push(<ul key={`${keyPrefix}-ul-${index}`}>{items}</ul>)
      continue
    }

    if (/^\d+\.\s/.test(line)) {
      const items = []
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        const item = lines[index].trim().replace(/^\d+\.\s+/, '')
        items.push(<li key={`${keyPrefix}-oli-${index}`}>{renderInline(item)}</li>)
        index += 1
      }
      blocks.push(<ol key={`${keyPrefix}-ol-${index}`}>{items}</ol>)
      continue
    }

    if (line.startsWith('> ')) {
      blocks.push(<blockquote key={`${keyPrefix}-quote-${index}`}>{renderInline(line.replace(/^>\s+/, ''))}</blockquote>)
      index += 1
      continue
    }

    blocks.push(<p key={`${keyPrefix}-p-${index}`}>{renderInline(line)}</p>)
    index += 1
  }

  return blocks
}

const renderMarkdown = (markdown) => {
  const markdownLines = markdown.split('\n')
  const firstSectionIndex = markdownLines.findIndex((line) => line.startsWith('## '))
  const lines = markdownLines.slice(firstSectionIndex)

  return renderMarkdownLines(lines)
}

const legalPages = {
  '/terms-and-conditions': {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    effectiveDate: '1 September 2026',
    lastUpdated: '1 September 2026',
    intro:
      'These Terms & Conditions explain the basic rules for using amazonis.in and working with Amazonis IT Services Pvt. Ltd.',
    markdown: termsAndConditions,
  },
  '/cookie-policy': {
    eyebrow: 'Privacy',
    title: 'Cookie Policy',
    effectiveDate: '1 September 2026',
    lastUpdated: '1 September 2026',
    intro:
      'This Cookie Policy explains how Amazonis may use cookies and similar technologies on amazonis.in.',
    markdown: cookiePolicy,
  },
  '/refund-policy': {
    eyebrow: 'Legal',
    title: 'Refund Policy',
    effectiveDate: '1 September 2026',
    lastUpdated: '1 September 2026',
    intro:
      'This Refund Policy explains how refund requests are generally handled for Amazonis services.',
    markdown: refundPolicy,
  },
  '/cancellation-policy': {
    eyebrow: 'Legal',
    title: 'Cancellation Policy',
    effectiveDate: '1 September 2026',
    lastUpdated: '1 September 2026',
    intro:
      'This Cancellation Policy explains how project or service cancellation requests are handled by Amazonis.',
    markdown: cancellationPolicy,
  },
  '/disclaimer': {
    eyebrow: 'Legal',
    title: 'Disclaimer',
    effectiveDate: '1 September 2026',
    lastUpdated: '1 September 2026',
    intro:
      'This Disclaimer explains important limitations about website information, service outcomes, and third-party dependencies.',
    markdown: disclaimerPolicy,
  },
  '/acceptable-use-policy': {
    eyebrow: 'Legal',
    title: 'Acceptable Use Policy',
    effectiveDate: '1 September 2026',
    lastUpdated: '1 September 2026',
    intro:
      'This Acceptable Use Policy explains the rules for using Amazonis websites, services, products, platforms and digital systems.',
    markdown: acceptableUsePolicy,
  },
  '/service-delivery-fulfilment-policy': {
    eyebrow: 'Legal',
    title: 'Service Delivery and Fulfilment Policy',
    effectiveDate: '1 September 2026',
    lastUpdated: '1 September 2026',
    intro:
      'This Service Delivery and Fulfilment Policy explains how Amazonis handles delivery, timelines, fulfilment and service completion.',
    markdown: serviceDeliveryFulfilmentPolicy,
  },
}

const LegalPage = ({ path }) => {
  const page = legalPages[path]

  if (!page) {
    return null
  }

  const tocSections = page.markdown
    ? getMarkdownSections(page.markdown)
    : page.sections.map((section) => ({
        id: getSectionId(section.title),
        title: section.title,
      }))

  return (
    <main className='bg-white text-gray-950 dark:bg-black dark:text-white'>
      <section className='border-b border-gray-200 bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-10 sm:py-20 lg:px-24 xl:px-40 dark:border-gray-800 dark:from-gray-950 dark:to-black'>
        <p className='text-xs font-extrabold uppercase tracking-widest text-primary'>
          {page.eyebrow}
        </p>
        <h1 className='mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl'>
          {page.title}
        </h1>
        <p className='mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300'>
          {page.intro}
        </p>
        <p className='mt-7 inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'>
          Effective date: {page.effectiveDate}
          {page.lastUpdated ? ` | Last updated: ${page.lastUpdated}` : ''}
        </p>
      </section>

      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-10 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:gap-16 lg:px-8 lg:py-20'>
        <PolicyTableOfContents sections={tocSections} />

        <article className='privacy-policy-content'>
          {page.markdown
            ? renderMarkdown(page.markdown)
            : page.sections.map((section) => (
                <section
                  key={section.title}
                  id={getSectionId(section.title)}
                  className='scroll-mt-28 border-gray-200 first:border-t-0 [&+section]:mt-12 [&+section]:border-t [&+section]:pt-12 dark:border-gray-800'
                >
                  <h2>{section.title}</h2>
                  {section.body?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
        </article>
      </div>
    </main>
  )
}

export default LegalPage
