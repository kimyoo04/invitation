import clsx from 'clsx'

import { forwardRef, PropsWithChildren, Ref } from 'react'

import { Separator } from '@/shadcn/ui/separator'
import { ReactNode } from '@tanstack/react-router'

import { Center } from './Center'

interface SectionProps {
  className?: string
  title?: ReactNode
  icon?: ReactNode
  background?: ReactNode
}

function Section(
  {
    className,
    title,
    icon,
    background,
    children,
  }: PropsWithChildren<SectionProps>,
  ref: Ref<HTMLDivElement>,
) {
  const titleAndBorder = (
    <Center.Row className="w-full gap-4">
      {icon ? icon : null}
      <h3 className="text-nowrap font-bodoni text-2xl">{title}</h3>
      <Separator className="h-[1px] shrink bg-black" />
    </Center.Row>
  )

  return (
    <section ref={ref} id={title} className={clsx(['px-4 py-8', className])}>
      <Center.Column className="items-stretch gap-8">
        {title ? titleAndBorder : null}

        {children}
      </Center.Column>
    </section>
  )
}

const Section_ = forwardRef(Section)
export { Section_ as Section }
