'use client'

export function Logo({ className }: { className?: string }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <img src={'/re-logo.svg'} alt="R&E Moving Company" className={className} />

  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img src={'/re-logo.svg'} alt="R&E Moving Company" className={className} />
  )
}
