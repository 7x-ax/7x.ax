import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoNginx from '@/images/logos/nginx.svg'
import logoKong from '@/images/logos/kong.svg'
import logoLinode from '@/images/logos/linode.svg'
import logoCouchDB from '@/images/logos/couchdb.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoMemcached from '@/images/logos/memcached.svg'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        APIs for Developers.{' '}
        <span className="relative whitespace-nowrap text-red-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-red-200/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">By Developers.</span>
        </span>{' '}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          An API marketplace that provides highly available APIs for the data you need to build your web and mobile applications. There is no need to
          spend long hours sourcing data and designing databases. Leverage our experience and focus on what you do best - building your applications.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button color="red" href="/register">Get started today for free</Button>
        <Button
            color="red"
          href="/"
          variant="outline"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                x="0"
                y="0"
                enableBackground="new 0 0 32 32"
                version="1.1"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
            >
                <path
                    d="M20 10.5a.5.5 0 01-.5.5h-3a.5.5 0 010-1h3a.5.5 0 01.5.5zm-7.5.5h-2a.5.5 0 000 1h2a.5.5 0 000-1zm0 2h-2a.5.5 0 000 1h2a.5.5 0 000-1zm15.019 2.824l-2.988.261a.5.5 0 00.043.998l.045-.002 2.988-.261a.5.5 0 00-.088-.996zm3.449 10.74a3 3 0 01-2.727 3.25l-1.992.174a3 3 0 01-3.25-2.727L22 15.844V27a3 3 0 01-3 3h-2a2.994 2.994 0 01-2.5-1.345A2.994 2.994 0 0112 30h-1a2.994 2.994 0 01-2.5-1.345A2.994 2.994 0 016 30H4a3 3 0 01-3-3V7a3 3 0 013-3h2a3 3 0 013 3v1.779A2.978 2.978 0 0111 8h1c.772 0 1.468.3 2 .779V6a3 3 0 013-3h2a3 3 0 013 3v7.124a3.001 3.001 0 012.593-2.064l1.992-.174a3 3 0 013.25 2.727l1.133 12.951zM8 27V7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2zm6-16c0-1.103-.897-2-2-2h-1c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h1c1.103 0 2-.897 2-2V11zm7-5c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v21c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V6zm8.972 20.651L28.839 13.7a2.012 2.012 0 00-2.167-1.818l-1.992.174a1.992 1.992 0 00-1.358.707 1.987 1.987 0 00-.46 1.46l1.133 12.951a2.012 2.012 0 002.167 1.818l1.992-.174c.532-.047 1.014-.298 1.358-.707s.507-.928.46-1.46zm-5.529-11.562l2.989-.262a.5.5 0 00.454-.542.493.493 0 00-.542-.454l-2.989.262a.5.5 0 00.043.998l.045-.002zM19.5 6h-3a.5.5 0 000 1h3a.5.5 0 000-1zm0 2h-3a.5.5 0 000 1h3a.5.5 0 000-1zm-13 3h-3a.5.5 0 000 1h3a.5.5 0 000-1zm0-4h-3a.5.5 0 000 1h3a.5.5 0 000-1zm0 2h-3a.5.5 0 000 1h3a.5.5 0 000-1z"
                    className="feather_een"
                ></path>
            </svg>
          <span className="ml-3">Browse catalogue</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
            APIs backed by tried and tested technologies and partners
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Kubernetes', logo: logoKubernetes },
              { name: 'Memacached', logo: logoMemcached },
              { name: 'CouchDB', logo: logoCouchDB },
            ],
            [
              { name: 'Kong', logo: logoKong },
              { name: 'Nginx', logo: logoNginx },
              { name: 'Linode', logo: logoLinode },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
