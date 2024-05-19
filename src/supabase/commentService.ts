import { supabase } from './client'

// create table comments (
//   id serial primary key,
//   content text not null,
//   name text not null,
//   created_at timestamp with time zone default timezone('utc'::text, now()) not null
// );

export type IComment = {
  id: string
  name: string
  content: string
  password: string
  created_at: string
}
export type CreateComment = Pick<IComment, 'content' | 'name' | 'password'>
export type UpdateComment = Omit<IComment, 'created_at' | 'password'>
export type DeleteComment = Pick<IComment, 'id' | 'password'>

// Create a new comment
export const createComment = async (comment: CreateComment) => {
  const { data, error } = await supabase.from('comments').insert([comment])

  if (error) {
    throw error
  }

  return data
}

// Read comments with pagination
export const readComments = async (page: number, pageSize: number) => {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1)

  if (error) {
    throw error
  }

  return data
}

// Update a comment
export const updateComment = async ({ id, content }: UpdateComment) => {
  const { data, error } = await supabase
    .from('comments')
    .update({ content })
    .eq('id', id)

  if (error) {
    throw error
  }

  return data
}

// Delete a comment
export const deleteComment = async ({ id }: DeleteComment) => {
  const { data, error } = await supabase.from('comments').delete().eq('id', id)

  if (error) {
    throw error
  }

  return data
}
