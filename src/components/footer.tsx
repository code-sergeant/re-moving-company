import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import PhoneIcon from '@heroicons/react/16/solid/PhoneIcon'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Logo } from './logo'

function CallToAction() {
  return (
    <div className="relative pb-16 pt-20 text-center sm:py-24">
      <p className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-5xl">
        Ready to get moving?
        <br />
        Book us today!
      </p>

      <div className="mt-12 flex flex-col justify-center gap-x-6 gap-y-4 sm:flex-row">
        <Button
          href="https://www.uhaul.com/MovingHelp/92584/1/Re-Moving-Company/?id=C33F33B6504D46"
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book Online with U-Haul
        </Button>
        <Button href="tel:(626) 735-7308" variant="outline">
          <PhoneIcon className="size-4" />
          <span className="ml-2">Give us a call</span>
        </Button>
      </div>
    </div>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-white">
      &copy; {new Date().getFullYear()} R&E Moving Company
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className=" absolute inset-2 rounded-4xl" />
        <Container>
          <CallToAction />
          <PlusGrid>
            <PlusGridRow>
              <div className="col-span-2 flex items-center justify-between">
                <PlusGridItem className="p-6">
                  <Logo className="h-20" />
                </PlusGridItem>
                <PlusGridItem className="p-6">
                  <Copyright />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}
