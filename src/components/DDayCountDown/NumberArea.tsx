import { Center } from '@/layouts'

export default function NumberArea({
  value,
  unit,
}: {
  value: string
  unit: string
}) {
  return (
    <Center.Column>
      <span className="gap text-lg font-semibold">{value}</span>
      <span className="text-sm ">{unit.toUpperCase()}</span>
    </Center.Column>
  )
}
