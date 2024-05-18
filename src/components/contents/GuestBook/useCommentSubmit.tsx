import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useCallback, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'

const commentSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('이름을 입력해주세요.')
    .min(2, '이름은 2글자 이상이어야 합니다.'),
  message: yup
    .string()
    .trim()
    .required('메시지를 입력해주세요.')
    .min(4, '메시지는 4글자 이상이어야 합니다.'),
})

export type CommentSchema = yup.InferType<typeof commentSchema>

const defaultValues: CommentSchema = {
  name: '',
  message: '',
}

export default function useCommentSubmit() {
  const [isLoading, setIsLoading] = useState(false)

  const methods = useForm<CommentSchema>({
    resolver: yupResolver(commentSchema),
    defaultValues,
  })

  const onSubmit: SubmitHandler<CommentSchema> = useCallback(() => {
    try {
      setIsLoading(true)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { methods, isLoading, onSubmit }
}
