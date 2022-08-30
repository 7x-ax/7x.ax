import Link from 'next/link'

export function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900"
    >
      {children}
    </Link>
  )
}
