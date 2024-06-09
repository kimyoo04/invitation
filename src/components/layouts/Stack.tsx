import clsx from 'clsx'

import { forwardRef, PropsWithChildren, Ref } from 'react'

interface Props {
  className?: string
}

function Stack(
  { className, children }: PropsWithChildren<Props>,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <div ref={ref} className={clsx(['flex flex-col', className])}>
      {children}
    </div>
  )
}

const Stack_ = forwardRef(Stack)
export { Stack_ as Stack }
