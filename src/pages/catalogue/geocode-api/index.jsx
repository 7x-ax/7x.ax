import Head from 'next/head'

import { OpenApiGeocodingApi } from "@/components/OpenApiGeocodingApi";


export default function Home() {
  return (
    <>
      <Head>
        <title>7x - Timezone API</title>
        <meta
          name="description"
          content="An API to Geocode and Reverse Geocode locations and coordinates."
        />
      </Head>
      <main>
        <OpenApiGeocodingApi />
      </main>
    </>
  )
}
