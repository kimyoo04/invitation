import { PropsWithChildren } from 'react'

export function MaxWidthContainer({ children }: PropsWithChildren) {
  return <div className="w-full max-w-lg">{children}</div>
}
