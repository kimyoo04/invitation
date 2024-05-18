import clsx from 'clsx'

import { useState } from 'react'

import { Stack } from '@/components/layouts'
import { buttonVariants } from '@/shadcn/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shadcn/ui/collapsible'

import CommentItem from './CommentItem'
import { dummy } from './dummy'

export default function CommentList() {
  const [open, setOpen] = useState(false)

  const initCommentCount = 3

  return (
    <Collapsible className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
      <Stack className="gap-4">
        {dummy.slice(0, initCommentCount).map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />
        })}

        <CollapsibleContent>
          <Stack className="gap-4">
            {dummy.slice(initCommentCount).map((comment) => {
              return <CommentItem key={comment.id} comment={comment} />
            })}
          </Stack>
        </CollapsibleContent>
        <CollapsibleTrigger className="flex w-full justify-center">
          <span className="text-sm">{open ? '접기' : '더보기'}</span>
        </CollapsibleTrigger>
      </Stack>
    </Collapsible>
  )
}
