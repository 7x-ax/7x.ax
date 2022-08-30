import Head from 'next/head'

import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>7x - APIs for Developers by Developers</title>
        <meta
          name="description"
          content="A highly available, scalable, affordable API platform and marketplace for app developers."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
