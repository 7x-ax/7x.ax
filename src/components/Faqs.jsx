import Image from 'next/future/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Can I evaluate 7x for free?',
      answer:
        'Yes, simply head over to https://app.7x.ax, create an account and get your free API key.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards.',
    },
    {
      question: 'Are prices inclusive of VAT?',
      answer:
        'VAT is calculated when you setup payment based on your billing address and billing entity (an individual or organisation).',
    },
  ],
  [
    {
      question: 'What is the uptime SLA for 7x APIs?',
      answer:
        'We strive for 99.99% uptime. Please see our terms and conditions for more details.',
    },
    {
      question:
        'Do you offer any plans larger than 7x (50 requests per second)',
      answer:
        'Yes, please reach out to our support team with the volumes you require.',
    },
    {
      question:
        'Can you develop any custom APIs?',
      answer:
        'Yes, provided we can come to an agreement about their utility. Please reach out to our support team for more details.',
    },
  ],
  [
    {
      question: 'What technology stack do you use for 7x APIs?',
      answer:
        'Primarily NestJS (NodeJS) and Kipchak (PHP).',
    },
    {
      question: 'How often do you add more APIs?',
      answer: 'We have developed many APIs over the years and are in the constant process of refactoring code and making these available as part of the 7x. You should see new APIs several times a year.',
    },
    {
      question: 'Who is part of the team behind 7x?',
      answer:
        'The same team that runs Islamic Network APIs - our background includes contributing to many Open Source APIs and services and our experience spans application development, cloud architecture and infrastructure - so scalable APIs are very much our home territory.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for,
            email our support team at <a href="mailto: &#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#055;&#120;&#046;&#097;&#120;">&#115;&#117;&#112;&#112;&#111;&#114;&#116;&#064;&#055;&#120;&#046;&#097;&#120;</a>.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
