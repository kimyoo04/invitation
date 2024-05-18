import { Center, Section } from '@/components/layouts'

import WreathContent from './WreathContent'
import WreathHeader from './WreathHeader'

export default function Wreath() {
  return (
    <Section title="Wreath">
      <Center.Column className="gap-8">
        <WreathHeader />
        <WreathContent />
      </Center.Column>
    </Section>
  )
}
