import { useCallback } from 'react'

import { Center } from '@/components/layouts'
import { Button } from '@/shadcn/ui/button'
import useCommentStore from '@/stores/commentStore'
import { IComment } from '@/supabase/commentService'

function CommentItemHeader({
  id,
  name,
  password,
  created_at,
}: Omit<IComment, 'content'>) {
  const setCommentId = useCommentStore((state) => state.setCommentId)

  const handleUpdateClick = useCallback(() => {
    console.log('update')
    // TODO - 수정 전 비밀번호 확인 다이얼로그 추가

    setCommentId(id)
  }, [])

  const handleDeleteClick = useCallback(() => {
    console.log('delete')
    // TODO - 비밀번호 확인 다이얼로그 추가
  }, [])

  const buttonStyle =
    'text-regular h-auto p-1 text-gray-400 font-thin hover:text-primary hover:no-underline'

  return (
    <div className="mb-1 flex justify-between">
      <Center.Row className="gap-1">
        <span>{name}</span>
        <span className="text-xs text-gray-400">{created_at}</span>
      </Center.Row>

      <div className="text-xs text-gray-400">
        <Button
          variant={'link'}
          className={buttonStyle}
          onClick={handleUpdateClick}
        >
          수정
        </Button>
        <span> | </span>
        <Button
          variant={'link'}
          className={buttonStyle}
          onClick={handleDeleteClick}
        >
          삭제
        </Button>
      </div>
    </div>
  )
}

function CommentContent({ content }: Pick<IComment, 'content'>) {
  return <p className="">{content}</p>
}

export default function CommentItem({ comment }: { comment: IComment }) {
  const { content, ...rest } = comment

  return (
    <div className="w-full">
      <CommentItemHeader {...rest} />
      <CommentContent content={content} />
    </div>
  )
}
