import Section from '@/layouts/Section'
import Center from '@/ui/Center'

import NumberArea from './NumberArea'
import useCalculateTimeRemaining from './useCalculateTimeRemaining'

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
