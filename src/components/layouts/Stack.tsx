import clsx from 'clsx'

import { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export default function Stack({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <div className={clsx(['flex flex-col', className])}>{children}</div>
}
