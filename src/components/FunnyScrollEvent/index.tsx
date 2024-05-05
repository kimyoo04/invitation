import Section from '@/layouts/Section'
import Center from '@/ui/Center'

import ScrollAnimation from './ScrollAnimation'
import TwoPortraits from './TwoPortraits'

export default function WeddingInfo() {
  return (
    <Section>
      <Center.Column>
        <div>funny scroll event</div>

        <ScrollAnimation />
        <TwoPortraits />
      </Center.Column>
    </Section>
  )
}
