import Head from 'next/head'

import { Catalogue } from '@/components/Catalogue'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'


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
        <Catalogue />
      </main>
      <Footer />
    </>
  )
}
