import { Center } from '@/components/layouts'
import { Button } from '@/shadcn/ui/button'

type Comment = {
  id: string
  name: string
  message: string
  createdAt: string
}

function CommentItemHeader({ id, name, createdAt }: Omit<Comment, 'message'>) {
  const buttonStyle =
    'text-regular h-auto p-1 text-gray-400 font-thin hover:text-primary hover:no-underline'

  return (
    <div className="mb-1 flex justify-between">
      <Center.Row className="gap-1">
        <span>{name}</span>
        <span className="text-xs text-gray-400">{createdAt}</span>
      </Center.Row>

      <div className="text-xs text-gray-400">
        <Button variant={'link'} className={buttonStyle}>
          수정
        </Button>
        <span> | </span>
        <Button variant={'link'} className={buttonStyle}>
          삭제
        </Button>
      </div>
    </div>
  )
}

function CommentContent({ message }: Pick<Comment, 'message'>) {
  return <p className="">{message}</p>
}

export default function CommentItem({ comment }: { comment: Comment }) {
  const { id, name, message, createdAt } = comment

  return (
    <div className="w-full">
      <CommentItemHeader id={id} name={name} createdAt={createdAt} />
      <CommentContent message={message} />
    </div>
  )
}
