import clsx from 'clsx'

import { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export function BoldText({ className, children }: PropsWithChildren<Props>) {
  return <span className={clsx(['font-bold', className])}>{children}</span>
}
