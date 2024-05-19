import { FormProvider } from 'react-hook-form'

import { useEffect } from 'react'

import RHFInput from '@/components/RHF/RHFInput'
import RHFTextarea from '@/components/RHF/RHFTextarea'
import { Button } from '@/shadcn/ui/button'
import useCommentStore from '@/stores/commentStore'

import useCommentSubmit, { CommentSchema } from './useCommentSubmit'

export default function CommentEditor() {
  const { methods, isLoading, onSubmit } = useCommentSubmit()

  const resetCommentId = useCommentStore((state) => state.resetCommentId)

  useEffect(() => {
    return () => {
      resetCommentId()
    }
  }, [])

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-2"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <RHFInput<CommentSchema> name="name" label="이름" />
        <RHFInput<CommentSchema> name="password" label="비밀번호" />
        <RHFTextarea<CommentSchema> name="content" label="내용" />

        <Button type="submit" isLoading={isLoading}>
          저장
        </Button>
      </form>
    </FormProvider>
  )
}
