import { Center, ContentGroup, Section } from '@/layouts'

import NaverMap from './NaverMap'
import WayInfo from './WayInfo'

export default function WayToCome() {
  return (
    <Section>
      <ContentGroup title="location">
        <Center.Column className="w-full gap-8">
          <NaverMap />
          <WayInfo />
        </Center.Column>
      </ContentGroup>
    </Section>
  )
}
