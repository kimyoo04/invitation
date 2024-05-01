import { data } from '@/constants/data'
import Section from '@/layouts/Section'
import Center from '@/ui/Center'

import Family from './Family'

export default function ContactAndAccount() {
  return (
    <Section>
      <Center.Column className="gap-4">
        <Family data={data.wedding.groom} />
        <Family data={data.wedding.bride} />
      </Center.Column>
    </Section>
  )
}
