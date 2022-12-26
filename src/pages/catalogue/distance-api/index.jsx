import Head from 'next/head'

import { OpenApiDistanceApi } from '@/components/OpenApiDistanceApi'


export default function Home() {
  return (
    <>
      <Head>
        <title>7x - Distance API</title>
        <meta
          name="description"
          content="An API to calculate the great-circle distance between 2 co-ordinates or addresses"
        />
      </Head>
      <main>
        <OpenApiDistanceApi />
      </main>
    </>
  )
}
