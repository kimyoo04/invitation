import { Center, Section } from '@/layouts'

import NaverMap from './NaverMap'
import WayInfo from './WayInfo'

export default function WayToCome() {
  return (
    <Section title="location">
      <Center.Column className="w-full gap-8">
        <NaverMap />
        <WayInfo />
      </Center.Column>
    </Section>
  )
}
