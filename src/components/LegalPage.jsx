import React from 'react'
import termsAndConditions from '../content/terms-and-conditions.md?raw'
import refundPolicy from '../content/refund-policy.md?raw'

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

const renderMarkdown = (markdown) => {
  const lines = markdown
    .split('\n')
    .slice(markdown.split('\n').findIndex((line) => line.startsWith('## ')))
  const blocks = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index].trim()

    if (!line) {
      index += 1
      continue
    }

    if (line.startsWith('## ')) {
      blocks.push(<h2 key={`h2-${index}`}>{line.replace(/^##\s+/, '')}</h2>)
      index += 1
      continue
    }

    if (line.startsWith('### ')) {
      blocks.push(<h3 key={`h3-${index}`}>{line.replace(/^###\s+/, '')}</h3>)
      index += 1
      continue
    }

    if (line.startsWith('* ')) {
      const items = []
      while (index < lines.length && lines[index].trim().startsWith('* ')) {
        const item = lines[index].trim().replace(/^\*\s+/, '')
        items.push(<li key={`li-${index}`}>{renderInline(item)}</li>)
        index += 1
      }
      blocks.push(<ul key={`ul-${index}`}>{items}</ul>)
      continue
    }

    if (/^\d+\.\s/.test(line)) {
      const items = []
      while (index < lines.length && /^\d+\.\s/.test(lines[index].trim())) {
        const item = lines[index].trim().replace(/^\d+\.\s+/, '')
        items.push(<li key={`oli-${index}`}>{renderInline(item)}</li>)
        index += 1
      }
      blocks.push(<ol key={`ol-${index}`}>{items}</ol>)
      continue
    }

    if (line.startsWith('> ')) {
      blocks.push(<blockquote key={`quote-${index}`}>{renderInline(line.replace(/^>\s+/, ''))}</blockquote>)
      index += 1
      continue
    }

    blocks.push(<p key={`p-${index}`}>{renderInline(line)}</p>)
    index += 1
  }

  return blocks
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
    effectiveDate: '31 August 2026',
    intro:
      'This Cookie Policy explains how Amazonis may use cookies and similar technologies on amazonis.in.',
    sections: [
      {
        title: '1. What cookies are',
        body: [
          'Cookies are small files stored on your device when you visit a website. They help websites remember preferences, improve performance, keep services secure, and understand how visitors interact with pages.',
        ],
      },
      {
        title: '2. Types of cookies we may use',
        list: [
          'Essential cookies for security, navigation, page loading, forms, and core website functionality.',
          'Preference cookies to remember choices such as theme, language, or consent settings.',
          'Analytics cookies to understand traffic, page performance, and visitor interactions.',
          'Marketing cookies where permitted, to measure campaign performance or improve communications.',
        ],
      },
      {
        title: '3. Third-party technologies',
        body: [
          'Some cookies or similar technologies may be provided by third-party tools such as hosting, analytics, advertising, embedded media, forms, or security services.',
          'Third-party providers may process information according to their own policies and settings.',
        ],
      },
      {
        title: '4. Managing cookies',
        body: [
          'You can manage cookies through browser settings or any consent controls provided on the website. Blocking cookies may affect website features, performance, or availability.',
        ],
      },
      {
        title: '5. Updates',
        body: [
          'We may update this Cookie Policy when our website, tools, or legal obligations change.',
        ],
      },
    ],
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
    effectiveDate: '31 August 2026',
    intro:
      'This Cancellation Policy explains how project or service cancellation requests are handled by Amazonis.',
    sections: [
      {
        title: '1. Cancellation requests',
        body: [
          'A cancellation request should be sent in writing to info@amazonis.in. Work may continue until the request is received and acknowledged.',
          'Please include your invoice number, project name, reason for cancellation, and the requested cancellation date.',
        ],
      },
      {
        title: '2. Work already started',
        body: [
          'If a project is cancelled after work has started, Amazonis may charge for completed work, committed resources, licenses, subscriptions, payment gateway charges, and other non-recoverable expenses.',
          'Completed milestones, approved deliverables, discovery work, strategy work, setup work, and reserved delivery capacity may remain payable.',
        ],
      },
      {
        title: '3. Subscriptions and ongoing services',
        body: [
          'For retainers, hosting, maintenance, marketing, support, or recurring services, cancellation terms may be described in the applicable proposal, invoice, or written agreement.',
          'Access to ongoing services may continue until the end of the paid period unless otherwise agreed in writing.',
        ],
      },
      {
        title: '4. Client dependencies',
        body: [
          'Cancellation does not remove responsibility for charges caused by delayed approvals, missing inputs, third-party commitments, purchased assets, or services already delivered.',
        ],
      },
      {
        title: '5. Contact',
        body: [
          'For cancellation requests, email info@amazonis.in with the relevant project or invoice details.',
        ],
      },
    ],
  },
  '/disclaimer': {
    eyebrow: 'Legal',
    title: 'Disclaimer',
    effectiveDate: '31 August 2026',
    intro:
      'This Disclaimer explains important limitations about website information, service outcomes, and third-party dependencies.',
    sections: [
      {
        title: '1. Website information',
        body: [
          'Information on amazonis.in is provided for general business and informational purposes. It should not be treated as legal, financial, tax, security, or professional advice for your specific situation.',
        ],
      },
      {
        title: '2. No guaranteed results',
        body: [
          'We work to deliver high-quality technology and growth services, but we do not guarantee specific revenue, ranking, traffic, conversion, funding, app approval, advertising, or business outcomes.',
          'Results can depend on market conditions, budgets, content quality, competition, platform policies, approvals, implementation choices, and third-party systems.',
        ],
      },
      {
        title: '3. Third-party platforms',
        body: [
          'The website and services may reference or depend on third-party platforms, APIs, hosting, payment providers, analytics tools, social networks, app stores, AI providers, or advertising networks.',
          'Amazonis does not control third-party availability, rules, pricing, data practices, moderation, approvals, or technical decisions.',
        ],
      },
      {
        title: '4. External links',
        body: [
          'External links are provided for convenience. We are not responsible for the content, policies, security, or availability of third-party websites.',
        ],
      },
      {
        title: '5. Contact',
        body: ['For questions about this Disclaimer, contact Amazonis at info@amazonis.in.'],
      },
    ],
  },
}

const LegalPage = ({ path }) => {
  const page = legalPages[path]

  if (!page) {
    return null
  }

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

      <article className='privacy-policy-content mx-auto w-full max-w-4xl px-4 py-14 sm:px-10 lg:py-20'>
        {page.markdown
          ? renderMarkdown(page.markdown)
          : page.sections.map((section) => (
              <section
                key={section.title}
                className='border-gray-200 first:border-t-0 [&+section]:mt-12 [&+section]:border-t [&+section]:pt-12 dark:border-gray-800'
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
    </main>
  )
}

export { legalPages }
export default LegalPage
