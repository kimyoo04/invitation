import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useCallback, useState } from 'react'

import useCommentStore from '@/stores/commentStore'
import { yupResolver } from '@hookform/resolvers/yup'

const commentSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required('이름을 입력해주세요.')
    .min(2, '이름은 2글자 이상이어야 합니다.')
    .max(20, '이름은 20자 이하여야 합니다.'),
  content: yup
    .string()
    .trim()
    .required('메시지를 입력해주세요.')
    .min(5, '메시지는 5글자 이상이어야 합니다.')
    .max(200, '메시지는 200자 이하여야 합니다.'),
  password: yup
    .string()
    .trim()
    .required('비밀번호를 입력해주세요.')
    .min(4, '비밀번호는 4글자 이상이어야 합니다.')
    .max(20, '비밀번호는 20자 이하여야 합니다.'),
})

export type CommentSchema = yup.InferType<typeof commentSchema>

const defaultValues: CommentSchema = {
  name: '',
  content: '',
  password: '',
}

export default function useCommentSubmit() {
  const [isLoading, setIsLoading] = useState(false)

  const commentId = useCommentStore((state) => state.commentId)
  const createComment = useCommentStore((state) => state.createComment)
  const updateComment = useCommentStore((state) => state.updateComment)

  const methods = useForm<CommentSchema>({
    resolver: yupResolver(commentSchema),
    defaultValues,
  })

  const onSubmit: SubmitHandler<CommentSchema> = useCallback((values) => {
    const { name, content, password } = values

    try {
      setIsLoading(true)

      if (commentId !== '') {
        updateComment({ id: commentId, name, content })
      } else {
        createComment({ name, content, password })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { methods, isLoading, onSubmit }
}
