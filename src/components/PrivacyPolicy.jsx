import React from 'react'

const sections = [
  {
    id: 'scope',
    title: '1. Scope of this policy',
    content: (
      <>
        <p>
          This Privacy Policy applies to <strong>Amazonis IT Services Pvt. Ltd.</strong> ("Amazonis",
          "we", "us" or "our") and to personal information processed through{' '}
          <a href='https://amazonis.in/'>amazonis.in</a>, our enquiry forms, business communications
          and the technology, development, hosting, digital marketing, automation and related
          services we provide.
        </p>
        <p>
          A client project, product or third-party platform may have its own privacy notice. Where a
          separate notice applies, that notice will govern the relevant processing. When we process
          personal data only on a client's documented instructions, that client remains responsible
          for its own privacy practices.
        </p>
      </>
    ),
  },
  {
    id: 'information',
    title: '2. Information we collect',
    content: (
      <>
        <h3>Information you provide</h3>
        <ul>
          <li>
            <strong>Identity and contact details:</strong> name, business name, email address,
            telephone number and location.
          </li>
          <li>
            <strong>Enquiry and project details:</strong> service requirements, budget, timelines,
            messages, files and other information you choose to share.
          </li>
          <li>
            <strong>Account and support information:</strong> login or account details where
            applicable, support requests and communication history.
          </li>
          <li>
            <strong>Billing and transaction details:</strong> billing address, invoice details,
            payment status and transaction references. Full card or banking credentials are generally
            processed by authorised payment providers, not stored directly by us.
          </li>
          <li>
            <strong>Recruitment information:</strong> resume, portfolio, education, work history and
            other information submitted for a role or collaboration.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>IP address, browser type, device type, operating system and approximate location.</li>
          <li>Pages visited, referring page, time spent, clicks and website interaction data.</li>
          <li>Cookie identifiers, consent preferences, server logs and diagnostic information.</li>
        </ul>

        <p className='mt-6 rounded-lg border border-primary/15 bg-primary/5 p-5 text-gray-700 dark:border-primary/30 dark:bg-primary/10 dark:text-gray-300'>
          Please do not send sensitive personal information, passwords, private keys or production
          credentials through a public enquiry form. We will request secure access only when it is
          genuinely required for a service.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: '3. How we use information',
    content: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>respond to enquiries, prepare proposals and communicate about requested services;</li>
          <li>create, manage, deliver, maintain and support client projects;</li>
          <li>process invoices, payments, refunds and business records;</li>
          <li>operate, secure, troubleshoot and improve our website and services;</li>
          <li>understand website performance and service demand through analytics;</li>
          <li>send service updates and, where permitted, relevant marketing communications;</li>
          <li>prevent fraud, spam, misuse, security incidents and unlawful activity;</li>
          <li>comply with legal, tax, accounting and regulatory obligations; and</li>
          <li>establish, exercise or defend legal claims.</li>
        </ul>
        <p>
          We do not sell or rent personal information. We do not use personal information for a
          materially different purpose without providing appropriate notice or obtaining consent
          where required.
        </p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: '4. Legal basis and consent',
    content: (
      <>
        <p>
          Depending on the context and applicable law, we process personal information based on your
          consent, steps requested before entering into a contract, performance of a contract,
          compliance with a legal obligation, or other lawful uses recognised under applicable data
          protection law.
        </p>
        <p>
          Where processing is based on consent, you may withdraw that consent at any time. Withdrawal
          does not affect processing already completed lawfully and may limit our ability to provide a
          requested feature or service.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: '5. When we share information',
    content: (
      <>
        <p>We may share only the information reasonably necessary with:</p>
        <ul>
          <li>
            <strong>Service providers:</strong> hosting, cloud storage, analytics, communication,
            customer support, payment and security providers working on our behalf.
          </li>
          <li>
            <strong>Professional advisers:</strong> auditors, accountants, insurers and legal
            advisers subject to suitable confidentiality duties.
          </li>
          <li>
            <strong>Clients and project partners:</strong> when required to deliver a service and
            consistent with the relevant agreement.
          </li>
          <li>
            <strong>Authorities:</strong> where disclosure is required by law, court order,
            regulatory process or necessary to protect rights, safety and security.
          </li>
          <li>
            <strong>Business successors:</strong> in connection with a merger, acquisition,
            restructuring or transfer of assets, subject to appropriate safeguards.
          </li>
        </ul>
        <p>
          Vendors are expected to process information only for authorised purposes and to maintain
          appropriate confidentiality and security protections.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '6. Cookies and similar technologies',
    content: (
      <>
        <p>
          We may use essential cookies needed for security, navigation and website functionality. With
          your consent where required, we may also use preference, analytics and marketing
          technologies to understand traffic and improve our communications.
        </p>
        <p>
          You can manage non-essential cookies through any consent controls provided on the website or
          through your browser settings. Blocking some cookies may affect how parts of the website
          work. For further details, please refer to our Cookie Policy when available.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: '7. How long we retain information',
    content: (
      <>
        <p>
          We retain personal information only for as long as reasonably necessary for the purposes
          described in this policy, including to provide services, maintain business and financial
          records, resolve disputes, enforce agreements and meet legal obligations.
        </p>
        <p>
          Retention periods vary according to the type of information, the relationship involved and
          applicable legal requirements. When information is no longer needed, we take reasonable steps
          to delete, anonymise or securely isolate it. Residual copies may remain temporarily in
          protected backups until their normal deletion cycle is completed.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '8. How we protect information',
    content: (
      <>
        <p>
          We use reasonable administrative, technical and organisational safeguards designed to protect
          personal information from unauthorised access, alteration, loss, disclosure or misuse.
          Measures may include access controls, secure transmission, backups, monitoring and
          confidentiality restrictions.
        </p>
        <p>
          No website, network or storage system can be guaranteed to be completely secure. If you
          believe your interaction with us is no longer secure, please contact us promptly using the
          details below.
        </p>
      </>
    ),
  },
  {
    id: 'rights',
    title: '9. Your privacy rights',
    content: (
      <>
        <p>Subject to applicable law, you may request to:</p>
        <ul>
          <li>obtain information about the personal data we process about you;</li>
          <li>access or receive a copy of eligible personal information;</li>
          <li>correct inaccurate or incomplete information;</li>
          <li>erase personal information that is no longer required or must be deleted;</li>
          <li>withdraw consent or opt out of direct marketing communications;</li>
          <li>raise a grievance about our handling of your information; and</li>
          <li>
            nominate another individual to exercise applicable rights in the event of death or
            incapacity, where provided by law.
          </li>
        </ul>
        <p>
          To protect your information, we may ask for reasonable verification before completing a
          request. Certain requests may be limited where retention or processing is required by law,
          necessary for legal claims, or subject to another lawful exception. You may also have the
          right to approach the competent data protection authority after first giving us an
          opportunity to address your grievance.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: "10. Children's privacy",
    content: (
      <p>
        Our website and business services are not directed to children under 18, and we do not
        knowingly seek to collect their personal information through this website. If you believe a
        child has provided personal information without appropriate authorisation, please contact us so
        we can review and take suitable action.
      </p>
    ),
  },
  {
    id: 'international',
    title: '11. International data transfers',
    content: (
      <p>
        Some service providers or project operations may process information in a country other than
        the country where it was collected. Where this occurs, we take reasonable steps to use lawful
        transfer mechanisms and appropriate contractual, technical or organisational safeguards as
        required by applicable law.
      </p>
    ),
  },
  {
    id: 'third-party',
    title: '12. Third-party websites and services',
    content: (
      <p>
        Our website may link to third-party websites, social platforms or services. We do not control
        their privacy practices. Information you provide directly to a third party is governed by that
        party's privacy notice, and we encourage you to review it before sharing personal information.
      </p>
    ),
  },
  {
    id: 'updates',
    title: '13. Changes to this policy',
    content: (
      <p>
        We may update this Privacy Policy to reflect changes in our services, technology or legal
        obligations. The revised policy will be posted on this page with a new effective date. Where a
        change materially affects your rights, we may provide an additional notice through the website
        or another appropriate channel.
      </p>
    ),
  },
  {
    id: 'contact',
    title: '14. Contact and grievance redressal',
    content: (
      <>
        <p>
          For privacy questions, correction or erasure requests, consent withdrawal, or a grievance
          concerning personal information, please contact us. Include enough detail for us to identify
          and respond to the issue, but do not email passwords or other highly sensitive credentials.
        </p>

        <div className='mt-6 rounded-lg bg-gray-950 p-6 text-white dark:bg-white dark:text-gray-950'>
          <p>
            <strong>Grievance Officer / Privacy Contact</strong>
          </p>
          <p>Amazonis IT Services Pvt. Ltd.</p>
          <p>New Delhi, India</p>
          <p>
            Email:{' '}
            <a className='underline underline-offset-4' href='mailto:info@amazonis.in'>
              info@amazonis.in
            </a>
          </p>
          <p>
            Website:{' '}
            <a className='underline underline-offset-4' href='https://amazonis.in/'>
              www.amazonis.in
            </a>
          </p>
        </div>
      </>
    ),
  },
]

const PrivacyPolicy = () => {
  return (
    <main className='bg-white text-gray-950 dark:bg-black dark:text-white'>
      <section className='border-b border-gray-200 bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-10 sm:py-20 lg:px-24 xl:px-40 dark:border-gray-800 dark:from-gray-950 dark:to-black'>
        <p className='text-xs font-extrabold uppercase tracking-widest text-primary'>
          Legal &amp; Privacy
        </p>
        <h1 className='mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl'>
          Privacy, explained clearly.
        </h1>
        <p className='mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300'>
          This Privacy Policy explains how Amazonis IT Services Pvt. Ltd. collects, uses, stores,
          protects and shares personal information when you visit our website, contact us or use our
          services.
        </p>
        <p className='mt-7 inline-flex rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300'>
          Effective date: 31 August 2026
        </p>
      </section>

      <div className='mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-10 lg:grid-cols-[260px_minmax(0,760px)] lg:justify-center lg:gap-16 lg:px-8 lg:py-20'>
        <aside className='h-fit rounded-lg border border-gray-200 bg-slate-50 p-6 lg:sticky lg:top-28 dark:border-gray-800 dark:bg-gray-900'>
          <p className='mb-4 text-xs font-extrabold uppercase tracking-widest text-gray-950 dark:text-white'>
            On this page
          </p>
          <ol className='space-y-2 pl-5 text-sm leading-6 text-gray-600 dark:text-gray-300'>
            {sections.map((section) => (
              <li key={section.id}>
                <a className='hover:text-primary' href={`#${section.id}`}>
                  {section.title.replace(/^\d+\.\s/, '')}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <article className='privacy-policy-content'>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className='scroll-mt-28 border-gray-200 first:border-t-0 [&+section]:mt-12 [&+section]:border-t [&+section]:pt-12 dark:border-gray-800'
            >
              <h2>{section.title}</h2>
              {section.content}
            </section>
          ))}
        </article>
      </div>
    </main>
  )
}

export default PrivacyPolicy
