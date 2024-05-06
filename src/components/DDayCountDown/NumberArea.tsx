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
      <span className="gap text-2xl">{value}</span>
      <span>{unit.toUpperCase()}</span>
    </Center.Column>
  )
}
