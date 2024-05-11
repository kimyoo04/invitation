import { Center, Section } from '@/layouts'

import CalendarContent from './CalendarContent'
import CalendarHeader from './CalendarHeader'

export default function Calendar() {
  return (
    <Section title="Calendar">
      <Center.Column>
        <CalendarHeader />
        <CalendarContent />
      </Center.Column>
    </Section>
  )
}
