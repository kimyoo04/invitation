import Section from '@/layouts/Section'
import Center from '@/ui/Center'

import useCalculateTimeRemaining from './useCalculateTimeRemaining'

function NumberArea({ value, unit }: { value: string; unit: string }) {
  return (
    <Center.Column>
      <span className="gap text-2xl">{value}</span>
      <span>{unit.toUpperCase()}</span>
    </Center.Column>
  )
}

export default function DDayCountDown() {
  const targetDate = new Date(2025, 10, 15)

  const timeRemaining = useCalculateTimeRemaining(targetDate)

  return (
    <Section>
      <Center.Row className="gap-12">
        <NumberArea value={timeRemaining.days} unit="day" />
        <NumberArea value={timeRemaining.hours} unit="hours" />
        <NumberArea value={timeRemaining.minutes} unit="minutes" />
        <NumberArea value={timeRemaining.seconds} unit="seconds" />
      </Center.Row>
    </Section>
  )
}
