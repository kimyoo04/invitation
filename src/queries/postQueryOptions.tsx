import { fetchPost } from '@/services/posts'
import { queryOptions } from '@tanstack/react-query'

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['posts', { postId }],
    queryFn: () => fetchPost(postId),
  })
