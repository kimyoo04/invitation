import clsx from 'clsx'

import { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export default function CursiveText({
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <span className={clsx(['font-cursive text-2xl', className])}>
      {children}
    </span>
  )
}
