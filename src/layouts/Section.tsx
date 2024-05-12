import clsx from 'clsx'

import { PropsWithChildren } from 'react'

import { ReactNode } from '@tanstack/react-router'

import { Center } from './Center'
import Divider from './Divider'

interface SectionProps {
  className?: string
  title?: ReactNode
  icon?: ReactNode
  background?: ReactNode
}

export default function Section({
  className,
  title,
  icon,
  background,
  children,
}: PropsWithChildren<SectionProps>) {
  const titleAndBorder = (
    <Center.Row className="w-full gap-4">
      {icon ? icon : null}
      <h3 className="font-bodoni text-nowrap text-2xl">{title}</h3>
      <Divider />
    </Center.Row>
  )

  return (
    <section className={clsx(['px-4 py-8', className])}>
      <Center.Column className="gap-8">
        {title ? titleAndBorder : null}

        {children}
      </Center.Column>
    </section>
  )
}
