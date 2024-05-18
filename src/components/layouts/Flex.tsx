import clsx from 'clsx'

import { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export default function Flex({
  className,
  children,
}: PropsWithChildren<Props>) {
  return <div className={clsx(['flex', className])}>{children}</div>
}
