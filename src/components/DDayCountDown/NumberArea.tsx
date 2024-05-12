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
      <span className="gap font-bodoni text-2xl">{value}</span>
      <span className="font-bodoni text-sm">{unit.toUpperCase()}</span>
    </Center.Column>
  )
}
