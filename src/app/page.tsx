import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading } from '@/components/text'
import { PuzzlePieceIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/solid'
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Let us help you move to your next adventure!',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl shadow-lg shadow-black/40 ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="p-16 pb-24">
          <h1 className="font-display text-balance text-4xl/[0.9] font-medium tracking-tight text-white sm:text-7xl/[0.8] md:text-8xl/[0.8]">
            We Move You From A to Z!
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-white/80 sm:text-2xl/8">
            We are a{' '}
            <span className="font-bold text-sky-300">
              family-owned and operated
            </span>{' '}
            moving company that takes great pride in our care and service. Our
            mission is to provide you with a stress-free moving experience!
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              href="https://www.uhaul.com/MovingHelp/92584/1/Re-Moving-Company/?id=C33F33B6504D46"
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Online
            </Button>
            <Button href="tel:(626) 735-7308" variant="outline">
              <PhoneIcon className="size-4" />
              <span className="ml-2">Give us a call</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
function FeatureSection() {
  return (
    <div>
      <Container>
        <div className="mb-16 flex flex-col items-center gap-8 md:flex-row">
          <Heading as="h2" className="w-full text-end">
            You don&apos;t have to do it alone...
          </Heading>
          <img
            src="/company/dauntingmove.png"
            alt="Daunting Move"
            className="w-full rounded-4xl sm:h-auto md:w-1/2"
          />
        </div>
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Heading as="h3" className=" max-w-3xl">
        We can help!
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2 items-center">
        <BentoCard
          eyebrow="packing"
          title="We keep your items safe and secure"
          description="We offer a wide range of packing services to meet your needs. We are experts in packing and can keep your items safe and secure during the move."
          graphic={
            <ShieldCheckIcon className="size-32" />
          }
          className="rounded-4xl py-10 lg:col-span-3 flex items-center justify-center"
        />
        <BentoCard
          eyebrow="loading "
          title="We are moving truck tetris masters"
          description="We can help with loading and unloading your items. We are experts in loading and unloading and can keep your items safe and secure during the move."
          graphic={
            <PuzzlePieceIcon className="size-32" />
          }
          className="rounded-4xl py-10 lg:col-span-3 flex items-center justify-center"
        />
        <BentoCard
          eyebrow="unloading "
          title="We'll have you moved in no time!"
          description="We can help with loading and unloading your items. We are experts in loading and unloading and can keep your items safe and secure during the move."
          graphic={
            <TruckIcon className="size-32" />
          }
          fade={['bottom']}
          className="rounded-4xl py-10 lg:col-span-3 flex items-center justify-center text-blue-800"
        />
      </div>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-14">
          <FeatureSection />
          <BentoSection />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
