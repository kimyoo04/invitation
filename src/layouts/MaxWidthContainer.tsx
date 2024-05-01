import { PropsWithChildren } from 'react'

export default function MaxWidthContainer({ children }: PropsWithChildren) {
  return <div className="w-[100vh] max-w-4xl">{children}</div>
}
