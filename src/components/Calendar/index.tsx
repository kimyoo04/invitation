import Section from '@/layouts/Section'

import CalendarContent from './CalendarContent'
import CalendarHeader from './CalendarHeader'

export default function Calendar() {
  return (
    <Section>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <CalendarHeader />
        <CalendarContent />
      </div>
    </Section>
  )
}
