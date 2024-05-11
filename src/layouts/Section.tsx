import clsx from 'clsx'

import { PropsWithChildren } from 'react'

import { ReactNode } from '@tanstack/react-router'

import { Center } from './Center'
import Divider from './Divider'

interface SectionProps {
  className?: string
  title?: ReactNode
  icon?: ReactNode
}

export default function Section({
  className,
  title,
  icon,
  children,
}: PropsWithChildren<SectionProps>) {
  const titleAndBorder = (
    <Center.Column className="w-full">
      {icon ? icon : null}
      <h3 className="text-2xl">{title}</h3>
      <Divider />
    </Center.Column>
  )

  return (
    <section className={clsx(['bg-orange-50 p-4', className])}>
      <Center.Column className="gap-4">
        {title ? titleAndBorder : null}

        {children}
      </Center.Column>
    </section>
  )
}
