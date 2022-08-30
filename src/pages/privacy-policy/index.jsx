import Head from 'next/head'

import { Catalogue } from '@/components/Catalogue'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import {Terms} from "@/components/Terms";
import {PrivacyPolicy} from "@/components/PrivacyPolicy";


export default function Home() {
  return (
    <>
      <Head>
        <title>7x - Privacy Policy</title>
        <meta
          name="description"
          content="A highly available, scalable, affordable API platform and marketplace for app developers."
        />
      </Head>
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  )
}
