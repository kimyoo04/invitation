import { FormProvider } from 'react-hook-form'

import { Stack } from '@/layouts'
import RHFInput from '@/RHF/RHFInput'
import RHFTextarea from '@/RHF/RHFTextarea'
import { Button } from '@/shadcn/ui/button'

import useCommentSubmit from './useCommentSubmit'

export default function CommentEditor() {
  const { methods, isLoading, onSubmit } = useCommentSubmit()

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack className="gap-2">
            <RHFInput type="text" name="name" label="이름" />
            <RHFTextarea name="message" label="메시지" />
            <Button type="submit" isLoading={isLoading}>
              저장
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </div>
  )
}
