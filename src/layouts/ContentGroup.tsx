import { PropsWithChildren } from 'react'

import { Center } from '@/layouts'

import Divider from './Divider'

interface Props {
  title: string
  icon: string
}

export default function ContentGroup({
  title,
  icon,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Center.Column className="gap-4">
      <Center.Column className="w-full">
        <span className="text-lg">{icon}</span>
        <h3 className="text-2xl">{title}</h3>
        <Divider />
      </Center.Column>

      <div>{children}</div>
    </Center.Column>
  )
}
