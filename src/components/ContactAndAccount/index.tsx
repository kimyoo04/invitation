import { data } from '@/constants/data'
import { Center, Section } from '@/layouts'

import Family from './Family'

export default function ContactAndAccount() {
  return (
    <Section>
      <Center.Column className="gap-4 md:flex-row">
        <Family data={data.wedding.groom} />
        <Family data={data.wedding.bride} />
      </Center.Column>
    </Section>
  )
}
