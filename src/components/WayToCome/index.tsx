import Section from '@/layouts/Section'
import Center from '@/ui/Center'

import NaverMap from './NaverMap'
import WayInfo from './WayInfo'

export default function WayToCome() {
  return (
    <Section>
      <Center.Column className="w-full gap-8">
        <NaverMap />
        <WayInfo />
      </Center.Column>
    </Section>
  )
}
