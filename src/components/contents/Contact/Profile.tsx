import { Flex } from '@/components/layouts'

export type ProfileType = {
  name: string
  phoneNumber: string
}

interface ProfileProps {
  data: ProfileType
}

export default function Profile({ data }: ProfileProps) {
  return (
    <Flex className="gap-4">
      <div>{data.name}</div>
      <div>{data.phoneNumber}</div>
    </Flex>
  )
}
