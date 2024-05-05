import clsx from 'clsx'

import { PropsWithChildren } from 'react'

interface SectionProps {
  className?: string
}

export default function Section({
  className,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <section
      className={clsx([
        'border border-solid border-black bg-orange-50 p-4',
        className,
      ])}
    >
      {children}
    </section>
  )
}
