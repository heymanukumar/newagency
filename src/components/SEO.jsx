import { useEffect } from 'react'

const siteUrl = 'https://amazonis.in'
const siteName = 'Amazonis IT Services'
const defaultImage = `${siteUrl}/web-app-manifest-512x512.png`

const pageMeta = {
  '/': {
    title: 'Amazonis IT Services Pvt. Ltd. | Websites, AI, Apps & Digital Marketing',
    description:
      'Amazonis IT Services Pvt. Ltd. builds websites, AI solutions, mobile apps, e-commerce platforms, SEO campaigns and digital growth systems for modern businesses.',
    path: '/',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Amazonis IT Services Pvt. Ltd.',
      alternateName: 'Amazonis',
      url: siteUrl,
      logo: `${siteUrl}/web-app-manifest-512x512.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@amazonis.in',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      sameAs: [
        'https://www.linkedin.com/company/amazonis-official',
        'https://x.com/Amazonisindia',
        'https://www.instagram.com/amazonis.in',
        'https://www.facebook.com/amazonisofficial',
      ],
    },
  },
  '/about': {
    title: 'About Amazonis | Technology, Products & Digital Growth Company',
    description:
      'Learn about Amazonis IT Services Pvt. Ltd., a technology company building digital solutions and owned products including Venuefy, Slour and Inphra.',
    path: '/about',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Amazonis',
      url: `${siteUrl}/about`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Amazonis IT Services Pvt. Ltd.',
    description:
      'Read how Amazonis IT Services Pvt. Ltd. collects, uses, stores, protects and shares personal information when you use amazonis.in or contact us.',
    path: '/privacy-policy',
    type: 'article',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      url: `${siteUrl}/privacy-policy`,
      dateModified: '2026-08-31',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Amazonis IT Services Pvt. Ltd.',
        url: siteUrl,
      },
    },
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Amazonis IT Services Pvt. Ltd.',
    description:
      'Read the Terms & Conditions for using amazonis.in and working with Amazonis IT Services Pvt. Ltd.',
    path: '/terms-and-conditions',
    type: 'article',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Amazonis IT Services Pvt. Ltd.',
    description:
      'Learn how Amazonis IT Services Pvt. Ltd. may use cookies and similar technologies on amazonis.in.',
    path: '/cookie-policy',
    type: 'article',
  },
  '/refund-and-cancellation-policy': {
    title: 'Refund & Cancellation Policy | Amazonis IT Services Pvt. Ltd.',
    description:
      'Review how Amazonis IT Services Pvt. Ltd. generally handles service cancellations and refund requests.',
    path: '/refund-and-cancellation-policy',
    type: 'article',
  },
  '/disclaimer': {
    title: 'Disclaimer | Amazonis IT Services Pvt. Ltd.',
    description:
      'Read important disclaimers about Amazonis website information, service outcomes, and third-party platforms.',
    path: '/disclaimer',
    type: 'article',
  },
  '/sitemap': {
    title: 'Sitemap | Amazonis IT Services',
    description: 'Browse all public pages, legal policies, and sitemap resources from Amazonis.',
    path: '/sitemap',
    type: 'website',
  },
}

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const SEO = ({ path }) => {
  useEffect(() => {
    const meta = pageMeta[path] || {
      title: 'Page Not Found | Amazonis IT Services',
      description: 'The page you are looking for could not be found on Amazonis IT Services.',
      path,
      robots: 'noindex, follow',
      type: 'website',
    }

    const canonicalUrl = `${siteUrl}${meta.path === '/' ? '/' : meta.path}`

    document.title = meta.title
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: meta.robots || 'index, follow, max-image-preview:large',
    })
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: 'Amazonis IT Services Pvt. Ltd.',
    })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: defaultImage })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: defaultImage })
    upsertLink('canonical', canonicalUrl)

    document.head.querySelector('#page-schema')?.remove()

    if (meta.schema) {
      const schema = document.createElement('script')
      schema.id = 'page-schema'
      schema.type = 'application/ld+json'
      schema.textContent = JSON.stringify(meta.schema)
      document.head.appendChild(schema)
    }
  }, [path])

  return null
}

export default SEO
