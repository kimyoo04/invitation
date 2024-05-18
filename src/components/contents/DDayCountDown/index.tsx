import { Center, Section } from '@/components/layouts'
import { data } from '@/constants/data'

import NumberArea from './NumberArea'
import useCalculateTimeRemaining from './useCalculateTimeRemaining'

export default function DDayCountDown() {
  const [year, month, dDay] = data.wedding.date.split('-').map(Number)
  const targetDate = new Date(year, month, dDay)

  const timeRemaining = useCalculateTimeRemaining(targetDate)

  return (
    <Section title="D-Day">
      <h3 className="m-auto mb-2 text-lg">유 그리고 유진의 결혼식 남은 시간</h3>

      <Center.Row>
        <Center.Row className="w-80 justify-between">
          <NumberArea value={timeRemaining.days} unit="days" />
          <NumberArea value={timeRemaining.hours} unit="hour" />
          <NumberArea value={timeRemaining.minutes} unit="min" />
          <NumberArea value={timeRemaining.seconds} unit="sec" />
        </Center.Row>
      </Center.Row>

      {/* // TODO - d-day 를 종착지로 재미있는 효과 넣기 */}
    </Section>
  )
}
