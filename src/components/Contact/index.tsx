import { data } from '@/constants/data'
import { Center, ContentGroup, Section } from '@/layouts'

import Family from './Family'

export default function Contact() {
  return (
    <Section>
      <ContentGroup title="Contact">
        <Center.Column className="gap-4 md:flex-row">
          <Family data={data.wedding.groom} />
          <Family data={data.wedding.bride} />
        </Center.Column>
      </ContentGroup>
    </Section>
  )
}
