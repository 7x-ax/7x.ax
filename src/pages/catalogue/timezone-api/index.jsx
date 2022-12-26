import Head from 'next/head'

import { OpenApiTimezoneApi } from '@/components/OpenApiTimezoneApi'


export default function Home() {
  return (
    <>
      <Head>
        <title>7x - Timezone API</title>
        <meta
          name="description"
          content="An API to calculate the timezone(s) from a pair of geographical co-ordinates"
        />
      </Head>
      <main>
        <OpenApiTimezoneApi />
      </main>
    </>
  )
}
