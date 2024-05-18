import clsx from 'clsx'

import { PropsWithChildren } from 'react'

import { Separator } from '@/shadcn/ui/separator'
import { ReactNode } from '@tanstack/react-router'

import { Center } from './Center'

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
      <h3 className="text-nowrap font-bodoni text-2xl">{title}</h3>
      <Separator className="h-[1px] shrink bg-black" />
    </Center.Row>
  )

  return (
    <section id={title} className={clsx(['px-4 py-8', className])}>
      <Center.Column className="items-stretch gap-8">
        {title ? titleAndBorder : null}

        {children}
      </Center.Column>
    </section>
  )
}
