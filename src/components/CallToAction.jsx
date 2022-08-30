import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-red-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 background-red-200"
        //src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started for free
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Sign up today for a free API key to start using 7x APIs
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get your API key
          </Button>
        </div>
      </Container>
    </section>
  )
}
