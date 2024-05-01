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
    <div>
      <div>{data.name}</div>
      <div>{data.phoneNumber}</div>
      <div>
        <div>{`${data.account.bankName} ${data.account.accountNumber}`}</div>
      </div>
    </div>
  )
}
