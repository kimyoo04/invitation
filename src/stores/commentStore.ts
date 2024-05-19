import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import {
  CreateComment,
  createComment,
  DeleteComment,
  deleteComment,
  IComment,
  readComments,
  UpdateComment,
  updateComment,
} from '@/supabase/commentService'

interface CommentStore {
  showEditor: boolean
  commentId: string // add or edit Mode for comment
  comments: IComment[]
  currentPage: number
  pageSize: number

  toggleEditor: () => void
  setCommentId: (commentId: string) => void
  resetCommentId: () => void

  loadComments: () => Promise<void>
  createComment: (comment: CreateComment) => Promise<void>
  updateComment: (comment: UpdateComment) => Promise<void>
  deleteComment: (id: DeleteComment) => Promise<void>
  updateCurrentPage: (currentPage: number) => void
}

const useCommentStore = create<CommentStore>()(
  devtools((set, get) => ({
    showEditor: false,
    commentId: '',
    comments: [],
    currentPage: 1,
    pageSize: 10,

    toggleEditor: () => {
      set((state) => ({ showEditor: !state.showEditor }))
    },
    setCommentId: (commentId: string) => {
      set({ showEditor: true, commentId })
    },
    resetCommentId: () => {
      set({ showEditor: false, commentId: '' })
    },
    loadComments: async () => {
      const { currentPage, pageSize } = get()
      const comments = await readComments(currentPage, pageSize)
      set({ comments })
    },
    createComment: async (comment: CreateComment) => {
      await createComment(comment)
      set({ showEditor: false, commentId: '', currentPage: 1 })
      get().loadComments()
    },
    updateComment: async (comment: UpdateComment) => {
      await updateComment(comment)
      set({ showEditor: false, commentId: '' })
      get().loadComments()
    },
    deleteComment: async (id: DeleteComment) => {
      await deleteComment(id)
      get().loadComments()
    },
    // TODO - ui 상에서 min, max page 제한 필요
    updateCurrentPage: (currentPage: number) => {
      set({ currentPage })
    },
  })),
)

export default useCommentStore
