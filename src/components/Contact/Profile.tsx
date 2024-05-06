import { Flex } from '@/layouts'

export type ProfileType = {
  name: string
  phoneNumber: string
  account: {
    bankName: string
    accountNumber: string
  }
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
