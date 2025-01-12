'use client'

import { Disclosure } from '@headlessui/react'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

export function Navbar() {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex items-center justify-between">
          <PlusGridItem className="p-6">
            <Link href="/" title="Home">
              <Logo className="h-20" />
            </Link>
          </PlusGridItem>
          <PlusGridItem className="p-6">
            <a
              className="hidden text-lg font-bold text-white hover:text-sky-300 sm:block"
              href={
                'https://www.uhaul.com/MovingHelp/91351/1/Re-Moving-Company/?id=C33F33B6504D46'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Online 
            </a>
          </PlusGridItem>
        </PlusGridRow>
      </PlusGrid>
    </Disclosure>
  )
}
