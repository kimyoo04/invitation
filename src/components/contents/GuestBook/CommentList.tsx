import { useEffect, useState } from 'react'

import { Stack } from '@/components/layouts'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/shadcn/ui/collapsible'
import useCommentStore from '@/stores/commentStore'

import CommentItem from './CommentItem'

const initCommentCount = 3

export default function CommentList() {
  const [isCollapsible, setIsCollapsible] = useState(false)

  const comments = useCommentStore((state) => state.comments)
  const loadComments = useCommentStore((state) => state.loadComments)

  useEffect(() => {
    loadComments()
  }, [])

  return (
    <Collapsible
      className="CollapsibleRoot"
      open={isCollapsible}
      onOpenChange={setIsCollapsible}
    >
      <Stack className="gap-4">
        {/* // TODO - skeleton ui 추가 필요 */}
        {comments.slice(0, initCommentCount).map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />
        })}

        <CollapsibleContent>
          <Stack className="gap-4">
            {comments.slice(initCommentCount).map((comment) => {
              return <CommentItem key={comment.id} comment={comment} />
            })}
          </Stack>
        </CollapsibleContent>
        <CollapsibleTrigger className="flex w-full justify-center">
          <span className="text-sm">{isCollapsible ? '접기' : '더보기'}</span>
        </CollapsibleTrigger>
      </Stack>
    </Collapsible>
  )
}
