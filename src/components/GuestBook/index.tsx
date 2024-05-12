import { useCallback, useReducer } from 'react'

import { Center, Section } from '@/layouts'
import { Button } from '@/shadcn/ui/button'

import CommentEditor from './CommentEditor'
import CommentList from './CommentList'

export default function GuestBook() {
  const [openEditor, toggleEditor] = useReducer((state) => !state, false)

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
          variant={openEditor ? 'destructive' : 'default'}
          size={'sm'}
          className="w-20"
          onClick={handleToggleEditor}
        >
          {openEditor ? '취소' : '작성하기'}
        </Button>
      </Center.Row>

      <div className="font-roboto">
        {openEditor ? <CommentEditor /> : <CommentList />}
      </div>
    </Section>
  )
}
