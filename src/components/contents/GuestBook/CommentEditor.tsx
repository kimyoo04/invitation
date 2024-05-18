import { FormProvider } from 'react-hook-form'

import { Stack } from '@/components/layouts'
import RHFInput from '@/components/RHF/RHFInput'
import RHFTextarea from '@/components/RHF/RHFTextarea'
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
