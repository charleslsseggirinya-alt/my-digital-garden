import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'

const navItems = [
  { href: '/', label: 'homepage' },
  { href: '/writing', label: 'writing' },
  { href: '/toolbox', label: 'toolbox' },
]

type SiteLayoutProps = {
  title?: string
  description?: string
  children: ReactNode
}

export default function SiteLayout({
  title = "Charles Lwanga Sseggirinya",
  description = 'Structural engineering, BIM, computational design, and sustainable construction notes from Charles Lwanga Sseggirinya.',
  children,
}: SiteLayoutProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site-shell">
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? router.pathname === '/'
                : router.pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                className={isActive ? 'nav-link nav-link-active' : 'nav-link'}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <main>{children}</main>
      </div>
    </>
  )
}
