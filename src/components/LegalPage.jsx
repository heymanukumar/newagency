import React from 'react'

const legalPages = {
  '/terms-and-conditions': {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    effectiveDate: '31 August 2026',
    intro:
      'These Terms & Conditions explain the basic rules for using amazonis.in and working with Amazonis IT Services Pvt. Ltd.',
    sections: [
      {
        title: '1. Acceptance of terms',
        body: [
          'By accessing this website, contacting us, requesting a proposal, or using our services, you agree to these Terms & Conditions. If you do not agree, please do not use the website or services.',
          'Additional written agreements, proposals, statements of work, invoices, or service-specific terms may also apply. If there is a conflict, the signed or expressly agreed project document will control for that project.',
        ],
      },
      {
        title: '2. Services',
        body: [
          'Amazonis provides technology, development, hosting, automation, digital marketing, branding, content, and related business services.',
          'Project scope, timelines, deliverables, dependencies, fees, revisions, support, and ownership terms should be confirmed in writing before work begins.',
        ],
      },
      {
        title: '3. Client responsibilities',
        body: [
          'You agree to provide accurate information, timely approvals, required access, content, brand assets, and any permissions needed to complete the requested work.',
          'You are responsible for reviewing deliverables, legal compliance of your business, and the accuracy of content or materials you provide.',
        ],
      },
      {
        title: '4. Payments and invoices',
        body: [
          'Fees, payment milestones, taxes, and due dates will be described in the relevant proposal, invoice, or written agreement.',
          'Late payments may pause work, delay delivery, or affect access to ongoing services until outstanding amounts are cleared.',
        ],
      },
      {
        title: '5. Intellectual property',
        body: [
          'Unless otherwise agreed in writing, client-specific final deliverables are transferred after full payment, subject to any third-party licenses, open-source terms, platform rules, and pre-existing Amazonis tools or know-how.',
          'Amazonis may retain ownership of reusable methods, templates, internal tools, workflows, and general knowledge developed before or during a project.',
        ],
      },
      {
        title: '6. Acceptable use',
        body: [
          'You must not use the website or services for unlawful activity, security abuse, spam, infringement, fraud, harassment, malware, or any activity that could damage systems, users, or third parties.',
          'We may refuse, suspend, or terminate work that we reasonably believe violates law, platform rules, ethical standards, or these terms.',
        ],
      },
      {
        title: '7. Third-party services',
        body: [
          'Projects may rely on hosting providers, payment gateways, APIs, analytics tools, ad platforms, AI providers, or other third-party services. Their own terms, pricing, limits, and privacy practices apply.',
          'Amazonis is not responsible for outages, policy changes, account suspensions, pricing changes, or decisions made by third-party platforms.',
        ],
      },
      {
        title: '8. Limitation of liability',
        body: [
          'To the maximum extent permitted by law, Amazonis will not be liable for indirect, incidental, special, consequential, punitive, or loss-of-profit damages arising from website use or services.',
          'Our total liability for a project will be limited to the amount paid to Amazonis for the relevant service giving rise to the claim, unless a written agreement says otherwise.',
        ],
      },
      {
        title: '9. Contact',
        body: [
          'For questions about these terms, contact Amazonis IT Services Pvt. Ltd. at contact@amazonis.in.',
        ],
      },
    ],
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
    effectiveDate: '31 August 2026',
    intro:
      'This Refund Policy explains how refund requests are generally handled for Amazonis services.',
    sections: [
      {
        title: '1. Project-based services',
        body: [
          'Most Amazonis services are custom, project-based, or time-based. Fees may cover planning, consultation, design, development, setup, third-party coordination, or reserved delivery capacity.',
          'Refund eligibility depends on the project stage, work completed, third-party costs incurred, and the written proposal or agreement.',
        ],
      },
      {
        title: '2. Refunds',
        body: [
          'Approved refunds, if any, will be processed to the original payment method or another mutually agreed method, subject to payment provider timelines and deductions for applicable charges.',
          'Setup fees, consultation fees, strategy work, completed milestones, custom deliverables, third-party expenses, and used subscription periods are generally non-refundable unless agreed otherwise in writing.',
        ],
      },
      {
        title: '3. Delays and dependencies',
        body: [
          'Refunds are not generally issued for delays caused by missing client inputs, late approvals, platform restrictions, third-party outages, account access issues, or changes requested after approval.',
        ],
      },
      {
        title: '4. Contact',
        body: [
          'For refund requests, email contact@amazonis.in with your invoice number, project name, and reason for the request.',
        ],
      },
    ],
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
          'A cancellation request should be sent in writing to contact@amazonis.in. Work may continue until the request is received and acknowledged.',
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
          'For cancellation requests, email contact@amazonis.in with the relevant project or invoice details.',
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
        body: ['For questions about this Disclaimer, contact Amazonis at contact@amazonis.in.'],
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
        </p>
      </section>

      <article className='privacy-policy-content mx-auto w-full max-w-4xl px-4 py-14 sm:px-10 lg:py-20'>
        {page.sections.map((section) => (
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
