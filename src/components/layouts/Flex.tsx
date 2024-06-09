import clsx from 'clsx'

import { forwardRef, PropsWithChildren, Ref } from 'react'

interface Props {
  className?: string
}

function Flex(
  { className, children }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={clsx(['flex', className])}>
      {children}
    </div>
  )
}

const Flex_ = forwardRef(Flex)
export { Flex_ as Flex }
