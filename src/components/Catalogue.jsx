import { CalendarIcon, BookOpenIcon, KeyIcon,  } from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'

const positions = [
  {
    id: 1,
    title: 'Timezone API',
    availableDocs: 'OpenAPI Specification Available',
    description: 'An API that returns the timezone(s) for a given set of co-ordinates.',
    security: 'Key-based Authentication',
    publishDate: '2023-01-01',
    publishDateFull: 'January, 2023',
    url: '/catalogue/timezone-api',
  },
  {
    id: 2,
    title: 'Distance API',
    availableDocs: 'OpenAPI Specification Available',
    description: 'An API that returns the great-circle distance between 2 sets of co-ordinates or 2 addresses.',
    security: 'Key-based Authentication',
    publishDate: '2023-01-01',
    publishDateFull: 'January, 2023',
    url: '/catalogue/distance-api',
  }
/*  {
    id: 3,
    title: 'Geocoding API',
    availableDocs: 'OpenAPI Specification Available',
    description: 'An API that can convert addresses into co-ordinates.',
    security: 'Key-based Authentication',
    publishDate: '2022-10-01',
    publishDateFull: 'October, 2020',
    url: '/catalogue/distance-api',
  },
  {
    id: 4,
    title: 'Reverse Geocoding API',
    availableDocs: 'OpenAPI Specification Available',
    description: 'An API that can convert co-ordinates into addresses.',
    security: 'Key-based Authentication',
    publishDate: '2022-10-01',
    publishDateFull: 'October, 2020',
    url: '/catalogue/distance-api',
  },
  {
    id: 3,
    title: 'Airports API',
    availableDocs: 'OpenAPI Specification Available',
    description: 'An API to get information about Airports.',
    security: 'Key-based Authentication',
    publishDate: '2022-10-01',
    publishDateFull: 'October, 2020',
    url: '/catalogue/distance-api',
  },*/
]

export function Catalogue() {
  return (
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            7x API Catalogue
          </h2>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {positions.map((position) => (
                <li key={position.id}>
                  <a href={position.url} target="_blank" rel="noreferrer" className="block hover:bg-red-100">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-red-600 truncate">{position.title}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {position.availableDocs}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <KeyIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            {position.security}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <BookOpenIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            {position.description}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <p>
                            Available from <time dateTime={position.publishDate}>{position.publishDateFull}</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
            ))}
          </ul>
        </div>
      </Container>
  )
}
