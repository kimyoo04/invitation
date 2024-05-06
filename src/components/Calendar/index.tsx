import { Center, ContentGroup, Section } from '@/layouts'

import CalendarContent from './CalendarContent'
import CalendarHeader from './CalendarHeader'

export default function Calendar() {
  return (
    <Section>
      <ContentGroup title="Calendar">
        <Center.Column>
          <CalendarHeader />
          <CalendarContent />
        </Center.Column>
      </ContentGroup>
    </Section>
  )
}
