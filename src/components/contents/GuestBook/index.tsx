import { useCallback } from 'react'

import { Center, Section } from '@/components/layouts'
import { Button } from '@/shadcn/ui/button'
import useCommentStore from '@/stores/commentStore'

import CommentEditor from './CommentEditor'
import CommentList from './CommentList'

export default function GuestBook() {
  const showEditor = useCommentStore((state) => state.showEditor)
  const toggleEditor = useCommentStore((state) => state.toggleEditor)

  const handleToggleEditor = useCallback(() => {
    toggleEditor()
  }, [])

  return (
    <Section title="Guestbook">
      <Center.Row className="justify-between gap-2">
        <h3 className="break-keep">
          신랑 신부에게 축복의 메시지를 남겨주세요.
        </h3>

        <Button
          variant={showEditor ? 'destructive' : 'default'}
          size={'sm'}
          className="w-20"
          onClick={handleToggleEditor}
        >
          {showEditor ? '취소' : '작성하기'}
        </Button>
      </Center.Row>

      <div className="font-roboto">
        {showEditor ? <CommentEditor /> : <CommentList />}
      </div>
    </Section>
  )
}
