import Profile, { ProfileType } from './Profile'

interface FamilyProps {
  data: ProfileType & {
    type: string
    parents: ProfileType[]
  }
}

export default function Family({ data }: FamilyProps) {
  const groom = {
    name: data.name,
    account: {
      bankName: data.account.bankName,
      accountNumber: data.account.accountNumber,
    },
    phoneNumber: data.phoneNumber,
  }

  return (
    <div className="border border-solid border-gray-300 p-4 ">
      <div className="text-lg font-bold">{data.type}</div>

      <Profile data={groom} />

      {data.parents.map((parent) => (
        <Profile key={parent.name} data={parent} />
      ))}
    </div>
  )
}
