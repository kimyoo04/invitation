import Section from '@/layouts/Section'
import Center from '@/ui/Center'

import CalendarContent from './CalendarContent'
import CalendarHeader from './CalendarHeader'

export default function Calendar() {
  return (
    <Section>
      <Center.Column>
        <CalendarHeader />
        <CalendarContent />
      </Center.Column>
    </Section>
  )
}
